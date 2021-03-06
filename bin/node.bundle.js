module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "C:\\Users\\AranM\\Projects\\maori\\Botpress\\Botpress-NLU";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultExtractData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entities = __webpack_require__(4);

var _entities2 = _interopRequireDefault(_entities);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ENVIRONEMENT = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

var Provider = function () {
  function Provider(_ref) {
    var name = _ref.name,
        entityKey = _ref.entityKey,
        logger = _ref.logger,
        config = _ref.config,
        storage = _ref.storage,
        parser = _ref.parser,
        kvs = _ref.kvs;

    _classCallCheck(this, Provider);

    this.name = name;
    this.entityKey = entityKey;
    this.logger = logger;
    this.storage = storage;
    this.kvs = kvs;
    this.config = config;
    this.parser = parser;
    this.isProduction = ENVIRONEMENT === 'prod';
    this.env = ENVIRONEMENT;
  }

  /*******
  Public API
  *******/

  _createClass(Provider, [{
    key: 'init',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'sync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sync() {
        return _ref3.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function checkSyncNeeded() {
        return _ref4.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(incomingText) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function extract(_x) {
        return _ref5.apply(this, arguments);
      }

      return extract;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCustomEntities() {
        return _ref6.apply(this, arguments);
      }

      return getCustomEntities;
    }()

    /*******
    Shared API
    *******/

  }, {
    key: 'getAvailableEntities',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = [];
                _context6.t1 = _toConsumableArray;
                _context6.next = 4;
                return this.getCustomEntities();

              case 4:
                _context6.t2 = _context6.sent;
                _context6.t3 = (0, _context6.t1)(_context6.t2);
                _context6.t4 = _toConsumableArray;
                _context6.next = 9;
                return this._getProviderEntities();

              case 9:
                _context6.t5 = _context6.sent;
                _context6.t6 = (0, _context6.t4)(_context6.t5);
                return _context6.abrupt('return', _context6.t0.concat.call(_context6.t0, _context6.t3, _context6.t6));

              case 12:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getAvailableEntities() {
        return _ref7.apply(this, arguments);
      }

      return getAvailableEntities;
    }()

    /*******
    Private Methods
    *******/

  }, {
    key: '_getProviderEntities',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt('return', _lodash2.default.toPairs(_entities2.default).filter(function (p) {
                  return p[1][_this.entityKey];
                }).map(function (p) {
                  return {
                    name: p[0],
                    isFromProvider: true,
                    nameProvider: p[1][_this.entityKey]
                  };
                }));

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _getProviderEntities() {
        return _ref8.apply(this, arguments);
      }

      return _getProviderEntities;
    }()
  }]);

  return Provider;
}();

