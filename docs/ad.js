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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventSystem = function () {
    function EventSystem() {
        _classCallCheck(this, EventSystem);

        this.events = {};
    }

    _createClass(EventSystem, [{
        key: "emit",
        value: function emit(eventName) {
            var listeners = this.events[eventName];
            if (!listeners) {
                return;
            }

            // collect arguments passed to listeners (rest from second)
            var args = undefined;
            if (arguments.length > 1) {
                args = Array.prototype.slice.call(arguments, 1);
            }

            // run listeners with provided arguments
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].apply(null, args);
            }
        }
    }, {
        key: "on",
        value: function on(eventName, func) {
            this.addEventListener(eventName, func);
        }
    }, {
        key: "off",
        value: function off(eventName, func) {
            this.removeEventListener(eventName, func);
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(eventName, func) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(func);
        }
    }, {
        key: "removeEventListener",
        value: function removeEventListener(eventName, func) {
            if (this.events[eventName]) {
                if (func) {
                    var i = this.events[eventName].indexOf(func);
                    if (i >= 0) {
                        this.events[eventName].splice(i, 1);
                    }
                } else {
                    this.events[eventName] = [];
                }
            }
        }
    }]);

    return EventSystem;
}();

module.exports = EventSystem;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    URL: {
        NOTIFY_ON_LOAD: '//track.videmob.com/player.b/onload',
        NOTIFY_ERROR: '//34.225.76.139:8553',
        VAST_BASE_APP: '//vast.videmob.com/vmvast.php',
        VAST_BASE_WEB: '//vastweb.videmob.com/vmvast.php',
        VAST_BASE_DEV: '//adservernodejs.dimsem.com/vmvast',
        VPAID_FLASH: '//websdk.cdn.videmob.com/player/VPAIDFlash.swf'
    },

    MIME: {
        JS: 'application/javascript',
        FLASH: 'application/x-shockwave-flash'
    },

    VIDEO_TYPE: {
        HTML5: 'html5',
        FLASH: 'flash'
    },

    VIDEO_STAGE: {
        NO_VIDEO: 'novideo',
        MAIN_VIDEO: 'mainvideo',
        PRE_ROLL: 'preroll',
        MID_ROLL: 'midroll',
        POST_ROLL: 'postroll'
    },

    // all event names are lowercased here and in VAST parsing for consistency
    VAST_EVENTS: {
        CREATIVE_VIEW: 'creativeview',
        START: 'start',
        FIRST_QUARTILE: 'firstquartile',
        MIDPOINT: 'midpoint',
        THIRD_QUARTILE: 'thirdquartile',
        COMPLETE: 'complete',
        MUTE: 'mute',
        UNMUTE: 'unmute',
        PAUSE: 'pause',
        REWIND: 'rewind',
        RESUME: 'resume',
        FULLSCREEN: 'fullscreen',
        EXIT_FULLSCREEN: 'exitfullscreen',
        EXPAND: 'expand',
        COLLAPSE: 'collapse',
        ACCEPT_INVITATION: 'acceptinvitation',
        ACCEPT_INVITATION_LINEAR: 'acceptinvitationlinear',
        CLOSE: 'close',
        CLOSE_LINEAR: 'closelinear',
        SKIP: 'skip',
        PROGRESS: 'progress'
    },

    PLAYER_EVENTS: {
        PLAYER_CREATED: 'playerCreated',
        BUFFERING: 'buffering',
        CLICK: 'click',
        VIDEO_ERROR: 'videoerror',
        EMPTY_ADS_LIST: 'emptyadslist',
        AD_IMPRESSION: 'adimpression',
        AD_FINISHED: 'adfinished',
        AD_SKIPPED: 'adskipped',
        AD_CLICK_THROUGH: 'adclickthrough',
        AD_TRACKING: 'adtracking',
        VPAID_EVENT: 'vpaidEvent',
        VAST_WARNING: 'vastWarning'
    },

    // HTML5 audio\video tags events
    MEDIA_EVENTS: {
        abort: 'abort', // Sent when playback is aborted; for example, if the media is playing and is restarted from the beginning, this event is sent.
        canplay: 'canplay', // Sent when enough data is available that the media can be played, at least for a couple of frames.  This corresponds to the HAVE_ENOUGH_DATA readyState.
        canplaythrough: 'canplaythrough', // Sent when the ready state changes to CAN_PLAY_THROUGH, indicating that the entire media can be played without interruption, assuming the download rate remains at least at the current level. It will also be fired when playback is toggled between paused and playing. Note: Manually setting the currentTime will eventually fire a canplaythrough event in firefox. Other browsers might not fire this event.
        durationchange: 'durationchange', // The metadata has loaded or changed, indicating a change in duration of the media.  This is sent, for example, when the media has loaded enough that the duration is known.
        emptied: 'emptied', // The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.
        encrypted: 'encrypted', // The user agent has encountered initialization data in the media data.
        ended: 'ended', // Sent when playback completes.
        error: 'error', // Sent when an error occurs.  The element's error attribute contains more information. See HTMLMediaElement.error for details.
        interruptbegin: 'interruptbegin', // Sent when audio playing on a Firefox OS device is interrupted, either because the app playing the audio is sent to the background, or audio in a higher priority audio channel begins to play. See Using the AudioChannels API for more details.
        interruptend: 'interruptend', // Sent when previously interrupted audio on a Firefox OS device commences playing again — when the interruption ends. This is when the associated app comes back to the foreground, or when the higher priority audio finished playing. See Using the AudioChannels API for more details.
        loadeddata: 'loadeddata', // The first frame of the media has finished loading.
        loadedmetadata: 'loadedmetadata', // The media's metadata has finished loading; all attributes now contain as much useful information as they're going to.
        loadstart: 'loadstart', // Sent when loading of the media begins.
        pause: 'pause', // Sent when playback is paused.
        play: 'play', // Sent when playback of the media starts after having been paused; that is, when playback is resumed after a prior pause event.
        playing: 'playing', // Sent when the media begins to play (either for the first time, after having been paused, or after ending and then restarting).
        progress: 'progress', // Sent periodically to inform interested parties of progress downloading the media. Information about the current amount of the media that has been downloaded is available in the media element's buffered attribute.
        ratechange: 'ratechange', // Sent when the playback speed changes.
        seeked: 'seeked', // Sent when a seek operation completes.
        seeking: 'seeking', // Sent when a seek operation begins.
        stalled: 'stalled', // Sent when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
        suspend: 'suspend', // Sent when loading of the media is suspended; this may happen either because the download has completed or because it has been paused for any other reason.
        timeupdate: 'timeupdate', // The time indicated by the element's currentTime attribute has changed.
        volumechange: 'volumechange', // Sent when the audio volume changes (both when the volume is set and when the muted attribute is changed).
        waiting: 'waiting' // Sent when the requested operation (such as playback) is delayed pending the completion of another operation (such as a seek).
    },

    MEDIA_ERROR: {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var playerCss = __webpack_require__(24);

module.exports = {
    css: playerCss,

    TRANSITION_VISIBLE: 'alfa-visible-animation',
    OPACITY_HIDDEN: 'alfa-opacity-hide',
    DISPLAY_NONE: 'alfa-display-none',
    NO_SELECT: 'alfa-noselect',

    LOADING_INDICATOR: 'alfa-loading-indicator',
    LOADING_INDICATOR_VPAID: 'alfa-loading-indicator--vpaid',

    TIMEBAR: 'alfa-timebar',
    TIMEBAR_RAIL: 'alfa-timebar__rail',
    TIMEBAR_RAIL_FILLING: 'alfa-timebar__rail-filling',
    TIMEBAR_SEEK_RAIL: 'alfa-timebar__seek-rail',
    TIMEBAR_SEEK_RAIL_FILLING: 'alfa-timebar__seek-rail-filling',
    TIMEBAR_BUFF_RAIL: 'alfa-timebar__buff-rail',
    TIMEBAR_BUFF_RAIL_FILLING: 'alfa-timebar__buff-rail-filling',
    TIMEBAR_PLAY_RAIL: 'alfa-timebar__play-rail',
    TIMEBAR_PLAY_RAIL_FILLING: 'alfa-timebar__play-rail-filling',
    TIMEBAR_THUMB: 'alfa-timebar__thumb',

    VOLUME_BAR: 'alfa-volume__bar',
    VOLUME_BAR_RAIL_GROUP: 'alfa-volume__rail-group',
    VOLUME_BAR_RAIL: 'alfa-volume__rail',
    VOLUME_BAR_CURRENT_GROUP: 'alfa-volume__current-group',
    VOLUME_BAR_CURRENT: 'alfa-volume__current',
    VOLUME_BAR_THUMB: 'alfa-volume__thumb',

    BUTTON_VOLUME: 'alfa-volume__button',
    BUTTON_VOLUME_MUTE: 'alfa-volume__button--mute',

    ICON_PAUSE: 'pause-icon',
    ICON_PLAY: 'play-icon'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = unique;
exports.noop = noop;
exports.callbackTimeout = callbackTimeout;
exports.createElementWithID = createElementWithID;
exports.isPositiveInt = isPositiveInt;
exports.stringEndsWith = stringEndsWith;
exports.hideFlashEl = hideFlashEl;
function unique(prefix) {
    var count = -1;
    return function (f) {
        return prefix + '_' + ++count;
    };
}

function noop() {}

function callbackTimeout(timer, onSuccess, onTimeout) {

    var timeout = setTimeout(function () {

        onSuccess = noop;
        onTimeout();
    }, timer);

    return function () {
        clearTimeout(timeout);
        onSuccess.apply(this, arguments);
    };
}

function createElementWithID(parent, id) {
    var cleanContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var nEl = document.createElement('div');
    nEl.id = id;
    if (cleanContent) {
        parent.innerHTML = '';
    }
    parent.appendChild(nEl);
    return nEl;
}

function isPositiveInt(newVal, oldVal) {
    return !isNaN(parseFloat(newVal)) && isFinite(newVal) && newVal > 0 ? newVal : oldVal;
}

var endsWith = function () {
    if (String.prototype.endsWith) return String.prototype.endsWith;
    return function endsWith(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}();

function stringEndsWith(string, search) {
    return endsWith.call(string, search);
}

function hideFlashEl(el) {
    // can't use display none or visibility none because will block flash in some browsers
    el.style.position = 'absolute';
    el.style.left = '-1px';
    el.style.top = '-1px';
    el.style.width = '1px';
    el.style.height = '1px';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

var networking = __webpack_require__(10);
var constants = __webpack_require__(1);
var utils = __webpack_require__(5);

var __oldHandler = null;

var VAST_ERRORS = {
    PARSING_ERROR: 100, // XML parsing error
    SCHEMA_ERROR: 101, // VAST schema validation error
    VERSION_NOT_SUPPORTED: 102, // VAST version of response not supported

    TRAFFICKING_ERROR: 200, // Trafficking error. Video player received an Ad type that it was not expecting and/or cannot display.
    DIFFERENT_LINEARITY: 201, // Video player expecting different linearity
    DIFFERENT_DURATION: 202, // Video player expecting different duration
    DIFFERENT_SIZE: 203, // Video player expecting different size

    WRAPPER_ERROR: 300, // General Wrapper error
    WRAPPER_TIMEOUT: 301, // Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element. (URI was either unavailable or reached a timeout as defined by the video player.)
    WRAPPER_LIMIT: 302, // Wrapper limit reached, as defined by the video player. Too many Wrapper responses have been received with no InLine response
    WRAPPER_NO_ADS: 303, // No Ads VAST response after one or more Wrappers

    LINEAR_ERROR: 400, // General Linear error. Video player is unable to display the Linear Ad
    LINEAR_NOT_FOUND: 401, // File not found. Unable to find Linear/MediaFile from URI
    LINEAR_TIMEOUT: 402, // Timeout of MediaFile URI
    LINEAR_NOT_SUPPORTED: 403, // Couldn’t find MediaFile that is supported by this video player, based on the attributes of the MediaFile element
    LINEAR_NOT_DISPLAYING: 405, // Problem displaying MediaFile. Video player found a MediaFile with supported type but couldn’t display it. MediaFile may include: unsupported codecs, different MIME type than MediaFile@type, unsupported delivery method, etc

    NONLINEAR_ERROR: 500, // General NonLinearAds error
    NONLINEAR_TOO_LARGE: 501, // Unable to display NonLinear Ad because creative dimensions do not align with creative display area (i.e. creative dimension too large)
    NONLINEAR_FETCH: 502, // Unable to fetch NonLinearAds/NonLinear resource
    NONLINEAR_SUPPORT: 503, // Couldn’t find NonLinear resource with supported type

    COMPANION_ERROR: 600, // General CompanionAds error
    COMPANION_TOO_LARGE: 601, // Unable to display Companion because creative dimensions do not fit within Companion display area (i.e., no available space)
    COMPANION_DISPLAY: 602, // Unable to display Required Companion
    COMPANION_FETCH: 603, // Unable to fetch CompanionAds/Companion resource
    COMPANION_SUPPORT: 604, // Couldn’t find Companion resource with supported type

    UNDEFINED_ERROR: 900, // Undefined Error
    VPAID_ERROR: 901 // General VPAID error
};

/*
POST JSON to: http://34.225.76.139:8553/
WEB GUI: http://dev:ba3jus5yi8@34.225.76.139:8500/errorlogger-env1
 */

var AlfaError = function (_extendableBuiltin2) {
    _inherits(AlfaError, _extendableBuiltin2);

    function AlfaError(msg) {
        _classCallCheck(this, AlfaError);

        var _this = _possibleConstructorReturn(this, (AlfaError.__proto__ || Object.getPrototypeOf(AlfaError)).call(this, msg));

        __appendEnvironmentData(_this);
        return _this;
    }

    return AlfaError;
}(_extendableBuiltin(Error));

var CriticalError = function (_AlfaError) {
    _inherits(CriticalError, _AlfaError);

    function CriticalError(msg, location) {
        _classCallCheck(this, CriticalError);

        var _this2 = _possibleConstructorReturn(this, (CriticalError.__proto__ || Object.getPrototypeOf(CriticalError)).call(this, msg));

        _this2.location = location;
        return _this2;
    }

    return CriticalError;
}(AlfaError);

var VastError = function (_AlfaError2) {
    _inherits(VastError, _AlfaError2);

    function VastError(code, msg) {
        _classCallCheck(this, VastError);

        var _this3 = _possibleConstructorReturn(this, (VastError.__proto__ || Object.getPrototypeOf(VastError)).call(this, msg));

        _this3.code = code;
        return _this3;
    }

    return VastError;
}(AlfaError);

module.exports = {
    AlfaError: AlfaError,
    CriticalError: CriticalError,
    VastError: VastError,

    VAST: VAST_ERRORS,

    /**
     * Register a global error listener to passed WINDOW global object.
     * Store previous registered listener.
     *
     * @param global
     */
    registerGlobalHandler: function registerGlobalHandler(global) {
        if (global.onerror) {
            __oldHandler = global.onerror;
        }

        global.onerror = handler;

        console.log('[alfa] Global Error Handler registered');
    },


    /**
     * Remove registered listener.
     * Restore previous listener, if any.
     *
     * @param global
     */
    unregisterGlobalHandler: function unregisterGlobalHandler(global) {
        if (__oldHandler) {
            global.onerror = __oldHandler;
            __oldHandler = null;
        } else {
            global.onerror = null;
        }
    },
    createError: function createError(msg) {
        return new AlfaError(msg);
    },
    createVastError: function createVastError(code, msg) {
        return new VastError(code, msg);
    },


    /**
     * Send error to server
     *
     * @param [callback] {function}
     */
    send: function send(error, callback) {
        __postError(error, callback);
    }
};

function handler(msg, url, lineNo, columnNo, error) {
    console.log('[alfa global error] msg: ' + msg + ', url: ' + url + ', lineNo: ' + lineNo + ', columnNo: ' + columnNo);
    console.log('[alfa global error]', error);

    var data = new CriticalError(msg, { url: url, lineNo: lineNo, columnNo: columnNo });

    // HINT: stack reporting disabled for now
    // if (error && error.stack) {
    //     data.stack = error.stack;
    // }

    __postError(data);

    if (__oldHandler) {
        return __oldHandler.apply(this, arguments);
    }

    return true;
}

function __appendEnvironmentData(data) {
    data.userAgent = navigator.userAgent;
    data.environment = "development" || 'dev';
    data.version = "2.7.0" || 'dev';
}

function __postError(error, callback) {
    error = error || {};
    callback = callback || utils.noop;

    var body = {
        name: error.constructor.name || error.name || '',
        message: error.message,
        data: error
    };
    console.warn(JSON.stringify(body));

    var req = networking.getRequest();
    req.post(constants.URL.NOTIFY_ERROR, {
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }, function (error) {
        if (error) {
            console.warn('[alfa] Could not report error to server');
            callback(error);
        } else {
            console.info('[alfa] Error reported to server');
            callback(null);
        }
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = {
    noop: function noop() {},


    /**
     * Slightly edited polyfill from MDN
     */
    assign: function assign(target, varArgs) {
        // .length of function is 2
        if (target == null) {
            // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) {
                // Skip over if undefined or null
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    },
    parseTime: function parseTime(timeString) {
        var msIndex = timeString.indexOf('.');
        if (msIndex > 0) {
            timeString = timeString.slice(0, msIndex);
        }

        var ar = timeString.split(':');
        var result = 0;
        if (ar.length === 3) {
            result = parseInt(ar[2]) + parseInt(ar[1]) * 60 + parseInt(ar[0]) * 3600;
        } else if (ar.length === 2) {
            result = parseInt(ar[1]) + parseInt(ar[0]) * 60;
        } else {
            return -1;
        }
        return result;
    },
    formatTime: function formatTime(seconds) {
        // handle invalid times
        if (seconds == null || seconds < 0 || isNaN(seconds) || seconds === Infinity) {
            return '-';
        }

        var s = Math.floor(seconds % 60),
            m = Math.floor(seconds / 60 % 60),
            h = Math.floor(seconds / 3600);

        h = h > 0 ? h + ':' : '';
        m = (m < 10 ? '0' + m : m) + ':';
        s = s < 10 ? '0' + s : s;

        return h + m + s;
    },
    getUrlContentAsync: function getUrlContentAsync(url, callback) {
        if (location.protocol === 'https:' && url.toString().substr(0, 5) === 'http:') {
            console.error('Incorrect URL protocol. Expected to be HTTPS request');
            return callback();
        }

        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        callback(xhr.responseText);
                    } else {
                        callback();
                    }
                }
            };

            xhr.onerror = function (e) {
                console.error(e.message);
                callback();
            };

            xhr.send();
        } catch (e) {
            console.error(e.message);
            callback();
        }
    },
    parseXML: function parseXML(xmlString) {
        var parser = new DOMParser();
        return parser.parseFromString(xmlString, 'text/xml');
    },
    getCDATA: function getCDATA(xmlNode) {
        if (xmlNode.firstChild) {
            if (xmlNode.firstChild.wholeText) {
                return xmlNode.firstChild.wholeText.trim();
            }
            return xmlNode.firstChild.data;
        }

        return '';
    }
};

module.exports = utils;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vast(version) {
    this.version = version || 0;
    this.adTags = [];
}

function AdTag() {
    this.videoClickThrough = null;
    this.videoClickTracking = [];
    this.impressions = [];
    this.videoAd = null;
    this.skipOffset = 0;
    this.events = {};
    this.companions = [];
    this.nonLinearAds = null;
}

function Companion() {
    this.width = 0;
    this.height = 0;
    this.staticResource = null;
    this.htmlResource = null;
    this.iframeResource = null;
    this.clickThrough = null;
    this.events = {};
}

function InnerNonLinear() {
    this.staticResource = null;
    this.htmlResource = null;
    this.iframeResource = null;
    this.clickThrough = null;
}

function NonLinear() {
    this.events = {};
    this.nonLinears = [];
}

module.exports = {
    Vast: Vast,
    AdTag: AdTag,
    Companion: Companion,
    InnerNonLinear: InnerNonLinear,
    NonLinear: NonLinear
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storage = __webpack_require__(18);
var constants = __webpack_require__(1);

// const KEY_DATA = 'alfaplayerdata';
var KEY_VOLUME = 'AlfaPlayerVolume';
var KEY_CURRENT_PLAY = 'alfa_current_play';
var KEY_ENV = 'alfa_env';
var KEY_VAST_URL = 'alfa_vast_url';

var local = {
    frequency_display_ad: 600, // seconds
    show_ad_on_start: true,
    close_button_show_time: 7,
    getad_timeout: 3000,
    vpaid_load_timeout: 7100,
    vast_close_after_show_midroll: true,
    vast_close_after_show_onload: true,
    show_ad_on_video_play: true,
    rotated_ad: false, // now it means ads forever
    ad_retry_request_time: 2, // seconds
    ad_requests_limit: 500,
    vast_tag_domain: 'videmob.com'
};

var Settings = function () {
    function Settings() {
        _classCallCheck(this, Settings);

        this.local = local;
    }

    _createClass(Settings, [{
        key: 'env',
        get: function get() {
            return storage.local.getItem(KEY_ENV) || '';
        }
    }, {
        key: 'vast_url',
        get: function get() {
            return storage.local.getItem(KEY_VAST_URL) || constants.URL.VAST_BASE_DEV;
        }
    }, {
        key: 'tiny_url_host',
        get: function get() {
            return (this.env ? 'dwhsvxfkehdnj' : 'd20cu0stheph7f') + '.cloudfront.net';
        }
    }, {
        key: 'volume',
        get: function get() {
            var str = storage.local.getItem(KEY_VOLUME);
            if (!str) {
                return 1;
            }
            var num = +str;
            return !isNaN(num) ? num : 1;
        },
        set: function set(value) {
            storage.local.setItem(KEY_VOLUME, value);
        }
    }, {
        key: 'currentPlay',
        get: function get() {
            var num = parseFloat(storage.local.getItem(KEY_CURRENT_PLAY));
            return !isNaN(num) ? num : 0;
        },
        set: function set(value) {
            storage.local.setItem(KEY_CURRENT_PLAY, value);
        }
    }]);

    return Settings;
}();

module.exports = new Settings();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    raw: navigator.userAgent,
    parsed: parse(navigator.userAgent),

    parse: parse
};

/**
 *
 * @param userAgent
 * @returns {{isAndroid: boolean, isIOS: boolean, isIOSSmall: boolean, isIE: boolean, isUCBrowser: boolean, isChrome: boolean, isFirefox: boolean, isMobile: boolean, isFacebook: boolean}}
 */
function parse(userAgent) {
    var DEVICE_NAMES_REGEX = /(android|bb\d+|meego)|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
    var DEVICE_MODELS_REGEX = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;

    return {
        isAndroid: userAgent.indexOf('Android') >= 0,
        isIOS: /(iPhone|iPod|iPad)/g.test(userAgent),
        isIOSSmall: /(iPhone|iPod)/g.test(userAgent),

        isIE: /MSIE|rv:11/i.test(userAgent),
        isUCBrowser: /(UCBrowser)/g.test(userAgent),
        isChrome: userAgent.indexOf('Chrome') >= 0 || userAgent.indexOf('CriOS') >= 0, // 'CriOS' is chrome in ios
        isFirefox: userAgent.indexOf('Firefox') >= 0,

        isMobile: DEVICE_NAMES_REGEX.test(userAgent) || DEVICE_MODELS_REGEX.test(userAgent.substr(0, 4)),
        isFacebook: userAgent.indexOf('FB_IAB') >= 0 || userAgent.indexOf('FBAV') >= 0
    };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    isChildOf: function isChildOf(c, p) {
        if (c) {
            while ((c = c.parentNode) && c !== p) {}
        }
        return !!c;
    },
    isElementInViewport: function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    },
    isElementPartialyInViewport: function isElementPartialyInViewport(el) {
        var rect = el.getBoundingClientRect();
        var heightPart = rect.height / 5;
        var widthPart = rect.width / 5;
        var viewHeight = window.innerHeight || document.documentElement.clientHeight;
        var viewWidth = window.innerWidth || document.documentElement.clientWidth;
        return rect.bottom >= heightPart && rect.right >= widthPart && rect.top + heightPart < viewHeight || rect.bottom >= heightPart && rect.left + widthPart < viewWidth && rect.top + heightPart < viewHeight || rect.top + heightPart < viewHeight && rect.right >= widthPart && rect.bottom > heightPart || rect.top + heightPart < viewHeight && rect.left + widthPart < viewWidth && rect.bottom > heightPart;
    },
    getCursorPosition: function getCursorPosition(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var xx = event.clientX - rect.left;
        var yy = event.clientY - rect.top;

        return { x: xx, y: yy };
    },
    normalizePercent: function normalizePercent(percent) {
        if (percent < 0) percent = 0;else if (percent > 1) percent = 1;
        return percent;
    },
    showElementFullsceen: function showElementFullsceen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.webkitEnterFullscreen) {
            elem.webkitEnterFullscreen();
        }
    },
    cancelFullScreen: function cancelFullScreen() {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    },
    isFullScreen: function isFullScreen() {
        return document.fullscreen || document.fullscreenElement || document.webkitIsFullScreen || document.webkitFullscreenElement || document.mozFullScreen || document.mozFullScreenElement || document.msFullscreenElement;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

var settings = __webpack_require__(7);
var utils = __webpack_require__(5);

var requests = {};

var RequestError = function (_extendableBuiltin2) {
    _inherits(RequestError, _extendableBuiltin2);

    function RequestError(xhr) {
        _classCallCheck(this, RequestError);

        var _this = _possibleConstructorReturn(this, (RequestError.__proto__ || Object.getPrototypeOf(RequestError)).call(this));

        _this.status = xhr.status;
        if (_this.status) {
            _this.message = xhr.statusText;
        } else {
            _this.message = 'Request aborted';
        }
        return _this;
    }

    return RequestError;
}(_extendableBuiltin(Error));

var Request = function () {
    function Request() {
        _classCallCheck(this, Request);

        this.xhr = null;

        this.active = false;
        this.success = false;
        this.error = false;
    }

    _createClass(Request, [{
        key: 'send',
        value: function send(url, options, callback) {
            var _this2 = this;

            // defaulting params
            options = options || {};
            callback = callback || utils.noop;
            var method = options.method || 'GET';

            // if request was active - abort it
            this.abort();

            // reset status flags to working status
            this.xhr = new XMLHttpRequest();
            this.active = true;
            this.success = false;
            this.error = false;

            // setup actual request
            this.xhr.open(method, url, true);

            // if request timeout was set - setup it
            this.xhr.timeout = options.timeout || 0;

            this.xhr.onload = function () {
                _this2.active = false;
                _this2.success = true;

                callback(null, _this2.xhr.responseText);
            };

            this.xhr.onerror = function () {
                _this2.active = false;
                _this2.error = true;

                console.error('[alfa] Error in request to: ' + url);
                callback(new RequestError(_this2.xhr));
            };

            this.xhr.ontimeout = function () {
                _this2.active = false;
                _this2.error = true;

                console.error('[alfa] Timeout in request to: ' + url);
                callback(new RequestError(_this2.xhr));
            };

            // setup request headers
            if (options.headers) {
                for (var headerName in options.headers) {
                    if (options.headers.hasOwnProperty(headerName)) {
                        this.xhr.setRequestHeader(headerName, options.headers[headerName]);
                    }
                }
            }

            // actually start request
            try {
                if (options.body != null) {
                    this.xhr.send(options.body);
                } else {
                    this.xhr.send();
                }
            } catch (e) {
                callback(e);
            }
        }
    }, {
        key: 'post',
        value: function post(url, options, callback) {
            options.method = 'POST';
            this.send(url, options, callback);
        }
    }, {
        key: 'abort',
        value: function abort() {
            if (this.xhr && this.active) {
                this.active = false;
                this.xhr.abort();
            }
        }
    }]);

    return Request;
}();

module.exports = {
    /**
     * Run a GET request
     *
     * @param url
     * @param [options]
     * @param [callback]
     */
    doGet: function doGet(url, options, callback) {
        options = options || {};
        callback = callback || utils.noop;

        var req = this.getRequest();
        req.send(url, options, callback);
    },


    /**
     * Run a POST request
     *
     * @param url
     * @param [options]
     * @param [callback]
     */
    doPost: function doPost(url, options, callback) {
        options = options || {};
        callback = callback || utils.noop;

        var req = this.getRequest();
        req.post(url, options, callback);
    },


    /**
     *
     * @param [name]
     * @returns {Request}
     */
    getRequest: function getRequest(name) {
        if (!name) {
            return new Request();
        }

        var req = requests[name];
        if (!req) {
            req = new Request();
            requests[name] = req;
        }
        return req;
    },
    getShortURL: function getShortURL(queries, callback) {
        var REQUEST_TIMEOUT = 3000;
        callback = callback || utils.noop;

        var tinyUrl = '//' + settings.tiny_url_host + '/generate';
        var reqUrl = tinyUrl + '?' + queries;

        var req = this.getRequest('shareUrl');
        req.send(reqUrl, {
            timeout: REQUEST_TIMEOUT
        }, function (error, result) {
            if (error) {
                return callback();
            }
            callback(result);
        });
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    prepareFetchVastUrl: function prepareFetchVastUrl(url, rect) {
        if (url.indexOf('player_width=') > 0) {
            url = url.replace(/player_width=\d.*?(?=&|$)/, 'player_width=' + rect.width);
            url = url.replace(/player_height=\d.*?(?=&|$)/, 'player_height=' + rect.height);
        } else {
            url += '&player_width=' + rect.width + '&player_height=' + rect.height;
        }

        return url;
    },
    checkHttpsAwareness: function checkHttpsAwareness(url) {
        var HTTPS_AD_DOMAINS = '' + 'ad.doubleclick.net|' + 'bid.g.doubleclick.net|' + 'corp.google.com|' + 'ggpht.com|' + 'google.co.uk|' + 'google.com|' + 'googleads.g.doubleclick.net|' + 'googleads4.g.doubleclick.net|' + 'googleadservices.com|' + 'googlesyndication.com|' + 'googleusercontent.com|' + 'gstatic.com|' + 'prod.google.com|' + 'pubads.g.doubleclick.net|' + 's0.2mdn.net|' + 'static.doubleclick.net|' + 'surveys.g.doubleclick.net|' + 'youtube.com|' + 'ytimg.com';
        var httpsRegex = new RegExp('^https?://([a-z0-9-]{1,63}\\.)*(' + HTTPS_AD_DOMAINS + ')(:[0-9]+)?([/?#]|$)', 'i');

        if ('https:' === location.protocol && httpsRegex.test(url)) return url.replace(/^http:/i, 'https:');
        return url;
    },
    parseYoutubeID: function parseYoutubeID(url) {
        if (!url || typeof url !== 'string') {
            return null;
        }

        var regExp = /^.*youtu\.?be\/?(\.com\/watch\?.*&?\??v=)?([^.\\#&?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length >= 11) {
            return match[2];
        }

        var embedRegExp = /youtube\.com\/embed\/([^#&?]+)/;
        var embedMatch = url.match(embedRegExp);
        if (embedMatch && embedMatch[1].length >= 11) {
            return embedMatch[1];
        }

        return null;
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultipleValuesRegistry = exports.MultipleValuesRegistry = function () {
    function MultipleValuesRegistry() {
        _classCallCheck(this, MultipleValuesRegistry);

        this._registries = {};
    }

    _createClass(MultipleValuesRegistry, [{
        key: 'add',
        value: function add(id, value) {
            if (!this._registries[id]) {
                this._registries[id] = [];
            }
            if (this._registries[id].indexOf(value) === -1) {
                this._registries[id].push(value);
            }
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id] || [];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this._registries[key].indexOf(value) !== -1;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(key, value) {
            if (!this._registries[key]) {
                return;
            }

            var index = this._registries[key].indexOf(value);

            if (index < 0) {
                return;
            }
            return this._registries[key].splice(index, 1);
        }
    }, {
        key: 'removeByKey',
        value: function removeByKey(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this2 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this2.remove(key, value);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return MultipleValuesRegistry;
}();

var SingleValueRegistry = exports.SingleValueRegistry = function () {
    function SingleValueRegistry() {
        _classCallCheck(this, SingleValueRegistry);

        this._registries = {};
    }

    _createClass(SingleValueRegistry, [{
        key: 'add',
        value: function add(id, value) {
            this._registries[id] = value;
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this3 = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this3._registries[key] === value;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this4 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this4.remove(key);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return SingleValueRegistry;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var utils = __webpack_require__(5);
var urls = __webpack_require__(11);
var Config = __webpack_require__(20);
var UIManager = __webpack_require__(21);
var CompanionArea = __webpack_require__(40);
var Scheduler = __webpack_require__(41);
var networking = __webpack_require__(10);
var settings = __webpack_require__(7);
var EventSystem = __webpack_require__(0);
var VastNotifier = __webpack_require__(42);
var parser = __webpack_require__(43);
var constants = __webpack_require__(1);
var styles = __webpack_require__(2);
var errors = __webpack_require__(4);
var ua = __webpack_require__(8).parsed;

var VAST_EVENTS = constants.VAST_EVENTS;
var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var MEDIA_EVENTS = constants.MEDIA_EVENTS;
var VIDEO_STAGE = constants.VIDEO_STAGE;

var defaultPUI = '35vz1fd5a348b2bf6841a0a4b8g3e281';

var WebAlfaPlayer = function (_EventSystem) {
    _inherits(WebAlfaPlayer, _EventSystem);

    function WebAlfaPlayer(pui) {
        _classCallCheck(this, WebAlfaPlayer);

        var _this = _possibleConstructorReturn(this, (WebAlfaPlayer.__proto__ || Object.getPrototypeOf(WebAlfaPlayer)).call(this));

        _this.pui = pui || defaultPUI;
        _this.config = new Config();
        _this.vast = null;
        _this.initialState = true; // Just loaded, havent played anything

        _this.currentAd = null;
        _this.currentAdNumber = 0;
        _this.currentCompanion = null;
        _this.mainVideoTime = 0;
        _this.lastAdTime = 0;

        _this.mainFinished = false; // is main video file playing finished
        _this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
        _this.notifier = new VastNotifier();
        _this.ui = new UIManager(_this);
        _this.scheduler = new Scheduler(_this);
        _this.thisTimeUpdateEvent = _this.onTimeupdateEvent.bind(_this);
        return _this;
    }

    _createClass(WebAlfaPlayer, [{
        key: 'notifyOnce',
        value: function notifyOnce(eventName) {
            var fired = this.notifier.fireOnce(eventName);
            if (fired) {
                this.emit(PLAYER_EVENTS.AD_TRACKING, eventName);
            }
        }
    }, {
        key: 'notifyImpressions',
        value: function notifyImpressions() {
            var fired = this.notifier.fireImpressions();
            if (fired) {
                this.emit(PLAYER_EVENTS.AD_IMPRESSION);
            }
        }
    }, {
        key: 'create',
        value: function create(config) {
            var _this2 = this;

            this.initialState = true;

            this.config.init(config);

            // we should notify server about successful player creation
            var onLoadUrl = this.config.getNotifyOnLoadUrl(this.pui);
            this.notifier.fireByUrl(onLoadUrl);

            if (this.config.isAutoGetAds()) {
                this.onConfigApplied();
                return;
            }

            // try to load VAST data from provided XML or URL
            this.loadVast(function () {
                return _this2.onConfigApplied();
            });
        }
    }, {
        key: 'loadVast',
        value: function loadVast(callback) {
            var _this3 = this;

            if (this.config.getFetchVastUrl()) {
                // prepare URL to fetch VAST file from server
                var vastUrl = this.config.getFetchVastUrl();
                if (this.config.isVPAID() && this.config.getVideoElement() && this.config.getVideoElement().getBoundingClientRect) {
                    vastUrl = urls.prepareFetchVastUrl(vastUrl, this.config.getVideoElement().getBoundingClientRect());
                }

                console.log('[alfa] Fetching VAST from url: ' + vastUrl);
                utils.getUrlContentAsync(vastUrl, function (resultXML) {
                    if (!resultXML) {
                        callback();
                    }

                    _this3.initVast(resultXML, callback);
                });
            } else if (this.config.getProvidedVastXML()) {
                this.initVast(this.config.getProvidedVastXML(), callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'initVast',
        value: function initVast(vastXML, callback) {
            var _this4 = this;

            // listen to 'warning' events that may appear while parsing VAST xml
            parser.parse(vastXML, function (warning) {
                _this4.notifyVastError(warning);
            }, function (error, data) {
                // if critical error occurred while parsing
                if (error) {
                    _this4.notifyVastError(error);

                    _this4.vast = null;
                } else {
                    _this4.vast = data;
                }

                callback();
            });
        }
    }, {
        key: 'onConfigApplied',
        value: function onConfigApplied() {
            this.ui.createMainUI(this.config);
            if (ua.isMobile) {
                this.scheduler.precacheAd();
            }
            this.ui.backgroundElement.addEventListener('click', this.onPlayerClick.bind(this));

            if (this.config.getYoutubeID() && this.ui.youtubePlayer) {
                this.ui.youtubePlayer.addEventListener(MEDIA_EVENTS.timeupdate, this.thisTimeUpdateEvent);
            }
            this.ui.HTML5Player.addEventListener(MEDIA_EVENTS.timeupdate, this.thisTimeUpdateEvent);

            if (this.haveAdTags()) {
                this.setCurrentAd(0);
            }

            if (this.config.isAutoplay() && !this.config.isAdult()) {
                if (this.config.isAndroidSDK() || !ua.isMobile) {
                    this.play();
                } else if (ua.isMobile) {
                    this.setupTouchAutoplay();
                }
            }

            this.emit(PLAYER_EVENTS.PLAYER_CREATED);
        }
    }, {
        key: 'setupTouchAutoplay',
        value: function setupTouchAutoplay() {
            var _this5 = this;

            var touchAutoplay = function touchAutoplay() {
                if (!_this5.initialState) {
                    document.body.removeEventListener('touchmove', touchAutoplay);
                    try {
                        if (window.parent && window.parent.document) {
                            window.parent.document.removeEventListener('touchmove', touchAutoplay);
                        }
                    } catch (e) {
                        // catch all
                    }
                }

                if (_this5.scheduler.isGettingAd()) {
                    return;
                }

                if (_this5.ui.isInViewport()) {
                    document.body.removeEventListener('touchmove', touchAutoplay);
                    if (_this5.initialState) {
                        _this5.scheduler.video_autoplay = true;
                        _this5.play();
                    }
                }
            };

            console.log('[alfa] setup video_autoplay on touchmove');
            try {
                if (window.parent && window.parent.document) {
                    window.parent.document.addEventListener('touchmove', touchAutoplay);
                }
            } catch (e) {
                console.log('Error:', e.toString());
            }
            document.body.addEventListener('touchmove', touchAutoplay);
        }
    }, {
        key: 'getAdTags',
        value: function getAdTags() {
            if (!this.vast) {
                return [];
            }
            return this.vast.adTags || [];
        }
    }, {
        key: 'haveAdTags',
        value: function haveAdTags() {
            return this.getAdTags().length > 0;
        }
    }, {
        key: 'setCurrentAd',
        value: function setCurrentAd(number) {
            var _this6 = this;

            this.iosfwdlimit = void 0;
            this.currentAd = this.getAdTags()[number];
            this.currentAdNumber = number;
            this.notifier.init(this.currentAd);
            this.ui.hideNonLinear();

            if (this.config.getCompanionConfig() && this.currentAd.companions.length > 0) {
                // remove current visible companion
                if (this.currentCompanion) {
                    this.currentCompanion.remove();
                }

                this.currentCompanion = CompanionArea.create(this.config.getCompanionConfig(), this.currentAd.companions);
                if (this.currentCompanion) {
                    this.notifier.fireByUrl(this.currentCompanion.companionInfo.events[VAST_EVENTS.CREATIVE_VIEW]);
                    // set up VAST error notifications
                    this.currentCompanion.on(CompanionArea.EVENTS.VAST_ERROR, function (error) {
                        return _this6.notifyVastError(error);
                    });
                } else {
                    var error = errors.createVastError(errors.VAST.COMPANION_SUPPORT, 'Not found supported STATIC Companion');
                    this.notifyVastError(error);
                }
            }
        }
    }, {
        key: 'play',
        value: function play() {
            console.log('[alfa] Play');
            this.ui.hideStartButton();

            if (this.scheduler.asapPlayOnGetAd) {
                return;
            }
            if (!this.ui.mediaSpan) {
                console.error('Cannot start playing. Player is not created yet.');
                return;
            }

            this.ui.mediaSpan.classList.remove(styles.OPACITY_HIDDEN);

            this.mainFinished = false;
            if (this.scheduler.isScheduled()) {
                this.scheduler.onPlayEvent();
            } else {
                if (this.initialState) {
                    this.currentVideoType = VIDEO_STAGE.PRE_ROLL;
                    this.playCurrentAd();
                } else {
                    this.ui.videoElementPlay();
                    this.emit(MEDIA_EVENTS.play);
                }
            }
            this.ui.showVideoControls();
            this.initialState = false;
        }
    }, {
        key: 'pause',
        value: function pause() {
            console.log('[alfa] Pause');
            if (this.ui.videoElement && !this.ui.videoElement.paused) {
                this.ui.videoElement.pause();
                this.ui.showStartButton();
            }
        }
    }, {
        key: 'resume',
        value: function resume() {
            console.log('[alfa] Resume');
            if (this.ui.videoElement && this.ui.videoElement.paused) {
                this.ui.videoElement.play();
                this.ui.hideMessage();
            }
        }
    }, {
        key: 'abortPlaying',
        value: function abortPlaying() {
            this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
            this.ui.videoElement.pause();
            this.ui.videoElement.src = '';
        }
    }, {
        key: 'isPaused',
        value: function isPaused() {
            return this.ui.videoElement.paused || this.initialState;
        }
    }, {
        key: 'showNonLinear',
        value: function showNonLinear() {
            this.ui.showNonLinear(this.currentAd.nonLinearAds.nonLinears[0]);
            this.notifier.fireNonLinear(VAST_EVENTS.CREATIVE_VIEW);
        }
    }, {
        key: 'playVPAID',
        value: function playVPAID(adTag) {
            if (this.ui.videoMain && !this.ui.videoMain.paused) {
                this.ui.videoMain.pause();
            }
            if (ua.isMobile) {
                this.ui.showVideoControls();
            }

            console.log('[alfa] VPAID ad start play');

            this.ui.showVPAIDPlayer();
            this.ui.VPAIDPlayer.type = adTag.type;
            this.ui.VPAIDPlayer.src = adTag.vpaidURL;
            this.ui.hideShareButton();
            this.ui.morphToAdsLayout();
            //this.ui.VPAIDPlayer.play();
        }
    }, {
        key: 'playCurrentAd',
        value: function playCurrentAd(videoStage) {
            this.scheduler.preCachedAd = false;

            if (!videoStage) {
                videoStage = this.ui.videoElement.currentTime < 1 ? VIDEO_STAGE.PRE_ROLL : VIDEO_STAGE.MID_ROLL;
            }

            console.log('[alfa] playCurrentAd STAGE=' + videoStage);

            // if current ad tag is VPAID then show VPAID player
            if (this.currentAd && this.currentAd.vpaidURL && !this.currentAd.videoAd && !ua.isIOSSmall) {
                this.currentVideoType = videoStage || VIDEO_STAGE.MID_ROLL;

                this.playVPAID(this.currentAd);
                return;
            }

            this.ui.showHTML5Player();
            if (!this.currentAd || !this.currentAd.videoAd) {
                this.emit(PLAYER_EVENTS.AD_FINISHED);
                if (!this.config.isAdOnly()) {
                    this.playMainVideo();
                } else {
                    this.ui.HTML5Player.removeEventListener(MEDIA_EVENTS.timeupdate, this.thisTimeUpdateEvent);
                    this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
                }
                return;
            }

            try {
                if (this.ui.videoElement.src !== this.currentAd.videoAd) {
                    this.ui.videoElement.src = this.currentAd.videoAd;
                }
                if (videoStage) {
                    this.currentVideoType = videoStage;
                } else {
                    this.currentVideoType = VIDEO_STAGE.MID_ROLL;
                }

                this.ui.hideShareButton();
                this.ui.morphToAdsLayout();
                if (ua.isMobile) this.ui.showVideoControls();

                if (videoStage !== VIDEO_STAGE.POST_ROLL) {
                    if (!this.config.isAdOnly() || this.config.isVPAID()) {
                        if (this.currentAd.skipOffset) {
                            this.ui.showSkipButton(this.currentAd.skipOffset);
                        } else if (this.config.getSkipOffset()) {
                            this.ui.showSkipButton(this.config.getSkipOffset());
                        } else {
                            this.ui.showSkipButton(settings.env === 'dev' ? 1 : settings.local.close_button_show_time);
                        }
                    }
                }

                this.ui.videoElementPlay();

                this.notifyOnce(VAST_EVENTS.START);
                this.notifier.fire(VAST_EVENTS.CREATIVE_VIEW);

                if (this.ui.videoElement.paused && ua.isMobile) {
                    console.warn('[alfa] Mobile play function fail, show start button');
                    this.ui.showStartButton();
                }

                if (!ua.isMobile) {
                    if (this.ui.getVolume() === 0) {
                        this.notifier.fire(VAST_EVENTS.MUTE);
                    }
                } else if (this.config.isMute()) {
                    this.ui.setVolume(0);
                }
            } catch (e) {
                console.log('Play Ad exception,', e);
                this.playMainVideo();
            }
        }
    }, {
        key: 'playMainVideo',
        value: function playMainVideo() {
            var _this7 = this;

            console.log('Play Main video');

            var src = this.config.getYoutubeID() || this.config.getVideoFile();

            if (this.currentVideoType === VIDEO_STAGE.MAIN_VIDEO && this.ui.videoMain.src === src) {
                if (this.ui.videoMain.paused) this.ui.videoMain.play();

                return;
            }

            this.ui.showHTML5Player();
            this.ui.hideCloseButton();
            this.ui.hideSkipButton();

            if (this.config.getVideoFile()) {
                this.ui.morphToNormalLayout();
                this.mainFinished = false;

                this.currentVideoType = VIDEO_STAGE.MAIN_VIDEO;
                if (this.config.getYoutubeID()) {
                    if (!this.isAllowYoutubeWrapper() && this.config.getVideoFile()) {
                        this.mainFinished = true;
                        this.ui.showEndingScreen();
                        this.ui.resetTimeAndSeek();
                        window.location = this.config.getVideoFile();
                        return;
                    }

                    console.log('show youtube player');
                    this.ui.showYoutubePlayer();

                    if (ua.isAndroid && ua.isChrome) {
                        setTimeout(function () {
                            if (_this7.ui.youtubePlayer.state !== 1) {
                                _this7.ui.onPauseEvent();
                            }
                        }, 700);
                    }
                }

                if (this.ui.videoMain.src !== src) {
                    this.ui.showLoadingIndicator();
                    this.ui.videoMain.src = src;
                }

                if (this.currentAd && this.currentAd.nonLinearAds) {
                    this.showNonLinear();
                }
                if (this.config.isMute() && ua.isMobile) {
                    this.ui.setVolume(1);
                }

                var fallback = function fallback() {
                    _this7.ui.showStartButton();
                };

                var retryPlayIfSrcIncorrect = function retryPlayIfSrcIncorrect() {
                    if (_this7.ui.videoMain.src !== src) {
                        _this7.playMainVideo();
                    } else if (_this7.ui.videoMain.paused) {
                        fallback();
                    }
                };

                try {
                    var promise = this.ui.videoMain.play();
                    if (promise) {
                        promise.then(function () {
                            return console.log('Promise Playing success');
                        }).catch(retryPlayIfSrcIncorrect);
                    } else if (!ua.isMobile) {
                        setTimeout(retryPlayIfSrcIncorrect, 100);
                    }
                    this.ui.showShareButton();
                } catch (e) {
                    fallback();
                }
                if (ua.isMobile && this.ui.videoMain.paused) {
                    fallback();
                }

                if (this.mainVideoTime) {
                    this.ui.seekToTime(this.mainVideoTime);
                }
            } else {
                console.log('[alfa] no main video file');
                this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
                this.ui.hideLoadingIndicator();
                this.ui.videoMain.pause();
                this.ui.hideShareButton();
                //this.ui.currentTime.innerHTML = '';
                this.ui.mediaSpan.classList.add(styles.OPACITY_HIDDEN);
                this.ui.showMessage('No video');
                this.ui.disablePlay();
            }
        }
    }, {
        key: 'showWaitingForAd',
        value: function showWaitingForAd() {
            console.log('[alfa] showWaitingForAd');
            this.ui.morphToWaitingAdsLayout();
        }
    }, {
        key: 'hideWaitingForAd',
        value: function hideWaitingForAd() {
            this.ui.hideLoadingIndicator();
            this.ui.morphToNormalLayout();
        }
    }, {
        key: 'currentVideoIsAd',
        value: function currentVideoIsAd() {
            return this.currentVideoType !== VIDEO_STAGE.MAIN_VIDEO && this.currentVideoType !== VIDEO_STAGE.NO_VIDEO;
        }
    }, {
        key: 'getPlayerSize',
        value: function getPlayerSize() {
            return this.ui.backgroundElement.getBoundingClientRect();
        }
    }, {
        key: 'shareCurrentVideo',
        value: function shareCurrentVideo() {
            console.log('[alfa] share video');
            var pui = this.pui;

            // TODO: check for real domain
            // if current video is shared from our tinyurl page that use our PUI
            if (document.URL.indexOf('OURTINYURL') >= 0) {
                pui = defaultPUI;
            }

            this.ui.showShareDialog(this.config.getShareUrl(pui));
        }
    }, {
        key: 'getShareLink',
        value: function getShareLink(callback) {
            var queries = this.config.getShareUrl(this.pui);
            networking.getShortURL(queries, callback);
        }
    }, {
        key: 'showAd',
        value: function showAd() {
            window.open('http://websdk.cdn.videmob.com/player?cr_video_autoplay=true&cr_adonly=true&cr_adult=false&pui=' + encodeURI(this.pui), '_blank');
        }
    }, {
        key: 'closePlayer',
        value: function closePlayer() {
            this.ui.backgroundElement.parentNode.removeChild(this.ui.backgroundElement);
        }
    }, {
        key: 'isAllowYoutubeWrapper',
        value: function isAllowYoutubeWrapper() {
            return !ua.isMobile || ua.isFirefox || ua.isAndroid && ua.isChrome && !ua.isFacebook;
        }
    }, {
        key: 'notifyVastError',
        value: function notifyVastError(error) {
            // notify VAST provider about VAST error
            if (error.code > 0) {
                this.notifier.fireError(error.code);
            }

            // notify our server about error
            if (this.config && this.config.__config) {
                error.config = this.config.__config;
            }
            errors.send(error);
        }
    }, {
        key: 'currentTime',
        get: function get() {
            return this.ui.videoElement.currentTime;
        },
        set: function set(value) {
            if (!this.currentVideoIsAd()) this.ui.videoElement.currentTime = value;
        }
    }]);

    return WebAlfaPlayer;
}(EventSystem);

// @Events handlers


WebAlfaPlayer.prototype.onTimeupdateEvent = function () {
    var currentTime = this.ui.videoElement.currentTime;
    var duration = this.ui.videoElement.duration;

    var time = +new Date();
    if (!this.prevTimeNotify || time - this.prevTimeNotify > 999) {
        this.prevTimeNotify = time;
        this.emit(MEDIA_EVENTS.timeupdate, currentTime, duration);
    }

    this.scheduler.onTimeupdateEvent(currentTime, duration);
    if (this.currentVideoType === VIDEO_STAGE.MAIN_VIDEO) {
        this.mainVideoTime = currentTime;
    } else if (this.currentVideoIsAd()) {
        if (currentTime > 0) {
            this.notifyImpressions();
        }

        if (ua.isIOSSmall) {
            if (this.previousTime !== void 0 && currentTime - this.previousTime > Math.log(duration * duration + duration * 2 + 10) / 5) {
                console.log('[alfa] fwd seek catched');
                this.iosfwdlimit = currentTime / duration;
                this.previousTime = currentTime;
                return;
            } else if (this.previousTime > currentTime) {//seek backward

            }

            this.previousTime = currentTime;
            if (currentTime > 0.75 * duration) {
                if ((this.iosfwdlimit !== void 0 ? this.iosfwdlimit : 0) < 0.75) if (currentTime < duration) this.notifyOnce(VAST_EVENTS.THIRD_QUARTILE);
            } else if (currentTime > 0.50 * duration) {
                if ((this.iosfwdlimit !== void 0 ? this.iosfwdlimit : 0) < 0.5) this.notifyOnce(VAST_EVENTS.MIDPOINT);
            } else if (currentTime > 0.25 * duration) {
                if ((this.iosfwdlimit !== void 0 ? this.iosfwdlimit : 0) < 0.25) this.notifyOnce(VAST_EVENTS.FIRST_QUARTILE);
            }
        } else {
            if (currentTime > 0.75 * duration) {
                if (currentTime < duration) this.notifyOnce(VAST_EVENTS.THIRD_QUARTILE);
            } else if (currentTime > 0.50 * duration) {
                this.notifyOnce(VAST_EVENTS.MIDPOINT);
            } else if (currentTime > 0.25 * duration) {
                this.notifyOnce(VAST_EVENTS.FIRST_QUARTILE);
            }
        }
    }
};

WebAlfaPlayer.prototype.onPauseEvent = function () {
    if (this.currentVideoIsAd() && this.ui.videoElement.currentTime !== this.ui.videoElement.duration) {
        console.log('[alfa] notify pause');
        this.notifier.fire(VAST_EVENTS.PAUSE);
    }
};

WebAlfaPlayer.prototype.onPlayEvent = function () {
    this.ui.hideMessage();
    this.ui.hideLoadingIndicator();
    if (this.currentVideoIsAd()) {
        this.ui.hideShareButton();
        if (this.ui.videoElement.currentTime > 0) {
            console.log('[alfa] notify resume');
            this.notifier.fire(VAST_EVENTS.RESUME);
        }
    }
};

WebAlfaPlayer.prototype.onPlayerClick = function (e) {
    //e.preventDefault(); // DO NOT TOUCH! iOS bug
    if (this.__playerClickTimeStamp !== 0 && this.__playerClickTimeStamp === e.timeStamp) return;
    this.__playerClickTimeStamp = e.timeStamp;

    if (this.currentVideoType === VIDEO_STAGE.NO_VIDEO) {
        return;
    }

    // catch clicks only on these elements
    if (e.target !== this.ui.videoElement && e.target !== this.ui.backgroundElement && e.target !== this.ui.videoPoster && e.target !== this.ui.mediaSpan) {
        return;
    }

    console.log('[alfa] videoPlayer click');
    if (this.currentVideoIsAd()) {
        if (this.isPaused() && !this.config.isAdOnly()) {
            this.play();
        } else {
            this.onClickThrough(this.currentAd.videoClickThrough, '', true);
        }
    } else {
        this.onPlayerClickMain();
    }
};

WebAlfaPlayer.prototype.onClickThrough = function (url, id, playerHandles) {
    var _this8 = this;

    url = url || this.currentAd.videoClickThrough;
    if (url) {
        this.notifier.fireByUrl(this.currentAd.videoClickTracking);
        this.pause();

        // if player in ROTATED mode, then resume playing after 10 seconds (MWA-554 + MWA-556)
        if (settings.local.rotated_ad) {
            setTimeout(function () {
                if (_this8.isPaused()) {
                    _this8.resume();
                }
            }, 10000);
        }
    }

    if (!this.config.isVPAID() && !this.config.isAndroidSDK() && playerHandles && url) {
        window.open(url, '_blank');
    }

    this.emit(PLAYER_EVENTS.AD_CLICK_THROUGH, url, id, playerHandles);
};

WebAlfaPlayer.prototype.onPlayerClickMain = function () {
    if (this.ui.isVideoControlVisible() || this.config.isNoUI()) {
        this.ui.showVideoControls();
        if (!this.mainFinished && !this.ui.videoElement.error) {
            if (this.isPaused()) this.play();else this.pause();
        }
    } else {
        this.ui.showVideoControls();
    }
};

WebAlfaPlayer.prototype.onPlayFinished = function () {
    console.log('[alfa] play finished ' + this.currentVideoType);
    if (this.ui.isSeekingNow) return;

    if (this.currentVideoIsAd()) {
        this.lastAdTime = +new Date();

        if (ua.isIOSSmall && !this.notifier.wasFired(VAST_EVENTS.THIRD_QUARTILE)) {
            console.log('[alfa] send skip event');
            this.notifier.markAsFired(VAST_EVENTS.THIRD_QUARTILE);
            this.notifier.markAsFired(VAST_EVENTS.MIDPOINT);
            this.notifier.markAsFired(VAST_EVENTS.FIRST_QUARTILE);

            this.iosfwdlimit = void 0;
            this.notifier.fire(VAST_EVENTS.SKIP);
            this.emit(PLAYER_EVENTS.AD_SKIPPED);
            if (settings.local.rotated_ad) {
                this.scheduler.playSecondAd();
            } else {
                this.playMainVideo();
            }
            return;
        }

        this.notifyOnce(VAST_EVENTS.COMPLETE);
        this.emit(PLAYER_EVENTS.AD_FINISHED);
        this.ui.hideVideoControls(true);
        if (this.config.isAdOnly() && !settings.local.rotated_ad) {
            this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
            return;
        }
        if (settings.local.rotated_ad) {
            this.scheduler.playSecondAd();
            return;
        }
        if (this.currentVideoType === VIDEO_STAGE.PRE_ROLL) {
            if (settings.local.vast_close_after_show_onload) {
                this.playMainVideo();
            }
            return;
        } else if (this.currentVideoType === VIDEO_STAGE.MID_ROLL) {
            if (this.config.getVideoFile() && settings.local.vast_close_after_show_midroll) {
                this.playMainVideo();
            }
            return;
        }
    }

    if (this.currentVideoType === VIDEO_STAGE.MAIN_VIDEO) {
        this.mainFinished = true;
        this.ui.videoElement.pause(); // IE does not pause video on end

        this.ui.showEndingScreen();
        this.scheduler.onMainFinishedEvent();
    }
};

WebAlfaPlayer.prototype.onEnterFullscreen = function () {
    if (this.currentVideoIsAd()) {
        console.log('[alfa] Notify fullscreen vast event');
        this.notifier.fire(VAST_EVENTS.FULLSCREEN);
    }
};

WebAlfaPlayer.prototype.onExitFullscreen = function () {
    if (this.currentVideoIsAd()) {
        console.log('[alfa] Notify exit fullscreen vast event');
        this.notifier.fire(VAST_EVENTS.EXIT_FULLSCREEN);
    }
};

WebAlfaPlayer.prototype.onMute = function () {
    if (this.currentVideoIsAd()) {
        console.log('[alfa] Notify mute vast event');
        this.notifier.fire(VAST_EVENTS.MUTE);
    }
};

WebAlfaPlayer.prototype.onUnmute = function () {
    if (this.currentVideoIsAd()) {
        console.log('[alfa] Notify unmute vast event');
        this.notifier.fire(VAST_EVENTS.UNMUTE);
    }
};

WebAlfaPlayer.prototype.onVideoError = function (passedError) {
    // do nothing if nothing played
    if (this.currentVideoType === VIDEO_STAGE.NO_VIDEO) {
        return;
    }

    // current media error
    var error = passedError || this.ui.videoElement.error;
    var errorCode = error && error.code || 0;
    var errorMessage = error && error.message || '';
    console.error('[alfa] video error', error);

    // emit error to external listeners
    this.emit(PLAYER_EVENTS.VIDEO_ERROR, error);

    if (this.currentVideoIsAd()) {
        console.log('[alfa] cannot play ads file:', this.currentAd.videoAd);

        if (error instanceof MediaError) {
            // if error is MediaError then convert it to appropriate Linear VastError
            switch (errorCode) {
                case constants.MEDIA_ERROR.MEDIA_ERR_ABORTED:
                    this.notifyVastError(errors.createVastError(errors.VAST.LINEAR_TIMEOUT, errorMessage));
                    break;

                case constants.MEDIA_ERROR.MEDIA_ERR_NETWORK:
                    this.notifyVastError(errors.createVastError(errors.VAST.LINEAR_NOT_FOUND, errorMessage));
                    break;

                case constants.MEDIA_ERROR.MEDIA_ERR_DECODE:
                case constants.MEDIA_ERROR.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.notifyVastError(errors.createVastError(errors.VAST.LINEAR_NOT_DISPLAYING, errorMessage));
                    break;

                default:
                    this.notifyVastError(errors.createVastError(errors.VAST.LINEAR_ERROR, errorMessage));
            }
        } else if (error instanceof errors.VastError) {
            // if error is already VastError, then simply send it to server
            this.notifyVastError(error);
        }

        // try to recover from error
        if (settings.local.rotated_ad) {
            this.scheduler.playSecondAd();
        } else if (this.config.getPassback()) {
            this.scheduler.asapPlayOnGetAd = true;
            this.scheduler.tryBackupVast();
        } else {
            this.playMainVideo();
        }
    } else {
        // if main video can't be played, try to pass it
        if (this.mainVideoTime === 0 && this.config.getVideoFile()) {
            window.location = this.config.getVideoFile();
            return;
        }

        this.ui.videoElement.pause();
        this.ui.hideShareButton();
        if (error && error.code === constants.MEDIA_ERROR.MEDIA_ERR_NETWORK) {
            this.ui.showError('Network error');
            this.ui.showRestartButton();
        } else {
            this.ui.showError('Cannot play video file');
        }
        console.log('[alfa] cannot play file: ' + this.config.getVideoFile());
    }
};

WebAlfaPlayer.prototype.onSkipAdClick = function () {
    this.notifier.fire(VAST_EVENTS.SKIP);

    // if current ad is not the last
    if (this.currentAdNumber < this.getAdTags().length - 1) {
        console.log('[alfa] roll the next ad Steven!');
        this.currentAdNumber++;
        this.setCurrentAd(this.currentAdNumber);
        this.playCurrentAd();
    } else {
        if (this.config.isVPAID()) {
            this.ui.videoElement.pause();
            this.currentVideoType = VIDEO_STAGE.NO_VIDEO;
        } else {
            this.lastAdTime = +new Date();
            if (settings.local.rotated_ad) {
                this.scheduler.playSecondAd();
            } else {
                this.playMainVideo();
                this.ui.hideVideoControls(true);
            }
        }
    }
    this.emit(PLAYER_EVENTS.AD_SKIPPED);
};

WebAlfaPlayer.prototype.onCloseClick = function () {
    console.log('[alfa] close click', this);
    this.playMainVideo();
};

WebAlfaPlayer.prototype.onNonLinearContentClick = function (nonLinear) {
    this.pause();
    if (nonLinear.clickTracking) {
        this.notifier.fireByUrl(nonLinear.clickTracking);
    }
};

WebAlfaPlayer.prototype.onCloseNonLinearClick = function () {
    this.ui.hideNonLinear();
    this.notifier.fireNonLinear(VAST_EVENTS.CLOSE);
};

WebAlfaPlayer.prototype.onPrerollAdFinished = function () {
    console.log('[alfa] preroll finished');
};

module.exports = function (pui) {
    var wap = new WebAlfaPlayer(pui);
    return {
        create: wap.create.bind(wap),
        getShareLink: wap.getShareLink.bind(wap),
        showAd: wap.showAd.bind(wap),
        addEventListener: wap.addEventListener.bind(wap),
        removeEventListener: wap.removeEventListener.bind(wap),
        play: wap.play.bind(wap),
        pause: wap.pause.bind(wap),

        get currentTime() {
            return wap.currentTime;
        },
        set currentTime(value) {
            wap.currentTime = value;
        },

        get volume() {
            return wap.ui.getVolume();
        },
        set volume(value) {
            wap.ui.setVolume(value);
        },

        get vpaid() {
            return wap.ui.VPAIDPlayer;
        },

        get version() {
            return "2.7.0" || 'dev';
        }
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styles = __webpack_require__(2);

var DEFAULT_MENU_ITEMS = [{ id: 'about', text: 'About HTML5 player' }];

var parentElement = null;
var currentMenu = null;

document.addEventListener('click', hideCurrentMenu, true);
window.addEventListener('blur', hideCurrentMenu, true);

module.exports = {
    showAt: function showAt(x, y, menuItems, parent) {
        hideCurrentMenu();

        parentElement = parent || document.body;

        var menu = constructMenu(menuItems || DEFAULT_MENU_ITEMS);
        parentElement.appendChild(menu);
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';

        currentMenu = menu;
    }
};

function hideCurrentMenu() {
    if (currentMenu) {
        var temp = currentMenu;

        // in removeChild call 'blur' event will fire again, so we should erase 'currentMenu' variable prior to that
        currentMenu = null;
        parentElement.removeChild(temp);
    }
}

function constructMenu(items) {
    var menu = document.createElement('ul');
    menu.className = 'alfa-context-menu';

    items.forEach(function (item) {
        var element = createItemElement(item);
        var menuItem = document.createElement('li');
        menuItem.appendChild(element);
        menu.appendChild(menuItem);
    });
    return menu;
}

function createItemElement(item) {
    var element = item.href ? createLinkItemElement(item) : createSpanItemElement(item);
    element.className = 'alfa-context-item ' + styles.NO_SELECT;
    element.innerHTML = item.text;
    element.dataset.id = item.id;
    return element;
}

function createLinkItemElement(item) {
    var element = document.createElement('a');
    element.setAttribute('target', '_blank');
    element.setAttribute('href', item.href);
    return element;
}

function createSpanItemElement() {
    return document.createElement('span');
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/* global ActiveXObject: false */

(function (root, factory) {
    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.swfobject = factory();
    }
})(undefined, function () {

    var UNDEF = "undefined",
        OBJECT = "object",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        EXPRESS_INSTALL_ID = "SWFObjectExprInst",
        ON_READY_STATE_CHANGE = "onreadystatechange",
        win = window,
        doc = document,
        nav = navigator,
        plugin = false,
        domLoadFnArr = [],
        regObjArr = [],
        objIdArr = [],
        listenersArr = [],
        storedFbContent,
        storedFbContentId,
        storedCallbackFn,
        storedCallbackObj,
        isDomLoaded = false,
        isExpressInstallActive = false,
        dynamicStylesheet,
        dynamicStylesheetMedia,
        autoHideShow = true,
        encodeURIEnabled = false,


    /* Centralized function for browser feature detection
        - User agent string detection is only used when no good alternative is possible
        - Is executed directly for optimal performance
    */
    ua = function () {
        var w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF,
            u = nav.userAgent.toLowerCase(),
            p = nav.platform.toLowerCase(),
            windows = p ? /win/.test(p) : /win/.test(u),
            mac = p ? /mac/.test(p) : /mac/.test(u),
            webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
            // returns either the webkit version or false if not webkit
        ie = nav.appName === "Microsoft Internet Explorer",
            playerVersion = [0, 0, 0],
            d = null;
        if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
            if (d && typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin) {
                plugin = true;
                ie = false; // cascaded feature detection for Internet Explorer
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
                playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
                playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
            }
        } else if (typeof win.ActiveXObject !== UNDEF) {
            try {
                var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                if (a) {
                    // a will return null when ActiveX is disabled
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true; // cascaded feature detection for Internet Explorer
                        d = d.split(" ")[1].split(",");
                        playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                    }
                }
            } catch (e) {}
        }
        return { w3: w3cdom, pv: playerVersion, wk: webkit, ie: ie, win: windows, mac: mac };
    }(),


    /* Cross-browser onDomLoad
        - Will fire an event as soon as the DOM of a web page is loaded
        - Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
        - Regular onload serves as fallback
    */
    onDomLoad = function () {
        if (!ua.w3) {
            return;
        }
        if (typeof doc.readyState !== UNDEF && (doc.readyState === "complete" || doc.readyState === "interactive") || typeof doc.readyState === UNDEF && (doc.getElementsByTagName("body")[0] || doc.body)) {
            // function is fired after onload, e.g. when script is inserted dynamically
            callDomLoadFunctions();
        }
        if (!isDomLoaded) {
            if (typeof doc.addEventListener !== UNDEF) {
                doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
            }
            if (ua.ie) {
                doc.attachEvent(ON_READY_STATE_CHANGE, function detach() {
                    if (doc.readyState === "complete") {
                        doc.detachEvent(ON_READY_STATE_CHANGE, detach);
                        callDomLoadFunctions();
                    }
                });
                if (win == top) {
                    // if not inside an iframe
                    (function checkDomLoadedIE() {
                        if (isDomLoaded) {
                            return;
                        }
                        try {
                            doc.documentElement.doScroll("left");
                        } catch (e) {
                            setTimeout(checkDomLoadedIE, 0);
                            return;
                        }
                        callDomLoadFunctions();
                    })();
                }
            }
            if (ua.wk) {
                (function checkDomLoadedWK() {
                    if (isDomLoaded) {
                        return;
                    }
                    if (!/loaded|complete/.test(doc.readyState)) {
                        setTimeout(checkDomLoadedWK, 0);
                        return;
                    }
                    callDomLoadFunctions();
                })();
            }
        }
    }();

    function callDomLoadFunctions() {
        if (isDomLoaded || !document.getElementsByTagName("body")[0]) {
            return;
        }
        try {
            // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
            var t,
                span = createElement("span");
            span.style.display = "none"; //hide the span in case someone has styled spans via CSS
            t = doc.getElementsByTagName("body")[0].appendChild(span);
            t.parentNode.removeChild(t);
            t = null; //clear the variables
            span = null;
        } catch (e) {
            return;
        }
        isDomLoaded = true;
        var dl = domLoadFnArr.length;
        for (var i = 0; i < dl; i++) {
            domLoadFnArr[i]();
        }
    }

    function addDomLoadEvent(fn) {
        if (isDomLoaded) {
            fn();
        } else {
            domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
        }
    }

    /* Cross-browser onload
        - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
        - Will fire an event as soon as a web page including all of its assets are loaded
     */
    function addLoadEvent(fn) {
        if (typeof win.addEventListener !== UNDEF) {
            win.addEventListener("load", fn, false);
        } else if (typeof doc.addEventListener !== UNDEF) {
            doc.addEventListener("load", fn, false);
        } else if (typeof win.attachEvent !== UNDEF) {
            addListener(win, "onload", fn);
        } else if (typeof win.onload === "function") {
            var fnOld = win.onload;
            win.onload = function () {
                fnOld();
                fn();
            };
        } else {
            win.onload = fn;
        }
    }

    /* Detect the Flash Player version for non-Internet Explorer browsers
        - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
          a. Both release and build numbers can be detected
          b. Avoid wrong descriptions by corrupt installers provided by Adobe
          c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
        - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
    */
    function testPlayerVersion() {
        var b = doc.getElementsByTagName("body")[0];
        var o = createElement(OBJECT);
        o.setAttribute("style", "visibility: hidden;");
        o.setAttribute("type", FLASH_MIME_TYPE);
        var t = b.appendChild(o);
        if (t) {
            var counter = 0;
            (function checkGetVariable() {
                if (typeof t.GetVariable !== UNDEF) {
                    try {
                        var d = t.GetVariable("$version");
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            ua.pv = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                        }
                    } catch (e) {
                        //t.GetVariable("$version") is known to fail in Flash Player 8 on Firefox
                        //If this error is encountered, assume FP8 or lower. Time to upgrade.
                        ua.pv = [8, 0, 0];
                    }
                } else if (counter < 10) {
                    counter++;
                    setTimeout(checkGetVariable, 10);
                    return;
                }
                b.removeChild(o);
                t = null;
                matchVersions();
            })();
        } else {
            matchVersions();
        }
    }

    /* Perform Flash Player and SWF version matching; static publishing only
    */
    function matchVersions() {
        var rl = regObjArr.length;
        if (rl > 0) {
            for (var i = 0; i < rl; i++) {
                // for each registered object element
                var id = regObjArr[i].id;
                var cb = regObjArr[i].callbackFn;
                var cbObj = { success: false, id: id };
                if (ua.pv[0] > 0) {
                    var obj = getElementById(id);
                    if (obj) {
                        if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) {
                            // Flash Player version >= published SWF version: Houston, we have a match!
                            setVisibility(id, true);
                            if (cb) {
                                cbObj.success = true;
                                cbObj.ref = _getObjectById(id);
                                cbObj.id = id;
                                cb(cbObj);
                            }
                        } else if (regObjArr[i].expressInstall && canExpressInstall()) {
                            // show the Adobe Express Install dialog if set by the web page author and if supported
                            var att = {};
                            att.data = regObjArr[i].expressInstall;
                            att.width = obj.getAttribute("width") || "0";
                            att.height = obj.getAttribute("height") || "0";
                            if (obj.getAttribute("class")) {
                                att.styleclass = obj.getAttribute("class");
                            }
                            if (obj.getAttribute("align")) {
                                att.align = obj.getAttribute("align");
                            }
                            // parse HTML object param element's name-value pairs
                            var par = {};
                            var p = obj.getElementsByTagName("param");
                            var pl = p.length;
                            for (var j = 0; j < pl; j++) {
                                if (p[j].getAttribute("name").toLowerCase() !== "movie") {
                                    par[p[j].getAttribute("name")] = p[j].getAttribute("value");
                                }
                            }
                            _showExpressInstall(att, par, id, cb);
                        } else {
                            // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display fallback content instead of SWF
                            displayFbContent(obj);
                            if (cb) {
                                cb(cbObj);
                            }
                        }
                    }
                } else {
                    // if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or fallback content)
                    setVisibility(id, true);
                    if (cb) {
                        var o = _getObjectById(id); // test whether there is an HTML object element or not
                        if (o && typeof o.SetVariable !== UNDEF) {
                            cbObj.success = true;
                            cbObj.ref = o;
                            cbObj.id = o.id;
                        }
                        cb(cbObj);
                    }
                }
            }
        }
    }

    /* Main function
        - Will preferably execute onDomLoad, otherwise onload (as a fallback)
    */
    domLoadFnArr[0] = function () {
        if (plugin) {
            testPlayerVersion();
        } else {
            matchVersions();
        }
    };

    function _getObjectById(objectIdStr) {
        var r = null,
            o = getElementById(objectIdStr);

        if (o && o.nodeName.toUpperCase() === "OBJECT") {
            //If targeted object is valid Flash file
            if (typeof o.SetVariable !== UNDEF) {
                r = o;
            } else {
                //If SetVariable is not working on targeted object but a nested object is
                //available, assume classic nested object markup. Return nested object.

                //If SetVariable is not working on targeted object and there is no nested object,
                //return the original object anyway. This is probably new simplified markup.

                r = o.getElementsByTagName(OBJECT)[0] || o;
            }
        }

        return r;
    }

    /* Requirements for Adobe Express Install
        - only one instance can be active at a time
        - fp 6.0.65 or higher
        - Win/Mac OS only
        - no Webkit engines older than version 312
    */
    function canExpressInstall() {
        return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
    }

    /* Show the Adobe Express Install dialog
        - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
    */
    function _showExpressInstall(att, par, replaceElemIdStr, callbackFn) {

        var obj = getElementById(replaceElemIdStr);

        //Ensure that replaceElemIdStr is really a string and not an element
        replaceElemIdStr = getId(replaceElemIdStr);

        isExpressInstallActive = true;
        storedCallbackFn = callbackFn || null;
        storedCallbackObj = { success: false, id: replaceElemIdStr };

        if (obj) {
            if (obj.nodeName.toUpperCase() === "OBJECT") {
                // static publishing
                storedFbContent = abstractFbContent(obj);
                storedFbContentId = null;
            } else {
                // dynamic publishing
                storedFbContent = obj;
                storedFbContentId = replaceElemIdStr;
            }
            att.id = EXPRESS_INSTALL_ID;
            if (typeof att.width === UNDEF || !/%$/.test(att.width) && toInt(att.width) < 310) {
                att.width = "310";
            }
            if (typeof att.height === UNDEF || !/%$/.test(att.height) && toInt(att.height) < 137) {
                att.height = "137";
            }
            var pt = ua.ie ? "ActiveX" : "PlugIn",
                fv = "MMredirectURL=" + encodeURIComponent(win.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + pt + "&MMdoctitle=" + encodeURIComponent(doc.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof par.flashvars !== UNDEF) {
                par.flashvars += "&" + fv;
            } else {
                par.flashvars = fv;
            }
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            if (ua.ie && obj.readyState != 4) {
                var newObj = createElement("div");
                replaceElemIdStr += "SWFObjectNew";
                newObj.setAttribute("id", replaceElemIdStr);
                obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
                obj.style.display = "none";
                _removeSWF(obj); //removeSWF accepts elements now
            }
            _createSWF(att, par, replaceElemIdStr);
        }
    }

    /* Functions to abstract and display fallback content
    */
    function displayFbContent(obj) {
        if (ua.ie && obj.readyState != 4) {
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            obj.style.display = "none";
            var el = createElement("div");
            obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the fallback content
            el.parentNode.replaceChild(abstractFbContent(obj), el);
            _removeSWF(obj); //removeSWF accepts elements now
        } else {
            obj.parentNode.replaceChild(abstractFbContent(obj), obj);
        }
    }

    function abstractFbContent(obj) {
        var ac = createElement("div");
        if (ua.win && ua.ie) {
            ac.innerHTML = obj.innerHTML;
        } else {
            var nestedObj = obj.getElementsByTagName(OBJECT)[0];
            if (nestedObj) {
                var c = nestedObj.childNodes;
                if (c) {
                    var cl = c.length;
                    for (var i = 0; i < cl; i++) {
                        if (!(c[i].nodeType == 1 && c[i].nodeName === "PARAM") && !(c[i].nodeType == 8)) {
                            ac.appendChild(c[i].cloneNode(true));
                        }
                    }
                }
            }
        }
        return ac;
    }

    function createIeObject(url, paramStr) {
        var div = createElement("div");
        div.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + url + "'>" + paramStr + "</object>";
        return div.firstChild;
    }

    /* Cross-browser dynamic SWF creation
    */
    function _createSWF(attObj, parObj, id) {
        var r,
            el = getElementById(id);
        id = getId(id); // ensure id is truly an ID and not an element

        if (ua.wk && ua.wk < 312) {
            return r;
        }

        if (el) {
            var o = ua.ie ? createElement("div") : createElement(OBJECT),
                attr,
                attrLower,
                param;

            if (typeof attObj.id === UNDEF) {
                // if no 'id' is defined for the object element, it will inherit the 'id' from the fallback content
                attObj.id = id;
            }

            //Add params
            for (param in parObj) {
                //filter out prototype additions from other potential libraries and IE specific param element
                if (parObj.hasOwnProperty(param) && param.toLowerCase() !== "movie") {
                    createObjParam(o, param, parObj[param]);
                }
            }

            //Create IE object, complete with param nodes
            if (ua.ie) {
                o = createIeObject(attObj.data, o.innerHTML);
            }

            //Add attributes to object
            for (attr in attObj) {
                if (attObj.hasOwnProperty(attr)) {
                    // filter out prototype additions from other potential libraries
                    attrLower = attr.toLowerCase();

                    // 'class' is an ECMA4 reserved keyword
                    if (attrLower === "styleclass") {
                        o.setAttribute("class", attObj[attr]);
                    } else if (attrLower !== "classid" && attrLower !== "data") {
                        o.setAttribute(attr, attObj[attr]);
                    }
                }
            }

            if (ua.ie) {
                objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
            } else {
                o.setAttribute("type", FLASH_MIME_TYPE);
                o.setAttribute("data", attObj.data);
            }

            el.parentNode.replaceChild(o, el);
            r = o;
        }

        return r;
    }

    function createObjParam(el, pName, pValue) {
        var p = createElement("param");
        p.setAttribute("name", pName);
        p.setAttribute("value", pValue);
        el.appendChild(p);
    }

    /* Cross-browser SWF removal
        - Especially needed to safely and completely remove a SWF in Internet Explorer
    */
    function _removeSWF(id) {
        var obj = getElementById(id);
        if (obj && obj.nodeName.toUpperCase() === "OBJECT") {
            if (ua.ie) {
                obj.style.display = "none";
                (function removeSWFInIE() {
                    if (obj.readyState == 4) {
                        //This step prevents memory leaks in Internet Explorer
                        for (var i in obj) {
                            if (typeof obj[i] === "function") {
                                obj[i] = null;
                            }
                        }
                        obj.parentNode.removeChild(obj);
                    } else {
                        setTimeout(removeSWFInIE, 10);
                    }
                })();
            } else {
                obj.parentNode.removeChild(obj);
            }
        }
    }

    function isElement(id) {
        return id && id.nodeType && id.nodeType === 1;
    }

    function getId(thing) {
        return isElement(thing) ? thing.id : thing;
    }

    /* Functions to optimize JavaScript compression
    */
    function getElementById(id) {

        //Allow users to pass an element OR an element's ID
        if (isElement(id)) {
            return id;
        }

        var el = null;
        try {
            el = doc.getElementById(id);
        } catch (e) {}
        return el;
    }

    function createElement(el) {
        return doc.createElement(el);
    }

    //To aid compression; replaces 14 instances of pareseInt with radix
    function toInt(str) {
        return parseInt(str, 10);
    }

    /* Updated attachEvent function for Internet Explorer
        - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
    */
    function addListener(target, eventType, fn) {
        target.attachEvent(eventType, fn);
        listenersArr[listenersArr.length] = [target, eventType, fn];
    }

    /* Flash Player and SWF content version matching
    */
    function hasPlayerVersion(rv) {
        rv += ""; //Coerce number to string, if needed.
        var pv = ua.pv,
            v = rv.split(".");
        v[0] = toInt(v[0]);
        v[1] = toInt(v[1]) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
        v[2] = toInt(v[2]) || 0;
        return pv[0] > v[0] || pv[0] == v[0] && pv[1] > v[1] || pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2] ? true : false;
    }

    /* Cross-browser dynamic CSS creation
        - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
    */
    function _createCSS(sel, decl, media, newStyle) {
        var h = doc.getElementsByTagName("head")[0];
        if (!h) {
            return;
        } // to also support badly authored HTML pages that lack a head element
        var m = typeof media === "string" ? media : "screen";
        if (newStyle) {
            dynamicStylesheet = null;
            dynamicStylesheetMedia = null;
        }
        if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
            // create dynamic stylesheet + get a global reference to it
            var s = createElement("style");
            s.setAttribute("type", "text/css");
            s.setAttribute("media", m);
            dynamicStylesheet = h.appendChild(s);
            if (ua.ie && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
                dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
            }
            dynamicStylesheetMedia = m;
        }
        // add style rule
        if (dynamicStylesheet) {
            if (typeof dynamicStylesheet.addRule !== UNDEF) {
                dynamicStylesheet.addRule(sel, decl);
            } else if (typeof doc.createTextNode !== UNDEF) {
                dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
            }
        }
    }

    function setVisibility(id, isVisible) {
        if (!autoHideShow) {
            return;
        }
        var v = isVisible ? "visible" : "hidden",
            el = getElementById(id);
        if (isDomLoaded && el) {
            el.style.visibility = v;
        } else if (typeof id === "string") {
            _createCSS("#" + id, "visibility:" + v);
        }
    }

    /* Filter to avoid XSS attacks
    */
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) !== null;
        return hasBadChars && typeof encodeURIComponent !== UNDEF ? encodeURIComponent(s) : s;
    }

    /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
    */
    var cleanup = function () {
        if (ua.ie) {
            window.attachEvent("onunload", function () {
                // remove listeners to avoid memory leaks
                var ll = listenersArr.length;
                for (var i = 0; i < ll; i++) {
                    listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                }
                // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                var il = objIdArr.length;
                for (var j = 0; j < il; j++) {
                    _removeSWF(objIdArr[j]);
                }
                // cleanup library's main closures to avoid memory leaks
                for (var k in ua) {
                    ua[k] = null;
                }
                ua = null;
                for (var l in swfobject) {
                    swfobject[l] = null;
                }
                swfobject = null;
            });
        }
    }();

    return {
        /* Public API
            - Reference: http://code.google.com/p/swfobject/wiki/documentation
        */
        registerObject: function registerObject(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
            if (ua.w3 && objectIdStr && swfVersionStr) {
                var regObj = {};
                regObj.id = objectIdStr;
                regObj.swfVersion = swfVersionStr;
                regObj.expressInstall = xiSwfUrlStr;
                regObj.callbackFn = callbackFn;
                regObjArr[regObjArr.length] = regObj;
                setVisibility(objectIdStr, false);
            } else if (callbackFn) {
                callbackFn({ success: false, id: objectIdStr });
            }
        },

        getObjectById: function getObjectById(objectIdStr) {
            if (ua.w3) {
                return _getObjectById(objectIdStr);
            }
        },

        embedSWF: function embedSWF(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {

            var id = getId(replaceElemIdStr),
                callbackObj = { success: false, id: id };

            if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
                setVisibility(id, false);
                addDomLoadEvent(function () {
                    widthStr += ""; // auto-convert to string
                    heightStr += "";
                    var att = {};
                    if (attObj && typeof attObj === OBJECT) {
                        for (var i in attObj) {
                            // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
                            att[i] = attObj[i];
                        }
                    }
                    att.data = swfUrlStr;
                    att.width = widthStr;
                    att.height = heightStr;
                    var par = {};
                    if (parObj && typeof parObj === OBJECT) {
                        for (var j in parObj) {
                            // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
                            par[j] = parObj[j];
                        }
                    }
                    if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                        for (var k in flashvarsObj) {
                            // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
                            if (flashvarsObj.hasOwnProperty(k)) {

                                var key = encodeURIEnabled ? encodeURIComponent(k) : k,
                                    value = encodeURIEnabled ? encodeURIComponent(flashvarsObj[k]) : flashvarsObj[k];

                                if (typeof par.flashvars !== UNDEF) {
                                    par.flashvars += "&" + key + "=" + value;
                                } else {
                                    par.flashvars = key + "=" + value;
                                }
                            }
                        }
                    }
                    if (hasPlayerVersion(swfVersionStr)) {
                        // create SWF
                        var obj = _createSWF(att, par, replaceElemIdStr);
                        if (att.id == id) {
                            setVisibility(id, true);
                        }
                        callbackObj.success = true;
                        callbackObj.ref = obj;
                        callbackObj.id = obj.id;
                    } else if (xiSwfUrlStr && canExpressInstall()) {
                        // show Adobe Express Install
                        att.data = xiSwfUrlStr;
                        _showExpressInstall(att, par, replaceElemIdStr, callbackFn);
                        return;
                    } else {
                        // show fallback content
                        setVisibility(id, true);
                    }
                    if (callbackFn) {
                        callbackFn(callbackObj);
                    }
                });
            } else if (callbackFn) {
                callbackFn(callbackObj);
            }
        },

        switchOffAutoHideShow: function switchOffAutoHideShow() {
            autoHideShow = false;
        },

        enableUriEncoding: function enableUriEncoding(bool) {
            encodeURIEnabled = typeof bool === UNDEF ? true : bool;
        },

        ua: ua,

        getFlashPlayerVersion: function getFlashPlayerVersion() {
            return { major: ua.pv[0], minor: ua.pv[1], release: ua.pv[2] };
        },

        hasFlashPlayerVersion: hasPlayerVersion,

        createSWF: function createSWF(attObj, parObj, replaceElemIdStr) {
            if (ua.w3) {
                return _createSWF(attObj, parObj, replaceElemIdStr);
            } else {
                return undefined;
            }
        },

        showExpressInstall: function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
            if (ua.w3 && canExpressInstall()) {
                _showExpressInstall(att, par, replaceElemIdStr, callbackFn);
            }
        },

        removeSWF: function removeSWF(objElemIdStr) {
            if (ua.w3) {
                _removeSWF(objElemIdStr);
            }
        },

        createCSS: function createCSS(selStr, declStr, mediaStr, newStyleBoolean) {
            if (ua.w3) {
                _createCSS(selStr, declStr, mediaStr, newStyleBoolean);
            }
        },

        addDomLoadEvent: addDomLoadEvent,

        addLoadEvent: addLoadEvent,

        getQueryParamValue: function getQueryParamValue(param) {
            var q = doc.location.search || doc.location.hash;
            if (q) {
                if (/\?/.test(q)) {
                    q = q.split("?")[1];
                } // strip question mark
                if (!param) {
                    return urlEncodeIfNecessary(q);
                }
                var pairs = q.split("&");
                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                        return urlEncodeIfNecessary(pairs[i].substring(pairs[i].indexOf("=") + 1));
                    }
                }
            }
            return "";
        },

        // For internal usage only
        expressInstallCallback: function expressInstallCallback() {
            if (isExpressInstallActive) {
                var obj = getElementById(EXPRESS_INSTALL_ID);
                if (obj && storedFbContent) {
                    obj.parentNode.replaceChild(storedFbContent, obj);
                    if (storedFbContentId) {
                        setVisibility(storedFbContentId, true);
                        if (ua.ie) {
                            storedFbContent.style.display = "block";
                        }
                    }
                    if (storedCallbackFn) {
                        storedCallbackFn(storedCallbackObj);
                    }
                }
                isExpressInstallActive = false;
            }
        },

        version: "2.3"

    };
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unique = __webpack_require__(3).unique;
var isPositiveInt = __webpack_require__(3).isPositiveInt;
var stringEndsWith = __webpack_require__(3).stringEndsWith;
var SingleValueRegistry = __webpack_require__(12).SingleValueRegistry;
var MultipleValuesRegistry = __webpack_require__(12).MultipleValuesRegistry;
var registry = __webpack_require__(36);
var VPAID_FLASH_HANDLER = 'vpaid_video_flash_handler';
var ERROR = 'AdError';

var JSFlashBridge = exports.JSFlashBridge = function () {
    function JSFlashBridge(el, flashURL, flashID, width, height, loadHandShake) {
        _classCallCheck(this, JSFlashBridge);

        this._el = el;
        this._flashID = flashID;
        this._flashURL = flashURL;
        this._width = width;
        this._height = height;
        this._handlers = new MultipleValuesRegistry();
        this._callbacks = new SingleValueRegistry();
        this._uniqueMethodIdentifier = unique(this._flashID);
        this._ready = false;
        this._handShakeHandler = loadHandShake;

        registry.addInstance(this._flashID, this);
    }

    _createClass(JSFlashBridge, [{
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            return this._handlers.remove(eventName, callback);
        }
    }, {
        key: 'offEvent',
        value: function offEvent(eventName) {
            return this._handlers.removeByKey(eventName);
        }
    }, {
        key: 'offAll',
        value: function offAll() {
            return this._handlers.removeAll();
        }
    }, {
        key: 'callFlashMethod',
        value: function callFlashMethod(methodName) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            var callbackID = '';
            // if no callback, some methods the return is void so they don't need callback
            if (callback) {
                callbackID = this._uniqueMethodIdentifier() + '_' + methodName;
                this._callbacks.add(callbackID, callback);
            }

            try {
                //methods are created by ExternalInterface.addCallback in as3 code, if for some reason it failed
                //this code will throw an error
                this._el[methodName]([callbackID].concat(args));
            } catch (e) {
                if (callback) {
                    $asyncCallback.call(this, callbackID, e);
                } else {

                    //if there isn't any callback to return error use error event handler
                    this._trigger(ERROR, e);
                }
            }
        }
    }, {
        key: 'removeCallback',
        value: function removeCallback(callback) {
            return this._callbacks.removeByValue(callback);
        }
    }, {
        key: 'removeCallbackByMethodName',
        value: function removeCallbackByMethodName(suffix) {
            var _this = this;

            this._callbacks.filterKeys(function (key) {
                return stringEndsWith(key, suffix);
            }).forEach(function (key) {
                _this._callbacks.remove(key);
            });
        }
    }, {
        key: 'removeAllCallbacks',
        value: function removeAllCallbacks() {
            return this._callbacks.removeAll();
        }
    }, {
        key: '_trigger',
        value: function _trigger(eventName, event) {
            var _this2 = this;

            this._handlers.get(eventName).forEach(function (callback) {
                //clickThru has to be sync, if not will be block by the popupblocker
                if (eventName === 'AdClickThru') {
                    callback(event);
                } else {
                    setTimeout(function () {
                        if (_this2._handlers.get(eventName).length > 0) {
                            callback(event);
                        }
                    }, 0);
                }
            });
        }
    }, {
        key: '_callCallback',
        value: function _callCallback(methodName, callbackID, err, result) {

            var callback = this._callbacks.get(callbackID);

            //not all methods callback's are mandatory
            //but if there exist an error, fire the error event
            if (!callback) {
                if (err && callbackID === '') {
                    this.trigger(ERROR, err);
                }
                return;
            }

            $asyncCallback.call(this, callbackID, err, result);
        }
    }, {
        key: '_handShake',
        value: function _handShake(err, data) {
            this._ready = true;
            if (this._handShakeHandler) {
                this._handShakeHandler(err, data);
                delete this._handShakeHandler;
            }
        }

        //methods like properties specific to this implementation of VPAID

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: this._width, height: this._height };
        }
    }, {
        key: 'setSize',
        value: function setSize(newWidth, newHeight) {
            this._width = isPositiveInt(newWidth, this._width);
            this._height = isPositiveInt(newHeight, this._height);
            this._el.setAttribute('width', this._width);
            this._el.setAttribute('height', this._height);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._width;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(newWidth) {
            this.setSize(newWidth, this._height);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._height;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(newHeight) {
            this.setSize(this._width, newHeight);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            return this._flashID;
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            return this._flashURL;
        }
    }, {
        key: 'isReady',
        value: function isReady() {
            return this._ready;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.offAll();
            this.removeAllCallbacks();
            registry.removeInstanceByID(this._flashID);
            if (this._el.parentElement) {
                this._el.parentElement.removeChild(this._el);
            }
        }
    }]);

    return JSFlashBridge;
}();

function $asyncCallback(callbackID, err, result) {
    var _this3 = this;

    setTimeout(function () {
        var callback = _this3._callbacks.get(callbackID);
        if (callback) {
            _this3._callbacks.remove(callbackID);
            callback(err, result);
        }
    }, 0);
}

Object.defineProperty(JSFlashBridge, 'VPAID_FLASH_HANDLER', {
    writable: false,
    configurable: false,
    value: VPAID_FLASH_HANDLER
});

/**
 * External interface handler
 *
 * @param {string} flashID identifier of the flash who call this
 * @param {string} typeID what type of message is, can be 'event' or 'callback'
 * @param {string} typeName if the typeID is a event the typeName will be the eventName, if is a callback the typeID is the methodName that is related this callback
 * @param {string} callbackID only applies when the typeID is 'callback', identifier of the callback to call
 * @param {object} error error object
 * @param {object} data
 */
window[VPAID_FLASH_HANDLER] = function (flashID, typeID, typeName, callbackID, error, data) {
    var instance = registry.getInstanceByID(flashID);
    if (!instance) return;
    if (typeName === 'handShake') {
        instance._handShake(error, data);
    } else {
        if (typeID !== 'event') {
            instance._callCallback(typeName, callbackID, error, data);
        } else {
            instance._trigger(typeName, data);
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var errors = __webpack_require__(4);
errors.registerGlobalHandler(window);

// only for ROTATED build
if (false) {
    // enable ad rotation by default
    var settings = require('scripts/data/settings');
    settings.local.rotated_ad = true;
}

// only for VPAID build
if (true) {
    // expose 'getVPAIDAd' function to global
    window.getVPAIDAd = __webpack_require__(19);
}

// expose player to global variable
window.WebAlfaPlayer = __webpack_require__(13);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
    function Storage(storage) {
        _classCallCheck(this, Storage);

        this.storage = storage;
    }

    _createClass(Storage, [{
        key: 'setItem',
        value: function setItem(key, value) {
            var valueType = typeof value;
            if (valueType === 'object') {
                value = JSON.stringify(value);
            }

            this.storage.setItem(key, value);
        }
    }, {
        key: 'getItem',
        value: function getItem(key) {
            return this.storage.getItem(key);
        }
    }, {
        key: 'getItemJSON',
        value: function getItemJSON(key) {
            var tmp = this.getItem(key);
            if (typeof tmp === 'string') tmp = JSON.parse(tmp);
            if (tmp == null) tmp = {};
            return tmp;
        }
    }, {
        key: 'removeItem',
        value: function removeItem(key) {
            this.storage.removeItem(key);
        }
    }]);

    return Storage;
}();

module.exports = {
    local: new Storage(localStorage),
    session: new Storage(sessionStorage)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VPAID_EVENTS;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WebAlfaPlayer = __webpack_require__(13);
var constants = __webpack_require__(1);

var VAST_EVENTS = constants.VAST_EVENTS;
var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var MEDIA_EVENTS = constants.MEDIA_EVENTS;

var VPAID_EVENTS = (_VPAID_EVENTS = {}, _defineProperty(_VPAID_EVENTS, VAST_EVENTS.START, 'AdVideoStart'), _defineProperty(_VPAID_EVENTS, VAST_EVENTS.FIRST_QUARTILE, 'AdVideoFirstQuartile'), _defineProperty(_VPAID_EVENTS, VAST_EVENTS.MIDPOINT, 'AdVideoMidpoint'), _defineProperty(_VPAID_EVENTS, VAST_EVENTS.THIRD_QUARTILE, 'AdVideoThirdQuartile'), _defineProperty(_VPAID_EVENTS, VAST_EVENTS.COMPLETE, 'AdVideoComplete'), _VPAID_EVENTS);

var VpaidVideoPlayer = function VpaidVideoPlayer() {
    _classCallCheck(this, VpaidVideoPlayer);

    this._slot = null;
    this._videoSlot = null;
    this._frame = null;
    this._eventsCallbacks = {};
    this._parameters = {};
    this._remainingTime = 15;
    this._duration = 15;
    this._skippableState = true;
    this._id = 9685743;
};

VpaidVideoPlayer.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
    var _this = this;

    this._slot = environmentVars.slot;
    this._videoSlot = environmentVars.videoSlot;

    // Parse the incoming parameters
    this._parameters = JSON.parse(creativeData['AdParameters']);
    this._attributes = {};

    var player = this._player = WebAlfaPlayer();

    player.addEventListener(PLAYER_EVENTS.PLAYER_CREATED, function () {
        return _this._callEvent('AdLoaded');
    });
    player.addEventListener(PLAYER_EVENTS.AD_IMPRESSION, function () {
        return _this._callEvent('AdImpression');
    });
    player.addEventListener(PLAYER_EVENTS.AD_FINISHED, function () {
        return _this._adFinishedHandler();
    });
    player.addEventListener(PLAYER_EVENTS.VIDEO_ERROR, function () {
        return _this._callEvent('AdError');
    });
    player.addEventListener(PLAYER_EVENTS.AD_SKIPPED, function () {
        return _this.onAdSkipped();
    });
    player.addEventListener(MEDIA_EVENTS.play, function () {
        return _this._callEvent('AdPlaying');
    });
    player.addEventListener(PLAYER_EVENTS.AD_CLICK_THROUGH, function () {
        return _this._adClickThrough();
    });
    player.addEventListener(MEDIA_EVENTS.volumechange, function (vol) {
        return _this._callEvent('AdVolumeChange', vol);
    });
    player.addEventListener(PLAYER_EVENTS.AD_TRACKING, function (e) {
        var vpaidHandler = VPAID_EVENTS[e];
        if (vpaidHandler) _this._callEvent(vpaidHandler);
    });

    this.thisTimeHandler = this._timeHandler.bind(this);
    player.addEventListener(MEDIA_EVENTS.timeupdate, this.thisTimeHandler);

    this.thisDurationHandler = this._durationHandler.bind(this);
    player.addEventListener(MEDIA_EVENTS.durationchange, this.thisDurationHandler);

    player.addEventListener(PLAYER_EVENTS.VPAID_EVENT, function () {
        return _this._handleInnerVPAIDEvent();
    });

    player.create({
        adonly: true,
        videoTag: this._videoSlot,
        isVPAID: true,
        noUI: true,
        ads: {
            autogetad: false,
            vasturl: this._parameters.adurl
        },
        gui: {
            fullscreen: false
        }
    });
};

VpaidVideoPlayer.prototype._adClickThrough = function () {
    this._callEvent('AdClickThru', arguments);
    this._callEvent('AdPaused');
};

VpaidVideoPlayer.prototype._timeHandler = function (currentTime, duration) {
    console.log('timehandler', currentTime, duration);

    this._remainingTime = duration - currentTime;

    if (duration !== this._duration && duration > 0) {
        this._duration = duration;
        this._callEvent('AdDurationChange');
    }

    this._callEvent('AdRemainingTimeChange');
};
VpaidVideoPlayer.prototype._durationHandler = function (duration) {
    if (duration > 0 && duration !== this._duration) {
        this._duration = duration;
        this._callEvent('AdDurationChange');
        this._callEvent('AdRemainingTimeChange');
    }
};

VpaidVideoPlayer.prototype._adFinishedHandler = function () {
    this._clean();
    var callback = this._callEvent.bind(this);
    //this._callEvent('AdVideoComplete');
    setTimeout(callback, 75, ['AdStopped']);
};
VpaidVideoPlayer.prototype._clean = function () {
    this._player.removeEventListener(MEDIA_EVENTS.timeupdate, this.thisTimeHandler);
    this._player.removeEventListener(MEDIA_EVENTS.durationchange, this.thisDurationHandler);
};
VpaidVideoPlayer.prototype._handleInnerVPAIDEvent = function (eventName, arg) {
    if (eventName === 'onAdSkipped') {
        this.onAdSkipped();
    } else {
        this._callEvent(eventName, arg);
    }
};
/**
 * Returns the versions of VPAID ad supported.
 */
VpaidVideoPlayer.prototype.handshakeVersion = function () {
    return '2.0';
};

/**
 * Called by the wrapper to start the ad.
 */
VpaidVideoPlayer.prototype.startAd = function () {
    this._callEvent('AdStarted');
    this._player.play();
};

/**
 * Called by the wrapper to stop the ad.
 */
VpaidVideoPlayer.prototype.stopAd = function () {
    this._adFinishedHandler();
};

/**
 * @param {number} value The volume in percentage.
 */
VpaidVideoPlayer.prototype.setAdVolume = function (value) {
    this._player.volume = value;
    this._callEvent('AdVolumeChanged');
};

/**
 * @return {number} The volume of the ad.
 */
VpaidVideoPlayer.prototype.getAdVolume = function () {
    return this._player.volume;
};

/**
 * @param {number} width The new width.
 * @param {number} height A new height.
 * @param {string} viewMode A new view mode.
 */
VpaidVideoPlayer.prototype.resizeAd = function (width, height, viewMode) {
    if (this._player.vpaid) {
        this._player.vpaid.resizeAd(width, height, viewMode);
    }
    //this._callEvent('AdSizeChange');
};

/**
 * Pauses the ad.
 */
VpaidVideoPlayer.prototype.pauseAd = function () {
    this._player.pause();
    this._callEvent('AdPaused');
};

/**
 * Resumes the ad.
 */
VpaidVideoPlayer.prototype.resumeAd = function () {
    this._player.play();
    this._callEvent('AdResumed');
};

/**
 * Expands the ad.
 */
VpaidVideoPlayer.prototype.expandAd = function () {
    if (this._player.vpaid) {
        this._player.vpaid.expandAd();
    }
};

/**
 * Returns true if the ad is expanded.
 * @return {boolean}
 */
VpaidVideoPlayer.prototype.getAdExpanded = function () {
    if (this._player.vpaid) {
        return this._player.vpaid.getAdExpanded();
    } else return false;
};

/**
 * Returns the skippable state of the ad.
 * @return {boolean}
 */
VpaidVideoPlayer.prototype.getAdSkippableState = function () {
    if (this._player.vpaid) {
        return this._player.vpaid.getAdSkippableState();
    }
    return this._skippableState;
};

/**
 * Collapses the ad.
 */
VpaidVideoPlayer.prototype.collapseAd = function () {
    if (this._player.vpaid) {
        this._player.vpaid.collapseAd();
    }
};

/**
 * Skips the ad.
 */
VpaidVideoPlayer.prototype.skipAd = function () {
    if (this._skippableState) {
        if (this._player.vpaid) {
            this._player.vpaid.skipAd();
        } else {
            this.onAdSkipped();
        }
    }
};

/**
 * Registers a callback for an event.
 * @param {Function} aCallback The callback function.
 * @param {string} eventName The callback type.
 * @param {Object} aContext The context for the callback.
 */
VpaidVideoPlayer.prototype.subscribe = function (aCallback, eventName, aContext) {
    var callBack = aCallback.bind(aContext);
    this._eventsCallbacks[eventName] = callBack;
};

/**
 * Removes a callback based on the eventName.
 *
 * @param {string} eventName The callback type.
 */
VpaidVideoPlayer.prototype.unsubscribe = function (eventName) {
    this._eventsCallbacks[eventName] = null;
};

/**
 * @return {number} The ad width.
 */
VpaidVideoPlayer.prototype.getAdWidth = function () {
    return this._attributes['width'];
};

/**
 * @return {number} The ad height.
 */
VpaidVideoPlayer.prototype.getAdHeight = function () {
    return this._attributes['height'];
};

/**
 * @return {number} The time remaining in the ad.
 */
VpaidVideoPlayer.prototype.getAdRemainingTime = function () {
    return this._remainingTime;
};

/**
 * @return {number} The duration of the ad.
 */
VpaidVideoPlayer.prototype.getAdDuration = function () {
    return this._duration;
};

/**
 * @return {string} List of companions in vast xml.
 */
VpaidVideoPlayer.prototype.getAdCompanions = function () {
    return this._attributes['companions'];
};

/**
 * @return {string} A list of icons.
 */
VpaidVideoPlayer.prototype.getAdIcons = function () {
    return this._attributes['icons'];
};

VpaidVideoPlayer.prototype.onAdImpression = function () {
    this._callEvent('AdImpression');
};

VpaidVideoPlayer.prototype.onAdSkipped = function () {
    this._clean();
    this._callEvent('AdSkipped');
    var callback = this._callEvent.bind(this);
    setTimeout(callback, 75, ['AdStopped']);
};

/**
 * @return {boolean} True if the ad is a linear, false for non linear.
 */
VpaidVideoPlayer.prototype.getAdLinear = function () {
    if (this._player.vpaid) {
        return this._player.vpaid.getAdLinear();
    }
    return true;
};

/**
 * Calls an event if there is a callback.
 * @param {string} eventType
 */
VpaidVideoPlayer.prototype._callEvent = function (eventType, param) {
    if (eventType in this._eventsCallbacks) {
        this._eventsCallbacks[eventType].apply(null, param);
    }
};

module.exports = {
    /**
     * Main function called by wrapper to get the VPAID ad.
     */
    getVPAIDAd: function getVPAIDAd() {
        return new VpaidVideoPlayer();
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var settings = __webpack_require__(7);
var utils = __webpack_require__(5);
var urlUtils = __webpack_require__(11);

/**
 * External config format:
 *
 * {
 *   "adult": boolean,     // should player show adult warning dialog before playing video
 *   "videoURL": string,   // Video file to play URL
 *   "poster": string,     // An image preview to the video before playing starts URL
 *   "title": string,      // A string that describes the video title. Title is used for the share mechanism and ads targeting
 *   "description": string,  // Textual video description. Description is used for share mechanism and ads targeting
 *   "mute": boolean,      // Specifies whether the video should start playing muted or not
 *   "autoPlay": boolean,  // Specifies whether the video should start playing automaticaly when page is loaded
 *   "parentId": string,   // HTML element id which will be the parent for the player
 *   "adonly": boolean,    // Set to true if you want to show an ad without videoURL parameter (for players created with the 'create' function),
 *   "height": number,     // Player height (optional – in pixels)
 *   "width": number,      // Player width (optional – in pixels)
 *   "site_url": string,   // Site URL where the player is being used
 *   "passback": string,   // 3rd party URL for returning an ad in case an ad is not returned for main request. (optional)
 *   "passbackjs": string, // JavaScript code or URL to JavaScript code to return ad in case of an ad is not returned for main request. (optional)
 *
 *   "app_bundle": string, // is player injected in native application
 *   "ads": {
 *     "vasturl": string,
 *     "vastxml": string,
 *     "autogetad": boolean,
 *     "skipoffset": number
 *   },
 *   "isVPAID": boolean,
 *   "videoTag": string,
 *   "gui": {
 *     "fullscreen": boolean,
 *     "sharing": boolean
 *   },
 *   "androidsdk": boolean,
 *   "video_autoplay": boolean,
 *   "noUI": boolean,
 *   "ssl": boolean,
 *   "isshare": boolean
 * }
 */

var Config = function () {
    function Config() {
        _classCallCheck(this, Config);

        this.__config = {}; // defend from testing to null in every method
        this.__shareUrl = null;
        this.__youtubeID = null;
    }

    _createClass(Config, [{
        key: 'init',
        value: function init(externalConfig) {
            // merge external config with internal, if it was present
            this.__config = utils.assign({}, this.__config, externalConfig);
            this.__config.ads = this.__config.ads || {};
            this.__config.gui = this.__config.gui || {};

            if (this.__config.adult == null) {
                this.__config.adult = false;
            }
            if (this.__config.site_url != null) {
                settings.site_url = this.__config.site_url;
            }

            this.__shareUrl = __generateShareUrl(this.__config);
            this.__youtubeID = urlUtils.parseYoutubeID(this.__config.videoURL);
        }
    }, {
        key: 'getShareUrl',
        value: function getShareUrl(pui) {
            if (pui) {
                return this.__shareUrl + '&pui=' + encodeURI(pui);
            }
            return this.__shareUrl;
        }
    }, {
        key: 'getPosterUrl',
        value: function getPosterUrl() {
            return this.__config.poster || '';
        }
    }, {
        key: 'getNotifyOnLoadUrl',
        value: function getNotifyOnLoadUrl(pui) {
            return location.protocol + '//track.videmob.com/player.b/onload' + __urlParam('type', this.isInApp() ? 1 : 0, '?') + __urlParam('pui', pui) + __urlParam('source', this.getSiteUrl());
        }
    }, {
        key: 'isFullscreenRestricted',
        value: function isFullscreenRestricted() {
            return this.__config.gui.fullscreen || false;
        }
    }, {
        key: 'isMute',
        value: function isMute() {
            return this.__config.mute;
        }
    }, {
        key: 'isAdult',
        value: function isAdult() {
            return Boolean(this.__config.adult);
        }
    }, {
        key: 'isInApp',
        value: function isInApp() {
            return typeof this.__config.app_bundle === 'string' && this.__config.app_bundle.length > 0;
        }
    }, {
        key: 'isNoUI',
        value: function isNoUI() {
            return this.__config.noUI;
        }
    }, {
        key: 'isNoSharingUI',
        value: function isNoSharingUI() {
            return this.__config.gui.sharing != null ? !this.__config.gui.sharing : false;
        }
    }, {
        key: 'isAndroidSDK',
        value: function isAndroidSDK() {
            return this.__config.androidsdk;
        }
    }, {
        key: 'isAutoplay',
        value: function isAutoplay() {
            return Boolean(this.__config.video_autoplay) || Boolean(this.__config.autoplay) || Boolean(this.__config.autoPlay);
        }
    }, {
        key: 'isAutoGetAds',
        value: function isAutoGetAds() {
            if (!this.__config.ads) {
                return true;
            }
            return Boolean(this.__config.ads.autogetad);
        }
    }, {
        key: 'isAdOnly',
        value: function isAdOnly() {
            return Boolean(this.__config.adonly) || Boolean(this.__config.adOnly);
        }
    }, {
        key: 'isVPAID',
        value: function isVPAID() {
            return this.__config.isVPAID;
        }
    }, {
        key: 'getProtocol',
        value: function getProtocol() {
            if (this.__config.ssl != null) {
                return this.__config.ssl ? 'https:' : 'http:';
            }
            return location.protocol;
        }
    }, {
        key: 'getPassback',
        value: function getPassback() {
            return this.__config.passback;
        }
    }, {
        key: 'getPassbackJS',
        value: function getPassbackJS() {
            return this.__config.passbackjs;
        }
    }, {
        key: 'getSkipOffset',
        value: function getSkipOffset() {
            return this.__config.ads && this.__config.ads.skipoffset;
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.__config.width;
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.__config.height;
        }
    }, {
        key: 'getYoutubeID',
        value: function getYoutubeID() {
            return this.__youtubeID;
        }
    }, {
        key: 'getVideoFile',
        value: function getVideoFile() {
            return this.__config.videoURL || this.__config.file || '';
        }
    }, {
        key: 'getSiteUrl',
        value: function getSiteUrl() {
            if (this.__config.site_url != null) {
                return this.__config.site_url;
            }

            if (document.referrer.length > 0 && this.__config.isshare === true) {
                return document.referrer;
            }

            return window.location.toString();
        }
    }, {
        key: 'getFetchVastUrl',
        value: function getFetchVastUrl() {
            return this.__config.ads.vasturl;
        }
    }, {
        key: 'getProvidedVastXML',
        value: function getProvidedVastXML() {
            return this.__config.ads.vastxml;
        }
    }, {
        key: 'getAppType',
        value: function getAppType() {
            if (settings.local.rotated_ad) {
                return 'webplayerb';
            } else {
                return 'webplayer';
            }
        }
    }, {
        key: 'generateVastTagUrl',
        value: function generateVastTagUrl(rect, pui) {
            var vastUrl = void 0;

            var isInApp = this.isInApp();
            // browser language
            var lang = navigator.language || navigator.browserLanguage;
            lang = lang ? lang.substr(0, 2) : 'en';

            var env = settings.env;
            if (env === 'dev') {
                vastUrl = settings.vast_url;
            } else {
                var schema = this.getProtocol();
                if (isInApp) vastUrl = schema + '//vast' + (!env ? '.' : '.' + env + '.') + settings.local.vast_tag_domain + '/vmvast.php';else vastUrl = schema + '//vast' + (!env ? 'web.' : '.' + env + '.') + settings.local.vast_tag_domain + '/vmvast.php';
            }

            vastUrl += __urlParam('type', isInApp ? 1 : 0, '?');
            vastUrl += __urlParam('app_type', this.getAppType());
            vastUrl += __urlParam('pui', pui);
            vastUrl += __urlParam('ua', navigator.userAgent);
            vastUrl += __urlParam('siteurl', this.getSiteUrl());
            vastUrl += __urlParam('player_width', rect.width);
            vastUrl += __urlParam('player_height', rect.height);
            vastUrl += __urlParam('video_title', this.__config.title);
            vastUrl += __urlParam('video_desc', (this.__config.description || '').slice(0, 80));
            vastUrl += __urlParam('video_autoplay', this.isAutoplay());
            vastUrl += __urlParam('video_url', this.getVideoFile());
            vastUrl += __urlParam('protocol', 'full');
            vastUrl += __urlParam('user_lng', lang);

            // params for mobile application in which player wrapped
            vastUrl += __joinParams(this.__config, ['app_bundle', 'app_name', 'app_store']);
            // params fo mobile traffic
            vastUrl += __joinParams(this.__config, ['didsha1', 'didmd5', 'dpidsha1', 'dpidmd5', 'macsha1', 'macmd5']);
            vastUrl += __joinParams(this.__config, ['aid', 'did', 'mac', 'instl', 'custompubid', 'custompubid2', 'custompubid3']);
            vastUrl += __joinParams(this.__config, ['user_yob', 'user_gen', 'coppa']);

            // add random as last param, for easier testing
            vastUrl += '&rnd=' + Math.floor(Math.random() * 1000000);

            return vastUrl;
        }
    }, {
        key: 'getParentElement',
        value: function getParentElement() {
            if (this.__config.parentElement) {
                return this.__config.parentElement;
            }
            if (this.__config.parentId) {
                return document.getElementById(this.__config.parentId);
            }
            return null;
        }
    }, {
        key: 'getCompanionConfig',
        value: function getCompanionConfig() {
            return this.__config.ads && this.__config.ads.companiondiv;
        }
    }, {
        key: 'getVideoElement',
        value: function getVideoElement() {
            return this.__config.videoTag;
        }
    }]);

    return Config;
}();

function __generateShareUrl(config) {
    var result = '';

    for (var i in config) {
        if (!config.hasOwnProperty(i)) {
            continue;
        }

        if (typeof config[i] !== 'object') {
            if (i !== 'parentId' && i !== 'video_autoplay') {
                if (typeof config[i] === 'string') {
                    result += 'cr_' + i + '=\'' + encodeURI(config[i].replace(/\\/g, '\\\\')).replace(/'/g, '\\%27').replace(/&/g, '%26') + '\'';
                } else {
                    result += 'cr_' + i + '=' + config[i];
                }
                result += '&';
            }
        }
    }
    result += 'cr_video_autoplay=true&cr_isshare=true';
    return result;
}

function __joinParams(config, params) {
    params = params || [];

    return params.reduce(function (result, param) {
        return result + __urlParam(param, config[param]);
    }, '');
}

function __urlParam(name, value, separator) {
    if (value == null || value === '') {
        return '';
    }
    return (separator || '&') + name + '=' + encodeURIComponent(value);
}

module.exports = Config;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkipButton = __webpack_require__(22);
var Overlay = __webpack_require__(23);
var ContextMenu = __webpack_require__(14);
var ShareButton = __webpack_require__(25);
var ShareDialog = __webpack_require__(26);
var AdultWarningDialog = __webpack_require__(28);
var ControlsBar = __webpack_require__(29);
var YoutubePlayer = __webpack_require__(33);
var VPAIDPlayer = __webpack_require__(34);
var uiUtils = __webpack_require__(9);
var settings = __webpack_require__(7);
var constants = __webpack_require__(1);
var styles = __webpack_require__(2);
var ua = __webpack_require__(8).parsed;

var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var MEDIA_EVENTS = constants.MEDIA_EVENTS;
var VIDEO_STAGE = constants.VIDEO_STAGE;
var CHECK_PLAYER_TIMEOUT = 5000;

var UIManager = function () {
    function UIManager(wap) {
        _classCallCheck(this, UIManager);

        this.wap = wap;
        this.randomId = Math.random();
        this._volume = 1;

        // root element
        this.backgroundElement = null;
        // element for video players
        this.mediaSpan = null;
        // current video player
        this.videoElement = null;

        // share button and hideable share panel
        this.shareButton = new ShareButton();
        this.shareDialog = new ShareDialog(false);

        this.videoPoster = null;
        this.loadingIndicator = null;
        this.skipButton = null;
        this.closeButton = null;
        this.nonLinear = null;
        this.buttonStart = null;

        // controls frame elements
        this.controlsBar = new ControlsBar();
        this.hideControlsTimer = null;

        this.onThisPauseEvent = this.onPauseEvent.bind(this);
        this.onPlayFinished = wap.onPlayFinished.bind(wap);
        this.onVideoError = wap.onVideoError.bind(wap);
        this.onThisPlayEvent = this.onPlayEvent.bind(this);
    }

    _createClass(UIManager, [{
        key: 'createMainUI',
        value: function createMainUI(config) {
            var _this = this;

            if (this.videoElement || this.backgroundElement) {
                return;
            }

            window.addEventListener('message', this.onWindowMessage.bind(this), false);
            document.addEventListener('contextmenu', this.onContextMenuRequested.bind(this), false);

            this.backgroundElement = document.createElement('div');
            if (!ua.isMobile) {
                this.backgroundElement.addEventListener('mousemove', this.onMouseOverPlayer.bind(this));
                this.backgroundElement.addEventListener('mouseout', this.onMouseOutOfPlayer.bind(this));
            }

            var parentElement = config.getParentElement();
            if (parentElement) {
                this.backgroundElement.className = 'alfa-root alfa-main-background';
                this.backgroundElement.style.position = 'absolute';

                if (config.getWidth() && config.getHeight()) {
                    parentElement.style.width = config.getWidth() + 'px';
                    parentElement.style.height = config.getHeight() + 'px';
                    this.backgroundElement.style.width = config.getWidth() + 'px';
                    this.backgroundElement.style.height = config.getHeight() + 'px';
                } else if (parentElement.offsetHeight > 0 && parentElement.offsetWidth > 0) {
                    this.backgroundElement.style.width = parentElement.offsetWidth + 'px';
                    this.backgroundElement.style.height = parentElement.offsetHeight + 'px';
                } else {
                    this.backgroundElement.style.cssText = 'position:relative;top:0px;left:0px;right:0px;bottom:0px;';
                }
            } else {
                this.backgroundElement.className = 'alfa-root alfa-video-background';
            }

            this.loadCSS(this.backgroundElement);

            this.mediaSpan = document.createElement('span');
            this.mediaSpan.className = 'alfa-media-span';

            if (ua.isIOSSmall || ua.isUCBrowser) {
                this.mediaSpan.classList.add(styles.OPACITY_HIDDEN);
            }

            this.createVideoTag(config);

            if (config.getYoutubeID()) {
                if (this.wap.isAllowYoutubeWrapper()) {
                    var youtube = this.youtubePlayer = new YoutubePlayer();
                    youtube.includeYoutubeAPI();
                    youtube.createElement(this.mediaSpan, config.getYoutubeID());
                    this.videoMain = youtube;
                    youtube.addEventListener(MEDIA_EVENTS.play, this.onPlayEvent.bind(this));
                    youtube.addEventListener(MEDIA_EVENTS.timeupdate, this.onTimeupdateEvent.bind(this));
                    youtube.addEventListener(MEDIA_EVENTS.durationchange, this.onDurationchangeEvent.bind(this));
                    youtube.addEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
                    youtube.addEventListener(MEDIA_EVENTS.error, this.onVideoError);
                    youtube.addEventListener(PLAYER_EVENTS.CLICK, this.wap.onPlayerClickMain.bind(this.wap));
                    youtube.addEventListener(PLAYER_EVENTS.BUFFERING, this.onBuffering.bind(this));
                } else {
                    this.videoMain = null;
                }
            } else {
                this.videoMain = this.videoElement;
            }

            if (!ua.isMobile) {
                // TODO: why do we test for empty value?
                if (config.isMute() !== void 0) {
                    if (config.isMute()) this.setVolume(0);else this.setVolume(1);
                } else if (!config.isVPAID()) {
                    this.setVolume(settings.volume);
                }
            }

            this.backgroundElement.appendChild(this.mediaSpan);

            if (parentElement) {
                parentElement.appendChild(this.backgroundElement);
            } else {
                document.body.appendChild(this.backgroundElement);
            }

            // if adult flag is present, then show warning dialog before showing UI
            if (config.isAdult()) {
                this.showAdultDialog(); // call showUI() there, if user agrees with warning
            } else {
                this.showUI();
            }

            if (!config.isVPAID()) {
                setTimeout(function () {
                    return _this.onCheckCurrentPlayer();
                }, CHECK_PLAYER_TIMEOUT);
            }
        }
    }, {
        key: 'createVideoTag',
        value: function createVideoTag(config) {
            var _this2 = this;

            var elementReplaced = false;
            if (this.videoElement) {
                this.mediaSpan.removeChild(this.videoElement);
                elementReplaced = true;
            }

            if (config.getVideoElement()) {
                console.log('[alfa] change videoElement to config.getVideoElement()');
                this.videoElement = config.getVideoElement();
                this.backgroundElement.style.background = null;
                this.videoElement.addEventListener(ua.isMobile ? 'touchend' : 'click', this.wap.onPlayerClick.bind(this.wap));
            } else {
                console.log('[alfa] change videoElement to document.createElement("video")');
                this.videoElement = document.createElement('video');
                this.videoElement.style.cssText = 'width:100%;height:100%;';

                // HINT: added for iOS - elements will now be allowed to play inline, and will not automatically enter fullscreen mode when playback begins
                this.videoElement.setAttribute('webkit-playsinline', '');
                this.videoElement.setAttribute('playsinline', '');

                this.mediaSpan.appendChild(this.videoElement);
                this.videoElement.addEventListener(MEDIA_EVENTS.canplay, function () {
                    _this2.hideLoadingIndicator();
                    if (_this2.videoElement.paused) {
                        _this2.showStartButton();
                    }
                });
            }

            this.videoElement.addEventListener(MEDIA_EVENTS.waiting, function () {
                return _this2.showLoadingIndicator();
            });
            this.videoElement.addEventListener(MEDIA_EVENTS.playing, function () {
                return _this2.hideLoadingIndicator();
            });
            this.videoElement.addEventListener(MEDIA_EVENTS.loadstart, function () {
                if (_this2.videoElement.src !== '') {
                    _this2.showLoadingIndicator();
                }
            });

            this.videoElement.addEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
            this.videoElement.addEventListener(MEDIA_EVENTS.error, this.onVideoError);

            this.HTML5Player = this.videoElement;

            if (elementReplaced) {
                this.listenVideoEvents();
            }
        }
    }, {
        key: 'createVideoControl',
        value: function createVideoControl() {
            var _this3 = this;

            if (!this.backgroundElement) {
                return;
            }

            // main controls bar
            this.controlsBar.create(this.backgroundElement, this.wap.config);
            this.controlsBar.on(ControlsBar.EVENTS.PLAY_PAUSE_CLICK, this.onPlayPauseClick.bind(this));
            this.controlsBar.on(ControlsBar.EVENTS.VOLUME_CLICK, this.onVolumeClick.bind(this));
            this.controlsBar.on(ControlsBar.EVENTS.VOLUME_CHANGE, function (percent) {
                _this3.setupHideControlsTimer();

                settings.volume = percent; // save volume to localStorage
                _this3.setVolume(percent); // change volume in video element
            });
            this.controlsBar.on(ControlsBar.EVENTS.FULLSCREEN_CLICK, this.onFullScreenClick.bind(this));
            this.controlsBar.on(ControlsBar.EVENTS.TIME_SEEK_START, function () {
                return _this3.onTimeBarSeekStart();
            });
            this.controlsBar.on(ControlsBar.EVENTS.TIME_SEEK, function (percent) {
                return _this3.onTimeBarSeek(percent);
            });
            this.controlsBar.on(ControlsBar.EVENTS.TIME_SEEK_END, function () {
                return _this3.onTimeBarSeekEnd();
            });

            // fullscreen change event bindings
            document.addEventListener('fullscreenchange', this.onFullScreenChangeEvent.bind(this), false);
            document.addEventListener('webkitfullscreenchange', this.onFullScreenChangeEvent.bind(this), false);
            document.addEventListener('mozfullscreenchange', this.onFullScreenChangeEvent.bind(this), false);
            document.addEventListener('msfullscreenchange', this.onFullScreenChangeEvent.bind(this), false);

            this.listenVideoEvents();

            this.setVolumeUI(this.videoElement.volume);
        }
    }, {
        key: 'listenVideoEvents',
        value: function listenVideoEvents() {
            this.videoElement.addEventListener(MEDIA_EVENTS.play, this.onThisPlayEvent);
            this.videoElement.addEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
            this.videoElement.addEventListener(MEDIA_EVENTS.timeupdate, this.onTimeupdateEvent.bind(this));
            this.videoElement.addEventListener(MEDIA_EVENTS.progress, this.onProgressEvent.bind(this));
            this.videoElement.addEventListener(MEDIA_EVENTS.canplaythrough, this.onCanPlaythroughEvent.bind(this));
            this.videoElement.addEventListener(MEDIA_EVENTS.durationchange, this.onDurationchangeEvent.bind(this));
            this.videoElement.addEventListener(MEDIA_EVENTS.loadstart, this.onLoadstartEvent.bind(this));
        }
    }, {
        key: 'loadCSS',
        value: function loadCSS(parent) {
            var styleElement = document.createElement('style');
            styleElement.innerHTML = styles.css;
            parent.appendChild(styleElement);
        }
    }, {
        key: 'isInViewport',
        value: function isInViewport() {
            return uiUtils.isElementPartialyInViewport(this.backgroundElement);
        }
    }, {
        key: 'seekToTime',
        value: function seekToTime(time) {
            var _this4 = this;

            // 1 = HAVE_METADATA - metadata for the audio/video is ready
            if (this.videoElement.readyState < 1) {
                var readyMetadata = function readyMetadata() {
                    _this4.videoElement.currentTime = time;
                    _this4.videoElement.removeEventListener(MEDIA_EVENTS.loadedmetadata, readyMetadata);
                };
                this.videoElement.addEventListener(MEDIA_EVENTS.loadedmetadata, readyMetadata);
            } else {
                this.videoElement.currentTime = time;
            }
            this.wap.mainFinished = false;
        }
    }, {
        key: 'showAdultDialog',
        value: function showAdultDialog() {
            var _this5 = this;

            var dialog = new AdultWarningDialog();
            dialog.create(this.backgroundElement);
            dialog.on(AdultWarningDialog.EVENTS.AGREED, function () {
                _this5.showUI();
                if (_this5.wap.config.isAutoplay()) {
                    _this5.wap.play();
                }
            });
            dialog.on(AdultWarningDialog.EVENTS.REJECT, function () {
                window.location = document.referrer && document.referrer !== window.location ? document.referrer : 'https://google.com';
            });
        }
    }, {
        key: 'showUI',
        value: function showUI() {
            this.createPoster();
            this.showStartButton();

            this.createSharingUI();

            this.createVideoControl();
            this.showShareButton();
            if (this.wap.config.isNoUI()) {
                this.controlsBar.hide(true);
            }
        }
    }, {
        key: 'showVideoControls',
        value: function showVideoControls() {
            if (this.wap.config.isNoUI()) {
                return;
            }

            this.controlsBar.show();
            this.setupHideControlsTimer();
        }
    }, {
        key: 'hideVideoControls',
        value: function hideVideoControls(isInstant) {
            this.controlsBar.hide(isInstant);
        }
    }, {
        key: 'isVideoControlVisible',
        value: function isVideoControlVisible() {
            return this.controlsBar.isVisible();
        }
    }, {
        key: 'setupHideControlsTimer',
        value: function setupHideControlsTimer(timeout) {
            var _this6 = this;

            if (ua.isMobile && this.wap.currentVideoIsAd() || this.wap.currentVideoType === VIDEO_STAGE.NO_VIDEO) {
                return;
            }

            timeout = timeout || 2500;
            clearTimeout(this.hideControlsTimer);
            this.hideControlsTimer = setTimeout(function () {
                if (ua.isMobile && _this6.wap.currentVideoIsAd()) {
                    return;
                }

                if (!_this6.videoElement.paused) {
                    _this6.controlsBar.hide();
                }
            }, timeout);
        }
    }, {
        key: 'showYoutubePlayer',
        value: function showYoutubePlayer() {
            if (this.videoElement !== this.youtubePlayer) {
                this.videoElement.style.visibility = 'hidden';
                this.videoElement.style.display = 'none';
                this.videoElement.removeEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
                this.videoElement.pause();

                if (this.youtubePlayer) {
                    console.log('[alfa] change videoElement to this.youtubePlayer');

                    this.videoElement = this.youtubePlayer;
                    // this.videoElement.style.visibility = 'visible';
                    // this.videoElement.style.display = 'inline';
                    this.videoElement.addEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);

                    this.controlsBar.totalTime.setTime(this.videoElement.duration);
                } else {
                    console.log('[alfa] change videoElement to null');

                    this.videoElement = null;
                }
            }
        }
    }, {
        key: 'showHTML5Player',
        value: function showHTML5Player() {
            var HTML5Player = this.HTML5Player;
            var videoElement = this.videoElement;
            if (videoElement !== HTML5Player) {
                videoElement.style.visibility = 'hidden';
                videoElement.style.display = 'none';
                videoElement.removeEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
                videoElement.removeEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
                videoElement.removeEventListener(MEDIA_EVENTS.play, this.onThisPlayEvent);
                if (!videoElement.paused) videoElement.pause();

                console.log('[alfa] change videoElement to HTML5Player');

                this.videoElement = HTML5Player;
                HTML5Player.style.visibility = 'visible';
                HTML5Player.style.display = 'inline';
                HTML5Player.style.width = '100%';
                HTML5Player.style.height = '100%';

                HTML5Player.addEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
                HTML5Player.addEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
                HTML5Player.addEventListener(MEDIA_EVENTS.play, this.onThisPlayEvent);
                HTML5Player.removeEventListener(MEDIA_EVENTS.error, this.onVideoError);
                if (this.youtubePlayer) this.youtubePlayer.style.visibility = 'hidden';
            }
        }
    }, {
        key: 'showVPAIDPlayer',
        value: function showVPAIDPlayer() {
            var _this7 = this;

            var vpaidPlayer = this.VPAIDPlayer;

            if (!vpaidPlayer) {
                if (ua.isMobile) this.videoElement.load();
                vpaidPlayer = this.VPAIDPlayer = new VPAIDPlayer(this.mediaSpan, this.HTML5Player, this.wap);
                vpaidPlayer.addEventListener(MEDIA_EVENTS.play, this.onThisPlayEvent);
                vpaidPlayer.addEventListener(MEDIA_EVENTS.timeupdate, this.onTimeupdateEvent.bind(this));
                vpaidPlayer.addEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
                vpaidPlayer.addEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
                vpaidPlayer.addEventListener(MEDIA_EVENTS.durationchange, this.onDurationchangeEvent.bind(this));
                vpaidPlayer.addEventListener(MEDIA_EVENTS.error, function (error) {

                    _this7.onVideoError(error);
                });

                vpaidPlayer.addEventListener(PLAYER_EVENTS.AD_CLICK_THROUGH, this.wap.onClickThrough.bind(this.wap));
                vpaidPlayer.addEventListener(PLAYER_EVENTS.AD_CLICK_THROUGH, function () {
                    _this7.wap.emit(PLAYER_EVENTS.AD_CLICK_THROUGH);
                });
            }

            if (this.videoElement !== this.VPAIDPlayer) {
                this.HTML5Player.style.visibility = 'visible';
                this.HTML5Player.style.display = 'inline';
                this.HTML5Player.removeEventListener(MEDIA_EVENTS.pause, this.onThisPauseEvent);
                this.HTML5Player.removeEventListener(MEDIA_EVENTS.ended, this.onPlayFinished);
                this.HTML5Player.removeEventListener(MEDIA_EVENTS.play, this.onThisPlayEvent);
                this.HTML5Player.removeEventListener(MEDIA_EVENTS.error, this.onVideoError);
                this.HTML5Player.pause();

                this.hidePoster();

                console.log('[alfa] change videoElement to this.VPAIDPlayer');

                this.videoElement = this.VPAIDPlayer;
                this.videoElement.style.visibility = 'visible';
                this.videoElement.style.display = 'inline';
            }
        }
    }, {
        key: 'showShareDialog',
        value: function showShareDialog(shareUrl) {
            this.shareButton.hide();
            this.shareDialog.show(shareUrl);
        }
    }, {
        key: 'morphToAdsLayout',
        value: function morphToAdsLayout() {
            this.hideShareButton();
            this.controlsBar.morphToAdsLayout();
            this.onTimeupdateEvent();
        }
    }, {
        key: 'morphToWaitingAdsLayout',
        value: function morphToWaitingAdsLayout() {
            this.morphToAdsLayout();
            this.showLoadingIndicator();

            this.controlsBar.morphToWaitingAdsLayout();
        }
    }, {
        key: 'morphToNormalLayout',
        value: function morphToNormalLayout() {
            this.controlsBar.morphToNormalLayout();
        }
    }, {
        key: 'showCloseButton',
        value: function showCloseButton() {
            if (!this.closeButton) {
                var closeButton = this.closeButton = document.createElement('div');
                closeButton.className = 'alfa-button-close';
                closeButton.innerHTML = '&#xd7;';
                this.backgroundElement.appendChild(closeButton);
                closeButton.addEventListener('click', this.wap.onCloseClick.bind(this.wap));
            }
        }
    }, {
        key: 'hideCloseButton',
        value: function hideCloseButton() {
            if (this.closeButton) {
                this.backgroundElement.removeChild(this.closeButton);
                this.closeButton = null;
            }
        }
    }, {
        key: 'showLoadingIndicator',
        value: function showLoadingIndicator() {
            if (this.wap.config.isAndroidSDK()) return;

            if (!this.loadingIndicator) {
                this.loadingIndicator = document.createElement('div');
                this.loadingIndicator.className = styles.LOADING_INDICATOR;
                if (this.wap.config.isVPAID()) {
                    this.loadingIndicator.classList.add(styles.LOADING_INDICATOR_VPAID);
                }
                this.backgroundElement.appendChild(this.loadingIndicator);
            }
        }
    }, {
        key: 'hideLoadingIndicator',
        value: function hideLoadingIndicator() {
            if (this.loadingIndicator) {
                this.backgroundElement.removeChild(this.loadingIndicator);
                this.loadingIndicator = null;
            }
        }
    }, {
        key: 'showSkipButton',
        value: function showSkipButton(skipOffset) {
            var bg = this.backgroundElement;
            if (bg && !this.skipButton) {
                this.skipButton = new SkipButton(bg, skipOffset, this.videoElement);
                this.skipButton.create();
                this.skipButton.doSkipCallback = this.wap.onSkipAdClick.bind(this.wap);
            }
        }
    }, {
        key: 'hideSkipButton',
        value: function hideSkipButton() {
            if (this.skipButton) {
                this.skipButton.remove();
                this.skipButton = null;
            }
        }
    }, {
        key: 'showError',
        value: function showError(text) {
            this.hideLoadingIndicator();
            this.showMessage(text);
        }
    }, {
        key: 'showMessage',
        value: function showMessage(text) {
            if (this.messageDiv) {
                this.hideMessage();
            }
            this.messageDiv = document.createElement('div');
            this.messageDiv.className = 'alfa-bg-message';
            var span = document.createElement('span');
            span.innerHTML = text;
            this.messageDiv.appendChild(span);
            this.backgroundElement.appendChild(this.messageDiv);
        }
    }, {
        key: 'hideMessage',
        value: function hideMessage() {
            if (this.messageDiv) {
                this.backgroundElement.removeChild(this.messageDiv);
                this.messageDiv = null;
            }
        }
    }, {
        key: 'showStartButton',
        value: function showStartButton() {
            if (this.controlsBar.timeBar.isSeeking()) return;

            this.hideRestartButton();
            this.hideEndingScreen();
            this.hideLoadingIndicator();

            if (!this.buttonStart) {
                this.buttonStart = document.createElement('div');
                this.buttonStart.className = 'alfa-button-start';
                this.buttonStart.addEventListener(ua.isMobile ? 'touchend' : 'click', this.onPlayClick.bind(this), false);
                this.backgroundElement.appendChild(this.buttonStart);

                var bgwidth = this.backgroundElement.getBoundingClientRect().width;
                var bgheight = this.backgroundElement.getBoundingClientRect().height;

                if (bgwidth < 210 || bgheight < 210) {
                    this.buttonStart.style.width = '72px';
                    this.buttonStart.style.height = '72px';
                    this.buttonStart.style.marginLeft = '-36px';
                }
            }
        }
    }, {
        key: 'hideStartButton',
        value: function hideStartButton() {
            if (this.buttonStart) {
                this.buttonStart.parentNode.removeChild(this.buttonStart);
                this.buttonStart = null;
            }
        }
    }, {
        key: 'showNonLinear',
        value: function showNonLinear(nonLinear) {
            var _this8 = this;

            if (!this.nonLinear && this.backgroundElement) {
                this.nonLinear = new Overlay(this.backgroundElement, nonLinear);
                this.nonLinear.on(Overlay.EVENTS.CLOSE, function () {
                    return _this8.wap.onCloseNonLinearClick();
                });
                this.nonLinear.on(Overlay.EVENTS.CONTENT_CLICK, function (info) {
                    return _this8.wap.onNonLinearContentClick(info);
                });
                this.nonLinear.on(Overlay.EVENTS.VAST_ERROR, function (error) {
                    return _this8.wap.notifyVastError(error);
                });
            }
            this.nonLinear.show();
        }
    }, {
        key: 'hideNonLinear',
        value: function hideNonLinear() {
            if (this.nonLinear) {
                this.nonLinear.remove();
                this.nonLinear = null;
            }
        }
    }, {
        key: 'createSharingUI',
        value: function createSharingUI() {
            var _this9 = this;

            // create only if allowed
            if (this.wap.config.isNoSharingUI()) {
                return;
            }

            this.shareButton.create(this.backgroundElement);
            this.shareButton.on(ShareButton.EVENTS.CLICK, function () {
                if (_this9.videoElement.currentTime === _this9.videoElement.duration) return;
                _this9.wap.pause();
                _this9.wap.shareCurrentVideo();
            });

            this.shareDialog.create(this.backgroundElement);
            this.shareDialog.on(ShareDialog.EVENTS.DONE, function () {
                _this9.showShareButton();
            });
        }
    }, {
        key: 'showShareButton',
        value: function showShareButton() {
            if (this.wap.currentVideoIsAd() || this.wap.config.isVPAID() || this.wap.config.isAdOnly()) return;

            if (this.videoElement.currentTime >= this.videoElement.duration && !isNaN(this.videoElement.duration)) return;

            if (!this.wap.config.getVideoFile()) return;

            if (!this.videoElement.error && !this.shareDialog.isVisible()) {
                this.shareButton.show();
            }
        }
    }, {
        key: 'hideShareButton',
        value: function hideShareButton() {
            this.shareButton.hide();
            this.shareDialog.hide();
        }
    }, {
        key: 'showRestartButton',
        value: function showRestartButton(parent) {
            if (this.controlsBar.timeBar.isSeeking()) {
                return;
            }

            parent = parent || this.backgroundElement;
            this.hideStartButton();

            if (!this.restartButton) {
                this.restartButton = document.createElement('div');
                this.restartButton.className = 'alfa-button-restart';
                parent.appendChild(this.restartButton);

                this.restartButton.addEventListener('click', this.doRestart.bind(this));
            }
            return this.restartButton;
        }
    }, {
        key: 'hideRestartButton',
        value: function hideRestartButton() {
            if (this.restartButton !== void 0) {
                this.restartButton.parentNode.removeChild(this.restartButton);
                this.restartButton = void 0;
            }
        }
    }, {
        key: 'doRestart',
        value: function doRestart() {
            if (!this.wap.isAllowYoutubeWrapper() && this.wap.config.getYoutubeID()) {
                window.location = this.wap.config.getVideoFile();
                return;
            }

            if (!ua.isIOS || ua.isIOSSmall) {
                this.mediaSpan.classList.remove(styles.OPACITY_HIDDEN);
            }

            if (this.videoMain.error !== null) {
                var curTime = this.videoMain.currentTime;
                var src = this.videoMain.src;
                this.videoMain.src = '';
                this.videoMain.src = src;
                this.videoMain.currentTime = curTime;
            } else {
                this.videoMain.currentTime = 0;
            }

            this.wap.mainFinished = false;
            this.wap.mainVideoTime = 0;
            this.videoElementPlay();
            this.showShareButton();
        }
    }, {
        key: 'showEndingScreen',
        value: function showEndingScreen() {
            console.log('showEndingScreen');
            this.hideStartButton();
            this.hideShareButton();

            if (!ua.isIOS || ua.isIOSSmall) {
                this.mediaSpan.classList.add(styles.OPACITY_HIDDEN);
            }
            this.showPoster();
            if (this.endingScreen === void 0) {
                this.endingScreen = document.createElement('div');
                this.endingScreen.className = 'alfa-ending-screen';

                // if sharing UI is allowed in config
                if (!this.wap.config.isNoSharingUI()) {
                    var shareDiv = document.createElement('div');
                    shareDiv.className = 'alfa-share-div';
                    this.endingScreen.appendChild(shareDiv);

                    var sharePanel = new ShareDialog(true);
                    sharePanel.create(shareDiv);
                    sharePanel.show(this.wap.config.getShareUrl(this.wap.pui));

                    if (ua.isIOSSmall) {
                        shareDiv.style.height = '100%';
                    }
                }

                if (!ua.isIOSSmall) {
                    var restartButton = this.showRestartButton(this.endingScreen);
                    restartButton.classList.add('alfa-small-restart');
                }

                if (this.backgroundElement.offsetWidth < 320 || this.backgroundElement.offsetHeight < 240) {
                    var w = this.backgroundElement.offsetWidth - 20;
                    var h = Math.round(w * 3 / 5);
                    if (h > this.backgroundElement.offsetHeight - 60) {
                        h = this.backgroundElement.offsetHeight - 50;
                        w = Math.round(h * 5 / 3);
                    }
                    this.endingScreen.style.width = w + 'px';
                    this.endingScreen.style.height = h + 'px';
                }
                this.backgroundElement.appendChild(this.endingScreen);
                if (ua.isIOSSmall) {
                    this.hideRestartButton();
                    this.controlsBar.hide();
                    this.endingScreen.style.bottom = '0';
                    this.endingScreen.style.height = '120px';
                }
            }

            this.controlsBar.timeBar.setPlayPosition(100);
        }
    }, {
        key: 'hideEndingScreen',
        value: function hideEndingScreen() {
            if (this.endingScreen !== void 0) {
                this.endingScreen.parentNode.removeChild(this.endingScreen);
                this.endingScreen = void 0;
            }
        }
    }, {
        key: 'videoElementPlay',
        value: function videoElementPlay() {
            this.hideMessage();
            this.hideEndingScreen();
            this.hideRestartButton();
            this.hideEndingScreen();

            if (this.wap.config.isVPAID()) {
                this.controlsBar.showPauseButton();
            }

            this.videoElement.play();
        }
    }, {
        key: 'disablePlay',
        value: function disablePlay() {
            this.controlsBar.off(ControlsBar.EVENTS.PLAY_PAUSE_CLICK);
        }
    }, {
        key: 'calculateBufferWidth',
        value: function calculateBufferWidth() {
            if (this.wap.config.isVPAID()) return;

            var len = this.videoElement.buffered.length;

            if (len > 0) {
                var lastSec = this.videoElement.buffered.end(len - 1);
                var duration = this.videoElement.duration;
                var percent = lastSec / duration * 100;
                if (percent > this.controlsBar.timeBar.getBufferedPosition()) {
                    this.controlsBar.timeBar.setBufferedPosition(percent);
                }
            } else {
                this.controlsBar.timeBar.setBufferedPosition(0);
            }
        }
    }, {
        key: 'setVolume',
        value: function setVolume(vol) {
            this._volume = vol;
            if (ua.isIOS || ua.isUCBrowser) return;

            if (this.videoElement.volume > vol && vol === 0) {
                this.wap.onMute();
            } else if (this.videoElement.volume === 0 && vol > 0) {
                this.wap.onUnmute();
            }
            //this.videoElement.volume = vol;
            this.HTML5Player.volume = vol;
            if (this.youtubePlayer) this.youtubePlayer.volume = vol;
            if (this.VPAIDPlayer) this.VPAIDPlayer.volume = vol;

            this.wap.emit(MEDIA_EVENTS.volumechange, vol);
            this.setVolumeUI(vol);
        }
    }, {
        key: 'setVolumeUI',
        value: function setVolumeUI(vol) {
            this._volume = vol;
            this.controlsBar.updateVolume(vol);
        }
    }, {
        key: 'getVolume',
        value: function getVolume() {
            return this.videoElement.volume;
        }
    }, {
        key: 'createPoster',
        value: function createPoster() {
            if (this.videoPoster) {
                return;
            }

            var posterUrl = this.wap.config.getPosterUrl();
            if (posterUrl) {
                this.videoPoster = document.createElement('div');
                this.videoPoster.className = 'alfa-video-poster';
                this.videoPoster.style.backgroundImage = 'url(' + posterUrl + ')';
                this.backgroundElement.appendChild(this.videoPoster);
            }
        }
    }, {
        key: 'showPoster',
        value: function showPoster() {
            if (this.videoPoster) {
                this.videoPoster.style.visibility = 'visible';
            }
        }
    }, {
        key: 'hidePoster',
        value: function hidePoster() {
            if (this.videoPoster) {
                // this.backgroundElement.removeChild(this.videoPoster);
                // this.videoPoster = null;
                this.videoPoster.style.visibility = 'hidden';
            }
        }
    }, {
        key: 'isSeekingNow',
        get: function get() {
            return this.controlsBar.timeBar.isSeeking();
        }
    }]);

    return UIManager;
}();

// ************************************** Events ***********************************************


UIManager.prototype.onContextMenuRequested = function (e) {
    // if menu requested on our UI
    if (!uiUtils.isChildOf(e.toElement, this.backgroundElement)) {
        return;
    }
    e.preventDefault();

    var items = [{
        id: 'about_player',
        text: 'About Web Alfa player',
        href: 'http://www.alfaplayer.com/' + (this.wap.config.isVPAID() ? 'share/' : '')
    }];
    ContextMenu.showAt(e.x, e.y, items, this.backgroundElement);
};

UIManager.prototype.onCheckCurrentPlayer = function () {
    var id = settings.currentPlay || this.randomId;
    if (id !== this.randomId && this.videoElement && !this.videoElement.paused) {
        this.videoElement.pause();
    }
    setTimeout(this.onCheckCurrentPlayer.bind(this), CHECK_PLAYER_TIMEOUT);
};

UIManager.prototype.onBuffering = function () {
    console.log('OnBuffering');
    this.hidePoster();
    this.controlsBar.showPauseButton();

    this.mediaSpan.classList.remove(styles.OPACITY_HIDDEN);
};

UIManager.prototype.onWindowMessage = function (e) {
    var data = e.data + '';
    if (data.indexOf('ALFAPLAYER_PLAY_EVENT') === 0) {
        if (parseFloat(data.split(':')[1]) !== this.randomId) {
            this.wap.pause();
        }
    }
};

UIManager.prototype.onFullScreenChangeEvent = function () {
    if (uiUtils.isFullScreen()) {
        //this.backgroundElement.classList.add('alfa-full-screen');
    } else {
        this.backgroundElement.classList.remove('alfa-full-screen');
    }

    if (this.VPAIDPlayer) this.VPAIDPlayer.onParentResize();
};

UIManager.prototype.onFullScreenClick = function () {
    this.setupHideControlsTimer();

    if (!uiUtils.isFullScreen() && !this.backgroundElement.classList.contains('alfa-full-screen')) {
        this.backgroundElement.classList.add('alfa-full-screen');
        if (ua.isIOS) {
            uiUtils.showElementFullsceen(this.videoElement);
        } else {
            uiUtils.showElementFullsceen(this.backgroundElement);
        }

        this.wap.onEnterFullscreen();
    } else {
        this.backgroundElement.classList.remove('alfa-full-screen');
        uiUtils.cancelFullScreen();

        this.wap.onExitFullscreen();
    }
    //requestFullScreen
};

UIManager.prototype.onVolumeClick = function () {
    console.log('[alfa] on volume button click');

    if (this._volume > 0) {
        // mute
        this._previousVolume = this._volume;
        settings.volume = 0;
        this.setVolume(0);
    } else if (this._previousVolume > 0) {
        // unmute
        settings.volume = this._previousVolume;
        this.setVolume(this._previousVolume);
    } else {
        settings.volume = 1;
        this.setVolume(1);
    }
};

UIManager.prototype.onPlayClick = function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (!this.wap.config.isVPAID()) {
        settings.currentPlay = this.randomId;
    }

    this.wap.play();
};

UIManager.prototype.onPlayPauseClick = function () {
    this.setupHideControlsTimer();

    if (this.wap.isPaused()) {
        if (!this.wap.config.isVPAID()) {
            settings.currentPlay = this.randomId;
        }

        if (!this.wap.currentVideoIsAd() && !(this.videoElement.currentTime < this.videoElement.duration) && !this.wap.initialState && !isNaN(this.videoElement.duration)) {
            this.doRestart();
        } else {
            this.wap.play();
        }
    } else {
        this.wap.pause();
    }
};

UIManager.prototype.onPauseEvent = function () {
    if (this.controlsBar.timeBar.isSeeking()) return;

    this.controlsBar.showPlayButton();
    this.showVideoControls();
    this.hideLoadingIndicator();

    if (this.wap.currentVideoType === VIDEO_STAGE.NO_VIDEO) return;

    if (!this.wap.currentVideoIsAd()) {
        if (this.videoElement.error !== null) this.showRestartButton();else if (this.videoElement.currentTime < this.videoElement.duration && !this.wap.mainFinished) {
            this.showStartButton();
            console.log('Show start button on pause', this.videoElement.currentTime, this.videoElement.duration);
        }
    } else if (this.videoElement.currentTime < this.videoElement.duration) {
        this.showStartButton();
    }

    this.wap.onPauseEvent();
};

UIManager.prototype.onPlayEvent = function () {
    this.hideStartButton();
    this.hideEndingScreen();
    this.hideRestartButton();
    this.hidePoster();
    this.controlsBar.showPauseButton();
    this.wap.onPlayEvent();
    var mediaSpan = this.mediaSpan;
    if (mediaSpan) {
        this.mediaSpan.classList.remove(styles.OPACITY_HIDDEN);
    }

    if (!this.wap.config.isVPAID()) {
        settings.currentPlay = this.randomId;

        var sendplayevent = function (wnd) {
            wnd.postMessage('ALFAPLAYER_PLAY_EVENT:' + this.randomId, '*');
        }.bind(this);
        sendplayevent(window.self);
    }
};

UIManager.prototype.onDurationchangeEvent = function () {
    this.controlsBar.totalTime.setTime(this.videoElement.duration);
    this.wap.emit(MEDIA_EVENTS.durationchange, this.videoElement.duration);
};

UIManager.prototype.resetTimeAndSeek = function () {
    this.controlsBar.totalTime.setTime(0);
    this.controlsBar.currentTime.setTime(0);
    this.controlsBar.timeBar.setPosition(0);
};

UIManager.prototype.onLoadstartEvent = function () {
    this.controlsBar.totalTime.setTime(0);
    if (!this.controlsBar.isAdsLayout()) {
        this.controlsBar.currentTime.setTime(0);
    }
    // this.controlsBar.timeBar.setPosition(0);
};

UIManager.prototype.onTimeupdateEvent = function () {
    var duration = this.videoElement.duration;
    var curTime = this.videoElement.currentTime;

    if (ua.isIE) this.hideLoadingIndicator();

    if (this.controlsBar.isAdsLayout()) {
        if (duration >= curTime) {
            var remain = duration - curTime;
            if (remain > 0) this.controlsBar.currentTime.setText('Ad remains:', remain);else this.controlsBar.currentTime.setText('');
        } else this.controlsBar.currentTime.setText('');
        return;
    }
    if (this.videoElement !== this.videoMain) return;

    this.controlsBar.currentTime.setTime(curTime);
    // TODO: why there is TimeBar recalculating?
    // if (curTime > 3600) {
    //      this.controlsBar.calculateSeekBarWidth();
    // }

    if (this.videoElement.style && this.videoElement.style.display) this.videoElement.style.display = null;

    var percent = curTime / duration * 100;
    this.controlsBar.timeBar.setPlayPosition(percent);
};

UIManager.prototype.onProgressEvent = function () {
    this.calculateBufferWidth();
};

UIManager.prototype.onCanPlaythroughEvent = function () {
    this.calculateBufferWidth();
};

UIManager.prototype.onMouseOverPlayer = function () {
    if (!ua.isMobile) {
        this.showVideoControls();
    }
};

UIManager.prototype.onMouseOutOfPlayer = function (event) {
    var root = this.backgroundElement.parent || this.backgroundElement;
    if (uiUtils.isChildOf(event.relatedTarget, root)) {
        return;
    }

    if (!ua.isMobile && !this.videoElement.paused && !isNaN(this.videoElement.duration)) {
        this.setupHideControlsTimer(300);
    }

    if (this.shareDialog.isVisible()) {
        this.shareDialog.hide();
        if (!this.wap.mainFinished) this.showShareButton();
    }
};

UIManager.prototype.onTimeBarSeekStart = function () {
    if (!this.videoElement) {
        return;
    }

    this.wasPlayingBeforeSeek = this.videoElement.paused === false;
};

UIManager.prototype.onTimeBarSeek = function (percent) {
    if (!isNaN(this.videoElement.duration)) {
        if (ua.isMobile) {
            this.setupHideControlsTimer();
        }

        // rewind current player
        // HINT: rewinding not working if "Disable Cache" is set in browser DevTools
        var newTime = this.videoElement.duration * percent / 100;
        this.videoElement.currentTime = newTime;
    }
};

UIManager.prototype.onTimeBarSeekEnd = function () {
    if (this.wasPlayingBeforeSeek && this.videoElement.currentTime < this.videoElement.duration && !isNaN(this.videoElement.duration)) this.videoElementPlay();

    if (this.videoElement.currentTime >= this.videoElement.duration && !isNaN(this.videoElement.duration)) {
        this.wap.onPlayFinished();
        this.onPauseEvent();
    } else if (!this.wasPlayingBeforeSeek) {
        this.showStartButton();
    }
};

module.exports = UIManager;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MEDIA_EVENTS = __webpack_require__(1).MEDIA_EVENTS;

var SkipButton = function () {
    function SkipButton(parentElement, skipOffset, videoElement) {
        _classCallCheck(this, SkipButton);

        this.skipButton = null;
        this.parentElement = parentElement;
        this.skipText = null;
        this.skipTime = 999;
        this.doSkipCallback = null;
        this.skipOffset = skipOffset;
        this.videoElement = videoElement;

        videoElement.addEventListener(MEDIA_EVENTS.timeupdate, this.onTimeupdateEvent.bind(this));
    }

    _createClass(SkipButton, [{
        key: 'create',
        value: function create() {
            var skipButton = this.skipButton = document.createElement('div');
            skipButton.id = 'alfa-skip-button';
            skipButton.className = 'alfa-skip-button';

            var skipText = this.skipText = document.createElement('span');
            skipText.className = 'alfa-skip-button-text';
            skipButton.appendChild(skipText);
            this.parentElement.appendChild(skipButton);

            skipButton.addEventListener('click', this.onSkipClick.bind(this));
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.parentElement.removeChild(this.skipButton);
        }
    }, {
        key: 'setRemainTime',
        value: function setRemainTime(time) {
            this.skipTime = time;
            if (time > 0) {
                this.skipText.innerHTML = 'Skip Ad in ' + time;
            } else {
                this.skipText.innerHTML = 'Skip Now';
            }
        }
    }, {
        key: 'onSkipClick',
        value: function onSkipClick() {
            if (this.skipTime <= 0 && this.doSkipCallback) {
                this.doSkipCallback();
            }
        }
    }, {
        key: 'onTimeupdateEvent',
        value: function onTimeupdateEvent() {
            var curTime = this.videoElement.currentTime;
            var skipTime = Math.round(this.skipOffset - curTime);
            this.setRemainTime(skipTime);
        }
    }]);

    return SkipButton;
}();

module.exports = SkipButton;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var errors = __webpack_require__(4);

var EVENTS = {
    CLOSE: 'close',
    CONTENT_CLICK: 'content_click',
    VAST_ERROR: 'vast_error'
};

var Overlay = function (_EventSystem) {
    _inherits(Overlay, _EventSystem);

    function Overlay(bg, overlayInfo) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this));

        _this.overlayInfo = overlayInfo;
        _this.parentElement = bg;
        _this.overlayRoot = null;
        _this.closeButton = null;
        _this.contentFrame = null;
        return _this;
    }

    _createClass(Overlay, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            var overlayRoot = this.overlayRoot = document.createElement('div');
            overlayRoot.className = 'alfa-overlay-root';

            var closeButton = this.closeButton = document.createElement('div');
            closeButton.className = 'alfa-overlay-close-btn';

            var contentFrame = this.contentFrame = document.createElement('div');
            contentFrame.className = 'alfa-overlay-content-frame';

            if (__isValidResource(this.overlayInfo)) {
                var content = document.createElement('img');
                content.src = this.overlayInfo.staticResource;
                content.style.width = '100%';
                content.style.height = '100%';

                // emit VAST error if target resource cannot be loaded
                content.onerror = function () {
                    var error = errors.createVastError(errors.VAST.NONLINEAR_FETCH, 'NonLinear resource \'' + content.src + '\' is not accessible.');
                    _this2.emit(EVENTS.VAST_ERROR, error);
                };

                // content click listener
                content.addEventListener('click', function () {
                    window.open(_this2.overlayInfo.clickThrough, '_blank');
                    _this2.emit(EVENTS.CONTENT_CLICK, _this2.overlayInfo);
                });
                contentFrame.appendChild(content);
            }

            overlayRoot.appendChild(contentFrame);
            overlayRoot.appendChild(closeButton);

            this.updateGeometry();

            this.parentElement.appendChild(overlayRoot);

            // close button click listener
            closeButton.addEventListener('click', function () {
                _this2.emit(EVENTS.CLOSE);
            });
        }
    }, {
        key: 'updateGeometry',
        value: function updateGeometry() {
            var availableWidth = this.parentElement.offsetWidth - 30;
            var availableHeight = this.parentElement.offsetHeight - 50;
            var scalerW = availableWidth / this.overlayInfo.width;
            var scalerH = availableHeight / this.overlayInfo.height;

            var minScaler = scalerH < scalerW ? scalerH : scalerW;

            this.width = minScaler * this.overlayInfo.width;
            this.height = minScaler * this.overlayInfo.height;

            this.overlayRoot.style.width = this.width + 'px';
            this.overlayRoot.style.height = this.height + 'px';
            this.overlayRoot.style.bottom = '40px';
            this.overlayRoot.style.left = Math.round((this.parentElement.offsetWidth - this.width) / 2) + 'px';
        }
    }, {
        key: 'show',
        value: function show() {
            if (!this.overlayRoot) {
                this.create();
            }

            this.overlayRoot.style.visibility = 'visible';
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.parentElement.removeChild(this.overlayRoot);
        }
    }]);

    return Overlay;
}(EventSystem);

function __isValidResource(info) {
    return info.staticResource && (info.creativeType === null || typeof info.creativeType === 'string' && info.creativeType.indexOf('image') >= 0);
}

Overlay.EVENTS = EVENTS;
module.exports = Overlay;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes alfa-spin{to{-webkit-transform:rotate(1turn)}}@keyframes alfa-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.alfa-root{background:#000}.alfa-root div{-webkit-tap-highlight-color:transparent}.alfa-video-background{position:fixed;z-index:2147483647;top:0;left:0;right:0;bottom:0}.alfa-media-span{position:absolute;top:0;left:0;width:100%;height:100%}.alfa-noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.alfa-ctrl-button-icon{background-position:50% 50%;background-size:20px 20px;background-repeat:no-repeat;cursor:pointer;width:24px;margin:0 2px}.alfa_fillparent{position:absolute;left:0;top:0;width:100%;height:100%}.alfa-video-poster{left:0;top:0;bottom:0;right:0;background-size:contain;background-position:50% 50%}.alfa-loading-indicator,.alfa-video-poster{position:absolute;background-repeat:no-repeat}.alfa-loading-indicator{-webkit-animation:alfa-spin 3s linear infinite;animation:alfa-spin 4s linear infinite;pointer-events:none;top:50%;left:50%;margin-top:-25px;margin-left:-25px;width:50px;height:50px;background-size:50px 50px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABUFBMVEUAAAD///////////87Ozv9/f3////////x8fH///9lZWU8NjZ9fX3+/v42NjbX1dU3Nzfu7u42NjZDQ0NGRUVjY2N2dnbe3t45MTD+/v5UVFROTU3///+EhIRFRUVKSkpTVVWwsLC9vb3Kyso3Nzc9PT1xcXFubm5bXFyfn5+urq4+Pj65ubl+goKoqKjExMSbm5s+Pj4tLS10HQR1HwWAMRuJiYlnZ2fp6el1HwmFOiKocFyxhnW3lIeTk5OTk5NnZ2d0HwF0HQl8KhSNRzC3jHpNTU2YlZWooJzLt6+2j4JzJAd2IQ52Igp4JQeENh2LQyyTTzujaVa6jXnDm4rNtKm+nJGWlpbDtKqqpJ96Jwx8KhF9LBl4JQZ5JAaKQS16KhB3IgOLRCybXUuPSi+YV0FvFgWpcmCjalXDno6daVK/p595MBh3IgB1HwByGwDlaNL7AAAAbXRSTlMAFBIDAw8MARUFLQYvCwgcFhQMJx0wKhcKCSwhBy0hKyUiIRwUES8uKiYlIx8lIx4dGg349cwpJxrruFU6MCgmI/3x3ZlHKCQjHRoO5trDwKWOdT88LishGRbs49PLyLiympmLhWllYmJNIiAVjEADAwAAA51JREFUSMeNlld72jAUhn2MDV5g4w0GswkjZTQEmrRJupvRvffeLc7/v6sseZCA03w38Mh6fZbOkaklMbbidoS1tTVBKDpKjqH+I+aiY0g9mcvTSHlO7klFXT0TaFWkIUfDgmirLmkXE4lcpSzjbWw6EIvxhqTlVhOKMeTQ/gKfyoRLmRSf9am60VzlVL/sG+CXn5QQxEnuUh7EYo8GurTafgG9q3ubOU2sA7CpyB+iyMMUMlSriCe8wkSG7C+xdJguOs1nCMMCDLRFO/1aRBTwfu4SEsZYPmK6bkwoZRoT5AnIe+ZVfTzWZ2bXT3o6eiI1o3oYoQ0emaibelSFi+5uA8dI4uEMMQiksg50ChPIo6l+Ikqx2uXip+saWW2hgpSCNctUT9erWbYCOwVUHhsvVhpAB5YtYcXJUMuB3xkahn28IgVG0sjGEoHd2AUo4HMA0PZ36HWgA7d2E47suA6AXaOhN/aryOFXZFhouElN0eEg7f/JglVkKFvKA0+MTEUqQa0B0Bm8iWvblNIjOczCJSe590wOvzcF0G1SrozSgf2qtahE6TJkg5zplO8myfCUSUbUfWD9Xxas25SQD5ELVLLEKWRzR0dHBTovUAIdIlfPQJip/Pnj+3f3t3+wBrV2PuTCt+M5kre1c37kqzf3df2K79i5Yrlwcx4i5ww/N/pAkLvPO1QRJZlkvKsmI0r9DUHu/alSjl9KfI5lPTmU6q9rmPAeHDjRgSkBZzKJldx7SIwcfxk0UbvQwBPPakoSUt15TZCNW6gJGcOCLDnYnCkmHOQ7Dz2C3DgsMkGLETON6krXxNnlCSG8m6OxP3ikeFrUnJWx79yYE02e4kambqOchdN64CzZyVWfb3oBsv1KI/Ot7E8DEg4MO+qpmTTbiYiNJ6gnsTQy+gjD7TpqZElsVfd/3p0HuvZo1I8GLBdeFCV/JHdnessWRbXpzvZvbW+EhLd5YIjxGM+HDM8iiJNrd/b27qw/e/xg4s1DbV0xlROXBWYIRAPRy83jeazrl1+4i0FW6ouXGF/I+vq9tUBMLo805kS10PQPchDr770I8LZiImYGiClkFtfs+1GuNq+8QMTyJc7BqTv5U1iPRwemy6xqo/YQEJSNPxW+Y58m209eCkpCt2pSg9zELIs/Rw7fHm/cuPn0VbvPJA9FTapZEOvZ41uHo7ZmU2fJ1g2p17DyWFZjYBbHPnC2GFVxOoLgf8J1nKa97NI/tVOdDOWa+vYAAAAASUVORK5CYII=)}.alfa-loading-indicator--vpaid{top:25px;right:0;left:0;width:25px;height:25px;background-size:25px 25px}.alfa-button-start{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEUAAADOzs7Q0NDPz88FBQXPz88NDQ0lJSXExMTR0dESEhKLi4sgICC8vLzLy8sxMTFGRkZoaGjNzc3JycktLS2lpaU+Pj7Hx8d0dHSYmJi/v79AQECgoKC4uLi1tbVSUlLCwsJdXV2tra2Ojo5+fn6VlZWDg4OxsbGqqqpjY2NxcXGHh4d+fn6QkJB78sCNAAAALnRSTlMA297dAtwGDczfCmcRudYcMU/a0haWJM5chsArjrWvOsZEondifmuonDFBcVFw4zCz1QAADrdJREFUeNrtnXm3qjYQwGWSgFD2HVcQUV9tv//XK3hvO+cZIGKCes/p/HV9rcDPmcksZFn8LwKhlFqGbdve+iZe+6dhtf+4+DlCdcv20n0QHItWku1Nku7vYxDsU8+29M/H0Q1vXeV1cd6tosgFABPAbOX2B7hRtNqdizqv1p6hLz5VWoh93ly2y4xB9+hAWCvat7BWCHRYwLLl9tLk+0+EoVbs581hFbGOgDFtRBjreFi0OjS5H1sfZGbU8qpr4kQMgCCCQDr1sMhJrpX3ISx6S3Eow34IMUxYHlqWt9sYtf08KUMTiPakEDDDMsl9+y1qQWU0jgtI8SwLuE7zNrVQKw2SUkMKORatTIL0Dd5CrfXpnBFgmiJhQLLzaf0yFMTYuSZoSgVMd/daFL3DAKIpFwIdyqt8RfeCM2KoRzkHL3F7aldJRhBDPQrJkmr+wdjymxWANqsArBrfWswp1DvutGkY7FumoWi7ozefUqi130QmezD7IF/5u/ktX58IefDrZrTZ4/ilXB0OgwdU0OXqoeuunFbOxbecu08r1w1bHGBiHGDOTErRW3UAE2aBJoTZ6pDUeV75raSxfZM47T5VeV4nh1UWginMMRm0SlE/fFE72BEiuDOAW+6KU7BPY0vXaV8VrFtxug9Oxa50AYAJxq9dYFPFHOm1BDZOQaJtcaxSmyfgeey0OhbbiIDgouU1VUrSerkLo2Gso8jXHMQozDq/sYzpGdzW5xVyVGNmxQiETpH7PIWYxc8LJwTCxsyrUkZi51sgIzYVHU6+/aRbtiynQzRiYQS2ua3GPeJTZg5jkHKTpxaVqmvyTUmGUczsFFMVbl5ng+7RYVSxLj2yx1WLMnyXrJZ3ebpOQjKo9bJADFmUooTBG4XJmkpzaDAYsA4B6lzegoPDYMAFrSWR5SCDeV2eKg28epoPZqQESdRyELIs1Gfall8sCRGQKOUAl7MqZfblgmoSmg5wMLOsOatSZl91abIBkpQ+9+vUIfR7B5fLqc1OBzwFwjqmz1zwtOzVB0TJPCUPlm9J1EtClqcnfkArz2AgOv3e5KBGrJhL9+qhe+fW5ItV2/5rOfmdfvU/m788XbHP507/3bfVxDvR/Q76lGs6gXWvuj9Kp/llqFWKFTgm6SPZ7em0AWvDSF+qsOM4FsYfS7I8HFOdqiXZhX1PwDaThi776pLeAdDXF30gxF1t/lQbWHS/d/An7tWecJGghJGQxINojEXbvwX2pSYcQxnocg6CHDxIFyW1MmmdniomkXET6m2ACTh4kE7rTvGnPTsJg82D/S7rGIGQgwfplJLt/vhl0ZlJIDpajxmWA4LShgPB/63ccPalvKwDZ08fMizG+DRx59OFEKRTirttFNoX9Xcm/zQMjWuiYYGDQ8UACKIoDSp64MA040LDMvk+xgrj4DAI2pfKoGIFq54HEhtXXPAhnUQnY/EACCol2rVBRRGJcYr4J2JFLNLkEnhHbzz6EAiihLegouhtRsM7PCwFYdFLuBDCyAUHLAEIClMXVOj6QriHgsQb9/QMeEfnU2cxSBdUzn+omcqgV7zDQ3a0xth3IC5mxCDo9AL7kijyYDdiJ9bJJdwPi24lBuGcfqumUokLjXFp8MmapBCMhJNBMKgoiIsClYgUAks0rAkgKIoqFStfwrBKxAphYWtYUiAaY11QseSNK2SDKhErxHR8KgGiMKhQ3zEfVQkqRBDSxSB8UGn+NKiyAI8q6R2tc95DDulCEgSdXjaopAfeS3K9N6gTTiG5LgmCKF1QkXJ6PedUQvrCOw2WwCuEqgK5tSdqmaBCeZXAMuCvZxeMcTFdX6gAQfu6/CURVHQuvjNW2D2jAgjyMikQbE8I7GtSRgv8qGodXcJ7iGIQjbEMg4oCLyEulzp6B1MwZMmAoBCZoMJ7iXm4sxpalXBfF+eWWhD59oSVR/dPWVa/X8m6huSO9ZwuFIPIVyrp2bxX8NUatywW1oZiEBTybFAx6pBxtiWwrNWezgOCmeT0oEL3q3Hb4i0Lx17FIJhJXp7oSXoJjNpWnADjMkv1IPLtCT5Dh99sy3cElqUYBJ3+l0UlbAufFCMNb1kzgqDTY1CZblt83DYaxlvWjCAoDNsTT9oWY40xPPiaqC9FINLtCbQtc3gARsPjLEsxiHx7wkt4Jxl0EaZdrReBYFB51LauGuOcZMhFIAvoS0DQvh5+kUqDDIacxLvcm93WX0iAzBtU/O390168wf908F4GgkGla0884iSHoZ+dVktOWbZyEDHKgz1vm3OE5Xe6pd8XhyQ86q8H0dhjQUU/hneP634/rlUDj/hiEGxPCIMKb0BQf5lkvLkHcfyFBIgUijCo8Ikhg038VXbt+GHgDSDiF6mDg+wu/er5ciBJ/C4QbE8MayVOOJB1v81ptfFGEI0JgopRa70+TYMIuN7w20D49oS42w5RQLt//zwQructBNG/6nUuC6PqQNRnkpTLcb/qdrsAdl+MvB/kuz2R6lRckjAo7F6QNox8AMgtk9z0Ob3v/DCQf9sTD4OYnwqCQWUcxCzs79rxY0E0jWHPuxcEK/P11vxkkO/2hEVHQMztugNxPhvkO5O06QiIs/4BGulISHb5NQay/Rkgt8Erpj/dtBhxHXT3EdNKd589aoVLfP8wAAK3giT+3ICIb4REATH+8IBIwhW+mB8JiB+eorCwm4qj0x+ea93eY/9CJxeCGPcgUFYfkMbzMwv4N7cIYnz35z6vQrzlvYaoQsQO3WfW7FxPW1yz94Mc3wWCteEx1Yd7pr0g/ItSRgpbIYjyyQR2QVjvi930oxp07Lb6BNXxUIMu7Z+pYh7S94Fg6Bie7GT2z//BQIKqejEIWtUDU6A4V4BvV7Bq8SvE+UFwpvP0l4i19e9L3fvm78l6PQhj2fnvB2Z0WKf71u+/r3XpnouUG/vVIAzrWYHYGy4T2VOcl8Z5z6tAMD/E0DEgwqeNE8HcoPlAMHTg5ObJ84OSGCcT8Fb3GhB08liMMeTRV2twHIDGkACZddqW0cDwGOtvgTO7F4EwwnUSJ7oIbP2+oI+z5+cHwamND2Pgi0I+ocJ3PVyMmQ0ErWrqWljr5ELfWx50kjdMBSTurbVAJaYCoovgtJr5J2fKL+3DwZefUtM/+YGEtTErCGPutsbWwoSp2KR/2gNWj9y4JQuiftECjll8XY7LYMTrrMUg8q2FqavUcSkM2tbkxBFBpLrSKNMTRrQstC3gdyOYB0QQOibt4wBoWfzCS3T3GUAYy7jWwjOuzi9dRdvSuNBPVYLIb2xBuVRKQ8tCN8p6FjQoBmFca0Es44tDskDnBzYQLGWXAcE5izZVuKgdzimPe0JcXJ2kCASrDt7JJdYlkfBkCYI/jtGKQBjDquMJwVgnTqTsRmP8wKUGhHX5IYYORUMW0xpbnOnjtknyICwUToOdvskUTusVL4Vl2iaWBsGutJTEG42JFxNjIjMl40IQpaFD+uGwaEGBw5rKgODeAnJC1wf+2VAhwqCogVvbEiCMKdo3zK5d0ATBkPMSbjdBMYjS/FC83yLvIWKVMDQuMQhfdWBrQdawmEAhog0sNOI28TMguJ2AvMSNyz/XaHtEr1Z92zkZ00FI11pQtFWY0beZ06rSRctlhN8RgzBNJnSIf13xoiO63/JfIgefTgJhKrfTo/6B8D/uVpRzWEcXevam9R4BwdBxxqpDWryeHXvBPVoi/vTSty9iHdMHQRgTtBYmbzHet2/kJaWTLBJJrrYYhO9Ky4t9RQ7Oa8fF6Nu02CwDiwpAMHRQdTuWB6XZt3kxjqOjxkUY/2UnsAQguNRL5dbYpKe4QcOablwaIEkfCE54WyjlAK3XsCR2xGZIwoN8Vx24HFIZB5PYFRu3YBbqBEEIthbU62P6BszYeBkj4UHwheb8HDufSqXNuI0/DwJc1aFuM39RWSF2E+idbF8jCYIsMXSoi4MZ6TMKzkHEbtI5fF+Mv7dQ66+LdNXB376OoLc04B1EfIoKsF6Sja/f/Xi/VB8Oo/ubXg4GorNUxHkwkrBDZdwdja+Yw6gODO/N5byqDu5gZMW5vGI3XxEmOLRDqpWECs6a+c6+1ddNhkbN9bGeEvuUweChSfYsSqH24LFJkJ3sZ686SEKgrGc4W5la67oEMshBF+pIUCnn3NMVW5WXn1EdAg5lJMTMNmhfaqxqk5lEOQeSmIMHEpeNb1BFGIbflINHKJvIIUGyItoQSritEUUOo96GMNjQXyGHxD2C4YM2GYROvZfN3vV4XzshsOHDNgMliternTaoFNKibALPos+PVF6waTGG76DtKl1Z6hPC2FG05eXox/pzyvCPl3LsSFoIMbmTFpoWGG15YWBG203estBJV20p8s02MkcvnRUpVZn/HFejBzYTgBsL2pjYom4UAKOXJatjTBVnpOeQCM7PJpFzqQPfM3Q6rgnD84P64kREcJI2Cc+YaatL5ooImCZgAS1rYY7VPo1tS2+F4uO3Ytlxuq+OLUSmgYBCYxAVcySn1DtusZ084i8mC5erc5Jc81YC/1uC7tM1Sc6rZchM9ItBIWyr/IB2PDA/Q5Me1wyYELqtLJ1vWXafQjBhXBPodNksR+ajUjT8LYU8reDR/92nh78K2jzqQKX4zRKINrMQWDb+XOrAA2MTd14UAm6Ch93OJ3p6PLvAtJmEgXsWrO1RWcetNMUo6BwrrD1nF2rvG0RRi9Hs7VdhIIpaXyEvxkCU+hwBMFXKgOhcvxgDfeV4WYJJFCjDhOXlKO8bUkURZrDTBTNnLM7eJLrdVUbhcN4hzmbCri6z9cXbxfL2p8vKJSaQqaowibu6nPaetfgMoS1LWyUtQ0DNiDUB4bKtxfadSX2QUD1eB6cOhpgmAGODCAzANEkHcQrWsf5RFP8ppoMpDrsy0wh0PDcN3YRAJ2Znflm5OxQdxGepgtOM7a2r4Fonu7OTRVHkwk3c9s/MOe+S+hpUa8/+SE300FhGnKZ+0MqxuMmx+9tP09iwfgbDbzyd6IbdiqHTVn4cwTvkH0LOXpMfKg/kAAAAAElFTkSuQmCC)}.alfa-button-restart,.alfa-button-start{cursor:pointer;position:absolute;top:50%;left:50%;background-position:50% 50%;background-size:100%;margin-left:-50px;margin-top:-50px;width:100px;height:100px;background-repeat:no-repeat}.alfa-button-restart{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAABFFBMVEUAAADOzs7Pz8/V1dXU1NTW1tbR0dHQ0NDT09PX19cHBwfS0tIICAgREREODg4gICDX19fMzMwjIyMbGxsREREyMjLZ2dkICAjb29sgICC3t7fa2trDw8NFRUXExMSCgoLNzc1+fn56enrQ0NDJycmenp6WlpbJyclVVVVNTU1kZGQ+Pj45OTnBwcGqqqpfX1+mpqaSkpKDg4PGxsa+vr61tbWurq6Li4tpaWlZWVkkJCTa2tq9vb2ioqJsbGxkZGRycnI4ODiamppUVFS1tbW7u7uxsbEcHBytra2Tk5Nzc3MqKird3d26urqWlpaJiYlHR0ebm5ujo6N6enoyMjKoqKhsbGxPT0+zs7ONjY1CQkLh4eEvcY6gAAAAXHRSTlMA29zj4eTf3eDlAd8EEQob49MgFg4p5QfoI7bn0TrGlNd1b9fRmI7OSkJZNC7CplSiinvKvrOrml5QMebNsXtyaEaTZMS7rii9ooM46cimgFaqnYo/t2JawYVP7cpkZgAAAAlQSURBVGjetVp3W9pAHCY3kkvCCCtsEBkCispQUDZWcW9ta7//9yh9SO4uJMy27x992pDk/e1xqWtjuN2u/4dQYP+snc3WCoViNvt5lgqElH9LEEwNxyfpHIGyjCH88yfKNeKF3bLvHxEpgaPaZQ5DJEpAoABAJBBL1XE7/Pfm85TGDYgJEBwBRIz9rxXfX1EEduMqFIWlkCCq1g+2p8imIQLCSgCC/bXtaIK7aSwKa0LE/p+BzbPhKI5Vu8wASFMAAOw0cnoY2owjViBw3iZQ1hBR/VNIhGgyJJJgAYGnqU2itpLGwCImxLnm8dPwrFQ+CIfD5VLps1649EMoAl4O7N/1rh22TwRZwgfvvQ5TPvecJMH99jiNsGhxTWFNz4RPNc4QquwvVGLuRYl6VtyTEa9Mcy2TpaoQMNG06tO+e7lMu3FMGA3MH63mOMpDJpecr6+hfnBY1ZnuRNpVVnHsECaUWjxYMxjrfsi0JytYznKEmTd+tn6NTR1CkUXKUpaynzB5akHXBvBmc4g+i9qLbzxI0/uIf2j4e21tztKQsuyUFjrwBFN37JVcG+OgSZ9H6QXedNdkynHpEO2RwPtF/y3TamXe+hejmNfB/4eUBR86F7I2bU2waZPDezf4SJJEotPR9U4nkUDJ6/677T0+juXJKb3288TUtRmeqcY6y+BaTFgKFRBhgvzox+YtfgjNECNnDtFxbApBGvuzS+cZ34yin+xA4NCsYCLZD8zpcgKpye1deQiBGRll49Lo14+7qSsGyagqLIAaTQ4i1ipTNSNU/mlrtWli9o1P89p3Wc6Pzns6EZaA6L07a67tiKa089HzhE2HjakrBlEBJZO6sAL6zncXj6zZi+Cx1+p1v0EP48ySb4mpOKqwEkS7jfDefYWGUZClICtFQxEpxyVhRhfWgxTN8CzhhiEZPOVVOTAVwTWFMd/INj8jqMmyBufVA4yFDyKg8nXjp2y8JM0FfqSnWeeRjt79cf3y+PjykdSiCFhY7m+5Ghe6goYqhxEutAxF5DqfWN/4sEKJZOZ7LBhyK4o7FPjqX2Nd4lk6F9yjFQgM67MAaxvEpBrgozqpMi2iDwNrdodGLUnmLSnccT+eQkPqJxoO5iWcdXE4F6ioUvLWYage9XSRscgfHq7BqmBGXTWf289JhkcsNeKdANokL5wbVZ9wFr3vc79cwbkozmJDlqJiEZQNePhlwQT6fQcxgyUn7IddzXB9wT2LolOT1Vo3v2QgiVOoqkp+tRawjPxMl2iGz25p5sz0zF7hPdFwu88q5S/gz+eTyW63+/DQ/e5yxjNhnts5Z/Y6NCRXy7PejICRiHN97uvufDKJxQKBgC8YWjjkDjpMlVsuITXDB7uz2igb5jtybQMvy1nyEGQzUg4YVTLCBbDk33Inu5OoweRnlspN1XBKgEt3culxbYe3qEnSabGxpGA4JZeietFg2wLnO6Yq6BuzV1YzenTlT3JCQD20HdzUK5JA44vGk5xlaQNQxbUtLnQHp6QM/XBx+o+6bPT20rYcrMqxIGbph1/dLmWMjeDa35ok+EBMTR7ZcNScXUQnIZdSmJGIe+GtSdwvplPwB+1SnhNkkHhckWNISbZGy+ws8DpESeIzEtL00b//FUnGLC3o2mPMt/yLnUiUkMeE9x+Q5MO0qnAk7puHbzN0M2uaS6ckvLloXXFwvLt3j2aIUj8uhfJIffLhZSTU8Ywkf2AXTO361iHx/DD7o/ai2EjiHmPmMroLHYJpmbhbh2TiN5Mx8cbaUUNks1dWtjXfL9rd9Yt1SJ41dr+tAePxn6HLeKM2dCirWm9laebnWSAxzUsEsIGxrLLuy2zMte2ViCVFszVyPhxiQ87PP4UsP7sFXXlZ3CcEA4nblRzMhYJ+w64WMfM1i+dGjBlZZmv/+WpFVCoSc0nohE9yxaQkZb6sMuHcKzyS6bDxjskZzku0CE/RNoeXrFPbBqsC7BlLVJGWwqZhZO7zllEYck65A/RJded96aySJGzlHrHrNWwZhoNNYm9bLaqKgLtL3DL5JrMN9ZFZ1kdfGp4ZtYbt9jr3s61A6y7U5ZzjkMC7bQ1ia2NJBdRHFLf3AgXOL5iEv5Iytzqwkk0rooCNGYjaC6jcoOr7gdnzBGUmDrH7JiKBAnVjtpWdH0vrWDBcz6kyQiK/3ib7kzmKQTcqcXfIzw4rO3yNuNiq5TB7De6tpyj+1vPEeCQS+8rkE0TgcE9LA5u5+KpLhwmrKpHW/dyRv5zvZW77/dtMLynrosAjesM9qYwNV6FLOrYy1wP0yfeix6jtC4aemEK3ffNI9PjuVs5JnNtt+y+x7KbBl3sgrIPoB+WgZwX23e2IAHpIxLO0qG+XAEQfLS/bNY/ONJp4dMVjx10MkT6GqziQ/OZ1PPAiTcZtNaO6t2+tf93EUmWAnrRWUN+lKa/tCFop0qkmbuX3ZYgOFlLIsBWz2uSVHs+ZFYUhUEUmy/HcXvd+g1jA8pBk/DKam71/mkOI6Hc4W64gYIpQ9M6p+X7jT8gisOggadGdx9H856FdutbrdZcdEWowQFkYJhc3eZToyBoiBGmyHoX+l4uJ4prnQCYHvgo6H9VDk0WrhextNjYaZG561w8P173HzGA0sbdlN+Mgiw7rU35CdTn2OTf0SCgYDEUU52ODGrWVtHgDrRCJspxufHTgK2D6uFZ3Lxw8spCdPqU3XFT3T2T6sD5esthEauxGknsKrk/hHe6x0iAfLn3SW8OAZUG8FFmPQuE/aQn40LdCoqLMqggix2vt3eFijtkZUD2WsGQJkwnAnVrKu2K/Pqg3MBNM0orrWLnth1zlwNJhJaAsPicoFXb4FkbU+nomLl9iIHDaoEahEvY6feQqFasq5Is0bFTWj3hEBMunJbR3Va+Uw0GPxz1FyBOMpY6yhw0VqsDSna82yK7Ip2FmVg4RhlK+enl5PEX8srmXQ5h+5KIOzIZcmyA8lmjAMCaVEDgFIqoI5n9F6DDl2hBK6QoiIKwLojXbXtfmCFXiEK5FAxCu7vq2Pcdqn4qr/1uJBFGcUmwDb7nY0LC4uMeLUMu/nnlcf4lAu1AlGDFP8xGHGsfDA7frH0DxleqnDQnKGCIkToEQxDIU905+HsUYw9/DG0hVssXXk3g1n0/H48fjerscDrn+B6a57guHAx5PZKPHfgNeefE7OxINJAAAAABJRU5ErkJggg==)}.alfa-small-restart{margin:3px auto;top:70%;width:22%;height:30%;background-position:50% 100%;left:0;right:0;background-size:contain}.alfa-button-close{cursor:pointer;position:absolute;top:5px;right:5px;border-radius:50%;background:hsla(0,0%,100%,.8);border:1px solid #000;width:30px;height:30px;line-height:30px;text-align:center;font-size:28px}.alfa-ending-screen{position:absolute;left:0;right:0;bottom:30px;top:0;margin:auto;width:300px;height:155px}.alfa-share-div{position:absolute;width:100%;height:70%;background:#333;background-color:rgba(33,33,33,.5)}.alfa-bg-message{position:absolute;left:0;bottom:35px;width:100%;height:50px;display:table;text-align:center}.alfa-bg-message>span{display:table-cell;vertical-align:middle;color:#eee}.alfa-controls{position:absolute;height:30px;bottom:0;border-top:1px solid #555;background:#201f1f;background:linear-gradient(180deg,#252424 0,#201f1f);display:flex;flex-direction:row;display:-webkit-flex;-webkit-flex-direction:row;display:-ms-flex;-ms-flex-direction:row;width:100%}.alfa-controlbar-item{flex:0 0 auto;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;height:30px;line-height:30px}.alfa-play-button{cursor:pointer}.alfa-play-button.play-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAMAAABEQrEuAAAAqFBMVEUAAADIyMj///+ZmZn////IyMj///////+ZmZn///////////+cnJz///+ZmZn///+ampr///////+ZmZn///+jo6P///+ZmZm+vr6ZmZmZmZn///+ZmZmZmZmZmZn///+ZmZn///+ZmZn///+ZmZmZmZnz8/OZmZmZmZmZmZn///+ampqdnZ35+fm8vLzx8fHW1tbk5OTe3t7Ozs7Dw8OhoaHp6emsrKxqns2YAAAAKXRSTlMAA/v2Yfvz7dnSw7Gonnt1SDoqIx4ZEgz97+Thy7SMh1tOMAq9mXVsPJoJpU0AAAEESURBVEjHzdPHckIxDIVhXQIJ6aQSSEJvkk1v7/9meNgIA3Pls2H499+M4PjS5Xr8RIXcvmaYWI7l/g0SPFmIPH8jgnk1lbsiIkKzsTy8Q4Incyk0u4AIlaby24YEu1lBksZh7WeTNA4fth8HEknjcJyzx+FjsrbG4RPidRxLqMkdh88Rt9VxDKG/RsexhJ6m4xjCHIfz0nEMoXkdxxDxOEVAsPfr0iBDhPNPX0SIKFfy/yvHcTcvGRkiJv8fBC1Yr9jvyh0e1KiSIeJ64SBE1FtEkAgHQeKvQ4SIWjgIEv0qWZ0chIjakAgS4ZFCojyixPSRpqYHpaZfTWr7g6DCV3NN7QAE5oQfOkTp0gAAAABJRU5ErkJggg==)}.alfa-play-button.pause-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxAgMAAAAO8qmPAAAACVBMVEUAAACZmZn///+l6mMWAAAAAXRSTlMAQObYZgAAAB1JREFUKM9joBbgWrUASmDyWEMDwMQob5QHJMgHAAN6N8moUycDAAAAAElFTkSuQmCC)}.alfa-fullscreen-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxAgMAAAAO8qmPAAAADFBMVEUAAACZmZmZmZmZmZnk5WrOAAAAA3RSTlMAgMBakZ4lAAAAgElEQVQoz2MgHvD///8FRMv///8BzLsA4rHDeA4gHiOU9w+iZT+KHKY+TDP/gnj1UB5QI0gbhPceqBGs7TeI5w7jXQTyeBlhKh0KGBhYGOpBpoBIAbDZXxAkUMsFBAnU4gAlhxRAuBrTRwjfooYEaiihhCB66CJCHiNW6JAK8AEAFAOfTdfbr4sAAAAASUVORK5CYII=)}.alfa-control-text{height:30px;color:#999;margin-top:1px;padding:0 4px;text-align:center;font-size:14px;-webkit-user-select:none;-webkit-user-drag:none;cursor:default}.alfa-sub-group{position:absolute}.alfa-skip-button{cursor:pointer;position:absolute;left:0;top:0;padding:8px}.alfa-skip-button-text{color:#777;font-size:16px;text-shadow:1px 1px #333}.alfa-timebar{flex:1 0 auto;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;position:relative;height:100%;margin:0 12px}.alfa-timebar__rail{position:absolute;left:0}.alfa-timebar__seek-rail{width:100%}.alfa-timebar__buff-rail,.alfa-timebar__play-rail{width:0}.alfa-timebar__rail-filling{position:absolute;height:7px;top:12px;left:0;width:100%}.alfa-timebar__seek-rail-filling{background-color:#969696}.alfa-timebar__buff-rail-filling{background-color:#c4c4c4}.alfa-timebar__play-rail-filling{background:#9e171b;background:linear-gradient(180deg,#e2393e 0,#e2393e 10%,#9e171b 11%,#9e171b 90%,#711113 91%,#711113)}.alfa-timebar__thumb{position:absolute;cursor:default;left:0;margin-left:-12px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAilBMVEXyIw4AAADyIw7yIw7yIw7yIw7yIw7yIw7yIw7yIw6amZnyIw7yIw7yIw7yIw7yIw7yIw6rqamYlpaji4mxfnr/zMj9cGPyLxzyIw7yIw7yIw7yIw7//v7FxMTw7Oyik5LKubj/7Or/4+C8i4f0wLz/ubO7cmvmYFTbSjzyIw6WlpbR0dHGxsa0tLQuk9KgAAAAKnRSTlNmAGFSCzkkBwEv/kkoHlwEZf383b+8f2pYRhYx/f366Ofg1MC9qqqDfVv1G63tAAABXElEQVRIx6WW6ZaCMAxGP9OylW1QcN93Ud//9QYdZ6QNKj1z/8I9bdM0CTomfuyEggASoRP77LMheO6IUINGrvdGSCcEBgXpC8GPEjSSRH6TIAVeIiQXYsIbKDaF6Atv+Yp0wcVH3LowJnyExk9BntCCk/wVfIFWCP8hBGhJ8CNIQktI3gUHrXFugkdoDXmVEMCCoBIEGP1iNZ2uij4YogMPjN38kimVXeY7MCRYUgzWZ1XeUef1gCUIWIyKa/nHtWBxQmjuf1bWmJnnCDGEzlbVBbWFzhAEnWWpsYQOwSTThQyfULqgzJfH1ljowgI6xA690YWNeWgW1kO3rNE9sLCyi8vrQs4vjqdG7/l/ryE1PDD23cd+9mDIxvQ+5tUqvfwIhrB+QPZP1L4I2JcZ+0JmXyo7MkELEmlb7m0bim3Lsm2Ktm3XtrFbjQ6T9J/DiUl6G39QcRt/Uvb5G/8VJ41wKa7hAAAAAElFTkSuQmCC);background-position:50% 50%;background-size:27px 27px;background-repeat:no-repeat;width:27px;height:30px}.alfa-volume__button{position:relative;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAMAAABEQrEuAAAARVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkBVNYgAAAAFnRSTlMAfPoINvCI4R1sTbfFnC6mVxTSkWNDTysOqQAAAVNJREFUSMft1duSgyAMBuAIongAxUPe/1F3DM4G0wXa253+V4TON0CwCt8803wMUEx0TQ2gAIiLLgOUAHHWBSDEipRJlwCKKcqeB1LAqmhyzAMpYCTS6zyQAgbelwBCdP0JMdM1q2wW4G9b1QAUa67pLgvwBlea5FejcwBvkLQoqHuMHCGCU4hJi5Zr7PLiit9iMcQOky4L0HNcJBa0ZCgLsIoqTwWteFYEuLgtPshRE2Ny1zvhmmipWvh6mveE+0AMyA+He2tXE1Urj9eKGDF5ZHtqdFm0hoqJCktYl4QeVCxaPtIMSTohbI+YLAHz6x/EpYL31Iekzx4eWZ4iEuOTrm3wjJ5eT77ZtGsHSDKziGTXQAl95vUTNhYUeZMi3CApHIrWCiKFji0xFv6MN1LYmYAaIZNWpYLvZYBsTsWCSQOFrApBEDNCMQeCIL7+df73+QE/JELa9pNv4QAAAABJRU5ErkJggg==)}.alfa-volume__button--mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxBAMAAACBslwvAAAAJ1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmahP7BAAAADHRSTlMAfvU4C+HOtJNeH3hcAp7BAAAAbElEQVQ4y+3JsRFAUBBF0bfzBYgUsCX8SBE0oQQlKEEJUrkSFLBFmZFyIwGBkx59SkNhO43TWNA4jQWN01jQOI0FjdNY0PjdxOmfR3M145Q4mnB6nGKkUYdTDzRacVKmUYuTMo0WnApHm95wAF81xABwygXiAAAAAElFTkSuQmCC)}.alfa-volume__bar{position:absolute;bottom:33px;left:-1px;width:24px;height:140px;border:1px solid #3b3b3b;border-radius:3px;background:#201f1f}.alfa-volume__rail{background:#999}.alfa-volume__current,.alfa-volume__rail{top:7px;bottom:7px;left:0;position:absolute;width:4px;margin-left:9px}.alfa-volume__current{background:#9e171b}.alfa-volume__thumb{bottom:0;width:100%;height:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAkFBMVEUAAAA4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgyMjKWlpY4ODg1NTUzMzM3NzeZmZnGxsampqbV1dWtra2SkpJ5eXlsbGxVVVWfn5/9/f3p6em0tLSLi4uEhIRgYGBNTU1CQkJIqitwAAAAGHRSTlMA85H3GxIE57h5Zk/PzFoKXtuwcjYk78byb3lkAAABrUlEQVRIx51WWZaCQAykRZAdBkUl7CC46/1vN/10xoYEQaxPrSKVEJJIBKo502wZQLa1malKI1Acn0ELzHeUAbqrrzkpieJ4yxHHUQIAa919Q1eNBUDEuW3EEcDC6HUW2ACJoAsJD2MHlG8yQacSZmK+wd1s34L7Mrp8B/OpwmnzVzIgO8QWyCvBny/o82mMxfxVz43gDyk2/9XVIdl+gAT0P0NMJDCcBnuamglDY6Zmj34TAcZDKFywFAHGQyy5wKYBmrw4HIq8oSFs7ggA/14dszJNy+xY4X8A5pKDHSVZkYYPpEWWYE8OrVF+Cl845bROGkqhycIWsgYloUk/SLBP24J0jwQ/EkM5l2EHJcqaSbhIeVewx2UigrCLFAlkYuncFZyRYE2S3nUFO5w0KeutK7jhstIXV7f5NXlxtDWiXctQhAVeX/Ndqye9uvY0X2973+tLGF7qO21va/IHNPETlZWpQ2DymPlukEmq9dmotNSpw3j6uBfwxheKN3VlTV6KBIEltjTe1Fbw5WKnpwOjpwPT3aHjxPNlaEH2PUUagcvPHws4LH7+0If/AnR0rSTRtQzxAAAAAElFTkSuQmCC);background-size:20px 20px}.alfa-share-button,.alfa-volume__thumb{position:absolute;background-position:50% 50%;background-repeat:no-repeat}.alfa-share-button{right:2px;top:4px;background-image:url(data:image/png;base64,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);background-size:100%;width:100px;height:78px;opacity:.4;cursor:pointer}.alfa-share-background{position:absolute;display:table;right:2px;top:4px;width:142px;height:48px;background:#212222;white-space:nowrap;overflow:hidden;border-spacing:2px}.alfa-share-socials{height:100%;width:100%;display:table-row}.alfa-share-background-big{display:table;margin:auto;left:0;right:0;top:0;bottom:0;height:100%;width:100%;border-spacing:8px}.alfa-share-more-button{position:absolute;right:0;bottom:0;height:50%;width:24px;color:#fff;text-align:center;background-image:url(data:image/png;base64,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);background-position:50% 50%;background-size:18px 18px;background-repeat:no-repeat;cursor:pointer;font-size:22px}.alfa-social-button{width:44px;min-height:100%;background-size:100%;display:table-cell;cursor:pointer;background-repeat:no-repeat;background-position:50%}.alfa-social-button-big{display:table-cell}.alfa-social-facebook{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEVKbqlKbqlKbqn///9DaaZBZ6VHa6fQ2elXeK/z9fl+l8D9/f1ph7d5k7/U3eqBmcKitNLDz+Ls7/U8Y6Ob7tO3AAAAAnRSTlPt24xCS8UAAAGLSURBVHja7dvdbuMgEIbh7DAz4PBTHN//va5XWcUtOFarZkqbfu8N8ICQmBNOf05DW5enoZ0AAAAAAAAA4DkAKiLMrMr/EllEaD8LAIuGXOvsfSnFr8211hyozwQgnGqZXFcWajIBsJ59dGuDAJK8WxsFUK7R3SsxbdkAmGZ3t2gPUPJuJEB5docApS0LgFR31BSMAZLiWIB6NxQgZzcWwH4sgFN0x11sAVLd2BOQeXfXxfvyv5mu2QA0XFxbrCkQX9M12rIAxO7I88JKXUYAya6tLrSbPeD47bECnLv7R0oH2QM8024AAAAAAAA8F4BvLbkDLNxkAEhbtQWU1PZwAOe45bpiW5YHAyS7DwVA5rGAmAYDpqAAjAVcfj2gKI0FeAZgMGCWRwM4Ta9yTXFqqp8G9IVb9NICCoW3WYxkemtnJBN9G117rqEUAAAAAAAAAAAAAAAAAADgOwFeAAAAAAAAAACAbwcoXwzIU9NsC+gLTXQ3I4C20Tt71j8mAAAAAAAA/GzA6O//fwFjwpS/mcxUIAAAAABJRU5ErkJggg==)}.alfa-social-twitter{background-image:url(data:image/png;base64,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)}.alfa-social-gplus{background-image:url(data:image/png;base64,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)}.alfa-full-screen{width:100%!important;height:100%!important;left:0!important;right:0!important;top:0!important;bottom:0!important;z-index:1000!important;margin:0!important;position:fixed!important}.alfa-visible-animation{-ms-transition:opacity .3s ease-in-out,visibility .3s ease-in-out;transition:opacity .3s ease-in-out,visibility .3s ease-in-out;visibility:visible;opacity:1}.alfa-context-menu{display:block;padding:0;margin:0;z-index:2;outline:none;position:fixed;overflow:auto;background:#fff;border-radius:2px;list-style:none;border:1px solid #ccc}.alfa-context-menu li{margin:0;padding:0}.alfa-context-item{display:block;background-color:#fff;color:#313131;font-size:13px;font-family:arial,sans-serif;text-decoration:none;white-space:nowrap;word-wrap:normal;padding:0 25px;margin:0;line-height:25px;cursor:pointer}.alfa-context-item:hover{background-color:#313131;color:#fff}.alfa-adult-warning-base{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#555}.alfa-adult-inner-base{height:100%;width:100%;max-height:320px;max-width:450px;position:relative;top:50%;transform:-ms-translateY(-50%);transform:translateY(-50%);margin:auto;background-color:#efefef}.alfa-adult-main-text{font-size:28px;text-align:center;display:table-row}.alfa-adult-warning-text{font-size:12px;text-align:center;display:table-row}.alfa-adult-leave{position:absolute;left:4px;bottom:2px;padding:5px;cursor:pointer}.alfa-adult-inner-center{top:49%;position:absolute;transform:translateY(-50%);display:table;border-spacing:10px}.alfa-adult-showme{display:table-row}.alfa-adult-show-button{cursor:pointer;display:inline-block;left:50%;position:relative;transform:translateX(-50%);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-family:Arial;color:#fff;font-size:18px;background:#259e33;padding:5px 18px;text-decoration:none}.alfa-adult-show-button:hover{background:#2ab33a}.alfa-overlay-root{position:absolute}.alfa-overlay-close-btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAkFBMVEUAAAAGBgYICAgFBQU8PDxCQkIEBAQHBwcVFRUbGxsgICAiIiIMDAwMDAwQEBAQEBAMDAwQEBAWFhYAAADo6Oje3t7b29sGBgY1NTULCwtgYGA3NzehoaFWVlbU1NTQ0NCoqKikpKRtbW1paWk7OztZWVk9PT0RERHLy8vKysrExMTDw8O/v7+9vb2rq6sPDw+JaXvSAAAAE3RSTlMA99vuCwjx114/Liuop356pnxbLZatxQAAARVJREFUKM91Utt2wiAQJDGaxBpvu0mEkIsabbUX///vOqRQ6Dl1noBhZpZlhUWSFXFUR/F2n4gQyXpGDrPN3BPLmEKkL47II2xflb51N60eWC9yqwBRn0r+QXWuQU2qBFbyiz0GCUOTtYYCREjBcAcJqjoxf46X0ni14wfzGRUmIkM4zhqipuTqQHQFD79MrIgULrdwOPQg6IKdIioE8o/GxhzWNCmZNVEsUPIbW8oR/E4UCdzr2KA3CmnX0D/X/MmRYU5YW9MFtW3de8bpdunfs/c9aI1N2V5tD9C4HeoYOMQRnht0dJ4ieggJ12uxXBAMq9//Ifs/QG6oh9L3/q6VDP4UqvTJHCDrn9nx87aa5q3I3Pk3UaYpIafwP+sAAAAASUVORK5CYII=);background-size:25px 25px;position:absolute;width:25px;height:25px;right:0;top:0;cursor:pointer}.alfa-overlay-content-frame{background:#993421;position:absolute;left:0;right:0;bottom:0;top:0;border:1px solid #000;margin:10px}.alfa-display-none{display:none}.alfa-opacity-visible{opacity:1;visibility:visible}.alfa-opacity-50{opacity:.5}.alfa-opacity-hide{opacity:0;visibility:hidden}@media (min-resolution:2dppx) and (min-device-width:800px) and (min-device-height:400px) and (orientation:landscape),only screen and (min-resolution:2dppx) and (min-device-width:400px) and (min-device-height:800px) and (orientation:portrait){.alfa-controls{height:45px}.alfa-button-restart,.alfa-button-start{margin-top:-71px}.alfa-small-restart{margin:4px auto}.alfa-ending-screen{bottom:45px}.alfa-timebar__rail-filling{height:8px;background-size:1px 10px;top:19px}.alfa-timebar__thumb{margin-left:-15px;background-size:100%;width:31px;height:44px}.alfa-controlbar-item{height:45px;line-height:45px}.alfa-ctrl-button-icon{background-size:29px 29px;width:38px;margin:0}.alfa-control-text{height:60px;font-size:20px;padding:0 1px}.alfa-skip-button{padding:12px}.alfa-skip-button-text{font-size:24px}}"

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var styles = __webpack_require__(2);

var EVENTS = {
    CLICK: 'click'
};

var ShareButton = function (_EventSystem) {
    _inherits(ShareButton, _EventSystem);

    function ShareButton() {
        _classCallCheck(this, ShareButton);

        var _this = _possibleConstructorReturn(this, (ShareButton.__proto__ || Object.getPrototypeOf(ShareButton)).call(this));

        _this.element = null;
        return _this;
    }

    _createClass(ShareButton, [{
        key: 'create',
        value: function create(parent) {
            var _this2 = this;

            this.element = document.createElement('div');
            this.element.className = 'alfa-share-button ' + styles.TRANSITION_VISIBLE;
            this.element.addEventListener('click', function (e) {
                e.stopPropagation();
                _this2.emit(EVENTS.CLICK);
            });
            parent.appendChild(this.element);

            var parentWidth = parent.getBoundingClientRect().width;
            var parentHeight = parent.getBoundingClientRect().height;

            if (parentWidth < 210 || parentHeight < 210) {
                this.element.style.width = '30px';
                this.element.style.height = '24px';
            } else if (parentWidth < 400 || parentHeight < 400) {
                this.element.style.width = '60px';
                this.element.style.height = '48px';
            } else if (parentWidth < 800 || parentHeight < 800) {
                this.element.style.width = '80px';
                this.element.style.height = '64px';
            }
        }
    }, {
        key: 'show',
        value: function show() {
            if (this.element == null) {
                console.warn('[alfa] ShareButton.show: show before create');
                return;
            }

            this.element.classList.remove(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.element == null) {
                console.warn('[alfa] ShareButton.hide: hide before create');
                return;
            }

            this.element.classList.add(styles.OPACITY_HIDDEN);
        }
    }]);

    return ShareButton;
}(EventSystem);

ShareButton.EVENTS = EVENTS;

module.exports = ShareButton;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var networking = __webpack_require__(10);
var socialNetworks = __webpack_require__(27);
var uiUtils = __webpack_require__(9);
var styles = __webpack_require__(2);
var ua = __webpack_require__(8).parsed;

var SocialButton = function (_EventSystem) {
    _inherits(SocialButton, _EventSystem);

    function SocialButton(social, isBig) {
        _classCallCheck(this, SocialButton);

        var _this = _possibleConstructorReturn(this, (SocialButton.__proto__ || Object.getPrototypeOf(SocialButton)).call(this));

        _this.element = null;
        _this.isBig = isBig;
        _this.social = social;

        _this.hideDialogTimer = null;
        return _this;
    }

    _createClass(SocialButton, [{
        key: 'create',
        value: function create(parent) {
            var _this2 = this;

            this.element = document.createElement('a');
            this.element.className = 'alfa-social-button alfa-social-' + this.social.name;
            if (this.isBig) {
                this.element.classList.add('alfa-social-button-big');
            }
            this.element.setAttribute('target', '_blank');

            this.element.addEventListener('click', function (e) {
                return _this2.emit('click', e);
            });

            parent.appendChild(this.element);
        }
    }, {
        key: 'setLink',
        value: function setLink(link) {
            this.element.setAttribute('href', link);
        }
    }]);

    return SocialButton;
}(EventSystem);

var DIALOG_EVENTS = {
    DONE: 'done'
};

var ShareDialog = function (_EventSystem2) {
    _inherits(ShareDialog, _EventSystem2);

    function ShareDialog(isEndScreen) {
        _classCallCheck(this, ShareDialog);

        var _this3 = _possibleConstructorReturn(this, (ShareDialog.__proto__ || Object.getPrototypeOf(ShareDialog)).call(this));

        _this3.element = null;
        _this3.isEndScreen = isEndScreen;
        _this3.shareButtons = [];
        return _this3;
    }

    _createClass(ShareDialog, [{
        key: 'create',
        value: function create(parent) {
            var _this4 = this;

            this.element = document.createElement('div');
            if (!this.isEndScreen) {
                this.element.className = 'alfa-share-background ' + styles.TRANSITION_VISIBLE + ' ' + styles.OPACITY_HIDDEN;
            } else {
                this.element.className = 'alfa-share-background-big';
            }

            var socialButtonsElement = document.createElement('div');
            socialButtonsElement.className = 'alfa-share-socials';

            this.element.appendChild(socialButtonsElement);

            parent.appendChild(this.element);

            this.shareButtons = socialNetworks.map(function (network) {
                var socialButton = new SocialButton(network, _this4.isEndScreen);
                socialButton.create(socialButtonsElement);
                socialButton.on('click', function () {
                    _this4.hide();
                    _this4.emit(DIALOG_EVENTS.DONE);
                });
                return socialButton;
            });

            // if dialog is not on endscreen, then setup auto hide behaviour
            if (!this.isEndScreen) {
                this.element.addEventListener('mouseout', function (ev) {
                    var root = _this4.element;
                    if (!uiUtils.isChildOf(ev.relatedTarget, root) && ev.relatedTarget !== root) {
                        _this4.setupHideTimeout(1000);
                    }
                });
                this.element.addEventListener('mousemove', function () {
                    _this4.resetHideTimeout();
                }, true);
            }
        }
    }, {
        key: 'show',
        value: function show(shareURL) {
            var _this5 = this;

            networking.getShortURL(shareURL, function (responseText) {
                if (!responseText) {
                    console.log('[alfa] Empty share short response');
                    return;
                }

                _this5.shareButtons.forEach(function (button) {
                    var link = button.social.shareUrl(responseText);
                    button.setLink(link);
                });
            });

            if (!this.isEndScreen) {
                this.resetHideTimeout();

                // actually showing element
                this.element.classList.remove(styles.OPACITY_HIDDEN);

                if (ua.isMobile) {
                    this.setupHideTimeout(3000);
                }
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (!this.element) {
                return;
            }

            this.element.classList.add(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            if (this.element) {
                return !this.element.classList.contains(styles.OPACITY_HIDDEN);
            }

            return false;
        }
    }, {
        key: 'resetHideTimeout',
        value: function resetHideTimeout() {
            clearTimeout(this.hideDialogTimer);

            this.element.classList.remove(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'setupHideTimeout',
        value: function setupHideTimeout(timeout) {
            var _this6 = this;

            clearTimeout(this.hideDialogTimer);

            // hide dialog after timeout
            this.hideDialogTimer = setTimeout(function () {
                _this6.hide();
                _this6.emit(DIALOG_EVENTS.DONE);
            }, timeout || 3000);
        }
    }]);

    return ShareDialog;
}(EventSystem);

ShareDialog.EVENTS = DIALOG_EVENTS;

module.exports = ShareDialog;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocialNetwork = function () {
    function SocialNetwork(name, rei, url) {
        _classCallCheck(this, SocialNetwork);

        this.name = name;
        this.rei = rei;
        this.url = url;
    }

    _createClass(SocialNetwork, [{
        key: 'shareUrl',
        value: function shareUrl(playerUrl, image, title, description) {
            if (this.name === 'facebook') playerUrl = playerUrl.replace('https:', 'http:');

            return this.url.replace('_URL_', playerUrl).replace('_IMAGE_', image).replace('_TITLE_', title).replace('_DESCR_', description);
        }
    }]);

    return SocialNetwork;
}();

function defineNetwork(name, rei, url) {
    return new SocialNetwork(name, rei, url);
}

module.exports = [defineNetwork('facebook', 'www.facebook.com', 'https://www.facebook.com/sharer.php?u=_URL_&display=page'), defineNetwork('gplus', 'plus.google.com', 'https://plus.google.com/share?url=_URL_'), defineNetwork('twitter', 'twitter.com', 'https://twitter.com/share?url=_URL_')];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var styles = __webpack_require__(2);

var EVENTS = {
    AGREED: 'agreed',
    REJECT: 'reject'
};

var WARNING_TEXT = '' + 'By entering this video, clicking the green "Show Me" button below, you agree to the following terms and conditions: ' + 'You certify that you are 18 years of age or older, and are not offended by sexually explicit imagery. ' + 'You agree that you will not permit any person(s) under 18 years of age to have access to the video.';

var AdultWarningDialog = function (_EventSystem) {
    _inherits(AdultWarningDialog, _EventSystem);

    function AdultWarningDialog() {
        _classCallCheck(this, AdultWarningDialog);

        return _possibleConstructorReturn(this, (AdultWarningDialog.__proto__ || Object.getPrototypeOf(AdultWarningDialog)).apply(this, arguments));
    }

    _createClass(AdultWarningDialog, [{
        key: 'create',
        value: function create(parent) {
            var _this2 = this;

            this.baseElement = document.createElement('div');
            this.baseElement.className = 'alfa-adult-warning-base';

            this.innerBase = document.createElement('div');
            this.innerBase.className = 'alfa-adult-inner-base';

            this.innerCenter = document.createElement('div');
            this.innerCenter.className = 'alfa-adult-inner-center';

            this.mainText = document.createElement('div');
            this.mainText.className = 'alfa-adult-main-text ' + styles.NO_SELECT;
            this.mainText.appendChild(document.createTextNode('Adult Only!'));

            this.warningText = document.createElement('div');
            this.warningText.className = 'alfa-adult-warning-text ' + styles.NO_SELECT;
            this.warningText.appendChild(document.createTextNode(WARNING_TEXT));

            this.showButton = document.createElement('div');
            this.showButton.appendChild(document.createTextNode('Show me'));
            this.showButton.className = 'alfa-adult-show-button ' + styles.NO_SELECT;
            this.showButtonRow = document.createElement('div');
            this.showButtonRow.appendChild(this.showButton);
            this.showButtonRow.className = 'alfa-adult-showme';

            this.leaveButton = document.createElement('div');
            this.leaveButton.className = 'alfa-adult-leave ' + styles.NO_SELECT;
            this.leaveButton.appendChild(document.createTextNode('Leave'));

            this.innerCenter.appendChild(this.mainText);
            this.innerCenter.appendChild(this.warningText);
            this.innerCenter.appendChild(this.showButtonRow);
            this.innerBase.appendChild(this.innerCenter);
            this.innerBase.appendChild(this.leaveButton);
            this.baseElement.appendChild(this.innerBase);

            parent.appendChild(this.baseElement);

            // setup events
            this.showButton.addEventListener('click', function () {
                parent.removeChild(_this2.baseElement);
                _this2.emit(EVENTS.AGREED);
            });

            this.leaveButton.addEventListener('click', function () {
                _this2.emit(EVENTS.REJECT);
            });
        }
    }]);

    return AdultWarningDialog;
}(EventSystem);

AdultWarningDialog.EVENTS = EVENTS;

module.exports = AdultWarningDialog;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var TimeBar = __webpack_require__(30);
var TimeLabel = __webpack_require__(31);
var VolumeBar = __webpack_require__(32);
var uiUtils = __webpack_require__(9);
var styles = __webpack_require__(2);
var ua = __webpack_require__(8).parsed;

var EVENTS = {
    TIME_SEEK_START: 'time_seek_start',
    TIME_SEEK: 'time_seek',
    TIME_SEEK_END: 'time_seek_end',

    PLAY_PAUSE_CLICK: 'play_pause_click',
    VOLUME_CLICK: 'volume_click',
    VOLUME_CHANGE: 'volume_change',
    FULLSCREEN_CLICK: 'fullscreen_click'
};

var ControlsBar = function (_EventSystem) {
    _inherits(ControlsBar, _EventSystem);

    function ControlsBar() {
        _classCallCheck(this, ControlsBar);

        var _this = _possibleConstructorReturn(this, (ControlsBar.__proto__ || Object.getPrototypeOf(ControlsBar)).call(this));

        _this.element = null;
        _this.playButton = null;

        _this.timeBar = new TimeBar();
        _this.currentTime = new TimeLabel('alfa-current-time');
        _this.totalTime = new TimeLabel('alfa-total-time');

        _this.volumeButton = null;
        _this.volumeBar = null;
        return _this;
    }

    _createClass(ControlsBar, [{
        key: 'create',
        value: function create(parent, config) {
            var _this2 = this;

            this.element = document.createElement('span');
            this.element.className = 'alfa-controls ' + styles.TRANSITION_VISIBLE;

            this.playButton = document.createElement('span');
            this.playButton.className = 'alfa-play-button play-icon alfa-controlbar-item alfa-ctrl-button-icon ' + styles.NO_SELECT;
            this.element.appendChild(this.playButton);

            this.currentTime.create(this.element);
            this.timeBar.create(this.element);
            this.totalTime.create(this.element);

            if (!ua.isMobile) {
                this.createVolumeRegulator(this.element);
            }

            if (!config.isFullscreenRestricted()) {
                this.createFullscreenButton(this.element);
            }

            this.playButton.addEventListener(ua.isMobile ? 'touchend' : 'click', function (e) {
                e.stopPropagation();
                _this2.emit(EVENTS.PLAY_PAUSE_CLICK);
            });

            this.timeBar.on(TimeBar.EVENTS.SEEK_START, function () {
                return _this2.emit(EVENTS.TIME_SEEK_START);
            });
            this.timeBar.on(TimeBar.EVENTS.SEEK, function (percent) {
                return _this2.emit(EVENTS.TIME_SEEK, percent);
            });
            this.timeBar.on(TimeBar.EVENTS.SEEK_END, function () {
                return _this2.emit(EVENTS.TIME_SEEK_END);
            });

            parent.appendChild(this.element);
        }
    }, {
        key: 'createVolumeRegulator',
        value: function createVolumeRegulator(parent) {
            var _this3 = this;

            this.volumeButton = document.createElement('span');
            this.volumeButton.className = styles.BUTTON_VOLUME + ' alfa-controlbar-item alfa-ctrl-button-icon';

            this.volumeBar = new VolumeBar();
            this.volumeBar.create(this.volumeButton);
            this.volumeBar.on(VolumeBar.EVENTS.VOLUME_CHANGE, function (percent) {
                return _this3.emit(EVENTS.VOLUME_CHANGE, percent);
            });

            this.volumeButton.addEventListener('click', function (e) {
                e.stopPropagation();
                _this3.emit(EVENTS.VOLUME_CLICK);
            });
            this.volumeButton.addEventListener('mouseenter', function () {
                return _this3.volumeBar.show();
            });
            this.volumeButton.addEventListener('mouseout', function (ev) {
                var related = ev.relatedTarget;
                if (!uiUtils.isChildOf(related, _this3.volumeButton)) {
                    _this3.volumeBar.hide();
                }
            });

            parent.appendChild(this.volumeButton);
        }
    }, {
        key: 'createFullscreenButton',
        value: function createFullscreenButton(parent) {
            var _this4 = this;

            var fullScreenButton = document.createElement('span');
            fullScreenButton.className = 'alfa-fullscreen-button alfa-controlbar-item alfa-ctrl-button-icon';
            fullScreenButton.addEventListener('click', function (e) {
                e.stopPropagation();
                _this4.emit(EVENTS.FULLSCREEN_CLICK);
            });

            parent.appendChild(fullScreenButton);
        }
    }, {
        key: 'show',
        value: function show() {
            if (!this.element) {
                return;
            }

            this.element.classList.remove(styles.DISPLAY_NONE);
            this.element.classList.remove(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'hide',
        value: function hide(immediate) {
            if (immediate) {
                this.element.classList.add(styles.DISPLAY_NONE);
            }
            this.element.classList.add(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !this.element.classList.contains(styles.DISPLAY_NONE) && !this.element.classList.contains(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'morphToAdsLayout',
        value: function morphToAdsLayout() {
            this.currentTime.setText('Wait for ad...');
            this.timeBar.hide();
            this.totalTime.hide();

            this.element.classList.add('adsLayout');
        }
    }, {
        key: 'morphToWaitingAdsLayout',
        value: function morphToWaitingAdsLayout() {
            this.currentTime.setText('Wait for ad...');
        }
    }, {
        key: 'morphToNormalLayout',
        value: function morphToNormalLayout() {
            if (!this.isAdsLayout()) {
                return;
            }

            this.timeBar.show();
            this.totalTime.show();
            this.currentTime.setTime(0);
            this.element.classList.remove('adsLayout');
        }
    }, {
        key: 'isAdsLayout',
        value: function isAdsLayout() {
            return this.element.classList.contains('adsLayout');
        }
    }, {
        key: 'showPlayButton',
        value: function showPlayButton() {
            this.playButton.classList.remove(styles.ICON_PAUSE);
            this.playButton.classList.add(styles.ICON_PLAY);
        }
    }, {
        key: 'showPauseButton',
        value: function showPauseButton() {
            this.playButton.classList.remove(styles.ICON_PLAY);
            this.playButton.classList.add(styles.ICON_PAUSE);
        }
    }, {
        key: 'updateVolume',
        value: function updateVolume(vol) {
            if (!this.volumeButton) {
                return;
            }

            this.volumeBar.setVolume(vol);

            if (vol === 0) {
                this.volumeButton.classList.add(styles.BUTTON_VOLUME_MUTE);
            } else {
                this.volumeButton.classList.remove(styles.BUTTON_VOLUME_MUTE);
            }
        }
    }]);

    return ControlsBar;
}(EventSystem);

ControlsBar.EVENTS = EVENTS;

module.exports = ControlsBar;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var uiUtils = __webpack_require__(9);
var styles = __webpack_require__(2);
var ua = __webpack_require__(8).parsed;

var EVENTS = {
    SEEK_START: 'seek_start',
    SEEK: 'seek',
    SEEK_END: 'seek_end'
};

var TimeBar = function (_EventSystem) {
    _inherits(TimeBar, _EventSystem);

    function TimeBar() {
        _classCallCheck(this, TimeBar);

        var _this = _possibleConstructorReturn(this, (TimeBar.__proto__ || Object.getPrototypeOf(TimeBar)).call(this));

        _this.element = null;
        _this.thumb = null;
        _this.playRail = null;
        _this.buffRail = null;

        _this.__isSeeking = false;
        return _this;
    }

    _createClass(TimeBar, [{
        key: 'create',
        value: function create(parent) {
            var _this2 = this;

            this.element = document.createElement('span');
            this.element.className = styles.TIMEBAR + ' ' + styles.NO_SELECT;

            // seek rail
            var seekRail = document.createElement('span');
            seekRail.className = styles.TIMEBAR_RAIL + ' ' + styles.TIMEBAR_SEEK_RAIL;
            var seekRailFilling = document.createElement('span');
            seekRailFilling.className = styles.TIMEBAR_RAIL_FILLING + ' ' + styles.TIMEBAR_SEEK_RAIL_FILLING;
            seekRail.appendChild(seekRailFilling);

            // buff rail
            this.buffRail = document.createElement('span');
            this.buffRail.className = styles.TIMEBAR_RAIL + ' ' + styles.TIMEBAR_BUFF_RAIL;
            this.buffRail.style.width = '0%';
            var buffRailFilling = document.createElement('span');
            buffRailFilling.className = styles.TIMEBAR_RAIL_FILLING + ' ' + styles.TIMEBAR_BUFF_RAIL_FILLING + ' ' + styles.NO_SELECT;
            this.buffRail.appendChild(buffRailFilling);

            // play rail
            this.playRail = document.createElement('span');
            this.playRail.className = styles.TIMEBAR_RAIL + ' ' + styles.TIMEBAR_PLAY_RAIL;
            var playRailFilling = document.createElement('span');
            playRailFilling.className = styles.TIMEBAR_RAIL_FILLING + ' ' + styles.TIMEBAR_PLAY_RAIL_FILLING + ' ' + styles.NO_SELECT;
            this.playRail.appendChild(playRailFilling);

            this.thumb = document.createElement('span');
            this.thumb.className = styles.TIMEBAR_THUMB + ' ' + styles.NO_SELECT;

            // append main elements
            this.element.appendChild(seekRail);
            this.element.appendChild(this.buffRail);
            this.element.appendChild(this.playRail);
            this.element.appendChild(this.thumb);

            parent.appendChild(this.element);

            if (ua.isMobile) {
                this.element.addEventListener('touchstart', function (e) {
                    return _this2.__onSeekStart(e);
                });
                this.element.addEventListener('touchmove', function (e) {
                    return _this2.__onSeek(e);
                });
                this.element.addEventListener('touchend', function (e) {
                    return _this2.__onSeekEnd(e);
                });
            } else {
                this.element.addEventListener('mousedown', function (e) {
                    return _this2.__onSeekStart(e);
                });
                window.addEventListener('mousemove', function (e) {
                    return _this2.__onSeek(e);
                });
                window.addEventListener('mouseup', function (e) {
                    return _this2.__onSeekEnd(e);
                });
                this.element.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, true);
            }
        }
    }, {
        key: 'setPosition',
        value: function setPosition(percent) {
            this.setBufferedPosition(percent);
            this.setPlayPosition(percent);
        }
    }, {
        key: 'getBufferedPosition',
        value: function getBufferedPosition() {
            return parseFloat(this.buffRail.style.width);
        }
    }, {
        key: 'setBufferedPosition',
        value: function setBufferedPosition(percent) {
            this.buffRail.style.width = percent > 0 ? percent + '%' : '0';
        }
    }, {
        key: 'getPlayPosition',
        value: function getPlayPosition() {
            return parseFloat(this.playRail.style.width);
        }
    }, {
        key: 'setPlayPosition',
        value: function setPlayPosition(percent) {
            this.thumb.style.left = percent > 0 ? percent + '%' : '0';
            this.playRail.style.width = percent > 0 ? percent + '%' : '0';
        }
    }, {
        key: 'show',
        value: function show() {
            this.element.style.visibility = '';
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.element.style.visibility = 'hidden';
        }
    }, {
        key: 'isSeeking',
        value: function isSeeking() {
            return this.__isSeeking;
        }
    }, {
        key: '__onSeekStart',
        value: function __onSeekStart() {
            console.log('[alfa] SeekStart');

            this.__isSeeking = true;
            this.emit(EVENTS.SEEK_START);
        }
    }, {
        key: '__onSeek',
        value: function __onSeek(e) {
            if (!this.__isSeeking) {
                return;
            }

            if (ua.isMobile) {
                e = e.changedTouches[0];
            }

            var percent = this.__calculateSeekPercent(e);
            this.setPlayPosition(percent);
            this.emit(EVENTS.SEEK, percent);
        }
    }, {
        key: '__onSeekEnd',
        value: function __onSeekEnd(e) {
            if (!this.__isSeeking) {
                return;
            }

            console.log('[alfa] SeekEnd');
            this.__onSeek(e);
            e.stopPropagation();

            this.__isSeeking = false;
            this.emit(EVENTS.SEEK_END);
        }
    }, {
        key: '__calculateSeekPercent',
        value: function __calculateSeekPercent(e) {
            var rect = this.element.getBoundingClientRect();
            var percent = (e.clientX - rect.left) / this.element.offsetWidth;
            return uiUtils.normalizePercent(percent) * 100;
        }
    }]);

    return TimeBar;
}(EventSystem);

TimeBar.EVENTS = EVENTS;

module.exports = TimeBar;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(5);
var styles = __webpack_require__(2);

var TimeLabel = function () {
    function TimeLabel(className) {
        _classCallCheck(this, TimeLabel);

        this.className = className || '';
        this.element = null;
    }

    _createClass(TimeLabel, [{
        key: 'create',
        value: function create(parent) {
            this.element = document.createElement('span');
            this.element.className = this.className + ' alfa-control-text alfa-controlbar-item ' + styles.NO_SELECT;
            this.element.innerHTML = utils.formatTime(0);

            parent.appendChild(this.element);
        }
    }, {
        key: 'setText',
        value: function setText(text, time) {
            if (time != null) {
                text = text + ' ' + utils.formatTime(time);
            }
            this.element.innerHTML = text;
        }
    }, {
        key: 'setTime',
        value: function setTime(time) {
            if (time > 0) {
                this.element.innerHTML = utils.formatTime(time);
            } else {
                this.element.innerHTML = utils.formatTime(0);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.element.style.visibility = '';
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.element.style.visibility = 'hidden';
        }
    }]);

    return TimeLabel;
}();

module.exports = TimeLabel;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var uiUtils = __webpack_require__(9);
var styles = __webpack_require__(2);

var EVENTS = {
    VOLUME_CHANGE: 'volume_change'
};
var BORDERS_OFFSET = 5;

var VolumeBar = function (_EventSystem) {
    _inherits(VolumeBar, _EventSystem);

    function VolumeBar() {
        _classCallCheck(this, VolumeBar);

        var _this = _possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this));

        _this.element = null;
        _this.thumb = null;
        _this.railCurrent = null;

        _this.hideTimer = -1;
        return _this;
    }

    _createClass(VolumeBar, [{
        key: 'create',
        value: function create(parent) {
            var _this2 = this;

            if (!parent) {
                console.log('[alfa] VolumeBar.create: no parent specified');
                return;
            }

            // root DOM element
            this.element = document.createElement('div');
            this.element.className = styles.VOLUME_BAR + ' ' + styles.TRANSITION_VISIBLE + ' ' + styles.OPACITY_HIDDEN;

            // default 'gray' volume rail group & rail
            var railGroup = document.createElement('span');
            railGroup.className = '' + styles.VOLUME_BAR_RAIL_GROUP;
            var rail = document.createElement('span');
            rail.className = '' + styles.VOLUME_BAR_RAIL;
            railGroup.appendChild(rail);

            // active 'red' volume rail group & rail
            var railCurrentGroup = document.createElement('span');
            railCurrentGroup.className = '' + styles.VOLUME_BAR_CURRENT_GROUP;
            this.railCurrent = document.createElement('span');
            this.railCurrent.className = '' + styles.VOLUME_BAR_CURRENT;
            railCurrentGroup.appendChild(this.railCurrent);

            // volume thumb
            this.thumb = document.createElement('div');
            this.thumb.className = '' + styles.VOLUME_BAR_THUMB;

            this.element.appendChild(railGroup);
            this.element.appendChild(railCurrentGroup);
            this.element.appendChild(this.thumb);

            this.element.addEventListener('click', function (e) {
                return _this2.onClick(e);
            });

            parent.appendChild(this.element);
        }
    }, {
        key: 'setVolume',
        value: function setVolume(volume) {
            this.thumb.style.bottom = volume * (this.element.offsetHeight - this.thumb.offsetHeight - 2) + 'px';
            this.railCurrent.style.top = (1 - volume) * (this.element.offsetHeight - 14) + 7 + 'px';
        }
    }, {
        key: 'show',
        value: function show() {
            clearTimeout(this.hideTimer);
            this.element.classList.remove(styles.OPACITY_HIDDEN);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.__setupHideTimer();
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            e.stopPropagation();

            var pos = uiUtils.getCursorPosition(this.element, e);
            pos.y += BORDERS_OFFSET;
            var percent = (this.element.offsetHeight - pos.y) / (this.element.offsetHeight - BORDERS_OFFSET * 2);
            percent = uiUtils.normalizePercent(percent);

            // notify UI about volume change
            this.emit(EVENTS.VOLUME_CHANGE, percent);
        }
    }, {
        key: '__setupHideTimer',
        value: function __setupHideTimer() {
            var _this3 = this;

            clearTimeout(this.hideTimer);
            this.hideTimer = setTimeout(function () {
                _this3.element.classList.add(styles.OPACITY_HIDDEN);
            }, 300);
        }
    }]);

    return VolumeBar;
}(EventSystem);

VolumeBar.EVENTS = EVENTS;

module.exports = VolumeBar;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var constants = __webpack_require__(1);

var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var MEDIA_EVENTS = constants.MEDIA_EVENTS;

var Youtube = function (_EventSystem) {
    _inherits(Youtube, _EventSystem);

    function Youtube() {
        _classCallCheck(this, Youtube);

        var _this = _possibleConstructorReturn(this, (Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call(this));

        _this._src = '';
        _this._currentTime = 0;
        _this._duration = 0;
        _this._isReady = false;
        _this._error = null;
        _this._isEnded = false;

        _this.addEventListener(MEDIA_EVENTS.ended, function () {
            return _this._isEnded = true;
        });

        var self = _this;
        _this.style = {
            set visibility(value) {
                self._container.style.visibility = value;
                self._overflow.style.visibility = value;
            },
            set display(value) {
                self._container.style.display = value;
                self._overflow.style.display = value;
            }
        };

        _this.buffered = {
            get length() {
                return 0;
            }
        };
        return _this;
    }

    _createClass(Youtube, [{
        key: 'includeYoutubeAPI',
        value: function includeYoutubeAPI() {
            // if Youtube API is already injected - do nothing
            if (typeof window.YT !== 'undefined') {
                return;
            }

            // inject Youtube API
            var tag = document.createElement('script');
            tag.src = '//www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, {
        key: 'createElement',
        value: function createElement(parent, videoId) {
            var _this2 = this;

            console.log('[alfa] youtube.createElement: YT = ' + typeof window.YT);

            // if Youtube API is not injected yet, then delay creating of player to 'onYouTubeIframeAPIReady' event listener
            if (typeof window.YT === 'undefined') {
                window.onYouTubeIframeAPIReady = function () {
                    _this2.createElement(parent, videoId);
                    window.onYouTubeIframeAPIReady = null;
                };
                return;
            }

            var container = document.createElement('div');
            container.className = 'alfa_fillparent';
            container.style.visibility = 'hidden';
            container.style.display = 'none';
            parent.appendChild(container);

            this._overflow = document.createElement('div');
            this._overflow.className = 'alfa_fillparent';
            this._overflow.style.visibility = 'hidden';
            parent.appendChild(this._overflow);
            this._overflow.addEventListener('click', this.onOverflowClick.bind(this));

            this._player = new window.YT.Player(container, {
                videoId: videoId,
                playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'html5': 1, 'modestbranding': 1, 'rel': 0 },
                events: {
                    onStateChange: this.onStateChange.bind(this),
                    onReady: this.onReady.bind(this),
                    onError: this.onErrorEvent.bind(this)
                }
            });
            this._container = parent.getElementsByTagName('iframe')[0];
        }
    }, {
        key: 'onStateChange',
        value: function onStateChange(e) {
            var _this3 = this;

            console.log('ON Youtube state changed event', __filterEventState(e));

            switch (e.data) {
                case window.YT.PlayerState.PAUSED:
                    {
                        clearInterval(this.tweenTimeInterval);
                        var ytTime = this._player.getCurrentTime();
                        this._currentTime = this._currentTime > ytTime ? this._currentTime : ytTime;
                        this.emit(MEDIA_EVENTS.pause);
                        console.log('PAUSED, ytTime:', ytTime, ' currentTime:', this._currentTime);
                        if (this.duration - this._currentTime <= 0) {
                            this.emit(MEDIA_EVENTS.ended);
                        }
                    }
                    break;

                case window.YT.PlayerState.PLAYING:
                    {
                        var dur = this._player.getDuration();
                        if (dur !== this._duration) {
                            this._duration = dur;
                            this.emit(MEDIA_EVENTS.durationchange);
                        }

                        if (this._currentTime < dur && !this._isEnded) {
                            clearInterval(this.tweenTimeInterval);
                            this.tweenTimeInterval = setInterval(function () {
                                return _this3.tweenTime();
                            }, 100);
                            this.emit(MEDIA_EVENTS.play);
                            this.style.visibility = 'visible';
                        } else {
                            console.log('stop while playing');
                            this._player.stopVideo();
                        }
                    }
                    break;

                case window.YT.PlayerState.ENDED:
                    {
                        clearInterval(this.tweenTimeInterval);
                        this.emit(MEDIA_EVENTS.ended);
                    }
                    break;

                case window.YT.PlayerState.BUFFERING:
                    {
                        if (!this._isEnded) this.emit(PLAYER_EVENTS.BUFFERING);
                    }
                    break;

                case window.YT.PlayerState.CUED:
                    {
                        this.emit(MEDIA_EVENTS.pause);
                    }
                    break;

                /*
                 case window.YT.PlayerState.UNSTARTED: {
                  }
                 break;
                 */
            }
        }
    }, {
        key: 'onOverflowClick',
        value: function onOverflowClick() {
            this.emit(PLAYER_EVENTS.CLICK);
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            this._isReady = true;
            if (typeof this._volume === 'number') this._player.setVolume(this._volume);
            if (this._playOnReady) {
                this._player.playVideo();
            }
        }
    }, {
        key: 'onErrorEvent',
        value: function onErrorEvent(e) {
            console.log('Youtube error: ', e);
            this._error = { code: e.data };
            if (e.data >= 100) {
                this.style.visibility = 'visible';
                this.style.display = 'inline';
                this.emit(MEDIA_EVENTS.error);
            }
        }
    }, {
        key: 'tweenTime',
        value: function tweenTime() {
            var time_update = this._player.getCurrentTime();
            if (time_update >= this._duration) {
                clearInterval(this.tweenTimeInterval);
                this._currentTime = this._duration;
                this.pause();
                this.emit(MEDIA_EVENTS.ended);
                return;
            }

            var playing = this._player.getPlayerState();
            if (playing === 1) {
                if (this.last_time_update == time_update) {
                    this._currentTime += 0.1;
                }
                if (this.last_time_update != time_update) {
                    this._currentTime = time_update;
                }
                if (time_update > this._duration) this._currentTime = this._duration;
            }
            this.last_time_update = time_update;
            this.emit(MEDIA_EVENTS.timeupdate);
        }
    }, {
        key: 'play',
        value: function play() {
            if (this._isReady) {
                this.style.display = 'inline';
                this._player.playVideo();
                this._isEnded = false;
            } else {
                this._playOnReady = true;
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this._isReady) {
                this._player.pauseVideo();
            }
        }
    }, {
        key: 'paused',
        get: function get() {
            if (this._isReady) {
                var s = this._player.getPlayerState();
                return s === -1 || s === 0 || s === 2 || s === window.YT.PlayerState.CUED;
            } else {
                return !this._playOnReady;
            }
        }
    }, {
        key: 'state',
        get: function get() {
            if (this._isReady) {
                return this._player.getPlayerState();
            } else {
                return -1;
            }
        }
    }, {
        key: 'volume',
        get: function get() {
            return this._isReady ? this._player.getVolume() : 1;
        },
        set: function set(value) {
            value *= 100;
            if (this._isReady) {
                this._player.setVolume(value);
            } else {
                this._volume = value;
            }
        }
    }, {
        key: 'error',
        get: function get() {
            return this._error;
        }
    }, {
        key: 'duration',
        get: function get() {
            return this._isReady ? this._player.getDuration() : 0;
        }
    }, {
        key: 'currentTime',
        get: function get() {
            return this._currentTime;
        },
        set: function set(value) {
            if (value > this._duration) {
                value = this._duration;
            }

            this._currentTime = value;
            if (this._isReady) {
                this._player.seekTo(value);
            }
            this.emit(MEDIA_EVENTS.timeupdate);
        }
    }, {
        key: 'src',
        get: function get() {
            return this._src;
        },
        set: function set(value) {
            this._src = value;
        }
    }]);

    return Youtube;
}(EventSystem);

function __filterEventState(event) {
    return Object.keys(window.YT.PlayerState).filter(function (key) {
        return window.YT.PlayerState[key] === event.data;
    }).pop();
}

module.exports = Youtube;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VPAIDFLASHClient = __webpack_require__(35);

var EventSystem = __webpack_require__(0);
var settings = __webpack_require__(7);
var ContextMenu = __webpack_require__(14);
var constants = __webpack_require__(1);
var errors = __webpack_require__(4);

var FlashClientOpts = { data: constants.URL.VPAID_FLASH };
var VAST_EVENTS = constants.VAST_EVENTS;
var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var MEDIA_EVENTS = constants.MEDIA_EVENTS;
var EVENTS = ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
'AdSizeChange', // VPAID 2.0 new event
'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError'];

var VPAIDPlayer = function (_EventSystem) {
    _inherits(VPAIDPlayer, _EventSystem);

    function VPAIDPlayer(parent, videoEl, wap) {
        _classCallCheck(this, VPAIDPlayer);

        var _this = _possibleConstructorReturn(this, (VPAIDPlayer.__proto__ || Object.getPrototypeOf(VPAIDPlayer)).call(this));

        _this._src = '';
        _this._videoEl = videoEl;
        _this._paused = true;
        _this._duration = 0;
        _this._currentTime = 0;
        _this._id = Math.floor(Math.random() * 1000);
        _this._parent = parent;
        _this._volume = videoEl.volume;
        _this._wap = wap;
        _this._type = constants.VIDEO_TYPE.HTML5;
        _this._errorSent = false;
        _this._frameContainer = null;

        _this.style = {
            set visibility(value) {
                //self._overflow.style.visibility = value;
            },
            set display(value) {
                //self._overflow.style.display = value;
            }
        };

        _this.buffered = {
            get length() {
                return 0;
            }
        };
        return _this;
    }

    _createClass(VPAIDPlayer, [{
        key: 'createElement',
        value: function createElement() {
            console.log('[alfa] Create VPAID container elememnt ', this._type);

            this._errorSent = false;
            this._adLoadTimeoutTimer = setTimeout(VPAIDPlayer.prototype._onAdLoadTimeout.bind(this), settings.local.vpaid_load_timeout);

            var frame = void 0;
            if (this._type === constants.VIDEO_TYPE.HTML5) {
                frame = this.createHTML5Frame();
            } else if (this._type === constants.VIDEO_TYPE.FLASH) {
                frame = this.createFlashFrame();
            }

            if (frame) {
                frame.style.border = '0px';
                frame.style.width = '100%';
                frame.style.height = '100%';
                frame.style.position = 'absolute';
                frame.style.left = '0';
                frame.style.top = '0';
                frame.style.overflow = 'hidden';
                frame.scrolling = 'no';
            }
        }
    }, {
        key: 'createHTML5Frame',
        value: function createHTML5Frame() {
            var _this2 = this;

            var frame = this._frame = document.createElement('iframe');
            frame.src = 'javascript:false';

            this._parent.appendChild(frame);
            var d = frame.contentWindow.document;
            d.open().write(this.generateHTML5FrameSource(this._src));
            frame.contentWindow.alfaLoad = this.onIFrameReady.bind(this);
            frame.contentWindow.alfaError = function (error) {
                return _this2._emitError(error);
            };
            d.close();

            frame.contentWindow.document.addEventListener('contextmenu', function (e) {
                console.log('ASD CONTEXT MENUS');
                var items = [{ id: 'about_player', text: 'About Web Alfa player', href: 'http://www.alfaplayer.com/share/' }];
                ContextMenu.showAt(e.x, e.y, items, _this2._parent);
                e.preventDefault();
            });

            //this._videoEl.addEventListener('timeupdate', this.onHTML5TimeUpdate.bind(this));
            //this._videoEl.addEventListener('durationchange', this.onHTML5DurationChange.bind(this));

            return frame;
        }
    }, {
        key: 'generateHTML5FrameSource',
        value: function generateHTML5FrameSource(src) {
            return '<head>' + '<script>' + 'function onLoad() {' + '    var js = document.createElement("script");' + '    js.src = "' + src + '";' + '    js.addEventListener("load", function() { window.alfaLoad(); });' + '    js.addEventListener("error", function(error) { window.alfaError(new URIError("VPAID script " + error.target.src + " is not accessible.")); });' + '    document.body.appendChild(js);' + '}' + '</script>' + '</head>' + '<body onload="onLoad()" style="margin: 0">';
        }
    }, {
        key: 'createFlashFrame',
        value: function createFlashFrame() {
            var frame = void 0;

            if (this._frameContainer === null) {
                frame = this._frameContainer = document.createElement('span');
                this._frameContainer.className = 'alfa-vpaid-container';
                //this._frameContainer.style.display = 'none';
                this._parent.appendChild(this._frameContainer);
            }

            var vpaidFlashClient = new VPAIDFLASHClient(this._frameContainer, function (error) {
                if (error) {
                    console.log('[alfa] VPAID Error:', error);
                    this._emitError(error);
                }

                vpaidFlashClient.loadAdUnit(this._src, function (error, adUnit) {
                    var _this3 = this;

                    if (error) {
                        console.log('[alfa] VPAID Error:', error);
                        this._emitError(error);
                    }

                    this._creative = adUnit;
                    var adParams = this._wap.currentAd.adParameters != null ? this._wap.currentAd.adParameters : '';
                    var adUnitData = { AdParameters: adParams };
                    var rect = this._parent.getBoundingClientRect();
                    adUnit.initAd(rect.width, rect.height, 'normal', -1, adUnitData);

                    EVENTS.forEach(function (eventName) {
                        if (typeof _this3['on' + eventName] === 'function') adUnit.on(eventName, _this3['on' + eventName].bind(_this3));
                    });
                }.bind(this));
            }.bind(this), FlashClientOpts);

            return frame;
        }
    }, {
        key: 'play',
        value: function play() {
            if (this._creative) {
                this._creative.resumeAd();
                this._paused = false;
                this.emit(MEDIA_EVENTS.play);
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this._creative) {
                console.log('pause VPAID ad');
                this._creative.pauseAd();
            }
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            console.log('skip VPAID ad');
            if (this._creative) this._creative.skipAd();
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            console.log('resize VPAID ad');
            if (this._creative) this._creative.resizeAd(width, height, viewMode);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            if (this._creative) this._creative.expandAd();
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            if (this._creative) this._creative.collapseAd();
        }
    }, {
        key: 'getAdLinear',
        value: function getAdLinear() {
            if (this._creative) return this._creative.getAdLinear();else return true;
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded() {
            if (this._creative) return this._creative.getAdExpanded();else return false;
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState() {
            if (this._creative) return this._creative.getAdSkippableState();else return false;
        }
    }, {
        key: 'onAdImpression',
        value: function onAdImpression() {
            console.log('VPAID AdImpression');
            this._wap.notifyImpressions();
        }
    }, {
        key: 'onAdVideoFirstQuartile',
        value: function onAdVideoFirstQuartile() {
            console.log('VPAID onAdVideoFirstQuartile');
            this._wap.notifyOnce(VAST_EVENTS.FIRST_QUARTILE);
        }
    }, {
        key: 'onAdVideoMidpoint',
        value: function onAdVideoMidpoint() {
            console.log('VPAID onAdVideoMidpoint');
            this._wap.notifyOnce(VAST_EVENTS.MIDPOINT);
        }
    }, {
        key: 'onAdVideoThirdQuartile',
        value: function onAdVideoThirdQuartile() {
            console.log('VPAID onAdVideoThirdQuartile');
            this._wap.notifyOnce(VAST_EVENTS.THIRD_QUARTILE);
        }
    }, {
        key: 'onAdLoaded',
        value: function onAdLoaded() {
            this._creative.startAd();
            console.log('VPAID on adLOADED');

            if (this._adLoadTimeoutTimer) clearTimeout(this._adLoadTimeoutTimer);
            this._duration = 0;
            this._currentTime = 0;
            this._paused = false;
            this.emit(MEDIA_EVENTS.play);

            if (this._type === constants.VIDEO_TYPE.FLASH) {
                this._creative.getAdRemainingTime(function (err, value) {
                    if (err == null) {
                        this._duration = value;
                        this.emit(MEDIA_EVENTS.durationchange);
                    }
                }.bind(this));
            } else if (this._type === constants.VIDEO_TYPE.HTML5) {
                //this._duration = this._creative.getAdDuration();
            }

            try {
                //this.emit(PLAYER_EVENTS.TIME_UPDATE);

                this._creative.setAdVolume(this._volume);
                //this._wap.emit(PLAYER_EVENTS.VOLUME_CHANGED, this._volume);
            } catch (e) {
                //console.error('VPAID error',e.message);
            }
        }
    }, {
        key: 'onAdVideoStart',
        value: function onAdVideoStart() {
            console.log('VPAID on ad stared event!!!');
            this._paused = false;
            this._wap.notifyOnce(VAST_EVENTS.START);
        }
    }, {
        key: 'onAdClickThru',
        value: function onAdClickThru(url, id, playerHandles) {
            console.log('VPAID on ad clicked');
            this.emit(PLAYER_EVENTS.AD_CLICK_THROUGH, url, id, playerHandles);
        }
    }, {
        key: 'onAdExpandedChange',
        value: function onAdExpandedChange() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdExpandedChange');
        }
    }, {
        key: 'onAdInteraction',
        value: function onAdInteraction() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdInteraction');
        }
    }, {
        key: 'onAdUserAcceptInvitation',
        value: function onAdUserAcceptInvitation() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdUserAcceptInvitation');
        }
    }, {
        key: 'onAdUserMinimize',
        value: function onAdUserMinimize() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdUserMinimize');
        }
    }, {
        key: 'onAdUserClose',
        value: function onAdUserClose() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdUserClose');
        }
    }, {
        key: 'onAdSkippableStateChange',
        value: function onAdSkippableStateChange() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'AdSkippableStateChange');
        }
    }, {
        key: 'onAdVideoComplete',
        value: function onAdVideoComplete() {
            console.log('VPAID onAdVideoComplete');
            this._wap.notifyOnce(VAST_EVENTS.COMPLETE);
        }
    }, {
        key: 'onAdPaused',
        value: function onAdPaused() {
            console.log('VPAID on paused');
            this._paused = true;
            this.emit(MEDIA_EVENTS.pause);
        }
    }, {
        key: 'onAdPlaying',
        value: function onAdPlaying() {
            console.log('VPAID on playing');
            this._paused = false;
            this.emit(MEDIA_EVENTS.play);
            this.emit(MEDIA_EVENTS.timeupdate);
        }
    }, {
        key: 'onAdError',
        value: function onAdError(e) {
            console.log('VPAID onAdError:', e);
            this._paused = true;
            if (this._type === constants.VIDEO_TYPE.FLASH) {
                //var node = this._frameContainer;
                // while (node.firstChild) {
                //     node.removeChild(node.firstChild);
                // }
                this._parent.removeChild(this._frameContainer);
                this._frameContainer = null;
            } else {
                this._parent.removeChild(this._frame);
            }
            this._frame = void 0;
            this._creative = void 0;
            if (this._adLoadTimeoutTimer) clearTimeout(this._adLoadTimeoutTimer);
            if (!this._errorSent) this._errorSent = true;

            var vastError = errors.createVastError(errors.VAST.VPAID_ERROR, e && e.message || e);
            this.emit(MEDIA_EVENTS.error, vastError);
        }
    }, {
        key: 'onAdDurationChange',
        value: function onAdDurationChange() {
            /*
             if(this._type === constants.VIDEO_TYPE.FLASH) {
             this._creative.getAdRemainingTime(function(err, value){
             if(err == null) {
             this._duration = value;
             this.emit(PLAYER_EVENTS.DURATION_CHANGE);
             }
             }.bind(this));
             }
             else */
            if (this._type === constants.VIDEO_TYPE.HTML5 && this._creative) {
                this._duration = this._creative.getAdDuration();
                this._currentTime = this._duration - this._creative.getAdRemainingTime();
                this.emit(MEDIA_EVENTS.timeupdate);
                this.emit(MEDIA_EVENTS.durationchange);
            }
        }
    }, {
        key: 'onAdVolumeChange',
        value: function onAdVolumeChange() {
            var vol = this._creative.getAdVolume();
            this._wap.ui.setVolumeUI(vol);
            this._wap.emit(MEDIA_EVENTS.volumechange, vol);
        }
    }, {
        key: 'onAdRemainingTimeChange',
        value: function onAdRemainingTimeChange() {
            //console.log('VPAID onAdRemainingTimeChange');
            if (this._type === constants.VIDEO_TYPE.FLASH) {
                this._creative.getAdRemainingTime(function (err, value) {
                    if (err == null) {
                        this._onRemainingTimeChange(value);
                    }
                }.bind(this));
            } else if (this._type === constants.VIDEO_TYPE.HTML5 && this._creative) {
                this._duration = this._creative.getAdDuration();
                var value = this._creative.getAdRemainingTime();
                this._onRemainingTimeChange(value);
            }
        }
    }, {
        key: 'onAdStopped',
        value: function onAdStopped() {
            console.log('VPAID AdStopped');

            if (this._type === constants.VIDEO_TYPE.FLASH) {
                // while(this._frameContainer.firstChild)
                //     this._frameContainer.removeChild(this._frameContainer.firstChild);
                this._parent.removeChild(this._frameContainer);
                this._frameContainer = null;
            } else {
                if (this._frame.parentNode) this._frame.parentNode.removeChild(this._frame);
            }

            setTimeout(function () {
                this.emit(MEDIA_EVENTS.ended);
            }.bind(this), 75);
            this._frame = void 0;
            this._creative = void 0;
        }
    }, {
        key: 'onAdSkipped',
        value: function onAdSkipped() {
            this._wap.emit(PLAYER_EVENTS.VPAID_EVENT, 'onAdSkipped');
        }
    }, {
        key: '_emitError',
        value: function _emitError(error) {
            if (!this._errorSent) {
                this._errorSent = true;

                var vastError = errors.createVastError(errors.VAST.VPAID_ERROR, error && error.message || error);
                this.emit(MEDIA_EVENTS.error, vastError);
            }
        }
    }, {
        key: '_onAdLoadTimeout',
        value: function _onAdLoadTimeout() {
            console.log('adloadtimeout');
            this._emitError('adloadtimeout');
        }
    }, {
        key: '_onRemainingTimeChange',
        value: function _onRemainingTimeChange(value) {
            if (this._duration === 0) {
                this._duration = value;
                this.emit(MEDIA_EVENTS.durationchange);
            }
            this._currentTime = this._duration - value;
            this.emit(MEDIA_EVENTS.timeupdate);
        }
    }, {
        key: 'onHTML5TimeUpdate',
        value: function onHTML5TimeUpdate() {
            if (this._type !== constants.VIDEO_TYPE.HTML5) return;
            console.log('vpaid html5 timeupdate');
        }
    }, {
        key: 'onHTML5DurationChange',
        value: function onHTML5DurationChange() {
            if (this._type !== constants.VIDEO_TYPE.HTML5) return;
            console.log('vpaid html5 duration change');
        }
    }, {
        key: 'onParentResize',
        value: function onParentResize() {
            console.log('OnParentResize');
            if (this._creative) {
                var rect = this._videoEl.getBoundingClientRect();
                this._creative.resizeAd(rect.width, rect.height, 'normal');
            }
        }
    }, {
        key: 'onIFrameReady',
        value: function onIFrameReady() {
            console.log('VPAID IFRAME ready');
            var vpaidAD = this._creative = this._frame.contentWindow.getVPAIDAd();
            var adEl = this._frame.contentWindow.document.createElement('div');
            adEl.className = 'ad-element';
            adEl.style.height = '100%';
            this._frame.contentWindow.document.body.appendChild(adEl);
            var rect = this._videoEl.getBoundingClientRect();
            var adParams = this._wap.currentAd.adParameters != null ? this._wap.currentAd.adParameters : '';

            EVENTS.forEach(function (eventName) {
                if (typeof this['on' + eventName] === 'function')
                    //console.log('vpaid subscribe',eventName);
                    vpaidAD.subscribe(this['on' + eventName], eventName, this);
            }.bind(this));

            vpaidAD.initAd(rect.width, rect.height, 'normal', 1000, {
                AdParameters: adParams
            }, {
                slot: adEl,
                videoSlot: this._videoEl
            });
        }
    }, {
        key: 'paused',
        get: function get() {
            return this._paused;
        }
    }, {
        key: 'type',
        get: function get() {
            return this._type;
        },
        set: function set(value) {
            this._type = value;
        }
    }, {
        key: 'volume',
        get: function get() {
            return this._volume;
        },
        set: function set(value) {
            this._volume = value;
            try {
                if (this._creative) this._creative.setAdVolume(value);
            } catch (e) {
                //console.error('VPAID error',e.message);
            }
        }
    }, {
        key: 'error',
        get: function get() {
            return null;
        }
    }, {
        key: 'duration',
        get: function get() {
            return this._duration;
        }
    }, {
        key: 'currentTime',
        get: function get() {
            return this._currentTime;
        }

        //not implemented

    }, {
        key: 'src',
        get: function get() {
            return this._src;
        },
        set: function set(value) {
            this._src = value;
            this.createElement();
        }
    }]);

    return VPAIDPlayer;
}(EventSystem);

module.exports = VPAIDPlayer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swfobject = __webpack_require__(15);

var JSFlashBridge = __webpack_require__(16).JSFlashBridge;
var VPAIDAdUnit = __webpack_require__(37).VPAIDAdUnit;

var noop = __webpack_require__(3).noop;
var callbackTimeout = __webpack_require__(3).callbackTimeout;
var isPositiveInt = __webpack_require__(3).isPositiveInt;
var createElementWithID = __webpack_require__(3).createElementWithID;
var uniqueVPAID = __webpack_require__(3).unique('vpaid');
var createFlashTester = __webpack_require__(39).createFlashTester;

var ERROR = 'error';
var FLASH_VERSION = '10.1.0';

var flashTester = { isSupported: function isSupported() {
        return true;
    } }; // if the runFlashTest is not run the flashTester will always return true

var VPAIDFLASHClient = function () {
    function VPAIDFLASHClient(vpaidParentEl, callback) {
        var swfConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        var _this = this;

        var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { wmode: 'transparent', salign: 'tl', align: 'left', allowScriptAccess: 'always', scale: 'noScale', allowFullScreen: 'true', quality: 'high' };
        var vpaidOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { debug: false, timeout: 10000 };

        _classCallCheck(this, VPAIDFLASHClient);

        var me = this;

        this._vpaidParentEl = vpaidParentEl;
        this._flashID = uniqueVPAID();
        this._destroyed = false;
        callback = callback || noop;

        swfConfig.width = isPositiveInt(swfConfig.width, 800);
        swfConfig.height = isPositiveInt(swfConfig.height, 400);

        createElementWithID(vpaidParentEl, this._flashID, true);

        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + this._flashID + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER + '&debug=' + vpaidOptions.debug + '&salign=' + params.salign;

        this.el = swfobject.createSWF(swfConfig, params, this._flashID);

        if (!this.el) {
            return onError('swfobject failed to create object in element');
        }

        var handler = callbackTimeout(vpaidOptions.timeout, function (err, data) {
            $loadPendedAdUnit.call(_this);
            callback(err, data);
        }, function () {
            callback('vpaid flash load timeout ' + vpaidOptions.timeout);
        });

        this._flash = new JSFlashBridge(this.el, swfConfig.data, this._flashID, swfConfig.width, swfConfig.height, handler);

        function onError(error) {
            setTimeout(function () {
                callback(new Error(error));
            }, 0);
            return me;
        }
    }

    _createClass(VPAIDFLASHClient, [{
        key: 'destroy',
        value: function destroy() {
            this._destroyAdUnit();

            if (this._flash) {
                this._flash.destroy();
                this._flash = null;
            }
            this.el = null;
            this._destroyed = true;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: '_destroyAdUnit',
        value: function _destroyAdUnit() {
            delete this._loadLater;

            if (this._adUnitLoad) {
                this._adUnitLoad = null;
                this._flash.removeCallback(this._adUnitLoad);
            }

            if (this._adUnit) {
                this._adUnit._destroy();
                this._adUnit = null;
            }
        }
    }, {
        key: 'loadAdUnit',
        value: function loadAdUnit(adURL, callback) {
            var _this2 = this;

            $throwIfDestroyed.call(this);

            if (this._adUnit) {
                this._destroyAdUnit();
            }

            if (this._flash.isReady()) {
                this._adUnitLoad = function (err, message) {
                    if (!err) {
                        _this2._adUnit = new VPAIDAdUnit(_this2._flash);
                    }
                    _this2._adUnitLoad = null;
                    callback(err, _this2._adUnit);
                };

                this._flash.callFlashMethod('loadAdUnit', [adURL], this._adUnitLoad);
            } else {
                this._loadLater = { url: adURL, callback: callback };
            }
        }
    }, {
        key: 'unloadAdUnit',
        value: function unloadAdUnit() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            $throwIfDestroyed.call(this);

            this._destroyAdUnit();
            this._flash.callFlashMethod('unloadAdUnit', [], callback);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashID();
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashURL();
        }
    }]);

    return VPAIDFLASHClient;
}();

setStaticProperty('isSupported', function () {
    var supported = swfobject.hasFlashPlayerVersion(FLASH_VERSION) && flashTester.isSupported();

    if (!supported) {
        console.warn('-- VPAIDFLASHClient: Minimum required version of flash ', FLASH_VERSION);
    }

    console.log(["-- VPAIDFLASHClient: Flash version:", swfobject.getFlashPlayerVersion()]);

    return supported;
}, true);

setStaticProperty('runFlashTest', function (swfConfig) {
    flashTester = createFlashTester(document.body, swfConfig);
});

function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error('VPAIDFlashToJS is destroyed!');
    }
}

function $loadPendedAdUnit() {
    if (this._loadLater) {
        this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
        delete this._loadLater;
    }
}

function setStaticProperty(propertyName, value) {
    var writable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    Object.defineProperty(VPAIDFLASHClient, propertyName, {
        writable: writable,
        configurable: false,
        value: value
    });
}

VPAIDFLASHClient.swfobject = swfobject;

module.exports = VPAIDFLASHClient;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SingleValueRegistry = __webpack_require__(12).SingleValueRegistry;
var instances = new SingleValueRegistry();

var JSFlashBridgeRegistry = {};
Object.defineProperty(JSFlashBridgeRegistry, 'addInstance', {
    writable: false,
    configurable: false,
    value: function value(id, instance) {
        instances.add(id, instance);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'getInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.get(id);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'removeInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.remove(id);
    }
});

module.exports = JSFlashBridgeRegistry;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IVPAIDAdUnit = __webpack_require__(38).IVPAIDAdUnit;
var ALL_VPAID_METHODS = Object.getOwnPropertyNames(IVPAIDAdUnit.prototype).filter(function (property) {
    return ['constructor'].indexOf(property) === -1;
});

var VPAIDAdUnit = exports.VPAIDAdUnit = function (_IVPAIDAdUnit) {
    _inherits(VPAIDAdUnit, _IVPAIDAdUnit);

    function VPAIDAdUnit(flash) {
        _classCallCheck(this, VPAIDAdUnit);

        var _this = _possibleConstructorReturn(this, (VPAIDAdUnit.__proto__ || Object.getPrototypeOf(VPAIDAdUnit)).call(this));

        _this._destroyed = false;
        _this._flash = flash;
        return _this;
    }

    _createClass(VPAIDAdUnit, [{
        key: '_destroy',
        value: function _destroy() {
            var _this2 = this;

            this._destroyed = true;
            ALL_VPAID_METHODS.forEach(function (methodName) {
                _this2._flash.removeCallbackByMethodName(methodName);
            });
            IVPAIDAdUnit.EVENTS.forEach(function (event) {
                _this2._flash.offEvent(event);
            });

            this._flash = null;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._flash.on(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            this._flash.off(eventName, callback);
        }

        //VPAID interface

    }, {
        key: 'handshakeVersion',
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('handshakeVersion', [playerVPAIDVersion], callback);
        }
    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);
            creativeData = creativeData || { AdParameters: '' };
            environmentVars = environmentVars || { flashVars: '' };

            this._flash.callFlashMethod('initAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode, desiredBitrate, creativeData.AdParameters || '', environmentVars.flashVars || ''], callback);
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

            //resize element that has the flash object
            this._flash.setSize(width, height);

            //resize ad inside the flash
            this._flash.callFlashMethod('resizeAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode], callback);
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('startAd', [], callback);
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('stopAd', [], callback);
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('pauseAd', [], callback);
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('resumeAd', [], callback);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('expandAd', [], callback);
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('collapseAd', [], callback);
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            this._flash.callFlashMethod('skipAd', [], callback);
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {
            this._flash.callFlashMethod('getAdLinear', [], callback);
        }
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {
            this._flash.callFlashMethod('getAdWidth', [], callback);
        }
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {
            this._flash.callFlashMethod('getAdHeight', [], callback);
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {
            this._flash.callFlashMethod('getAdExpanded', [], callback);
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {
            this._flash.callFlashMethod('getAdSkippableState', [], callback);
        }
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {
            this._flash.callFlashMethod('getAdRemainingTime', [], callback);
        }
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {
            this._flash.callFlashMethod('getAdDuration', [], callback);
        }
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(volume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            this._flash.callFlashMethod('setAdVolume', [volume], callback);
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {
            this._flash.callFlashMethod('getAdVolume', [], callback);
        }
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {
            this._flash.callFlashMethod('getAdCompanions', [], callback);
        }
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {
            this._flash.callFlashMethod('getAdIcons', [], callback);
        }
    }]);

    return VPAIDAdUnit;
}(IVPAIDAdUnit);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//simple representation of the API

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IVPAIDAdUnit = exports.IVPAIDAdUnit = function () {
    function IVPAIDAdUnit() {
        _classCallCheck(this, IVPAIDAdUnit);
    }

    _createClass(IVPAIDAdUnit, [{
        key: 'handshakeVersion',


        //all methods below
        //are async methods
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '2.0';
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }

        //creativeData is an object to be consistent with VPAIDHTML

    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { AdParameters: '' };
            var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { flashVars: '' };
            var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : undefined;
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {}
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {}
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {}
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {}
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {}
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {}
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {}
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(soundVolume) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {}
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {}
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {}
    }]);

    return IVPAIDAdUnit;
}();

Object.defineProperty(IVPAIDAdUnit, 'EVENTS', {
    writable: false,
    configurable: false,
    value: ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError']
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swfobject = __webpack_require__(15);

var FLASH_TEST = 'vpaid_video_flash_tester';
var FLASH_TEST_EL = 'vpaid_video_flash_tester_el';
var JSFlashBridge = __webpack_require__(16).JSFlashBridge;
var utils = __webpack_require__(3);
var MultipleValuesRegistry = __webpack_require__(12).MultipleValuesRegistry;

var FlashTester = function () {
    function FlashTester(parent) {
        var _this = this;

        var swfConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { data: 'VPAIDFlash.swf', width: 800, height: 400 };

        _classCallCheck(this, FlashTester);

        this.parentEl = utils.createElementWithID(parent, FLASH_TEST_EL); // some browsers create global variables using the element id http://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables
        utils.hideFlashEl(this.parentEl);
        var params = {};
        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + FLASH_TEST_EL + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER;
        params.allowScriptAccess = 'always';

        this.el = swfobject.createSWF(swfConfig, params, FLASH_TEST_EL);
        this._handlers = new MultipleValuesRegistry();
        this._isSupported = false;
        if (this.el) {
            utils.hideFlashEl(this.el);
            this._flash = new JSFlashBridge(this.el, swfConfig.data, FLASH_TEST_EL, swfConfig.width, swfConfig.height, function () {
                var support = true;
                _this._isSupported = support;
                _this._handlers.get('change').forEach(function (callback) {
                    setTimeout(function () {
                        callback('change', support);
                    }, 0);
                });
            });
        }
    }

    _createClass(FlashTester, [{
        key: 'isSupported',
        value: function isSupported() {
            // return this._isSupported;
            return true;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }]);

    return FlashTester;
}();

var createFlashTester = exports.createFlashTester = function createFlashTester(el, swfConfig) {
    if (!window[FLASH_TEST]) {
        window[FLASH_TEST] = new FlashTester(el, swfConfig);
    }
    return window[FLASH_TEST];
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSystem = __webpack_require__(0);
var errors = __webpack_require__(4);

var EVENTS = {
    VAST_ERROR: 'vast_error'
};

var CompanionArea = function (_EventSystem) {
    _inherits(CompanionArea, _EventSystem);

    function CompanionArea(parentElement, height, width, companion) {
        _classCallCheck(this, CompanionArea);

        var _this = _possibleConstructorReturn(this, (CompanionArea.__proto__ || Object.getPrototypeOf(CompanionArea)).call(this));

        _this.companionInfo = companion;
        _this.clickThrough = companion.clickThrough;

        var content = _this.companionRoot = document.createElement('img');
        content.src = companion.staticResource;
        content.style.margin = '0px';
        content.style.padding = '0px';

        // emit VAST error if target resource cannot be loaded
        content.onerror = function () {
            var error = errors.createVastError(errors.VAST.COMPANION_FETCH, 'Companion resource \'' + content.src + '\' is not accessible.');
            _this.emit(EVENTS.VAST_ERROR, error);
        };

        parentElement.style.width = width + 'px';
        parentElement.style.height = height + 'px';

        parentElement.appendChild(content);

        content.addEventListener('click', _this.onCompanionClick.bind(_this));
        return _this;
    }

    _createClass(CompanionArea, [{
        key: 'remove',
        value: function remove() {
            this.companionRoot.parentNode.removeChild(this.companionRoot);
        }
    }, {
        key: 'onCompanionClick',
        value: function onCompanionClick() {
            window.open(this.clickThrough, '_blank');
        }
    }]);

    return CompanionArea;
}(EventSystem);

/**
 * Create new companion UI object
 *
 * @param companionConfig
 * @param companions
 * @returns {CompanionArea|null}
 */


CompanionArea.create = function (companionConfig, companions) {
    var rootElement = document.getElementById(companionConfig.id);
    if (!rootElement) {
        console.log('[alfa] Companion DOM element not found by "#' + companionConfig.id + '"');
        return null;
    }

    // filter companions array for matching by dimensions images
    var filtered = companions.filter(function (companion) {
        // filter by companion type
        if (!companion.staticResource) {
            return false;
        }
        // filter by dimensions
        if (companion.width !== companionConfig.width || companion.height !== companionConfig.height) {
            return false;
        }
        // for now only images
        return companion.creativeType === null || typeof companion.creativeType === 'string' && companion.creativeType.indexOf('image') >= 0;
    });

    // we need only first match
    if (filtered.length > 0) {
        return new CompanionArea(rootElement, companionConfig.height, companionConfig.width, filtered[0]);
    }

    return null;
};

CompanionArea.EVENTS = EVENTS;

module.exports = CompanionArea;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var networking = __webpack_require__(10);
var settings = __webpack_require__(7);
var constants = __webpack_require__(1);

var PLAYER_EVENTS = constants.PLAYER_EVENTS;
var VIDEO_STAGE = constants.VIDEO_STAGE;

var Scheduler = function () {
    function Scheduler(wap) {
        _classCallCheck(this, Scheduler);

        this.wap = wap;
        this.adBreaks = [];
        this.initialState = true;
        this.adInterval = 600;
        this.lastBackupTry = 0;
        this.gettingAd = false;
        this.asapPlayOnGetAd = false;

        this.lastGetAd = 0;
        this.adCount = 0;
    }

    _createClass(Scheduler, [{
        key: 'isScheduled',
        value: function isScheduled() {
            return this.adBreaks.length > 0 || this.isAdOnInterval();
        }
    }, {
        key: 'isGettingAd',
        value: function isGettingAd() {
            return this.gettingAd;
        }
    }, {
        key: 'isAdOnInterval',
        value: function isAdOnInterval() {
            return this.wap.config.isAutoGetAds();
        }
    }, {
        key: 'generateVastTagUrl',
        value: function generateVastTagUrl() {
            return this.wap.config.generateVastTagUrl(this.wap.getPlayerSize(), this.wap.pui);
        }
    }, {
        key: 'precacheAd',
        value: function precacheAd() {
            if (settings.local.show_ad_on_start && this.isAdOnInterval()) {
                var url = this.generateVastTagUrl();
                this.requestAd(url);
            }
        }
    }, {
        key: 'playSecondAd',
        value: function playSecondAd() {
            if (this.preCachedAd) {
                this.wap.playCurrentAd();
                return;
            }

            this.wap.showWaitingForAd();

            this.asapPlayOnGetAd = true;
            if (this.gettingAd) {
                return;
            }
            this.prevVideoType = this.wap.currentVideoType;
            this.wap.abortPlaying();

            var url = this.generateVastTagUrl();
            this.requestAd(url);
        }
    }, {
        key: 'requestNextAd',
        value: function requestNextAd() {
            this.asapPlayOnGetAd = true;
            this.interruptCurrentAd = true;

            var url = this.generateVastTagUrl();
            this.requestAd(url);
        }
    }, {
        key: 'tryBackupVast',
        value: function tryBackupVast() {
            var _this = this;

            console.log('[alfa] try backup vast url');
            this.gettingAd = true;
            var config = this.wap.config;

            if (!settings.local.rotated_ad) {
                var currTime = +new Date();
                var backupVastURL = config.getPassback();
                if (backupVastURL != null && (currTime - this.lastBackupTry) / 60000 > settings.local.frequency_display_ad) {
                    this.lastBackupTry = currTime;

                    this.requestAd(backupVastURL);
                } else {
                    var passbackjs = config.getPassbackJS();

                    if (passbackjs) {
                        var parentElem = config.getParentElement();
                        if (parentElem) {
                            while (parentElem.firstChild) {
                                parentElem.removeChild(parentElem.firstChild);
                            }
                            if (typeof passbackjs === 'object') {
                                parentElem.appendChild(passbackjs);
                                return;
                            }

                            var jsNode = document.createElement('script');
                            if (passbackjs.substr(0, 2) === '//' || passbackjs.substr(0, 4) === 'http') {
                                jsNode.src = passbackjs;
                            } else {
                                if (passbackjs.substr(0, 7) === '<script') {
                                    passbackjs = passbackjs.replace(/<\s*\/?\s*script\s*.*?>/g, '');
                                }
                                jsNode.innerHTML = passbackjs;
                            }
                            parentElem.appendChild(jsNode);
                        }
                        return;
                    }
                }
            }

            if (settings.local.rotated_ad && this.adCount < settings.local.ad_requests_limit) {
                setTimeout(function () {
                    var url = _this.generateVastTagUrl();
                    _this.requestAd(url);
                }, settings.local.ad_retry_request_time * 1000);
                return;
            }

            if (this.asapPlayOnGetAd) this.wap.playMainVideo();
            this.asapPlayOnGetAd = false;
            this.gettingAd = false;
            this.initialState = false;
            this.wap.emit(PLAYER_EVENTS.EMPTY_ADS_LIST);
        }
    }, {
        key: 'shouldPlayAd',
        value: function shouldPlayAd(isAD, currTime) {
            return !isAD && this.isAdOnInterval() && this.adInterval > 0 && settings.local.show_ad_on_video_play && (currTime - this.wap.lastAdTime) / 1000 > settings.local.frequency_display_ad && (currTime - this.lastGetAd) / 1000 > settings.local.ad_retry_request_time;
        }
    }, {
        key: 'shouldPlaySecondAd',
        value: function shouldPlaySecondAd(isAD, currTime, currentVideoTime, duration) {
            if (!settings.local.rotated_ad || this.preCachedAd || this.gettingAd || this.parsingVast) {
                return false;
            }

            if (isAD) {
                return !this.preCachedAd && currentVideoTime && duration && duration - currentVideoTime < 2.0;
            } else {
                return (currTime - this.lastGetAd) / 1000 > settings.local.ad_retry_request_time;
            }
        }
    }, {
        key: 'onTimeupdateEvent',
        value: function onTimeupdateEvent(currentVideoTime, duration) {
            if (this.adCount >= settings.local.ad_requests_limit) {
                return;
            }

            var isAD = this.wap.currentVideoIsAd();
            var currTime = +new Date();
            if (this.shouldPlayAd(isAD, currTime)) {
                console.log('[alfa] need to show ad!');

                var url = this.generateVastTagUrl();
                this.requestAd(url);
                //this.wap.ui.videoElement.pause();
                this.asapPlayOnGetAd = true;
                //this.wap.showWaitingForAd();
            } else if (this.shouldPlaySecondAd(isAD, currTime, currentVideoTime, duration)) {
                console.log('[alfa] Need second ad!!!!');

                this.prevVideoType = this.wap.currentVideoType;
                this.preCachedAd = false;
                this.asapPlayOnGetAd = true;

                var _url = this.generateVastTagUrl();
                this.requestAd(_url);
            }
        }
    }, {
        key: 'onPlayEvent',
        value: function onPlayEvent() {
            if (this.adCount >= settings.local.ad_requests_limit) {
                this.wap.playMainVideo();
                return;
            }

            if (this.initialState && this.isAdOnInterval() && settings.local.show_ad_on_start) {
                console.log('[alfa] Scheduler onPlayEvent, initialState');

                if (this.gettingAd) {
                    this.asapPlayOnGetAd = true;
                    this.wap.showWaitingForAd();
                } else if (this.wap.haveAdTags()) {
                    this.wap.playCurrentAd(VIDEO_STAGE.PRE_ROLL);
                } else {
                    if (this.gettingAd) return;

                    console.log('[alfa] doGetAd onPlayEvent');
                    this.wap.showWaitingForAd();
                    this.asapPlayOnGetAd = true;

                    var url = this.generateVastTagUrl();
                    this.requestAd(url);
                }
            } else {
                if (settings.local.rotated_ad) {
                    this.wap.currentVideoType = this.prevVideoType;
                    if (this.gettingAd) {
                        this.asapPlayOnGetAd = true;
                        return;
                    }
                }
                if (this.wap.currentVideoIsAd()) {
                    this.wap.playCurrentAd();
                } else {
                    this.wap.playMainVideo();
                }
            }
            this.initialState = false;
        }
    }, {
        key: 'requestAd',
        value: function requestAd(url) {
            var _this2 = this;

            console.log('[alfa] Scheduler.requestAd');

            this.gettingAd = true;
            this.lastGetAd = +new Date();
            this.adCount++;

            var requestOptions = {
                timeout: settings.local.getad_timeout,
                headers: { 'Content-Type': 'text/plain' }
            };
            networking.doGet(url, requestOptions, function (error, res) {
                console.log('[alfa] Scheduler.requestAd finished', (+new Date() - _this2.lastGetAd) / 1000);

                if (error || !res || !(res.length > 0)) {
                    _this2.parsingVast = false;
                    console.log('[alfa] No Ad available', res);
                    _this2.wap.emit(PLAYER_EVENTS.EMPTY_ADS_LIST);
                    _this2.tryBackupVast();
                    return;
                }

                _this2.gettingAd = false;
                _this2.parsingVast = true;

                _this2.wap.initVast(res, function () {
                    var firstAdTag = _this2.wap.getAdTags()[0];

                    if (firstAdTag && (firstAdTag.vpaidURL || firstAdTag.videoAd)) {
                        _this2.wap.setCurrentAd(0);
                        if (_this2.asapPlayOnGetAd && (!settings.local.rotated_ad || settings.local.rotated_ad && _this2.wap.isPaused()) || _this2.interruptCurrentAd) {
                            _this2.interruptCurrentAd = false;
                            _this2.wap.playCurrentAd();
                        } else {
                            _this2.preCachedAd = true;
                        }
                        _this2.asapPlayOnGetAd = false;
                    } else {
                        _this2.tryBackupVast();
                    }
                });
            });
        }
    }, {
        key: 'onMainFinishedEvent',
        value: function onMainFinishedEvent() {
            /*
             if(this.postBreak) {
             this.wap.vastData = this.postBreak.vastData;
             this.wap.setCurrentAd(0);
             this.wap.playCurrentAd(VIDEO_STAGE.POST_ROLL);
             utils.notifyUrls(this.postBreak.events['breakstart']);
             }
             */
        }
    }]);

    return Scheduler;
}();

module.exports = Scheduler;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var urlUtils = __webpack_require__(11);

var FLAG_IMPRESSIONS = '__impressions';

/**
 * Notify server through 'Image.src' hack.
 * It's main value is it not susceptible to CORS restrictions, unlike XHR requests.
 */

var VastNotifier = function () {
    function VastNotifier() {
        _classCallCheck(this, VastNotifier);

        this.onceGuard = {};

        this.impressions = null;
        this.events = null;
        this.eventsNonLinear = null;

        this.error = null;
        this.pending = {};
    }

    _createClass(VastNotifier, [{
        key: 'init',
        value: function init(ad) {
            this.onceGuard = {}; // clear notify once flags

            this.impressions = ad.impressions || null;
            this.events = ad.events || null;
            this.eventsNonLinear = ad.nonLinearAds && ad.nonLinearAds.events || null;

            this.error = ad.error || null;
        }

        /**
         * Fire event by name
         *
         * @param {string} eventName
         */

    }, {
        key: 'fire',
        value: function fire(eventName) {
            if (!this.events) {
                return;
            }

            var urls = this.events[eventName];

            console.log('[alfa] Notify event: ', eventName, urls);

            if (urls && urls.length > 0) {
                this.fireByUrl(urls);
            }
        }

        /**
         * Fire event by name only once for current ad
         *
         * @param {string} eventName
         * @returns {boolean} Was event fired on this call
         */

    }, {
        key: 'fireOnce',
        value: function fireOnce(eventName) {
            if (!this.events) {
                return false;
            }
            // if event was invoked earlier - do nothing
            if (this.wasFired(eventName)) {
                return false;
            }

            // Remember that event was invoked
            this.markAsFired(eventName);

            // Fire event
            this.fire(eventName);

            return true;
        }

        /**
         * Fire current ad impressions only once
         *
         * @returns {boolean} Was impressions fired on this call
         */

    }, {
        key: 'fireImpressions',
        value: function fireImpressions() {
            if (!this.impressions || !(this.impressions.length > 0)) {
                return false;
            }
            // if event was invoked earlier - do nothing
            if (this.wasFired(FLAG_IMPRESSIONS)) {
                return false;
            }

            // Remember that event was invoked
            this.markAsFired(FLAG_IMPRESSIONS);

            console.log('[alfa] Notify impressions:', this.impressions);
            this.fireByUrl(this.impressions);

            return true;
        }
    }, {
        key: 'fireNonLinear',
        value: function fireNonLinear(eventName) {
            if (!this.eventsNonLinear) {
                return;
            }

            var urls = this.eventsNonLinear[eventName];

            console.log('[alfa] Notify NonLinear event: ', eventName, urls);

            if (urls && urls.length > 0) {
                this.fireByUrl(urls);
            }
        }

        /**
         * Fire request to provided URL/URLs
         *
         * @param {String|String[]} urls URL
         */

    }, {
        key: 'fireByUrl',
        value: function fireByUrl(urls) {
            var _this = this;

            if (!urls) {
                return;
            }

            if (!Array.isArray(urls)) {
                urls = [urls];
            }

            urls.forEach(function (url) {
                url = urlUtils.checkHttpsAwareness(url);

                var rnd = Math.round(Math.random() * 100000);
                url = url + (url.indexOf('?') > 0 ? '&' : '?') + 'r' + rnd + '=' + rnd;

                var img = document.createElement('img');
                img.src = url;

                // add IMG to PENDING object, to retain object reference, so GC doesn't delete it before request is over
                var imgCode = 'img_' + rnd;
                _this.pending[imgCode] = img;
                img.onload = img.onerror = function () {
                    delete _this.pending[imgCode];
                };
            });
        }

        /**
         * Fire error by code
         *
         * @param {number} errorCode
         */

    }, {
        key: 'fireError',
        value: function fireError(errorCode) {
            if (!this.error) {
                return;
            }

            console.log('[alfa] Notify vast error:', errorCode);

            var url = this.error.replace(/\[ERRORCODE\]/g, errorCode);
            this.fireByUrl(url);
        }

        /**
         * Check if event was fired for current ad
         *
         * @param {string} eventName
         * @returns {boolean}
         */

    }, {
        key: 'wasFired',
        value: function wasFired(eventName) {
            return this.onceGuard[eventName];
        }

        /**
         * Mark event as fired for current ad
         *
         * @param {string} eventName
         */

    }, {
        key: 'markAsFired',
        value: function markAsFired(eventName) {
            this.onceGuard[eventName] = true;
        }
    }]);

    return VastNotifier;
}();

module.exports = VastNotifier;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ParserVast1 = __webpack_require__(44);
var ParserVast2 = __webpack_require__(45);
var EventSystem = __webpack_require__(0);
var utils = __webpack_require__(5);
var errors = __webpack_require__(4);
var constants = __webpack_require__(1);

module.exports = {
    parse: function parse(vastXML, onVastWarning, callback) {
        var xmlDoc = void 0,
            firstTag = void 0;
        if (typeof vastXML === 'object') {
            xmlDoc = vastXML;
            firstTag = xmlDoc;
        } else {
            try {
                xmlDoc = utils.parseXML(vastXML);
                firstTag = xmlDoc.firstChild;
            } catch (e) {
                return callback(errors.createVastError(errors.VAST.PARSING_ERROR, 'Error while parsing VAST XML: ' + e.message));
            }
        }

        // determine VAST version by root tag
        var parser = void 0;
        if (firstTag.nodeName === 'VideoAdServingTemplate') {
            parser = new ParserVast1(1);
        } else if (firstTag.nodeName === 'VAST') {
            var ver = firstTag.getAttribute('version');
            if (ver.substr(0, 3) === '2.0') {
                parser = new ParserVast2(2);
            } else if (ver === '3.0') {
                parser = new ParserVast2(3);
            } else {
                return callback(errors.createVastError(errors.VAST.VERSION_NOT_SUPPORTED, 'Version in VAST - ' + ver));
            }
        } else {
            return callback(errors.createVastError(errors.VAST.SCHEMA_ERROR, 'Not supported root tag - ' + firstTag.nodeName));
        }

        // if we want to pass warnings and parser supports event emitting, then bind to it
        if (onVastWarning && parser instanceof EventSystem) {
            parser.on(constants.PLAYER_EVENTS.VAST_WARNING, function (error) {
                onVastWarning(error);
            });
        }

        // run parsing
        parser.parse(xmlDoc, callback);
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vast = __webpack_require__(6).Vast;
var AdTag = __webpack_require__(6).AdTag;

var ParserVast1 = function () {
    function ParserVast1(version) {
        _classCallCheck(this, ParserVast1);

        this.vastInfo = new Vast(version);
        this.wrapperCounter = 0;
    }

    _createClass(ParserVast1, [{
        key: 'parse',
        value: function parse(xmlDoc, callback) {
            var ad = xmlDoc.getElementsByTagName('Ad')[0];
            try {
                var video = ad.getElementsByTagName('Video')[0];
                var mediaFile = video.getElementsByTagName('MediaFile');
                this.vastInfo.videoAd = mediaFile[0].getElementsByTagName('URL')[0].firstChild.data;
                this.vastInfo.videoClickThrough = video.getElementsByTagName('VideoClicks')[0].getElementsByTagName('ClickThrough')[0].getElementsByTagName('URL')[0].firstChild.data;
            } catch (e) {
                console.error('[alfa] Error parsing vast version 1 (video section)', e);
            }

            var adTag = new AdTag();
            this.vastInfo.adTags.push(adTag);

            var urls = ad.getElementsByTagName('Impression')[0].getElementsByTagName('URL');
            for (var i = 0; i < urls.length; i++) {
                adTag.impressions.push(urls[i].firstChild.data);
            }

            var tracking = ad.getElementsByTagName('TrackingEvents')[0].getElementsByTagName('Tracking');
            for (var _i = 0; _i < tracking.length; _i++) {
                var eventName = tracking[_i].getAttribute('event');
                if (!eventName) continue;

                var _urls = tracking[_i].getElementsByTagName('URL');
                adTag.events[eventName.toLowerCase()] = [];
                for (var j = 0; j < _urls.length; j++) {
                    if (_urls[j].firstChild.data) adTag.events[eventName.toLowerCase()].push(_urls[j].firstChild.data);
                }
            }

            callback(null, this.vastInfo);
        }
    }]);

    return ParserVast1;
}();

module.exports = ParserVast1;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vast = __webpack_require__(6).Vast;
var AdTag = __webpack_require__(6).AdTag;
var Companion = __webpack_require__(6).Companion;
var InnerNonLinear = __webpack_require__(6).InnerNonLinear;
var NonLinear = __webpack_require__(6).NonLinear;
var EventSystem = __webpack_require__(0);
var utils = __webpack_require__(5);
var urlUtils = __webpack_require__(11);
var constants = __webpack_require__(1);
var errors = __webpack_require__(4);
var ua = __webpack_require__(8).parsed;

var WRAPPER_LOOP_LIMIT = 10;

var ParserVast2 = function (_EventSystem) {
    _inherits(ParserVast2, _EventSystem);

    function ParserVast2(version) {
        _classCallCheck(this, ParserVast2);

        var _this = _possibleConstructorReturn(this, (ParserVast2.__proto__ || Object.getPrototypeOf(ParserVast2)).call(this));

        _this.version = version;
        _this.wrapperCounter = 0;
        return _this;
    }

    _createClass(ParserVast2, [{
        key: 'parse',
        value: function parse(xmlDoc, callback) {
            var _this2 = this;

            var ads = xmlDoc.getElementsByTagName('Ad');
            if (ads.length === 0) {
                // console.log('[alfa] parsed vast:', this.vastInfo);
                callback(errors.createVastError(errors.VAST.UNDEFINED_ERROR, 'No AD tags in VAST'));
            }

            var vast = new Vast(this.version);
            var adTagIndex = 0;

            var readTagFunc = function readTagFunc() {
                // console.log('Parse AD:', ads[iteration]);

                _this2.readAdTag(ads[adTagIndex], new AdTag(), true, function (adTag) {
                    if (adTag.impressions.length > 0 || adTag.vpaidURL != null) {
                        if (adTag.videoAd && adTag.adParameters) adTag.videoAd = adTag.videoAd + '?' + adTag.adParameters;
                        vast.adTags.push(adTag);
                    }

                    adTagIndex++;
                    if (adTagIndex < ads.length) {
                        readTagFunc();
                    } else {
                        // end of parsing and return to caller
                        callback(null, vast);
                    }
                });
            };

            readTagFunc();
        }
    }, {
        key: 'readAdTag',
        value: function readAdTag(adNode, adTag, followAdditionalWrappers, callback) {
            var inlineTags = adNode.getElementsByTagName('InLine');
            var wrapperTags = adNode.getElementsByTagName('Wrapper');
            var adChildTag = inlineTags.length > 0 ? inlineTags[0] : wrapperTags[0];

            var adSystemTags = adChildTag.getElementsByTagName('AdSystem');
            if (adSystemTags.length > 0) {
                adTag.AdSystem = utils.getCDATA(adSystemTags[0]);
            }

            var errorTags = adChildTag.getElementsByTagName('Error');
            if (errorTags.length > 0) {
                adTag.error = utils.getCDATA(errorTags[0]);
            }

            var impressionTags = adChildTag.getElementsByTagName('Impression');
            for (var i = 0; i < impressionTags.length; i++) {
                var impressionText = utils.getCDATA(impressionTags[i]);
                if (impressionText) {
                    adTag.impressions.push(impressionText);
                }
            }

            var creativeTags = adChildTag.getElementsByTagName('Creative');
            for (var _i = 0; _i < creativeTags.length; _i++) {
                var linearTags = creativeTags[_i].getElementsByTagName('Linear');
                if (linearTags.length > 0) {
                    this.__readLinearTag(adTag, linearTags[0]);
                }

                var companionTags = creativeTags[_i].getElementsByTagName('Companion');
                if (companionTags.length > 0) {
                    for (var j = 0; j < companionTags.length; j++) {
                        var companion = __readCompanionTag(companionTags[j]);
                        adTag.companions.push(companion);
                    }
                }

                var nonLinearAdsTags = creativeTags[_i].getElementsByTagName('NonLinearAds');
                if (nonLinearAdsTags.length > 0) {
                    adTag.nonLinearAds = this.__readNonLinearAdsTag(nonLinearAdsTags[0]);
                }
            }

            if (followAdditionalWrappers && wrapperTags && wrapperTags.length > 0) {
                // if we beyond max limit, then follow wrapper
                if (this.wrapperCounter < WRAPPER_LOOP_LIMIT) {
                    this.wrapperCounter++;
                    var followAdditionalWrappersAttr = wrapperTags[0].getAttribute('followAdditionalWrappers');
                    var followNext = !(followAdditionalWrappersAttr === 'false' || followAdditionalWrappersAttr === false);

                    try {
                        this.followWrapper(adTag, wrapperTags[0], followNext, callback);
                        return;
                    } catch (e) {
                        // notify listeners about wrapper error
                        this.__emitVastWarning(errors.VAST.WRAPPER_ERROR, e.message);
                    }
                } else {
                    // notify server about wrapper limit error
                    this.__emitVastWarning(errors.VAST.WRAPPER_LIMIT, 'Exceeded max wrapper limit: ' + WRAPPER_LOOP_LIMIT);
                }
            }

            callback(adTag);
        }
    }, {
        key: 'followWrapper',
        value: function followWrapper(adTag, wrapper, followAdditionalWrappers, callback) {
            var _this3 = this;

            var tagURI = wrapper.getElementsByTagName('VASTAdTagURI');

            // return if empty 'VASTAdTagURI' tag
            if (tagURI.length <= 0 || tagURI[0].childNodes.length <= 0) {
                callback(adTag);
                return;
            }

            var url = urlUtils.checkHttpsAwareness(tagURI[0].childNodes[0].wholeText.trim());
            utils.getUrlContentAsync(url, function (xml) {
                if (xml && xml.length > 0) {
                    var xmlDoc = utils.parseXML(xml);
                    var ads = xmlDoc.getElementsByTagName('Ad');
                    if (ads && ads.length > 0) {
                        _this3.readAdTag(ads[0], adTag, followAdditionalWrappers, callback);
                        return;
                    } else {
                        // notify server about wrapper limit error
                        _this3.__emitVastWarning(errors.VAST.WRAPPER_NO_ADS, 'No ADS in wrapper response on url: ' + url);
                    }
                }

                callback(adTag);
            });
        }
    }, {
        key: '__readLinearTag',
        value: function __readLinearTag(adTag, linearTag) {
            var offset = __readLinearTagOffset(linearTag);
            if (offset) {
                adTag.skipOffset = offset;
            }

            // search all LINEAR tag media files for most appropriate by formats, dimensions and bitrate
            var supportedFormats = ua.isIOS ? ['video/mp4', 'mp4'] : ['video/mp4', 'video/webm', 'mp4', 'webm'];
            var bitrateLimit = ua.isMobile ? 1000 : 2500;
            var media = __pickLinearTagMedia(linearTag, supportedFormats, bitrateLimit);
            if (media.videoAd) {
                adTag.videoAd = media.videoAd;
                adTag.videoType = media.videoType;
            }
            if (media.type) {
                adTag.type = media.type;
                adTag.vpaidURL = media.vpaidURL;
                adTag.apiFramework = media.apiFramework;
            }

            // if appropriate video not found - take the smallest
            if (adTag.videoAd === null) {
                var smallestMedia = __findLinearTagSmallestMedia(linearTag, supportedFormats);
                adTag.videoAd = smallestMedia.videoAd;
                adTag.videoType = smallestMedia.videoType;
            }

            if (adTag.videoAd == null && adTag.type == null) {
                // notify server about absence of supported MediaFile
                this.__emitVastWarning(errors.VAST.LINEAR_NOT_SUPPORTED, 'No supported MediaFile');
            }

            // add trackings of current LINEAR tag to root AD element
            __readTrackingArray(adTag.events, linearTag.getElementsByTagName('Tracking'));

            var clickThrough = linearTag.getElementsByTagName('ClickThrough');
            if (clickThrough.length > 0) {
                adTag.videoClickThrough = utils.getCDATA(clickThrough[0]);
            }
            var clickTracking = linearTag.getElementsByTagName('ClickTracking');
            for (var j = 0; j < clickTracking.length; j++) {
                adTag.videoClickTracking.push(utils.getCDATA(clickTracking[j]));
            }
            var adParameters = linearTag.getElementsByTagName('AdParameters');
            if (adParameters.length > 0) {
                adTag.adParameters = utils.getCDATA(adParameters[0]);
            }
        }
    }, {
        key: '__readNonLinearAdsTag',
        value: function __readNonLinearAdsTag(tag) {
            var nonLinearAds = new NonLinear();
            __readTrackingArray(nonLinearAds.events, tag.getElementsByTagName('Tracking'));

            var nonLinearTags = tag.getElementsByTagName('NonLinear');
            for (var j = 0; j < nonLinearTags.length; j++) {
                var nl = this.__readNonLinearTag(nonLinearTags[j]);

                // report that we don't support current 'NonLinear' type
                if (!nl.staticResource) {
                    var types = [];
                    if (nl.htmlResource) {
                        types.push('html');
                    }
                    if (nl.iframeResource) {
                        types.push('iframe');
                    }
                    this.__emitVastWarning(errors.VAST.NONLINEAR_SUPPORT, 'Not found supported STATIC NonLinear, found: ' + types.join(','));
                }

                nonLinearAds.nonLinears.push(nl);
            }

            return nonLinearAds;
        }
    }, {
        key: '__readNonLinearTag',
        value: function __readNonLinearTag(tag) {
            var nl = new InnerNonLinear();

            var staticResource = tag.getElementsByTagName('StaticResource');
            if (staticResource.length > 0) {
                nl.staticResource = utils.getCDATA(staticResource[0]);
                nl.creativeType = staticResource[0].getAttribute('creativeType');
            }

            var htmlResource = tag.getElementsByTagName('HTMLResource');
            if (htmlResource.length > 0) {
                nl.htmlResource = utils.getCDATA(htmlResource[0]);
            }

            var iframeResource = tag.getElementsByTagName('IFrameResource');
            if (iframeResource.length > 0) {
                nl.iframeResource = utils.getCDATA(iframeResource[0]);
            }

            var nonLinearClickThrough = tag.getElementsByTagName('NonLinearClickThrough');
            if (nonLinearClickThrough.length > 0) {
                nl.clickThrough = utils.getCDATA(nonLinearClickThrough[0]);
            }

            var nonLinearClickTracking = tag.getElementsByTagName('NonLinearClickTracking');
            if (nonLinearClickTracking.length > 0) {
                nl.clickTracking = utils.getCDATA(nonLinearClickTracking[0]);
            }

            nl.height = tag.getAttribute('height') * 1;
            nl.width = tag.getAttribute('width') * 1;

            return nl;
        }
    }, {
        key: '__emitVastWarning',
        value: function __emitVastWarning(code, msg) {
            var warning = errors.createVastError(code, msg);
            this.emit(constants.PLAYER_EVENTS.VAST_WARNING, warning);
        }
    }]);

    return ParserVast2;
}(EventSystem);

module.exports = ParserVast2;

function __readLinearTagOffset(linearTag) {
    var offsetText = linearTag.getAttribute('skipoffset');
    var durationTags = linearTag.getElementsByTagName('Duration');
    if (typeof offsetText === 'string') {
        if (offsetText.indexOf('%') > 0) {
            if (durationTags.length > 0) {
                var dur = utils.parseTime(durationTags[0].innerHTML.trim());
                return dur * offsetText.slice(0, -1) / 100;
            }
        } else {
            return utils.parseTime(offsetText);
        }
    }

    return null;
}

function __pickLinearTagMedia(linearTag, supportedFormats, bitrateLimit) {
    var media = {};

    var w = 0;
    var h = 0;
    var br = 0;
    var mediaFileTags = linearTag.getElementsByTagName('MediaFile');
    for (var i = 0; i < mediaFileTags.length; i++) {
        var mediaFileTag = mediaFileTags[i];

        var vidType = mediaFileTag.getAttribute('type').toLowerCase().trim();
        if (supportedFormats.indexOf(vidType) >= 0) {
            var vidWidth = mediaFileTag.getAttribute('width') * 1;
            var vidHeight = mediaFileTag.getAttribute('height') * 1;

            if (vidWidth < window.screen.availWidth && vidHeight < window.screen.availHeight) {
                var vidBitrate = mediaFileTag.getAttribute('bitrate') * 1;
                if (vidWidth > w || vidHeight > h) {
                    media.videoAd = utils.getCDATA(mediaFileTag);
                    media.videoType = vidType;
                    w = vidWidth;
                    h = vidHeight;
                    br = vidBitrate;
                } else if (vidWidth === w && vidHeight === h && vidBitrate > br && vidBitrate < bitrateLimit) {
                    media.videoAd = utils.getCDATA(mediaFileTag);
                    media.videoType = vidType;
                    w = vidWidth;
                    h = vidHeight;
                    br = vidBitrate;
                }
            }
        } else if (vidType === constants.MIME.JS || vidType === constants.MIME.FLASH && !ua.isMobile) {
            media.type = vidType === constants.MIME.FLASH ? constants.VIDEO_TYPE.FLASH : constants.VIDEO_TYPE.HTML5;
            media.vpaidURL = utils.getCDATA(mediaFileTag);
            media.apiFramework = mediaFileTag.getAttribute('apiFramework');
        }
    }

    return media;
}

function __findLinearTagSmallestMedia(linearTag, supportedFormats) {
    var minWidth = 999999;
    var smallestVideo = null;
    var smallestType = null;

    var mediaFileTags = linearTag.getElementsByTagName('MediaFile');
    for (var i = 0; i < mediaFileTags.length; i++) {
        var mediaFileTag = mediaFileTags[i];

        var vidType = mediaFileTag.getAttribute('type').toLowerCase().trim();
        if (supportedFormats.indexOf(vidType) >= 0) {
            var vidWidth = mediaFileTag.getAttribute('width') * 1;
            var vidHeight = mediaFileTag.getAttribute('height') * 1;
            if (minWidth > vidWidth) {
                minWidth = vidWidth;
                smallestVideo = utils.getCDATA(mediaFileTag);
                smallestType = vidType;
            }
        }
    }

    return {
        videoAd: smallestVideo,
        videoType: smallestType
    };
}

function __readCompanionTag(tag) {
    var companion = new Companion();

    var companionClickThrough = tag.getElementsByTagName('CompanionClickThrough');
    if (companionClickThrough.length > 0) {
        companion.clickThrough = utils.getCDATA(companionClickThrough[0]);
    }

    var staticResource = tag.getElementsByTagName('StaticResource');
    if (staticResource.length > 0) {
        companion.staticResource = utils.getCDATA(staticResource[0]);
        companion.creativeType = staticResource[0].getAttribute('creativeType');
    }

    var htmlResource = tag.getElementsByTagName('HTMLResource');
    if (htmlResource.length > 0) {
        companion.htmlResource = utils.getCDATA(htmlResource[0]);
    }

    var iframeResource = tag.getElementsByTagName('IFrameResource');
    if (iframeResource.length > 0) {
        companion.iframeResource = utils.getCDATA(iframeResource[0]);
    }

    __readTrackingArray(companion.events, tag.getElementsByTagName('Tracking'));

    companion.width = tag.getAttribute('width') * 1;
    companion.height = tag.getAttribute('height') * 1;

    return companion;
}

function __readTrackingArray(intoTarget, trackingTags) {
    for (var j = 0; j < trackingTags.length; j++) {
        var eventName = trackingTags[j].getAttribute('event');
        if (!eventName) {
            continue;
        }

        // lowercasing all event names
        eventName = eventName.toLowerCase();
        if (!intoTarget[eventName]) {
            intoTarget[eventName] = [];
        }

        intoTarget[eventName].push(utils.getCDATA(trackingTags[j]));
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=webalfaplayer_vpaid.js.map