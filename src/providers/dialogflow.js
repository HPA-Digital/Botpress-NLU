import _ from 'lodash'
import crypto from 'crypto'

import Provider from './base'

export default class DialogflowProvider extends Provider {
  constructor(config) {
    super({
      ...config,
      name: 'dialogflow',
      entityKey: '@dialogflow'
    })

    this.projectId = this.config.googleProjectId

    // TODO: get rid of eval once we drop webpack for node-part (needed to overcome webpack compilation)
    const dialogflow = require('dialogflow').v2 // eslint-disable-line no-eval

    this.agentClient = new dialogflow.AgentsClient()
    this.sessionClient = new dialogflow.SessionsClient()
    this.contextClient = new dialogflow.ContextsClient()
  }

  _getSessionId(event) {
    let shortUserId = _.get(event, 'user.id') || ''
    if (shortUserId.length > 36) {
      shortUserId = crypto
        .createHash('md5')
        .update(shortUserId)
        .digest('hex')
    }
    return shortUserId
  }

  _resolveEntity(field) {
    const entity = field[field.kind]

    if (field.kind === 'stringValue' || field.kind === 'numberValue') {
      return entity
    } else if (field.kind === 'listValue') {
      return entity.values.map(v => this._resolveEntity(v))
    } else if (field.kind === 'structValue') {
      return _.mapValues(entity.fields, f => this._resolveEntity(f))
    } else {
      throw new Error('Not supported')
    }
  }

  /*******
  Public API
  *******/

  async init() {
    const [agent] = await this.agentClient.getAgent({
      parent: this.agentClient.projectPath(this.projectId)
    })
    this.agent = agent
  }

  async sync() {
    throw new Error('Not implemented')
  }

  async checkSyncNeeded() {
    return false // Not implemented yet
  }

  async extract(event) {

    const request = {
      session: this.sessionClient.sessionPath(this.projectId, this._getSessionId(event)),
      queryInput: {
        text: {
          //TODO Find a way to pass node and flow as context?
          text: event.text,
          languageCode: this.agent.defaultLanguageCode
        }
	  },
	  queryParams: {
		sentimentAnalysisRequestConfig: {
		  analyzeQueryTextSentiment: true,
		},
	  },
    }
	const detection = await this.sessionClient.detectIntent(request)

    const {
      queryResult
    } = detection[0]

    const isSmallTalk = queryResult.action.startsWith('smalltalk')

    const intent = {
      name: isSmallTalk ? queryResult.action : queryResult.intent && queryResult.intent.displayName,
      isSmallTalk,
      confidence: queryResult.intentDetectionConfidence,
      provider: 'dialogflow'
    }
    const entities = _.map(queryResult.parameters.fields, (v, k) => ({
      name: k,
      value: this._resolveEntity(v)
    }))

    const context = {
      add: (event, name, lifespan) => {

        const sessionPath = this.contextClient.sessionPath(this.projectId, this._getSessionId(event));

        const contextPath = this.contextClient.contextPath(
          this.projectId,
          this._getSessionId(event),
          name
        );

        const createContextRequest = {
          parent: sessionPath,
          context: {
            name: contextPath,
            lifespanCount: lifespan
          }
        };

        return this.contextClient.createContext(createContextRequest);
      }
	}

	event.bp.logger.debug(`Dialogflow: [NLU] "${event.text}"\t\t?> ITNT\t"${intent.name}" (${intent.confidence.toFixed(2)})`)

    return {
      intent,
      context,
      intents: [intent],
      original: detection,
      entities: entities.map(entity => ({
        name: entity.name, // usually the entity name, but can be modified
        type: entity.name, // when parameter name modified dialogflow doesn't give the original entity name
        value: entity.value,
        original: null,
        confidence: null,
        position: null,
        provider: 'dialogflow'
      }))
    }
  }

  async getCustomEntities() {
    return [] // Not implemented yet
  }
}