exports.default = Provider;
var defaultExtractData = exports.defaultExtractData = function defaultExtractData(provider) {
  return {
    intent: {
      name: 'None',
      confidence: 0,
      provider: provider
    },
    intents: [],
    entities: []
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // Date & Time
  '@native.date': { '@luis': 'datetimeV2', '@dialogflow': 'date', '@recast': 'datetime' },
  '@native.date-period': { '@luis': 'datetimeV2', '@dialogflow': 'date-period', '@recast': 'interval' },
  '@native.date-time': { '@luis': 'datetimeV2', '@dialogflow': 'date-time', '@recast': 'datetime' },
  '@native.time': { '@luis': 'datetimeV2', '@dialogflow': 'time', '@recast': 'datetime' },
  '@native.time-period': { '@luis': 'datetimeV2', '@dialogflow': 'time-period', '@recast': 'interval' },

  // Numbers
  '@native.cardinal': { '@dialogflow': 'cardinal', '@recast': 'cardinal' },
  '@native.flight-number': { '@dialogflow': 'flight-number' },
  '@native.number': { '@dialogflow': 'number', '@luis': 'number', '@recast': 'number' },
  '@native.number-integer': { '@dialogflow': 'number-integer', '@recast': 'ordinal' },
  '@native.number-sequence': { '@dialogflow': 'number-sequence' },
  '@native.ordinal': { '@luis': 'ordinal', '@dialogflow': 'ordinal', '@recast': 'ordinal' },

  // Amounts with Units
  '@native.age': { '@dialogflow': 'age', '@luis': 'age' },
  '@native.duration': { '@dialogflow': 'duration', '@recast': 'duration' },
  '@native.percentage': { '@luis': 'percentage', '@dialogflow': 'percentage', '@recast': 'percent' },
  '@native.set': { '@recast': 'set' },
  '@native.temperature': { '@luis': 'temperature', '@dialogflow': 'temperature', '@recast': 'temperature' },
  '@native.unit-area': { '@luis': 'dimension', '@dialogflow': 'unit-area' },
  '@native.unit-currency': { '@luis': 'money', '@dialogflow': 'unit-currency', '@recast': 'money' },
  '@native.unit-information': { '@dialogflow': 'unit-information' },
  '@native.unit-length': { '@luis': 'dimension', '@dialogflow': 'unit-lenght', '@recast': 'distance' },
  '@native.unit-speed': { '@dialogflow': 'unit-speed', '@recast': 'speed' },
  '@native.unit-volume': { '@dialogflow': 'unit-volume', '@recast': 'volume' },
  '@native.unit-weight': { '@dialogflow': 'unit-weight', '@recast': 'mass' },

  // Unit Names
  '@native.currency-name': { '@dialogflow': 'currency-name' },
  '@native.unit-area-name': { '@dialogflow': 'unit-area-name' },
  '@native.unit-information-name': { '@dialogflow': 'unit-information-name' },
  '@native.unit-length-name': { '@dialogflow': 'unit-lenght-name' },
  '@native.unit-speed-name': { '@dialogflow': 'unit-speed-name' },
  '@native.unit-volume-name': { '@dialogflow': 'unit-volume-name' },
  '@native.unit-weight-name': { '@dialogflow': 'unit-weight-name' },

  // Geography
  '@native.address': { '@dialogflow': 'address', '@recast': 'location' },
  '@native.airport': { '@dialogflow': 'airport', '@recast': 'location' },
  '@native.geo-capital': { '@dialogflow': 'geo-capital' },
  '@native.geo-country': { '@dialogflow': 'geo-country', '@recast': 'location' },
  '@native.geo-country-code': { '@dialogflow': 'geo-country-code' },
  '@native.geo-city': { '@dialogflow': 'geo-city', '@recast': 'location' },
  '@native.geo-city-gb': { '@dialogflow': 'geo-city-gb', '@recast': 'location' },
  '@native.geo-city-us': { '@dialogflow': 'geo-city-us', '@recast': 'location' },
  '@native.geo-state-us': { '@dialogflow': 'geo-state-us', '@recast': 'location' },
  '@native.ip': { '@recast': 'ip' },
  '@native.location': { '@dialogflow': 'location', '@recast': 'location' },
  '@native.place-attraction-us': { '@dialogflow': 'place-attraction-us', '@recast': 'location' },
  '@native.place-attraction-gb': { '@dialogflow': 'place-attraction-gb', '@recast': 'location' },
  '@native.street-address': { '@dialogflow': 'street-address', '@recast': 'location' },
  '@native.zip-code': { '@dialogflow': 'zip-code', '@recast': 'location' },

  // Contacts
  '@native.email': { '@luis': 'email', '@dialogflow': 'email', '@recast': 'email' },
  '@native.phone-number': { '@luis': 'phonenumber', '@dialogflow': 'phone-number', '@recast': 'phone' },

  // Person
  '@native.given-name': { '@dialogflow': 'given-name' },
  '@native.last-name': { '@dialogflow': 'last-name' },
  '@native.name': { '@recast': 'person' },
  '@native.nationality': { '@recast': 'nationality' },

  // Music
  '@native.music-artist': { '@dialogflow': 'music-artist' },
  '@native.music-genre': { '@dialogflow': 'music-genre' },

  // Others
  '@native.color': { '@dialogflow': 'color', '@recast': 'color' },
  '@native.emoji': { '@recast': 'emoji' },
  '@native.job': { '@recast': 'job' },
  '@native.language': { '@dialogflow': 'language', '@recast': 'language' },
  '@native.organization': { '@recast': 'organization' },
  '@native.pronoun': { '@recast': 'pronoun' },
  '@native.sort': { '@recast': 'sort' },
  '@native.url': { '@luis': 'url', '@dialogflow': 'url', '@recast': 'url' },

  // Generic
  '@native.any': { '@dialogflow': 'any', '@rasa': 'any' }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bluebirdRetry = __webpack_require__(8);

var _bluebirdRetry2 = _interopRequireDefault(_bluebirdRetry);

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

var _storage = __webpack_require__(10);

var _storage2 = _interopRequireDefault(_storage);

var _parser = __webpack_require__(13);

var _parser2 = _interopRequireDefault(_parser);

var _dialogflow = __webpack_require__(14);

var _dialogflow2 = _interopRequireDefault(_dialogflow);

var _luis = __webpack_require__(16);

var _luis2 = _interopRequireDefault(_luis);

var _rasa = __webpack_require__(17);

var _rasa2 = _interopRequireDefault(_rasa);

var _recast = __webpack_require__(19);

var _recast2 = _interopRequireDefault(_recast);

var _native = __webpack_require__(20);

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var storage = void 0;
var provider = void 0;

module.exports = {
  config: {
    intentsDir: { type: 'string', required: true, default: './intents', env: 'NLU_INTENTS_DIR' },
    entitiesDir: { type: 'string', required: true, default: './entities', env: 'NLU_ENTITIES_DIR' },

    // Provider config
    provider: { type: 'string', required: true, default: 'native', env: 'NLU_PROVIDER' },

    // DIALOGFLOW-specific config
    googleProjectId: { type: 'string', required: false, default: '', env: 'NLU_GOOGLE_PROJECT_ID' },

    // LUIS-specific config
    luisAppId: { type: 'string', required: false, default: '', env: 'NLU_LUIS_APP_ID' },
    luisProgrammaticKey: { type: 'string', required: false, default: '', env: 'NLU_LUIS_PROGRAMMATIC_KEY' },
    luisAppSecret: { type: 'string', required: false, default: '', env: 'NLU_LUIS_APP_SECRET' },
    luisAppRegion: { type: 'string', required: false, default: 'westus', env: 'NLU_LUIS_APP_REGION' },

    // RASA-specific config
    rasaEndpoint: { type: 'string', required: false, default: 'http://localhost:5000', env: 'NLU_RASA_URL' },
    rasaToken: { type: 'string', required: false, default: '', env: 'NLU_RASA_TOKEN' },
    rasaProject: { type: 'string', required: false, default: 'botpress', env: 'NLU_RASA_PROJECT' },

    // RECAST-specific config
    recastToken: { type: 'string', required: false, default: '', env: 'NLU_RECAST_TOKEN' },
    recastUserSlug: { type: 'string', required: false, default: '', env: 'NLU_RECAST_USER_SLUG' },
    recastBotSlug: { type: 'string', required: false, default: '', env: 'NLU_RECAST_BOT_SLUG' },

    // Debug mode will print NLU information to the console for debugging purposes
    debugModeEnabled: { type: 'bool', required: true, default: false, env: 'NLU_DEBUG_ENABLED' },

    // The minimum confidence required (in %) for an intent to match
    // Set to '0' to always match
    minimumConfidence: { type: 'string', required: false, default: '0.3', env: 'NLU_MIN_CONFIDENCE' },

    // The maximum confidence after which it is considered a statistical error
    // Mostly irrelevant except for NLU=native
    maximumConfidence: { type: 'string', required: false, default: '1000', env: 'NLU_MAX_CONFIDENCE' },

    // The minimum difference between scores required before we apply a distribution fixes
    nativeAdjustementThreshold: { type: 'string', required: false, default: '0.25', env: 'NLU_NATIVE_ADJ_THRESHOLD' },
    // The maximum number of requests per hour
    // Useful to make sure you don't overuse your budget on paid NLU-services (like LUIS)
    maximumRequestsPerHour: { type: 'string', required: false, default: '1000', env: 'NLU_MAX_REQUESTS_PER_HOUR' }
  },

  init: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bp, configurator) {
      var _this = this;

      var processEvent = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
          var previous, hour, requestsCount, maximumRequestsPerHour, eventIntent, eventIntents, metadata, intentConfidentEnough;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!['session_reset', 'bp_dialog_timeout', 'visit', 'read', 'delivery'].includes(event.type)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  _context.t0 = JSON;
                  _context.next = 5;
                  return bp.kvs.get('nlu/requestsLimit');

                case 5:
                  _context.t1 = _context.sent;

                  if (_context.t1) {
                    _context.next = 8;
                    break;
                  }

                  _context.t1 = '{}';

                case 8:
                  _context.t2 = _context.t1;
                  previous = _context.t0.parse.call(_context.t0, _context.t2);
                  hour = (0, _moment2.default)().startOf('hour');
                  requestsCount = hour.isSame(previous.hour) ? previous.requestsCount : 0;
                  _context.next = 14;
                  return bp.kvs.set('nlu/requestsLimit', JSON.stringify({ hour: hour, requestsCount: requestsCount + 1 }));

                case 14:
                  maximumRequestsPerHour = parseFloat(config.maximumRequestsPerHour);

                  if (!(requestsCount > maximumRequestsPerHour)) {
                    _context.next = 17;
                    break;
                  }

                  throw new Error('[NLU] Requests limit per hour exceeded: ' + maximumRequestsPerHour + ' allowed ' + ('while getting ' + requestsCount + '. You can set higher value to NLU_MAX_REQUESTS_PER_HOUR.'));

                case 17:
                  eventIntent = {};
                  eventIntents = [];
                  _context.prev = 19;

                  if (config.debugModeEnabled) {
                    bp.logger.info('[NLU Extraction] ' + event.text, event.raw);
                  }

                  _context.next = 23;
                  return (0, _bluebirdRetry2.default)(function () {
                    return provider.extract(event);
                  }, retryPolicy);

                case 23:
                  metadata = _context.sent;


                  if (metadata) {
                    Object.assign(event, { nlu: metadata });
                    eventIntent = metadata.intent;
                    eventIntents = metadata.intents;
                  }
                  _context.next = 30;
                  break;

                case 27:
                  _context.prev = 27;
                  _context.t3 = _context['catch'](19);

                  bp.logger.warn('[NLU] Error extracting metadata for incoming text: ' + _context.t3.message);

                case 30:
                  intentConfidentEnough = function intentConfidentEnough() {
                    var confidence = eventIntent.confidence != null ? eventIntent.confidence : 1;
                    return confidence >= MIN_CONFIDENCE && confidence <= MAX_CONFIDENCE;
                  };

                  if (event.nlu) {
                    Object.assign(event.nlu.intent, {
                      intentConfidentEnough: intentConfidentEnough,
                      is: function is(intentName) {
                        intentName = (intentName || '').toLowerCase();
                        return intentConfidentEnough() && (eventIntent.name || '').toLowerCase() === intentName;
                      },
                      startsWith: function startsWith(prefix) {
                        prefix = (prefix || '').toLowerCase();
                        return intentConfidentEnough() && (eventIntent.name || '').toLowerCase().startsWith(prefix);
                      }
                    });
                    Object.assign(event.nlu.intents, {
                      has: function has(intentName) {
                        intentName = (intentName || '').toLowerCase();
                        return !!eventIntents.find(function (intent) {
                          return (intent.name || '').toLowerCase() === intentName;
                        });
                      }
                    });
                  }

                case 32:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[19, 27]]);
        }));

        return function processEvent(_x3) {
          return _ref2.apply(this, arguments);
        };
      }();

      var config, Provider, MIN_CONFIDENCE, MAX_CONFIDENCE, retryPolicy;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return configurator.loadAll();

            case 2:
              config = _context3.sent;

              storage = new _storage2.default({ bp: bp, config: config });
              _context3.next = 6;
              return storage.initializeGhost();

            case 6:
              Provider = {
                dialogflow: _dialogflow2.default,
                luis: _luis2.default,
                rasa: _rasa2.default,
                recast: _recast2.default,
                native: _native2.default
              }[config.provider.toLowerCase()];

              if (Provider) {
                _context3.next = 9;
                break;
              }

              throw new Error('Unknown NLU provider "' + config.provider + '"');

            case 9:
              MIN_CONFIDENCE = parseFloat(config.minimumConfidence);


              if (isNaN(MIN_CONFIDENCE) || MIN_CONFIDENCE < 0 || MIN_CONFIDENCE > 1) {
                MIN_CONFIDENCE = 0;
              }

              MAX_CONFIDENCE = parseFloat(config.maximumConfidence);


              if (isNaN(MAX_CONFIDENCE) || MAX_CONFIDENCE < 0) {
                MAX_CONFIDENCE = 10000;
              }

              provider = new Provider({
                logger: bp.logger,
                storage: storage,
                parser: new _parser2.default(),
                kvs: bp.kvs,
                config: config
              });
              _context3.next = 16;
              return provider.init();

            case 16:
              retryPolicy = {
                interval: 100,
                max_interval: 500,
                timeout: 5000,
                max_tries: 3
              };


              bp.nlu = {
                processEvent: processEvent,
                provider: provider,
                storage: storage
              };

              bp.middlewares.register({
                name: 'nlu.incoming',
                module: 'botpress-nlu',
                type: 'incoming',
                handler: function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event, next) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return processEvent(event);

                          case 2:
                            next();

                          case 3:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this);
                  }));

                  return function handler(_x4, _x5) {
                    return _ref3.apply(this, arguments);
                  };
                }(),
                order: 10,
                description: 'Process natural language in the form of text. Structured data with an action and parameters for that action is injected in the incoming message event.'
              });

            case 19:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function init(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return init;
  }(),

  ready: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(bp) {
      var _this2 = this;

      var router;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              router = bp.getRouter('botpress-nlu');


              router.delete('/intents/:intent', function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return storage.deleteIntent(req.params.intent);

                        case 2:
                          res.sendStatus(200);

                        case 3:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, _this2);
                }));

                return function (_x7, _x8) {
                  return _ref5.apply(this, arguments);
                };
              }());

              router.post('/intents/:intent', function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return storage.saveIntent(req.params.intent, req.body);

                        case 2:
                          res.sendStatus(200);

                        case 3:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, _this2);
                }));

                return function (_x9, _x10) {
                  return _ref6.apply(this, arguments);
                };
              }());

              router.get('/intents', function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.t0 = res;
                          _context6.next = 3;
                          return storage.getIntents();

                        case 3:
                          _context6.t1 = _context6.sent;

                          _context6.t0.send.call(_context6.t0, _context6.t1);

                        case 5:
                        case 'end':
                          return _context6.stop();
                      }
                    }
                  }, _callee6, _this2);
                }));

                return function (_x11, _x12) {
                  return _ref7.apply(this, arguments);
                };
              }());

              router.get('/intents/:intent', function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.t0 = res;
                          _context7.next = 3;
                          return storage.getIntent(req.params.intent);

                        case 3:
                          _context7.t1 = _context7.sent;

                          _context7.t0.send.call(_context7.t0, _context7.t1);

                        case 5:
                        case 'end':
                          return _context7.stop();
                      }
                    }
                  }, _callee7, _this2);
                }));

                return function (_x13, _x14) {
                  return _ref8.apply(this, arguments);
                };
              }());

              router.get('/entities', function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.t0 = res;
                          _context8.next = 3;
                          return provider.getAvailableEntities();

                        case 3:
                          _context8.t1 = function (x) {
                            return x.name;
                          };

                          _context8.t2 = _context8.sent.map(_context8.t1);

                          _context8.t0.send.call(_context8.t0, _context8.t2);

                        case 6:
                        case 'end':
                          return _context8.stop();
                      }
                    }
                  }, _callee8, _this2);
                }));

                return function (_x15, _x16) {
                  return _ref9.apply(this, arguments);
                };
              }());

              router.get('/sync/check', function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.t0 = res;
                          _context9.next = 3;
                          return provider.checkSyncNeeded();

                        case 3:
                          _context9.t1 = _context9.sent;

                          _context9.t0.send.call(_context9.t0, _context9.t1);

                        case 5:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, _this2);
                }));

                return function (_x17, _x18) {
                  return _ref10.apply(this, arguments);
                };
              }());

              router.get('/sync', function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.prev = 0;

                          bp.events.emit('toast.nlu-sync', { text: 'NLU Sync In Progress', type: 'info', time: 120000 });

                          _context10.next = 4;
                          return provider.sync();

                        case 4:

                          bp.events.emit('toast.nlu-sync', { text: 'NLU Sync Success', type: 'success' });
                          res.sendStatus(200);
                          _context10.next = 12;
                          break;

                        case 8:
                          _context10.prev = 8;
                          _context10.t0 = _context10['catch'](0);

                          bp.events.emit('toast.nlu-sync', { text: 'NLU Sync Error: ' + _context10.t0.name + ' : ' + _context10.t0.message, type: 'error' });
                          res.status(500).send(_context10.t0.name + ' : ' + _context10.t0.message);

                        case 12:
                        case 'end':
                          return _context10.stop();
                      }
                    }
                  }, _callee10, _this2, [[0, 8]]);
                }));

                return function (_x19, _x20) {
                  return _ref11.apply(this, arguments);
                };
              }());

            case 8:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function ready(_x6) {
      return _ref4.apply(this, arguments);
    }

    return ready;
  }()
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("bluebird-retry");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mkdirp = __webpack_require__(11);

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _path = __webpack_require__(12);

