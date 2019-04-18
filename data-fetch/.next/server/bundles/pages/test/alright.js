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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/test/alright.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/qmtruong92/code/react/data-fetch/pages/test/alright.js: Unexpected token, expected \",\" (19:50)\n\n  17 |     return (\n  18 |       <div>\n> 19 |         <p>Alright has {this.props.post.map( {id} => {\n     |                                                   ^\n  20 |             <p>id</p>;          \n  21 |         }\n  22 |         )}</p>\n    at _class.raise (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2063:16)\n    at _class.expect (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2051:28)\n    at _class.parseCallExpressionArguments (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2913:14)\n    at _class.parseSubscript (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2830:32)\n    at _class.parseSubscripts (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2745:19)\n    at _class.parseExprSubscripts (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2735:17)\n    at _class.parseMaybeUnary (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:2499:21)\n    at _class.jsxParseExpressionContainer (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:7950:32)\n    at _class.jsxParseElementAt (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:8035:36)\n    at _class.jsxParseElementAt (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElement (/Users/qmtruong92/code/react/data-fetch/node_modules/babylon/lib/index.js:8077:19)");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/test/alright.js");


/***/ })

/******/ });
//# sourceMappingURL=alright.js.map