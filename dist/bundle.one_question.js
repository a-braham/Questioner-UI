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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ui/js/one_question.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ui/js/one_question.js":
/*!*******************************!*\
  !*** ./ui/js/one_question.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("viewQuestion()\nfunction truncate(string, words) {\n    return string.split(\" \").splice(0, words).join(\" \");\n}\nfunction viewQuestion() {\n    /*\n    Function to collect one Question\n    */\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length - 1]\n    var split_last = last_part.split('=')\n    var qid = split_last[split_last.length - 1]\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/questions/' + qid;\n\n    fetch(url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                    document.getElementById('title').innerHTML = JSON.stringify(data.data[1]).toString().replace(/\"/g, \"\");\n                    document.getElementById('description').innerHTML = JSON.stringify(data.data[2]).toString().replace(/\"/g, \"\");\n                    document.getElementById('votes').innerHTML = JSON.stringify(data.data[6]).toString().replace(/\"/g, \"\");\n                    document.getElementById('upvote').addEventListener(\"click\", upvote)\n                    document.getElementById('downvote').addEventListener(\"click\", downvote)\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nfunction upvote() {\n    /*\n    Function to collect one Question\n    */\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length - 1]\n    var split_last = last_part.split('=')\n    var qid = split_last[split_last.length - 1]\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/questions/' + qid + '/upvote/';\n\n    fetch(url, {\n        method: 'PATCH',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                window.location = window.location\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nfunction downvote() {\n    /*\n    Function to collect one Question\n    */\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length - 1]\n    var split_last = last_part.split('=')\n    var qid = split_last[split_last.length - 1]\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/questions/' + qid + '/downvote/';\n\n    fetch(url, {\n        method: 'PATCH',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                window.location = window.location\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nwindow.onload = function () {\n    const formData = document.getElementById('formData');\n    formData.addEventListener('submit', create_comment);\n}\nfunction create_comment(event) {\n    /*\n    Function to create comment based on particular Question\n    */\n\n   event.preventDefault();\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length - 1]\n    var split_last = last_part.split('=')\n    var qid = split_last[split_last.length - 1]\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/questions/' + qid + '/comment/';\n\n    let comment = document.getElementById('com').value;\n\n    fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': localStorage.getItem('token')\n        },\n        body: JSON.stringify({\n            comment\n        })\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 201) {\n                window.location = window.location\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\nviewComments()\nfunction viewComments() {\n    /*\n    Function to collect questions specific to a meetup\n    */\n\n    var page_URL = document.URL;\n    var split_url = page_URL.split('/')\n    var last_part = split_url[split_url.length - 1]\n    var split_last = last_part.split('=')\n    var mid = split_last[split_last.length - 1]\n\n    const prefix = 'https://questioner-system.herokuapp.com/api/v2';\n    const url = prefix + '/questions/' + mid + '/comments/';\n\n    fetch(url, {\n        method: 'GET',\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    })\n        .then((response) => response.json())\n        .then((data => {\n            if (data.status === 200) {\n                let comment_ = new String();\n                data.data.forEach(comments => {\n                    comment_ += `<div class=\"item\">\n                                <p id=\"comment\">${JSON.stringify(comments[3]).toString().replace(/\"/g, \"\")}</p>\n                                <ul>\n                                    <li class=\"user-item\">\n                                        <p class=\"user\">Commented\n                                            2hrs ago<a href=\"#\" class=\"url-link\"> By Grean</a></p>\n                                    </li>\n                                </ul>\n                            </div>`\n                });\n                document.getElementById('allcomments').innerHTML = comment_\n                // data.data.forEach(comments => {\n                //     let url_id = document.getElementById(JSON.stringify(comments[0])).id\n                //     var url = \"../ui/comment.html?question=\" + encodeURIComponent(url_id)\n                //     document.getElementById(JSON.stringify(questions[0])).addEventListener(\"click\", question_redirect)\n                //     function question_redirect() {\n                //         window.location.href = url\n                //     }\n                // });\n            }\n            else {\n                window.alert(data.message);\n            }\n        }))\n}\n\n//# sourceURL=webpack:///./ui/js/one_question.js?");

/***/ })

/******/ });