var _path2 = _interopRequireDefault(_path);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formatFilename = function formatFilename(name) {
  return name.toLowerCase().replace(/[^a-z0-9-_.]/gi, '_').replace('.entities.json', '').replace('.entity.json', '').replace('.json', '').replace('.utterances.txt', '');
};

var Storage = function () {
  function Storage(_ref) {
    var bp = _ref.bp,
        config = _ref.config,
        provider = _ref.provider;

    _classCallCheck(this, Storage);

    this.ghost = bp.ghostManager;
    this.intentsDir = config.intentsDir;
    this.entitiesDir = config.entitiesDir;
    this.projectDir = bp.projectLocation;
    this.provider = provider;
  }

  _createClass(Storage, [{
    key: 'initializeGhost',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mkdirp2.default.sync(_path2.default.resolve(this.projectDir, this.intentsDir));
                _mkdirp2.default.sync(_path2.default.resolve(this.projectDir, this.entitiesDir));

                _context.next = 4;
                return this.ghost.addRootFolder(this.intentsDir, { filesGlob: '**/*.*' });

              case 4:
                _context.next = 6;
                return this.ghost.addRootFolder(this.entitiesDir, { filesGlob: '**/*.entity.json' });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initializeGhost() {
        return _ref2.apply(this, arguments);
      }

      return initializeGhost;
    }()
  }, {
    key: 'saveIntent',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(intent, content) {
        var utterancesFile, propertiesFile, utterances;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                intent = formatFilename(intent);

                if (!(intent.length < 1)) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('Invalid intent name, expected at least one character');

              case 3:
                utterancesFile = intent + '.utterances.txt';
                propertiesFile = intent + '.json';
                utterances = content.utterances.join('\r\n'); // \n To support windows as well

                _context2.next = 8;
                return this.ghost.upsertFile(this.intentsDir, utterancesFile, utterances);

              case 8:
                _context2.next = 10;
                return this.ghost.upsertFile(this.intentsDir, propertiesFile, JSON.stringify({
                  entities: content.entities
                }));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function saveIntent(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return saveIntent;
    }()
  }, {
    key: 'deleteIntent',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(intent) {
        var utterancesFile, propertiesFile;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                intent = formatFilename(intent);

                if (!(intent.length < 1)) {
                  _context3.next = 3;
                  break;
                }

                throw new Error('Invalid intent name, expected at least one character');

              case 3:
                utterancesFile = intent + '.utterances.txt';
                propertiesFile = intent + '.json';
                _context3.prev = 5;
                _context3.next = 8;
                return this.ghost.deleteFile(this.intentsDir, utterancesFile);

              case 8:
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](5);

                if (!(_context3.t0.code !== 'ENOENT' && !_context3.t0.message.includes("couldn't find it"))) {
                  _context3.next = 14;
                  break;
                }

                throw _context3.t0;

              case 14:
                _context3.prev = 14;
                _context3.next = 17;
                return this.ghost.deleteFile(this.intentsDir, propertiesFile);

              case 17:
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t1 = _context3['catch'](14);

                if (!(_context3.t1.code !== 'ENOENT' && !_context3.t1.message.includes("couldn't find it"))) {
                  _context3.next = 23;
                  break;
                }

                throw _context3.t1;

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 10], [14, 19]]);
      }));

      function deleteIntent(_x3) {
        return _ref4.apply(this, arguments);
      }

      return deleteIntent;
    }()
  }, {
    key: 'getIntents',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this = this;

        var intents;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.ghost.directoryListing(this.intentsDir, '.json');

              case 2:
                intents = _context4.sent;
                return _context4.abrupt('return', _bluebird2.default.mapSeries(intents, function (intent) {
                  return _this.getIntent(intent);
                }));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getIntents() {
        return _ref5.apply(this, arguments);
      }

      return getIntents;
    }()
  }, {
    key: 'getIntent',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(intent) {
        var filename, propertiesContent, utterancesContent, utterances, properties;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                intent = formatFilename(intent);

                if (!(intent.length < 1)) {
                  _context5.next = 3;
                  break;
                }

                throw new Error('Invalid intent name, expected at least one character');

              case 3:
                filename = intent + '.json';
                _context5.next = 6;
                return this.ghost.readFile(this.intentsDir, filename);

              case 6:
                propertiesContent = _context5.sent;
                _context5.next = 9;
                return this.ghost.readFile(this.intentsDir, filename.replace('.json', '.utterances.txt'));

              case 9:
                utterancesContent = _context5.sent;
                utterances = _lodash2.default.split(utterancesContent, /\r|\r\n|\n/i).filter(function (x) {
                  return x.length;
                });
                properties = JSON.parse(propertiesContent);
                return _context5.abrupt('return', _extends({
                  name: intent,
                  filename: filename,
                  utterances: utterances
                }, properties));

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getIntent(_x4) {
        return _ref6.apply(this, arguments);
      }

      return getIntent;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this2 = this;

        var entities;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.ghost.directoryListing(this.entitiesDir, '.json');

              case 2:
                entities = _context6.sent;
                return _context6.abrupt('return', _bluebird2.default.mapSeries(entities, function (entity) {
                  return _this2.getCustomEntity(entity);
                }));

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCustomEntities() {
        return _ref7.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }, {
    key: 'getCustomEntity',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(entity) {
        var filename, definitionContent, definition;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                entity = formatFilename(entity);

                if (!(entity.length < 1)) {
                  _context7.next = 3;
                  break;
                }

                throw new Error('Invalid entity name, expected at least one character');

              case 3:
                filename = entity + '.entity.json';
                _context7.next = 6;
                return this.ghost.readFile(this.entitiesDir, filename);

              case 6:
                definitionContent = _context7.sent;
                definition = JSON.parse(definitionContent);
                return _context7.abrupt('return', {
                  name: entity,
                  definition: definition
                });

              case 9:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getCustomEntity(_x5) {
        return _ref8.apply(this, arguments);
      }

      return getCustomEntity;
    }()
  }]);

  return Storage;
}();

exports.default = Storage;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser() {
    _classCallCheck(this, Parser);
  }

  _createClass(Parser, [{
    key: 'extractLabelsFromCanonical',
    value: function extractLabelsFromCanonical(canonicalUtterance, intentEntities) {
      var labels = [];
      var plainText = '';

      var regex = /\[(.+?)]\((.+?)\)/g;
      var m = void 0;
      var i = 0;

      do {
        m = regex.exec(canonicalUtterance);
        if (m) {
          plainText += canonicalUtterance.substr(i, m.index - i);
          i = m.index + m[0].length;
          plainText += m[1];
          labels.push({
            start: plainText.length - m[1].length,
            end: plainText.length - 1,
            entityName: m[2],
            type: _lodash2.default.get(_lodash2.default.find(intentEntities, { name: m[2] }), 'type')
          });
        }
      } while (m);

      plainText += canonicalUtterance.substr(i, canonicalUtterance.length - i);

      return {
        text: plainText,
        labels: labels
      };
    }
  }]);

  return Parser;
}();

exports.default = Parser;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = __webpack_require__(1);

var _crypto2 = _interopRequireDefault(_crypto);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogflowProvider = function (_Provider) {
  _inherits(DialogflowProvider, _Provider);

  function DialogflowProvider(config) {
    _classCallCheck(this, DialogflowProvider);

    var _this = _possibleConstructorReturn(this, (DialogflowProvider.__proto__ || Object.getPrototypeOf(DialogflowProvider)).call(this, _extends({}, config, {
      name: 'dialogflow',
      entityKey: '@dialogflow'
    })));

    _this.projectId = _this.config.googleProjectId;

    // TODO: get rid of eval once we drop webpack for node-part (needed to overcome webpack compilation)
    var dialogflow = __webpack_require__(15).v2; // eslint-disable-line no-eval

    _this.agentClient = new dialogflow.AgentsClient();
    _this.sessionClient = new dialogflow.SessionsClient();
    _this.contextClient = new dialogflow.ContextsClient();
    return _this;
  }

  _createClass(DialogflowProvider, [{
    key: '_getSessionId',
    value: function _getSessionId(event) {
      var shortUserId = _lodash2.default.get(event, 'user.id') || '';
      if (shortUserId.length > 36) {
        shortUserId = _crypto2.default.createHash('md5').update(shortUserId).digest('hex');
      }
      return shortUserId;
    }
  }, {
    key: '_resolveEntity',
    value: function _resolveEntity(field) {
      var _this2 = this;

      var entity = field[field.kind];

      if (field.kind === 'stringValue' || field.kind === 'numberValue') {
        return entity;
      } else if (field.kind === 'listValue') {
        return entity.values.map(function (v) {
          return _this2._resolveEntity(v);
        });
      } else if (field.kind === 'structValue') {
        return _lodash2.default.mapValues(entity.fields, function (f) {
          return _this2._resolveEntity(f);
        });
      } else {
        throw new Error('Not supported');
      }
    }

    /*******
    Public API
    *******/

  }, {
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, _ref3, agent;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.agentClient.getAgent({
                  parent: this.agentClient.projectPath(this.projectId)
                });

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 1);
                agent = _ref3[0];

                this.agent = agent;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'sync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sync() {
        return _ref4.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', false);

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function checkSyncNeeded() {
        return _ref5.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
        var _this3 = this;

        var request, detection, queryResult, isSmallTalk, intent, entities, context;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                request = {
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
                      analyzeQueryTextSentiment: true
                    }
                  }
                };
                _context4.next = 3;
                return this.sessionClient.detectIntent(request);

              case 3:
                detection = _context4.sent;
                queryResult = detection[0].queryResult;
                isSmallTalk = queryResult.action.startsWith('smalltalk');
                intent = {
                  name: isSmallTalk ? queryResult.action : queryResult.intent && queryResult.intent.displayName,
                  isSmallTalk: isSmallTalk,
                  confidence: queryResult.intentDetectionConfidence,
                  provider: 'dialogflow'
                };
                entities = _lodash2.default.map(queryResult.parameters.fields, function (v, k) {
                  return {
                    name: k,
                    value: _this3._resolveEntity(v)
                  };
                });
                context = {
                  add: function add(event, name, lifespan) {

                    var sessionPath = _this3.contextClient.sessionPath(_this3.projectId, _this3._getSessionId(event));

                    var contextPath = _this3.contextClient.contextPath(_this3.projectId, _this3._getSessionId(event), name);

                    var createContextRequest = {
                      parent: sessionPath,
                      context: {
                        name: contextPath,
                        lifespanCount: lifespan
                      }
                    };

                    return _this3.contextClient.createContext(createContextRequest);
                  }
                };


                event.bp.logger.debug('Dialogflow: [NLU] "' + event.text + '"\t\t?> ITNT\t"' + intent.name + '" (' + intent.confidence.toFixed(2) + ')');

                return _context4.abrupt('return', {
                  intent: intent,
                  context: context,
                  intents: [intent],
                  original: detection,
                  entities: entities.map(function (entity) {
                    return {
                      name: entity.name, // usually the entity name, but can be modified
                      type: entity.name, // when parameter name modified dialogflow doesn't give the original entity name
                      value: entity.value,
                      original: null,
                      confidence: null,
                      position: null,
                      provider: 'dialogflow'
                    };
                  })
                });

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function extract(_x) {
        return _ref6.apply(this, arguments);
      }

      return extract;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', []);

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCustomEntities() {
        return _ref7.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }]);

  return DialogflowProvider;
}(_base2.default);

