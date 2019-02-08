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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ui/js/create_question.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ui/js/create_question.js":
/*!**********************************!*\
  !*** ./ui/js/create_question.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function () {\n    const formData = document.getElementById('formData');\n    formData.addEventListener('submit', create_question);\n}\nfunction create_question(event) {\n    /*\n    Function to perform creation of question\n    */\n    event.preventDefault();\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length-1]\n    var split_last = last_part.split('=')\n\n    var mid = split_last[split_last.length-1]\n    let title = document.getElementById('title').value;\n    let body = document.getElementById('description').value;\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/meetup/' + mid + '/question/';\n    console.log(url)\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        },\n        body: JSON.stringify({\n            title, body\n        })\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 201){\n                var url = \"./view_question.html?meet=\" + encodeURIComponent(mid)\n                window.location.href = url;\n            }\n            else{\n                console.log(localStorage.getItem('token'))\n                window.alert(data.message);\n            }\n        }))\n}\n\n\n//# sourceURL=webpack:///./ui/js/create_question.js?");

/***/ })

/******/ });