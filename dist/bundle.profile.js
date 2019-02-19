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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ui/js/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ui/js/helper.js":
/*!*************************!*\
  !*** ./ui/js/helper.js ***!
  \*************************/
/*! exports provided: login, signup, meetup, meetups, prof */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meetup\", function() { return meetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"meetups\", function() { return meetups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prof\", function() { return prof; });\nconst prefix = 'https://questioner-system.herokuapp.com/api/v2';\n\nconst signup = prefix + '/auth/signup';\nconst login = prefix + '/auth/login';\nconst meetup = prefix + '/meetups';\nconst meetups = prefix + '/meetups/upcoming';\nconst prof = prefix + '/profile';\n\n\n//# sourceURL=webpack:///./ui/js/helper.js?");

/***/ }),

/***/ "./ui/js/profile.js":
/*!**************************!*\
  !*** ./ui/js/profile.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./ui/js/helper.js\");\n\nprofilename()\nfunction profilename() {\n    /*\n    Function to collect logged in user\n    */\n\n    fetch(_helper__WEBPACK_IMPORTED_MODULE_0__[\"prof\"], {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n               document.getElementById('user').innerHTML = data.data[4].toString().replace(/\"/g, \"\")\n            }\n            else {\n                window.location = \"../admin/login.html\";\n            }\n        }))\n}\nwindow.onload = function () {\n    const signup = document.getElementById('signup');\n    signup.addEventListener('click', profile);\n}\nfunction profile() {\n    /*\n    Function to collect user and load profile page\n    */\n\n    fetch(_helper__WEBPACK_IMPORTED_MODULE_0__[\"prof\"], {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                window.location.href = './profile.html';\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nfunction createProfileData() {\n    /*\n    Function to create user profile data\n    */\n\n    fetch(_helper__WEBPACK_IMPORTED_MODULE_0__[\"prof\"], {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                document.getElementById('fullname').innerHTML = (data.data[1].toString().replace(/\"/g, \"\") + \" \" + data.data[2].toString().replace(/\"/g, \"\"))\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nprofiledata()\nfunction profiledata() {\n    /*\n    Function to collect user and load profile data\n    */\n\n    fetch(_helper__WEBPACK_IMPORTED_MODULE_0__[\"prof\"], {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                document.getElementById('fullname').innerHTML = (data.data[1].toString().replace(/\"/g, \"\") + \" \" + data.data[2].toString().replace(/\"/g, \"\"))\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\n\n//# sourceURL=webpack:///./ui/js/profile.js?");

/***/ })

/******/ });