exports.default = DialogflowProvider;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("dialogflow");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = __webpack_require__(1);

var _crypto2 = _interopRequireDefault(_crypto);

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _entities = __webpack_require__(4);

var _entities2 = _interopRequireDefault(_entities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LUIS_APP_VERSION = '1.0'; // Static, we're not using this as everything is source-controlled in your bot
var LUIS_HASH_KVS_KEY = 'nlu/luis/updateMetadata';

var LuisProvider = function (_Provider) {
  _inherits(LuisProvider, _Provider);

  function LuisProvider(config) {
    _classCallCheck(this, LuisProvider);

    var _this = _possibleConstructorReturn(this, (LuisProvider.__proto__ || Object.getPrototypeOf(LuisProvider)).call(this, _extends({}, config, { name: 'luis', entityKey: '@luis' })));

    _this.appId = _this.config.luisAppId;
    _this.programmaticKey = _this.config.luisProgrammaticKey;
    _this.appSecret = _this.config.luisAppSecret;
    _this.appRegion = _this.config.luisAppRegion;
    return _this;
  }

  _createClass(LuisProvider, [{
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'getRemoteVersion',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _axios2.default.get('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/versions', {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt('return', _lodash2.default.find(res.data, { version: LUIS_APP_VERSION }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                this.logger.debug('[NLU::Luis] Could not fetch app versions');
                return _context2.abrupt('return', []);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getRemoteVersion() {
        return _ref2.apply(this, arguments);
      }

      return getRemoteVersion;
    }()
  }, {
    key: 'deleteVersion',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var del;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _axios2.default.delete('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/versions/' + LUIS_APP_VERSION + '/', {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 3:
                del = _context3.sent;


                if (del.statusCode === 200) {
                  this.logger.debug('[NLU::Luis] Removed old version of the model');
                }
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);

                this.logger.debug('[NLU::Luis] Could not remove old version of the model');

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function deleteVersion() {
        return _ref3.apply(this, arguments);
      }

      return deleteVersion;
    }()
  }, {
    key: 'getAppInfo',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _axios2.default.get('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId, {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 3:
                response = _context4.sent;
                return _context4.abrupt('return', response.data);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);
                throw new Error('[NLU::Luis] Could not find app ' + this.appId);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function getAppInfo() {
        return _ref4.apply(this, arguments);
      }

      return getAppInfo;
    }()
  }, {
    key: 'isInSync',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(localIntents, remoteVersion) {
        var intentsHash, metadata;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');
                _context5.next = 3;
                return this.kvs.get(LUIS_HASH_KVS_KEY);

              case 3:
                metadata = _context5.sent;
                return _context5.abrupt('return', metadata && metadata.hash === intentsHash && metadata.time === remoteVersion.lastModifiedDateTime);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function isInSync(_x, _x2) {
        return _ref5.apply(this, arguments);
      }

      return isInSync;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var intents, currentVersion;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.storage.getIntents();

              case 2:
                intents = _context6.sent;
                _context6.next = 5;
                return this.getRemoteVersion();

              case 5:
                currentVersion = _context6.sent;
                _context6.next = 8;
                return this.isInSync(intents, currentVersion);

              case 8:
                return _context6.abrupt('return', !_context6.sent);

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkSyncNeeded() {
        return _ref6.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: 'onSyncSuccess',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(localIntents, remoteVersion) {
        var intentsHash;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');
                _context7.next = 3;
                return this.kvs.set(LUIS_HASH_KVS_KEY, {
                  hash: intentsHash,
                  time: remoteVersion.lastModifiedDateTime
                });

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onSyncSuccess(_x3, _x4) {
        return _ref7.apply(this, arguments);
      }

      return onSyncSuccess;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _ref9, simples, composites, lists, mapToType;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getCustomLuisEntities();

              case 2:
                _ref9 = _context8.sent;
                simples = _ref9.simples;
                composites = _ref9.composites;
                lists = _ref9.lists;

                mapToType = function mapToType(list, type) {
                  return list.map(function (x) {
                    return {
                      name: '@custom.' + x.name,
                      isFromProvider: false,
                      nameProvider: x.name,
                      providerType: type,
                      definition: x
                    };
                  });
                };

                return _context8.abrupt('return', [].concat(_toConsumableArray(mapToType(simples, 'entities')), _toConsumableArray(mapToType(composites, 'composites')), _toConsumableArray(mapToType(lists, 'closedLists'))));

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getCustomEntities() {
        return _ref8.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }, {
    key: 'getCustomLuisEntities',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var entities, simplesDef, compositesDef, listsDef, simples, composites, lists;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.storage.getCustomEntities();

              case 2:
                entities = _context9.sent;
                simplesDef = _lodash2.default.find(entities, function (e) {
                  return e.name.toLowerCase() === 'luis_entities';
                });
                compositesDef = _lodash2.default.find(entities, function (e) {
                  return e.name.toLowerCase() === 'luis_composites';
                });
                listsDef = _lodash2.default.find(entities, function (e) {
                  return e.name.toLowerCase() === 'luis_closedlists';
                });
                simples = simplesDef && simplesDef.definition || [];
                composites = compositesDef && compositesDef.definition || [];
                lists = listsDef && listsDef.definition || [];
                return _context9.abrupt('return', { simples: simples, composites: composites, lists: lists });

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getCustomLuisEntities() {
        return _ref10.apply(this, arguments);
      }

      return getCustomLuisEntities;
    }()
  }, {
    key: 'validateCredentials',
    value: function validateCredentials() {
      var missingPattern = function missingPattern(name) {
        return '[NLU::LUIS] "' + name + '" is missing from the configuration, please have a look at botpress-nlu ' + 'documentation to learn how to setup the credentials.';
      };

      if (_lodash2.default.isEmpty(this.appId)) {
        throw new Error(missingPattern('Application Id'));
      }

      if (_lodash2.default.isEmpty(this.programmaticKey)) {
        throw new Error(missingPattern('Programmatic Key'));
      }

      if (_lodash2.default.isEmpty(this.appId)) {
        throw new Error(missingPattern('Application Secret'));
      }

      if (_lodash2.default.isEmpty(this.appId)) {
        throw new Error(missingPattern('Application Region'));
      }
    }
  }, {
    key: 'sync',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var _this2 = this;

        var intents, currentVersion, utterances, builtinEntities, simpleEntities, compositeEntities, listEntities, availableEntities, appInfo, body, result, detailedError;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(this.syncingSince && new Date() - this.syncingSince <= 10 * 60 * 1000)) {
                  _context10.next = 3;
                  break;
                }

                this.logger.warn('[NLU::Luis] Tried to sync while syncing in progress');
                return _context10.abrupt('return');

              case 3:

                this.syncingSince = new Date();

                this.validateCredentials();

                _context10.next = 7;
                return this.storage.getIntents();

              case 7:
                intents = _context10.sent;
                _context10.next = 10;
                return this.getRemoteVersion();

              case 10:
                currentVersion = _context10.sent;
                _context10.next = 13;
                return this.isInSync(intents, currentVersion);

              case 13:
                if (!_context10.sent) {
                  _context10.next = 18;
                  break;
                }

                this.logger.debug('[NLU::Luis] Model is up to date');
                return _context10.abrupt('return');

              case 18:
                this.logger.debug('[NLU::Luis] The model needs to be updated');

              case 19:
                if (!currentVersion) {
                  _context10.next = 23;
                  break;
                }

                this.logger.debug('[NLU::Luis] Deleting old version of the model');
                _context10.next = 23;
                return this.deleteVersion();

              case 23:
                utterances = [];
                builtinEntities = [];
                simpleEntities = [];
                compositeEntities = [];
                listEntities = [];
                _context10.next = 30;
                return this.getAvailableEntities();

              case 30:
                availableEntities = _context10.sent;


                intents.forEach(function (intent) {
                  intent.utterances.forEach(function (utterance) {
                    var extracted = _this2.parser.extractLabelsFromCanonical(utterance, intent.entities);
                    if (!extracted.text || !extracted.text.trim()) {
                      return;
                    }

                    var entities = [];

                    extracted.labels.forEach(function (label) {
                      var entity = _lodash2.default.find(availableEntities, { name: label.type });

                      if (!entity) {
                        throw new Error('[NLU::Luis] Unknown entity: ' + label.type);
                      }

                      if (entity.isFromProvider && builtinEntities.indexOf(entity.nameProvider) === -1) {
                        builtinEntities.push(entity.nameProvider);
                      } else if (entity.providerType === 'entities' && !_lodash2.default.find(simpleEntities, { name: entity.nameProvider })) {
                        simpleEntities.push(entity.definition);
                      } else if (entity.providerType === 'composites' && !_lodash2.default.find(compositeEntities, { name: entity.nameProvider })) {
                        compositeEntities.push(entity.definition);
                      } else if (entity.providerType === 'closedLists' && !_lodash2.default.find(listEntities, { name: entity.nameProvider })) {
                        listEntities.push(entity.definition);
                      }

                      entities.push({
                        entity: entity.nameProvider,
                        startPos: label.start,
                        endPos: label.end
                      });
                    });

                    utterances.push({
                      text: extracted.text,
                      intent: intent.name,
                      entities: entities
                    });
                  });
                });

                _context10.next = 34;
                return this.getAppInfo();

              case 34:
                appInfo = _context10.sent;
                body = {
                  luis_schema_version: '2.1.0',
                  versionId: LUIS_APP_VERSION,
                  name: appInfo.name,
                  desc: appInfo.description,
                  culture: appInfo.culture,
                  intents: intents.map(function (i) {
                    return { name: i.name };
                  }),
                  entities: simpleEntities,
                  composites: compositeEntities,
                  closedLists: listEntities,
                  bing_entities: builtinEntities,
                  model_features: [],
                  regex_features: [],
                  utterances: utterances
                };
                _context10.prev = 36;
                _context10.next = 39;
                return _axios2.default.post('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/versions/import?versionId=' + LUIS_APP_VERSION, body, {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 39:
                result = _context10.sent;
                _context10.next = 42;
                return this.train();

              case 42:
                _context10.next = 44;
                return this.getRemoteVersion();

              case 44:
                currentVersion = _context10.sent;
                _context10.next = 47;
                return this.onSyncSuccess(intents, currentVersion);

              case 47:

                this.logger.info('[NLU::Luis] Synced model [' + result.data + ']');
                _context10.next = 54;
                break;

              case 50:
                _context10.prev = 50;
                _context10.t0 = _context10['catch'](36);
                detailedError = _lodash2.default.get(_context10.t0, 'response.data.error.message') || _context10.t0 && _context10.t0.message || _context10.t0;

                this.logger.error('[NLU::Luis] Could not sync the model. Error = ' + detailedError);

              case 54:
                this.syncingSince = null;

              case 55:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this, [[36, 50]]);
      }));

      function sync() {
        return _ref11.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'train',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var res, models, percent, error;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _axios2.default.post('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/versions/' + LUIS_APP_VERSION + '/train', {}, {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 2:
                res = _context11.sent;

                if (!(res.data.status !== 'Queued')) {
                  _context11.next = 5;
                  break;
                }

                throw new Error('Expected training to be Queued but was: ' + res.data.status);

              case 5:
                if (false) {
                  _context11.next = 24;
                  break;
                }

                _context11.next = 8;
                return _axios2.default.get('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/versions/' + LUIS_APP_VERSION + '/train', {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 8:
                res = _context11.sent;
                models = res.data;
                percent = _lodash2.default.filter(models, function (m) {
                  return m.details.status === 'Success';
                }).length / models.length;
                error = _lodash2.default.find(models, function (m) {
                  return m.details.status === 'Fail';
                });

                if (!error) {
                  _context11.next = 14;
                  break;
                }

                throw new Error('[NLU::Luis] Error training model "' + error.modelId + '", reason is "' + error.details.failureReason + '"');

              case 14:
                if (!(percent >= 1)) {
                  _context11.next = 19;
                  break;
                }

                this.logger.debug('[NLU::Luis] Model trained (100%)');
                return _context11.abrupt('break', 24);

              case 19:
                this.logger.debug('[NLU::Luis] Training... ' + percent.toFixed(2) * 100 + '%');

              case 20:
                _context11.next = 22;
                return _bluebird2.default.delay(1000);

              case 22:
                _context11.next = 5;
                break;

              case 24:
                _context11.next = 26;
                return _bluebird2.default.delay(1000);

              case 26:
                _context11.next = 28;
                return _axios2.default.post('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/api/v2.0/apps/' + this.appId + '/publish', {
                  versionId: LUIS_APP_VERSION,
                  isStaging: !this.isProduction,
                  region: this.appRegion
                }, {
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.programmaticKey
                  }
                });

              case 28:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function train() {
        return _ref12.apply(this, arguments);
      }

      return train;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(incomingEvent) {
        var res, intentName, confidence, intents, entities;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;

                this.validateCredentials();
                _context12.next = 8;
                break;

              case 4:
                _context12.prev = 4;
                _context12.t0 = _context12['catch'](0);

                this.logger.warn('[NLU::Luis] Did not extract NLU metadata for incoming text because Luis is not configured properly.');

                return _context12.abrupt('return', (0, _base.defaultExtractData)('luis'));

              case 8:
                _context12.next = 10;
                return _axios2.default.get('https://' + this.appRegion + '.api.cognitive.microsoft.com/luis/v2.0/apps/' + this.appId, {
                  params: {
                    q: incomingEvent.text,
                    verbose: true,
                    spellCheck: false,
                    staging: !this.isProduction
                  },
                  headers: {
                    'Ocp-Apim-Subscription-Key': this.appSecret
                  }
                });

              case 10:
                res = _context12.sent;
                intentName = _lodash2.default.get(res, 'data.topScoringIntent.intent') || 'None';
                confidence = _lodash2.default.get(res, 'data.topScoringIntent.score') || 0;
                intents = _lodash2.default.get(res, 'data.intents') || [];
                entities = _lodash2.default.get(res, 'data.entities') || [];
                return _context12.abrupt('return', {
                  intent: {
                    name: intentName,
                    confidence: parseFloat(confidence),
                    provider: 'luis'
                  },
                  intents: intents.map(function (intent) {
                    return {
                      name: intent.intent,
                      confidence: parseFloat(intent.score),
                      provider: 'luis'
                    };
                  }),
                  entities: entities.map(function (entity) {
                    return {
                      name: null,
                      type: entity.type,
                      value: _lodash2.default.get(entity, 'resolution.values.0.value') || _lodash2.default.get(entity, 'resolution.value') || _lodash2.default.get(entity, 'resolution.values.0') || entity.entity,
                      unit: _lodash2.default.get(entity, 'resolution.unit'),
                      original: entity.entity,
                      confidence: null,
                      position: entity.startIndex,
                      provider: 'luis'
                    };
                  })
                });

              case 16:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 4]]);
      }));

      function extract(_x5) {
        return _ref13.apply(this, arguments);
      }

      return extract;
    }()
  }]);

  return LuisProvider;
}(_base2.default);

exports.default = LuisProvider;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = __webpack_require__(1);

var _crypto2 = _interopRequireDefault(_crypto);

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _ms = __webpack_require__(18);

var _ms2 = _interopRequireDefault(_ms);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

var _entities = __webpack_require__(4);

var _entities2 = _interopRequireDefault(_entities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RASA_HASH_KVS_KEY = 'nlu/rasa/updateMetadata';

var RasaProvider = function (_Provider) {
  _inherits(RasaProvider, _Provider);

  function RasaProvider(config) {
    _classCallCheck(this, RasaProvider);

    var _this = _possibleConstructorReturn(this, (RasaProvider.__proto__ || Object.getPrototypeOf(RasaProvider)).call(this, _extends({}, config, { name: 'rasa', entityKey: '@rasa' })));

    _this.endpoint = _this.config.rasaEndpoint;
    _this.token = _this.config.rasaToken;
    _this.project = _this.config.rasaProject;

    _this.client = _axios2.default.create({
      baseURL: _this.endpoint,
      params: _this.token && _this.token.length ? { token: _this.token } : {}
    });
    return _this;
  }

  _createClass(RasaProvider, [{
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var intents, remoteVersions;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.getIntents();

              case 2:
                intents = _context2.sent;
                _context2.next = 5;
                return this._getRemoteVersions();

              case 5:
                remoteVersions = _context2.sent;
                _context2.next = 8;
                return this._isInSync(intents, remoteVersions);

              case 8:
                return _context2.abrupt('return', !_context2.sent);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkSyncNeeded() {
        return _ref2.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: '_getProjectName',
    value: function _getProjectName() {
      var scope = 'all';
      return this.env + '__' + this.project + '__' + scope;
    }
  }, {
    key: '_getRemoteVersions',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var projectName, res, versions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                projectName = this._getProjectName();
                _context3.next = 4;
                return this.client.get('/status');

              case 4:
                res = _context3.sent;
                versions = _lodash2.default.get(res, 'data.available_projects.' + projectName + '.available_models') || [];
                return _context3.abrupt('return', versions);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](0);

                this.logger.debug('[NLU::Rasa] Could not fetch model versions');
                return _context3.abrupt('return', []);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      function _getRemoteVersions() {
        return _ref3.apply(this, arguments);
      }

      return _getRemoteVersions;
    }()
  }, {
    key: '_isInSync',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(localIntents, remoteVersions) {
        var intentsHash, metadata;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');
                _context4.next = 3;
                return this.kvs.get(RASA_HASH_KVS_KEY);

              case 3:
                metadata = _context4.sent;
                return _context4.abrupt('return', metadata && metadata.hash === intentsHash && _lodash2.default.includes(remoteVersions, metadata.modelId));

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _isInSync(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return _isInSync;
    }()
  }, {
    key: '_onSyncSuccess',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(localIntents) {
        var intentsHash, versions, version;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');
                _context5.next = 3;
                return this._getRemoteVersions();

              case 3:
                versions = _context5.sent;
                version = _lodash2.default.last(_lodash2.default.sortBy(versions));

                if (version) {
                  _context5.next = 7;
                  break;
                }

                throw new Error('[NLU::Rasa] Could not sync model, could not list project models after training');

              case 7:
                _context5.next = 9;
                return this.kvs.set(RASA_HASH_KVS_KEY, {
                  hash: intentsHash,
                  modelId: version
                });

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _onSyncSuccess(_x3) {
        return _ref5.apply(this, arguments);
      }

      return _onSyncSuccess;
    }()
  }, {
    key: '_cacheLatestModel',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var metadata;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.kvs.get(RASA_HASH_KVS_KEY);

              case 2:
                metadata = _context6.sent;

                if (metadata) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('[NLU::Rasa] Could not fetch cached model: please make sure syncing succeeded first');

              case 5:
                this._modelId = metadata.modelId;
                return _context6.abrupt('return', metadata.modelId);

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _cacheLatestModel() {
        return _ref6.apply(this, arguments);
      }

      return _cacheLatestModel;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt('return', []);

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getCustomEntities() {
        return _ref7.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }, {
    key: 'sync',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this2 = this;

        var intents, remoteVersions, sample, common_examples, data, msg, _errorMsg, _errorMsg2, _errorMsg3, errorMsg, latestModel;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.storage.getIntents();

              case 2:
                intents = _context8.sent;
                _context8.next = 5;
                return this._getRemoteVersions();

              case 5:
                remoteVersions = _context8.sent;
                _context8.next = 8;
                return this._isInSync(intents, remoteVersions);

              case 8:
                if (!_context8.sent) {
                  _context8.next = 13;
                  break;
                }

                this.logger.debug('[NLU::Rasa] Model is up to date');
                return _context8.abrupt('return');

              case 13:
                this.logger.debug('[NLU::Rasa] The model needs to be updated');

              case 14:
                sample = {
                  rasa_nlu_data: {
                    common_examples: [],
                    regex_features: [],
                    entity_synonyms: []
                  }
                };
                common_examples = [];


                intents.forEach(function (intent) {
                  intent.utterances.forEach(function (utterance) {
                    var extracted = _this2.parser.extractLabelsFromCanonical(utterance, intent.entities);
                    var entities = [];

                    extracted.labels.forEach(function (label) {
                      entities.push({
                        entity: label.entityName,
                        value: extracted.text.substr(label.start, label.end - label.start + 1),
                        start: label.start,
                        end: label.end + 1
                      });
                    });

                    common_examples.push({
                      text: extracted.text,
                      intent: intent.name,
                      entities: entities
                    });
                  });
                });

                if (!this._training) {
                  _context8.next = 21;
                  break;
                }

                return _context8.abrupt('return', this.logger.warn('[NLU::Rasa] Training is already in progress, aborting this request'));

              case 21:
                this._training = true;
                this.logger.debug('[NLU::Rasa] Started training model from ' + common_examples.length + ' samples');

              case 23:
                _context8.prev = 23;
                _context8.next = 26;
                return this.client.post('/train', {
                  rasa_nlu_data: {
                    common_examples: common_examples,
                    regex_features: [], // TODO Implement that
                    entity_synonyms: []
                  }
                }, {
                  timeout: (0, _ms2.default)('30m'),
                  params: {
                    project: this._getProjectName()
                  }
                });

              case 26:
                _context8.next = 48;
                break;

              case 28:
                _context8.prev = 28;
                _context8.t0 = _context8['catch'](23);

                this._training = false;

                data = _lodash2.default.get(_context8.t0, 'response.data');
                msg = '"' + (data && JSON.stringify(data)) + '" Status: ' + _context8.t0.status + ' | Message: ' + _context8.t0.message;

                if (!(_context8.t0.status == 403)) {
                  _context8.next = 37;
                  break;
                }

                _errorMsg = '[NLU::Rasa] A model is already training, aborting sync: ' + msg;


                this.logger.warn(_errorMsg);
                throw new Error(_errorMsg);

              case 37:
                if (!(_context8.t0.status == 404)) {
                  _context8.next = 41;
                  break;
                }

                _errorMsg2 = '[NLU::Rasa] Invalid project error: ' + msg;


                this.logger.warn(_errorMsg2);
                throw new Error(_errorMsg2);

              case 41:
                if (!(_context8.t0.status == 500)) {
                  _context8.next = 45;
                  break;
                }

                _errorMsg3 = '[NLU::Rasa] Training error: ' + msg;


                this.logger.warn(_errorMsg3);
                throw new Error(_errorMsg3);

              case 45:
                errorMsg = '[NLU::Rasa] Error syncing model: ' + msg;


                this.logger.error(errorMsg);
                throw new Error(errorMsg);

              case 48:

                this._training = false;

                _context8.next = 51;
                return this._onSyncSuccess(intents);

              case 51:
                _context8.next = 53;
                return this._cacheLatestModel();

              case 53:
                latestModel = _context8.sent;


                this.logger.info('[NLU::Rasa] Synced model [Model=' + latestModel + ']');

              case 55:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[23, 28]]);
      }));

      function sync() {
        return _ref8.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(incomingEvent) {
        var modelId, versions, res, intentName, confidence, intents, entities;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                modelId = this._modelId;

                if (modelId) {
                  _context9.next = 5;
                  break;
                }

                _context9.next = 4;
                return this._cacheLatestModel();

              case 4:
                modelId = _context9.sent;

              case 5:
                if (modelId) {
                  _context9.next = 16;
                  break;
                }

                _context9.next = 8;
                return this._getRemoteVersions();

              case 8:
                versions = _context9.sent;

                if (versions.length) {
                  _context9.next = 13;
                  break;
                }

                this.sync(); // Async
                this.logger.error('[NLU:Rasa] Your model needs to be trained at least once in this environment before extraction can be done');

                return _context9.abrupt('return', (0, _base.defaultExtractData)('rasa'));

              case 13:

                this._modelId = modelId = _lodash2.default.last(_lodash2.default.sortBy(versions));
                this.logger.warn('[NLU:Rasa] Model not specified, using latest one. Retrain in this environment to fix this warning.');

                return _context9.abrupt('return', (0, _base.defaultExtractData)('rasa'));

              case 16:
                _context9.next = 18;
                return this.client.post('/parse', {
                  q: incomingEvent.text,
                  project: this._getProjectName(),
                  model: modelId
                });

              case 18:
                res = _context9.sent;
                intentName = _lodash2.default.get(res, 'data.intent.name') || 'None';
                confidence = _lodash2.default.get(res, 'data.intent.confidence') || 0;
                intents = _lodash2.default.get(res, 'data.intent_ranking') || [];
                entities = _lodash2.default.get(res, 'data.entities') || [];
                return _context9.abrupt('return', {
                  intent: {
                    name: intentName,
                    confidence: parseFloat(confidence),
                    provider: 'rasa'
                  },
                  intents: intents.map(function (intent) {
                    return {
                      name: intent.name,
                      confidence: parseFloat(intent.confidence),
                      provider: 'rasa'
                    };
                  }),
                  entities: entities.map(function (entity) {
                    return {
                      name: null,
                      type: entity.entity,
                      value: entity.value,
                      original: entity.text,
                      confidence: null,
                      position: entity.start,
                      provider: entity.extractor
                    };
                  })
                });

              case 24:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function extract(_x4) {
        return _ref9.apply(this, arguments);
      }

      return extract;
    }()
  }]);

  return RasaProvider;
}(_base2.default);

