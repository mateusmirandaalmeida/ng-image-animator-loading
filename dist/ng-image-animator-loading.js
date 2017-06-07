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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Animator {

  contructor(){
    this.restrict = 'A';
    this.scope = {};
    this.priority = 100;
  }

  loadingElement(elm, animation, background){
    const loaders = {
      spinner: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiIHN0cm9rZS13aWR0aD0iMiI+ICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSI2IiBzdHJva2Utb3BhY2l0eT0iMCI+ICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgICAgICAgICAgICAgICAgIGJlZ2luPSIxLjVzIiBkdXI9IjNzIiAgICAgICAgICAgICAgICAgdmFsdWVzPSI2OzIyIiAgICAgICAgICAgICAgICAgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiAgICAgICAgICAgICAgICAgYmVnaW49IjEuNXMiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7MCIgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIgICAgICAgICAgICAgICAgIGJlZ2luPSIxLjVzIiBkdXI9IjNzIiAgICAgICAgICAgICAgICAgdmFsdWVzPSIyOzAiIGNhbGNNb2RlPSJsaW5lYXIiICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICAgIDwvY2lyY2xlPiAgICAgICAgPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iNiIgc3Ryb2tlLW9wYWNpdHk9IjAiPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiICAgICAgICAgICAgICAgICBiZWdpbj0iM3MiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjY7MjIiICAgICAgICAgICAgICAgICBjYWxjTW9kZT0ibGluZWFyIiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiICAgICAgICAgICAgICAgICBiZWdpbj0iM3MiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7MCIgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIgICAgICAgICAgICAgICAgIGJlZ2luPSIzcyIgZHVyPSIzcyIgICAgICAgICAgICAgICAgIHZhbHVlcz0iMjswIiBjYWxjTW9kZT0ibGluZWFyIiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgICA8L2NpcmNsZT4gICAgICAgIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjgiPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMS41cyIgICAgICAgICAgICAgICAgIHZhbHVlcz0iNjsxOzI7Mzs0OzU7NiIgICAgICAgICAgICAgICAgIGNhbGNNb2RlPSJsaW5lYXIiICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICAgIDwvY2lyY2xlPiAgICA8L2c+PC9zdmc+'
    };
    elm.src              = loaders[animation] ? loaders[animation] : loaders['spinner'];
    elm.style.background = background ? background : '#f5f5f5';
  }

  createImage(imageURL, callback){
    let img = new Image();
        img.src = imageURL;
    img.onload = function() {
      callback(this);
    };
  }

  link(scope, element, attrs) {
    const elm  = element && element[0] ? element[0] : undefined,
                 imageURL = attrs.animatorLoading,
                 background = elm.style.background;
    this.loadingElement(elm, attrs.animation, attrs.background);
    this.createImage(imageURL, image => {
      elm.src = image.src;
      elm.style.background = background;
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Animator);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animator__ = __webpack_require__(2);
//REQUIRE CSS
__webpack_require__(0);

//IMPORTS



((exports, angular) => {

  if(!angular){
    throw "ImageAnimatorLoading require's AngularJS in window!!";
  }

  const ngImageAnimatorLoading = angular.module('ngImageAnimatorLoading', []);

  ngImageAnimatorLoading.directive('animatorLoading', () => new __WEBPACK_IMPORTED_MODULE_0__animator__["a" /* default */]);

  if(exports){
     exports = ngImageAnimatorLoading;
  }

})( (window && window.module && window.module.exports) ? module.exports : undefined, (window && window.angular) ? window.angular : undefined);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ })
/******/ ]);