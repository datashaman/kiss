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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/copycode.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/copycode.js":
/*!**********************************!*\
  !*** ./resources/js/copycode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global clipboard */\n/* eslint-disable no-console */\nfunction addCopyButtons(clipboard) {\n    document.querySelectorAll('pre > code').forEach(function (codeBlock) {\n        var button = document.createElement('button');\n        button.className = 'copy-code-button';\n        button.type = 'button';\n        button.innerText = 'Copy';\n        button.addEventListener('click', function () {\n            clipboard.writeText(codeBlock.innerText).then(function () {\n                /* Chrome doesn't seem to blur automatically,\n                   leaving the button in a focused state. */\n                button.blur();\n                button.innerText = 'Copied!';\n                setTimeout(function () {\n                    button.innerText = 'Copy';\n                }, 2000);\n            }, function (error) {\n                button.innerText = 'Error';\n            });\n        });\n        var pre = codeBlock.parentNode;\n        if (pre.parentNode.classList.contains('highlight')) {\n            var highlight = pre.parentNode;\n            highlight.parentNode.insertBefore(button, highlight);\n        } else {\n            pre.parentNode.insertBefore(button, pre);\n        }\n    });\n}\nif (navigator && navigator.clipboard) {\n    addCopyButtons(navigator.clipboard);\n} else {\n    var script = document.createElement('script');\n    script.src =\n        'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';\n    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';\n    script.crossOrigin = 'anonymous';\n    script.onload = function () {\n        addCopyButtons(clipboard);\n    };\n    document.body.appendChild(script);\n}\n\n//# sourceURL=webpack:///./resources/js/copycode.js?");

/***/ })

/******/ });