exports.default = RasaProvider;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _crypto = __webpack_require__(1);

var _crypto2 = _interopRequireDefault(_crypto);

var _bluebird = __webpack_require__(3);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RECAST_HASH_KVS_KEY = 'nlu/recast/updateMetadata';

var RecastProvider = function (_Provider) {
  _inherits(RecastProvider, _Provider);

  function RecastProvider(config) {
    _classCallCheck(this, RecastProvider);

    var _this = _possibleConstructorReturn(this, (RecastProvider.__proto__ || Object.getPrototypeOf(RecastProvider)).call(this, _extends({}, config, { name: 'recast', entityKey: '@recast' })));

    _this.endpoint = '/users/' + _this.config.recastUserSlug + '/bots/' + _this.config.recastBotSlug;

    _this.client = _axios2.default.create({
      baseURL: 'https://api.recast.ai/v2',
      headers: { Authorization: 'Token ' + _this.config.recastToken }
    });
    return _this;
  }

  _createClass(RecastProvider, [{
    key: '_getBotModel',
    value: function _getBotModel() {
      return this.client.get('' + this.endpoint);
    }
  }, {
    key: '_getBulkCreations',
    value: function _getBulkCreations() {
      return this.client.get(this.endpoint + '/bulk_creations');
    }
  }, {
    key: '_getRemoteIntents',
    value: function _getRemoteIntents() {
      return this.client.get(this.endpoint + '/intents');
    }
  }, {
    key: '_deleteIntent',
    value: function _deleteIntent(intentSlug) {
      return this.client.delete(this.endpoint + '/intents/' + intentSlug);
    }
  }, {
    key: '_postIntent',
    value: function _postIntent(intent) {
      return this.client.post(this.endpoint + '/intents', intent);
    }
  }, {
    key: '_getRemoteIntentExpressions',
    value: function _getRemoteIntentExpressions(intentSlug) {
      return this.client.get(this.endpoint + '/intents/' + intentSlug + '/expressions');
    }
  }, {
    key: '_getRemoteExpression',
    value: function _getRemoteExpression(intentSlug, expressionId) {
      return this.client.get(this.endpoint + '/intents/' + intentSlug + '/expressions/' + expressionId);
    }
  }, {
    key: '_updateRemoteExpression',
    value: function _updateRemoteExpression(intentSlug, expressionId, expression) {
      return this.client.put(this.endpoint + '/intents/' + intentSlug + '/expressions/' + expressionId, expression);
    }
  }, {
    key: '_getRemoteGazettes',
    value: function _getRemoteGazettes() {
      return this.client.get(this.endpoint + '/gazettes');
    }
  }, {
    key: '_deleteGazette',
    value: function _deleteGazette(gazetteSlug) {
      return this.client.delete(this.endpoint + '/gazettes/' + gazetteSlug);
    }
  }, {
    key: '_postGazette',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(entity) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.client.post('/entities', { name: entity.entity_id });

              case 3:
                _context.next = 10;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context['catch'](0);

                if (!(_context.t0.response.data.message !== 'Entity has already been taken')) {
                  _context.next = 10;
                  break;
                }

                this.syncing = false;
                throw new Error(_context.t0.response.data.message);

              case 10:
                return _context.abrupt('return', this.client.post(this.endpoint + '/gazettes', entity));

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      function _postGazette(_x) {
        return _ref.apply(this, arguments);
      }

      return _postGazette;
    }()
  }, {
    key: '_getIntentsHash',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var localIntents;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.getIntents();

              case 2:
                localIntents = _context2.sent;
                return _context2.abrupt('return', _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex'));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _getIntentsHash() {
        return _ref2.apply(this, arguments);
      }

      return _getIntentsHash;
    }()
  }, {
    key: '_onSyncSuccess',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var intentsHash;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._getIntentsHash();

              case 2:
                intentsHash = _context3.sent;
                _context3.next = 5;
                return this.kvs.set(RECAST_HASH_KVS_KEY, intentsHash);

              case 5:
                this.syncing = false;

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _onSyncSuccess() {
        return _ref3.apply(this, arguments);
      }

      return _onSyncSuccess;
    }()

    /*******
    Public API
    *******/

  }, {
    key: 'init',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref5, results;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._getBotModel();

              case 2:
                _ref5 = _context4.sent;
                results = _ref5.data.results;

                this.defaultLanguage = results.language.isocode;

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init() {
        return _ref4.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'sync',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;

        var _ref7, remoteGazettes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e, customEntities, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _e, _ref9, remoteGazette, localIntents, _ref8, remoteIntents, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _loop, _iterator4, _step4, _ret;

        return regeneratorRuntime.wrap(function _callee5$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this.syncing) {
                  _context8.next = 3;
                  break;
                }

                this.logger.warn('[NLU::Recast] Model is already syncing !');
                return _context8.abrupt('return');

              case 3:

                this.syncing = true;
                this.logger.debug('[NLU::Recast] Syncing Model...');

                _context8.prev = 5;
                _context8.next = 8;
                return this._getRemoteGazettes();

              case 8:
                _ref7 = _context8.sent;
                remoteGazettes = _ref7.data.results;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context8.prev = 13;
                _iterator = _lodash2.default.map(remoteGazettes, 'slug')[Symbol.iterator]();

              case 15:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context8.next = 22;
                  break;
                }

                e = _step.value;
                _context8.next = 19;
                return this._deleteGazette(e);

              case 19:
                _iteratorNormalCompletion = true;
                _context8.next = 15;
                break;

              case 22:
                _context8.next = 28;
                break;

              case 24:
                _context8.prev = 24;
                _context8.t0 = _context8['catch'](13);
                _didIteratorError = true;
                _iteratorError = _context8.t0;

              case 28:
                _context8.prev = 28;
                _context8.prev = 29;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 31:
                _context8.prev = 31;

                if (!_didIteratorError) {
                  _context8.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context8.finish(31);

              case 35:
                return _context8.finish(28);

              case 36:
                _context8.next = 38;
                return this.getCustomEntities();

              case 38:
                customEntities = _context8.sent;

                remoteGazettes = [];

                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context8.prev = 43;
                _iterator2 = customEntities[Symbol.iterator]();

              case 45:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context8.next = 55;
                  break;
                }

                _e = _step2.value;
                _context8.next = 49;
                return this._postGazette(_e.definition);

              case 49:
                _ref9 = _context8.sent;
                remoteGazette = _ref9.data.results;

                remoteGazettes.push(_lodash2.default.pick(remoteGazette, ['slug', 'entity.id']));

              case 52:
                _iteratorNormalCompletion2 = true;
                _context8.next = 45;
                break;

              case 55:
                _context8.next = 61;
                break;

              case 57:
                _context8.prev = 57;
                _context8.t1 = _context8['catch'](43);
                _didIteratorError2 = true;
                _iteratorError2 = _context8.t1;

              case 61:
                _context8.prev = 61;
                _context8.prev = 62;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 64:
                _context8.prev = 64;

                if (!_didIteratorError2) {
                  _context8.next = 67;
                  break;
                }

                throw _iteratorError2;

              case 67:
                return _context8.finish(64);

              case 68:
                return _context8.finish(61);

              case 69:
                _context8.next = 71;
                return this.storage.getIntents();

              case 71:
                localIntents = _context8.sent;
                _context8.next = 74;
                return this._getRemoteIntents();

              case 74:
                _ref8 = _context8.sent;
                remoteIntents = _ref8.data.results;


                // Delete all intents
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context8.prev = 79;
                _iterator3 = _lodash2.default.map(remoteIntents, 'slug')[Symbol.iterator]();

              case 81:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context8.next = 88;
                  break;
                }

                i = _step3.value;
                _context8.next = 85;
                return this._deleteIntent(i);

              case 85:
                _iteratorNormalCompletion3 = true;
                _context8.next = 81;
                break;

              case 88:
                _context8.next = 94;
                break;

              case 90:
                _context8.prev = 90;
                _context8.t2 = _context8['catch'](79);
                _didIteratorError3 = true;
                _iteratorError3 = _context8.t2;

              case 94:
                _context8.prev = 94;
                _context8.prev = 95;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 97:
                _context8.prev = 97;

                if (!_didIteratorError3) {
                  _context8.next = 100;
                  break;
                }

                throw _iteratorError3;

              case 100:
                return _context8.finish(97);

              case 101:
                return _context8.finish(94);

              case 102:
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context8.prev = 105;
                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                  var intent, utterances, expressions, _ref10, results, _ref11, remoteIntentExpressions, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _loop2, _iterator5, _step5;

                  return regeneratorRuntime.wrap(function _loop$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          intent = _step4.value;

                          if (!(intent.utterances.length === 0)) {
                            _context7.next = 4;
                            break;
                          }

                          _this2.logger.warn('[NLU::Recast] Intent ' + intent.name + ' has been skipped because it has no utterances');
                          return _context7.abrupt('return', 'continue');

                        case 4:

                          // Post the intent
                          utterances = _lodash2.default.map(intent.utterances, function (u) {
                            return _this2.parser.extractLabelsFromCanonical(u, intent.entities);
                          });
                          expressions = _lodash2.default.map(utterances, function (u) {
                            return {
                              source: u.text,
                              language: { isocode: _this2.defaultLanguage }
                            };
                          });
                          _context7.next = 8;
                          return _this2._postIntent({ name: intent.name, expressions: expressions });

                        case 8:
                          if (false) {
                            _context7.next = 19;
                            break;
                          }

                          _context7.next = 11;
                          return _this2._getBulkCreations();

                        case 11:
                          _ref10 = _context7.sent;
                          results = _ref10.data.results;

                          if (!(results.length === 0)) {
                            _context7.next = 15;
                            break;
                          }

                          return _context7.abrupt('break', 19);

                        case 15:
                          _context7.next = 17;
                          return _bluebird2.default.delay(1000);

                        case 17:
                          _context7.next = 8;
                          break;

                        case 19:
                          _context7.next = 21;
                          return _this2._getRemoteIntentExpressions(intent.name);

                        case 21:
                          _ref11 = _context7.sent;
                          remoteIntentExpressions = _ref11.data.results;
                          _iteratorNormalCompletion5 = true;
                          _didIteratorError5 = false;
                          _iteratorError5 = undefined;
                          _context7.prev = 26;
                          _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2() {
                            var expr, utterance, _ref12, remoteIntentExpression, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _loop3, _iterator6, _step6;

                            return regeneratorRuntime.wrap(function _loop2$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    expr = _step5.value;
                                    utterance = utterances.find(function (u) {
                                      return u.text === expr.source;
                                    });

                                    if (!(utterance && utterance.labels.length)) {
                                      _context6.next = 32;
                                      break;
                                    }

                                    _context6.next = 5;
                                    return _this2._getRemoteExpression(intent.name, expr.id);

                                  case 5:
                                    _ref12 = _context6.sent;
                                    remoteIntentExpression = _ref12.data.results;
                                    _iteratorNormalCompletion6 = true;
                                    _didIteratorError6 = false;
                                    _iteratorError6 = undefined;
                                    _context6.prev = 10;
                                    _loop3 = /*#__PURE__*/regeneratorRuntime.mark(function _loop3() {
                                      var label, word, token, gazette, expression;
                                      return regeneratorRuntime.wrap(function _loop3$(_context5) {
                                        while (1) {
                                          switch (_context5.prev = _context5.next) {
                                            case 0:
                                              label = _step6.value;
                                              word = utterance.text.substr(label.start, label.end - label.start + 1);
                                              token = remoteIntentExpression.tokens.find(function (t) {
                                                return t.word.name === word;
                                              });

                                              if (!(token && (!token.entity || token.entity.slug !== label.type))) {
                                                _context5.next = 9;
                                                break;
                                              }

                                              gazette = remoteGazettes.find(function (e) {
                                                return e.slug === label.type;
                                              });

                                              token.entity = { id: gazette.entity.id };
                                              expression = { source: expr.source, tokens: [token] };
                                              _context5.next = 9;
                                              return _this2._updateRemoteExpression(intent.name, expr.id, expression);

                                            case 9:
                                            case 'end':
                                              return _context5.stop();
                                          }
                                        }
                                      }, _loop3, _this2);
                                    });
                                    _iterator6 = utterance.labels[Symbol.iterator]();

                                  case 13:
                                    if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                                      _context6.next = 18;
                                      break;
                                    }

                                    return _context6.delegateYield(_loop3(), 't0', 15);

                                  case 15:
                                    _iteratorNormalCompletion6 = true;
                                    _context6.next = 13;
                                    break;

                                  case 18:
                                    _context6.next = 24;
                                    break;

                                  case 20:
                                    _context6.prev = 20;
                                    _context6.t1 = _context6['catch'](10);
                                    _didIteratorError6 = true;
                                    _iteratorError6 = _context6.t1;

                                  case 24:
                                    _context6.prev = 24;
                                    _context6.prev = 25;

                                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                      _iterator6.return();
                                    }

                                  case 27:
                                    _context6.prev = 27;

                                    if (!_didIteratorError6) {
                                      _context6.next = 30;
                                      break;
                                    }

                                    throw _iteratorError6;

                                  case 30:
                                    return _context6.finish(27);

                                  case 31:
                                    return _context6.finish(24);

                                  case 32:
                                  case 'end':
                                    return _context6.stop();
                                }
                              }
                            }, _loop2, _this2, [[10, 20, 24, 32], [25,, 27, 31]]);
                          });
                          _iterator5 = remoteIntentExpressions[Symbol.iterator]();

                        case 29:
                          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context7.next = 34;
                            break;
                          }

                          return _context7.delegateYield(_loop2(), 't0', 31);

                        case 31:
                          _iteratorNormalCompletion5 = true;
                          _context7.next = 29;
                          break;

                        case 34:
                          _context7.next = 40;
                          break;

                        case 36:
                          _context7.prev = 36;
                          _context7.t1 = _context7['catch'](26);
                          _didIteratorError5 = true;
                          _iteratorError5 = _context7.t1;

                        case 40:
                          _context7.prev = 40;
                          _context7.prev = 41;

                          if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                          }

                        case 43:
                          _context7.prev = 43;

                          if (!_didIteratorError5) {
                            _context7.next = 46;
                            break;
                          }

                          throw _iteratorError5;

                        case 46:
                          return _context7.finish(43);

                        case 47:
                          return _context7.finish(40);

                        case 48:
                        case 'end':
                          return _context7.stop();
                      }
                    }
                  }, _loop, _this2, [[26, 36, 40, 48], [41,, 43, 47]]);
                });
                _iterator4 = localIntents[Symbol.iterator]();

              case 108:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                  _context8.next = 116;
                  break;
                }

                return _context8.delegateYield(_loop(), 't3', 110);

              case 110:
                _ret = _context8.t3;

                if (!(_ret === 'continue')) {
                  _context8.next = 113;
                  break;
                }

                return _context8.abrupt('continue', 113);

              case 113:
                _iteratorNormalCompletion4 = true;
                _context8.next = 108;
                break;

              case 116:
                _context8.next = 122;
                break;

              case 118:
                _context8.prev = 118;
                _context8.t4 = _context8['catch'](105);
                _didIteratorError4 = true;
                _iteratorError4 = _context8.t4;

              case 122:
                _context8.prev = 122;
                _context8.prev = 123;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 125:
                _context8.prev = 125;

                if (!_didIteratorError4) {
                  _context8.next = 128;
                  break;
                }

                throw _iteratorError4;

              case 128:
                return _context8.finish(125);

              case 129:
                return _context8.finish(122);

              case 130:
                _context8.next = 136;
                break;

              case 132:
                _context8.prev = 132;
                _context8.t5 = _context8['catch'](5);

                this.syncing = false;
                throw new Error(_context8.t5.response.data.message);

              case 136:
                _context8.next = 138;
                return this._onSyncSuccess();

              case 138:

                this.logger.info('[NLU::Recast] Synced Model');

              case 139:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee5, this, [[5, 132], [13, 24, 28, 36], [29,, 31, 35], [43, 57, 61, 69], [62,, 64, 68], [79, 90, 94, 102], [95,, 97, 101], [105, 118, 122, 130], [123,, 125, 129]]);
      }));

      function sync() {
        return _ref6.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var intentsHash, savedHash;
        return regeneratorRuntime.wrap(function _callee6$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._getIntentsHash();

              case 2:
                intentsHash = _context9.sent;
                _context9.next = 5;
                return this.kvs.get(RECAST_HASH_KVS_KEY);

              case 5:
                savedHash = _context9.sent;
                return _context9.abrupt('return', savedHash !== intentsHash);

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkSyncNeeded() {
        return _ref13.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(incomingEvent) {
        var _ref15, results, intentName, confidence, entities;

        return regeneratorRuntime.wrap(function _callee7$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.client.post('/request', {
                  text: incomingEvent.text
                });

              case 2:
                _ref15 = _context10.sent;
                results = _ref15.data.results;
                intentName = _lodash2.default.get(results.intents[0], 'slug') || 'None';
                confidence = _lodash2.default.get(results.intents[0], 'confidence') || 0;
                entities = [];

                _lodash2.default.forEach(results.entities, function (value, key) {
                  value.forEach(function (e) {
                    return entities.push(_extends({}, e, { entityType: key }));
                  });
                });

                return _context10.abrupt('return', {
                  intent: {
                    name: intentName,
                    confidence: confidence,
                    provider: 'recast'
                  },
                  intents: results.intents.map(function (intent) {
                    return {
                      name: intent.slug,
                      confidence: intent.confidence,
                      provider: 'recast'
                    };
                  }),
                  entities: entities.map(function (entity) {
                    var value = _lodash2.default.omit(entity, ['confidence', 'entityType', 'raw']);
                    var valueSize = _lodash2.default.size(value);
                    if (valueSize === 1) {
                      value = value[Object.keys(value)[0]];
                    } else if (valueSize === 0) {
                      value = entity.raw;
                    }

                    return {
                      name: null,
                      type: entity.entityType,
                      value: value,
                      original: entity.raw,
                      confidence: entity.confidence,
                      position: null,
                      provider: 'recast'
                    };
                  }),
                  act: results.act, // Recast custom
                  type: results.type, // Recast custom
                  language: {
                    detected: results.language,
                    processed: results.processing_language
                  },
                  sentiment: results.sentiment // Recast custom
                });

              case 9:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee7, this);
      }));

      function extract(_x2) {
        return _ref14.apply(this, arguments);
      }

      return extract;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt('return', this.storage.getCustomEntities());

              case 1:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee8, this);
      }));

      function getCustomEntities() {
        return _ref16.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }]);

  return RecastProvider;
}(_base2.default);

exports.default = RecastProvider;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _crypto = __webpack_require__(1);

var _crypto2 = _interopRequireDefault(_crypto);

var _zscore = __webpack_require__(21);

var _zscore2 = _interopRequireDefault(_zscore);

var _natural = __webpack_require__(22);

var _natural2 = _interopRequireDefault(_natural);

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NATIVE_HASH_KVS_KEY = 'nlu/native/updateMetadata';
var NATIVE_MODEL = 'nlu/native/model';
var DEFAULT_THRESHOLD = 0.25;
var EMPTY_INTENT = {
  name: 'None',
  confidence: 0,
  provider: 'native'
};

var NativeProvider = function (_Provider) {
  _inherits(NativeProvider, _Provider);

  function NativeProvider(config) {
    _classCallCheck(this, NativeProvider);

    var _this = _possibleConstructorReturn(this, (NativeProvider.__proto__ || Object.getPrototypeOf(NativeProvider)).call(this, _extends({}, config, { name: 'native', entityKey: '@native' })));

    _this.classifier = null;
    return _this;
  }

  _createClass(NativeProvider, [{
    key: 'init',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: 'checkSyncNeeded',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var intents;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.storage.getIntents();

              case 2:
                intents = _context2.sent;
                _context2.next = 5;
                return this._isInSync(intents);

              case 5:
                return _context2.abrupt('return', !_context2.sent);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkSyncNeeded() {
        return _ref2.apply(this, arguments);
      }

      return checkSyncNeeded;
    }()
  }, {
    key: '_getProjectName',
    value: function _getProjectName() {
      var scope = 'all';
      return this.env + '__' + this.project + '__' + scope;
    }
  }, {
    key: 'setStemmer',
    value: function setStemmer(stemmer) {
      if (!stemmer) {
        this.customStemmer = null;
      } else if (!_lodash2.default.isFunction(stemmer)) {
        this.logger.error('[NLU::Native] Stemmer must be a function');
        this.customStemmer = null;
      } else {
        this.customStemmer = stemmer;
      }
    }
  }, {
    key: 'getStemmer',
    value: function getStemmer() {
      return { tokenizeAndStem: this._stemText.bind(this) };
    }
  }, {
    key: '_stemText',
    value: function _stemText(text) {
      if (this.customStemmer) {
        return this.customStemmer(text);
      } else {
        return _natural2.default.PorterStemmer.tokenizeAndStem(text);
      }
    }
  }, {
    key: '_isInSync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(localIntents) {
        var intentsHash, metadata;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');
                _context3.next = 3;
                return this.kvs.get(NATIVE_HASH_KVS_KEY);

              case 3:
                metadata = _context3.sent;
                return _context3.abrupt('return', metadata && metadata.hash === intentsHash);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _isInSync(_x) {
        return _ref3.apply(this, arguments);
      }

      return _isInSync;
    }()
  }, {
    key: '_onSyncSuccess',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(localIntents) {
        var intentsHash;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                intentsHash = _crypto2.default.createHash('md5').update(JSON.stringify(localIntents)).digest('hex');

                // We save the model hash and model to the KVS

                _context4.next = 3;
                return this.kvs.set(NATIVE_HASH_KVS_KEY, { hash: intentsHash });

              case 3:
                _context4.next = 5;
                return this.kvs.set(NATIVE_MODEL, JSON.stringify(this.classifier));

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _onSyncSuccess(_x2) {
        return _ref4.apply(this, arguments);
      }

      return _onSyncSuccess;
    }()
  }, {
    key: '_restoreModel',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var model;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.kvs.get(NATIVE_MODEL);

              case 2:
                model = _context5.sent;


                if (!model) {
                  this.classifier = new _natural2.default.BayesClassifier();
                }

                this.classifier = _natural2.default.BayesClassifier.restore(JSON.parse(model), this.getStemmer());

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _restoreModel() {
        return _ref5.apply(this, arguments);
      }

      return _restoreModel;
    }()
  }, {
    key: 'getCustomEntities',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', []);

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCustomEntities() {
        return _ref6.apply(this, arguments);
      }

      return getCustomEntities;
    }()
  }, {
    key: 'sync',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this2 = this;

        var intents, classifier, samples_count;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.storage.getIntents();

              case 2:
                intents = _context7.sent;
                _context7.next = 5;
                return this._isInSync(intents);

              case 5:
                if (!_context7.sent) {
                  _context7.next = 10;
                  break;
                }

                this.logger.debug('[NLU::Native] Model is up to date');
                return _context7.abrupt('return');

              case 10:
                this.logger.debug('[NLU::Native] The model needs to be updated');

              case 11:
                classifier = new _natural2.default.BayesClassifier(this.getStemmer());
                samples_count = 0;


                intents.forEach(function (intent) {
                  intent.utterances.forEach(function (utterance) {
                    var extracted = _this2.parser.extractLabelsFromCanonical(utterance, intent.entities);
                    samples_count += 1;
                    classifier.addDocument(_this2._stemText(extracted.text), intent.name);
                  });
                });

                this.logger.debug('[NLU::Native] Started training model from ' + samples_count + ' samples');

                _context7.prev = 15;

                classifier.train();
                _context7.next = 22;
                break;

              case 19:
                _context7.prev = 19;
                _context7.t0 = _context7['catch'](15);
                return _context7.abrupt('return', this.logger.error('[NLU::Native] Error training model: ' + _context7.t0.message));

              case 22:

                this.classifier = classifier;

                _context7.next = 25;
                return this._onSyncSuccess(intents);

              case 25:

                this.logger.info('[NLU::Native] Synced model');

              case 26:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[15, 19]]);
      }));

      function sync() {
        return _ref7.apply(this, arguments);
      }

      return sync;
    }()
  }, {
    key: 'extract',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(incomingEvent) {
        var threshold, classifications, allScores, intents;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.classifier) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 3;
                return this.checkSyncNeeded();

              case 3:
                if (!_context8.sent) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 6;
                return this.sync();

              case 6:
                _context8.next = 10;
                break;

              case 8:
                _context8.next = 10;
                return this._restoreModel();

              case 10:
                threshold = parseFloat(this.nativeAdjustementThreshold || DEFAULT_THRESHOLD);
                classifications = _lodash2.default.orderBy(this.classifier.getClassifications(incomingEvent.text), ['value'], ['desc']);
                allScores = (0, _zscore2.default)(classifications.map(function (c) {
                  return parseFloat(c.value);
                }));


                allScores = allScores.map(function (s, i) {
                  var delta = Math.abs(s - allScores[i + 1] / s);
                  if (delta >= threshold) {
                    return s;
                  }

                  var res = s - Math.max(0, allScores[i + 1] || 0) * 0.5 - Math.max(0, allScores[i + 2] || 0) * 0.75 - Math.max(0, allScores[i + 3] || 0);

                  if (res < 0) {
                    return 0;
                  } else if (res > 1) {
                    return 1;
                  } else {
                    return res;
                  }
                });

                intents = _lodash2.default.orderBy(classifications.map(function (c, i) {
                  return {
                    name: c.label,
                    confidence: allScores[i],
                    provider: 'native'
                  };
                }), ['confidence'], 'desc');
                return _context8.abrupt('return', {
                  intent: intents.length ? intents[0] : _extends({}, EMPTY_INTENT),
                  intents: intents,
                  entities: [] // Unsupported for now
                });

              case 16:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function extract(_x3) {
        return _ref8.apply(this, arguments);
      }

      return extract;
    }()
  }]);

  return NativeProvider;
}(_base2.default);

exports.default = NativeProvider;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("zscore");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("natural");

/***/ })
/******/ ]);
//# sourceMappingURL=node.bundle.js.map