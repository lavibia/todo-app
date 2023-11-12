/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getToday),
/* harmony export */   getDaysInMonth: () => (/* binding */ getDaysInMonth),
/* harmony export */   getFirstDay: () => (/* binding */ getFirstDay),
/* harmony export */   getMonth: () => (/* binding */ getMonth),
/* harmony export */   getYear: () => (/* binding */ getYear)
/* harmony export */ });
function getMonth() {
  var date = new Date();
  var month = date.getMonth();
  console.log("Month: ", month);
  return month; // get the current month
}

function getYear() {
  var date = new Date();
  var year = date.getFullYear();
  console.log("Year: ", year);
  return year; // get the current year
}

function getFirstDay() {
  var firstDay = new Date(getYear(), getMonth(), 1).getDay();
  console.log("First Day: ", firstDay);
  return firstDay; // find what day of the week the first day of the month is
}

function getDaysInMonth() {
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log("Days in Month: ", daysInMonth);
  return daysInMonth; // find out how many days are in the month
}

function getToday() {
  var date = new Date();
  var today = date.getDate();
  console.log("Today: ", today);
  return today;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");
// Purpose: Home page functionality



function home() {
  createCalendar();
}
function createCalendar() {
  var month = (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getMonth)();
  var year = (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getYear)();
  var firstDay = (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getFirstDay)(); // find what day of the week the first day of the month is
  var daysInMonth = (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getDaysInMonth)();
  var table = document.createElement('table');

  // create the days of the week headers
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var headerRow = document.createElement('tr');
  for (var _i = 0, _days = days; _i < _days.length; _i++) {
    var day = _days[_i];
    var th = document.createElement('th');
    th.textContent = day;
    th.classList.add('weekDays');
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  var tr = document.createElement('tr');

  // create the calendar headers
  for (var i = 0; i < firstDay; i++) {
    var td = document.createElement('td');
    tr.appendChild(td);
  }

  // create the calendar rows
  for (var _i2 = 1; _i2 <= daysInMonth; _i2++) {
    if ((_i2 + firstDay) % 7 === 1 && _i2 !== 1) {
      table.appendChild(tr);
      tr = document.createElement('tr');
    }
    var _td = document.createElement('td');
    _td.textContent = _i2;
    _td.classList.add('dayCell');
    // check if the day is today
    if (_i2 === (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__["default"])() && month === (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getMonth)() && year === (0,_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getYear)()) {
      _td.classList.add('today');
    }
    tr.appendChild(_td);
  }
  table.appendChild(tr);
  var calendarDiv = document.getElementById('calendar');
  // clear any existing content
  calendarDiv.textContent = '';
  calendarDiv.appendChild(table);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:ital,wght@0,400;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
    --primary-color: #420099;
    --secondary-color: #ffd700;
    --white-color: #fff;
    --grey-color: #222222;
}
*{
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
}
.loading{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--secondary-color);
        z-index: 9999;
        justify-content: center;
        align-items: center;
}

/* Animation for the preload */
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
.loading img{
    width: 100px;
    height: 100px;
    animation: pulse 1s ease-in-out infinite;
}

/* Home page styles */
#contentHolder{
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    gap: 10px;

}
.sidenav{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--primary-color);
    width: 50px;
}
.topNav{
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    gap: 20px;
}
.navImage{
    width: 35px;
    height: 35px;
    color: var(--secondary-color);
}
.navImage:hover{
    cursor: pointer;
    background-color: var(--secondary-color);
}
.content{
    display:flex;
    flex-direction: row;
}
.today{
    background-color: var(--secondary-color);
    border-radius: 10px;
}
#calendar table{
   border-spacing: 10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,0BAA0B;IAC1B,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,iCAAiC;IACjC,SAAS;IACT,UAAU;AACd;AACA;QACQ,aAAa;QACb,eAAe;QACf,MAAM;QACN,OAAO;QACP,WAAW;QACX,YAAY;QACZ,wCAAwC;QACxC,aAAa;QACb,uBAAuB;QACvB,mBAAmB;AAC3B;;AAEA,8BAA8B;AAC9B;IACI;QACI,mBAAmB;IACvB;IACA;QACI,qBAAqB;IACzB;IACA;QACI,mBAAmB;IACvB;AACJ;AACA;IACI,YAAY;IACZ,aAAa;IACb,wCAAwC;AAC5C;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,SAAS;;AAEb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,sCAAsC;IACtC,WAAW;AACf;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,SAAS;AACb;AACA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,wCAAwC;AAC5C;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,wCAAwC;IACxC,mBAAmB;AACvB;AACA;GACG,oBAAoB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Poppins:ital,wght@0,400;1,800&display=swap');\n:root {\n    box-sizing: border-box;\n    --primary-color: #420099;\n    --secondary-color: #ffd700;\n    --white-color: #fff;\n    --grey-color: #222222;\n}\n*{\n    font-family: 'Nunito', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n.loading{\n        display: flex;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--secondary-color);\n        z-index: 9999;\n        justify-content: center;\n        align-items: center;\n}\n\n/* Animation for the preload */\n@keyframes pulse {\n    0% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.2);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n.loading img{\n    width: 100px;\n    height: 100px;\n    animation: pulse 1s ease-in-out infinite;\n}\n\n/* Home page styles */\n#contentHolder{\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n    width: 100%;\n    gap: 10px;\n\n}\n.sidenav{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    background-color: var(--primary-color);\n    width: 50px;\n}\n.topNav{\n    display: flex;\n    flex-direction:column;\n    justify-content: space-around;\n    gap: 20px;\n}\n.navImage{\n    width: 35px;\n    height: 35px;\n    color: var(--secondary-color);\n}\n.navImage:hover{\n    cursor: pointer;\n    background-color: var(--secondary-color);\n}\n.content{\n    display:flex;\n    flex-direction: row;\n}\n.today{\n    background-color: var(--secondary-color);\n    border-radius: 10px;\n}\n#calendar table{\n   border-spacing: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/about.png":
/*!******************************!*\
  !*** ./src/assets/about.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about.png";

/***/ }),

/***/ "./src/assets/add.png":
/*!****************************!*\
  !*** ./src/assets/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.png";

/***/ }),

/***/ "./src/assets/calendar.png":
/*!*********************************!*\
  !*** ./src/assets/calendar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "calendar.png";

/***/ }),

/***/ "./src/assets/home.png":
/*!*****************************!*\
  !*** ./src/assets/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.png";

/***/ }),

/***/ "./src/assets/projects.png":
/*!*********************************!*\
  !*** ./src/assets/projects.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "projects.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/home.png */ "./src/assets/home.png");
/* harmony import */ var _assets_calendar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/calendar.png */ "./src/assets/calendar.png");
/* harmony import */ var _assets_projects_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/projects.png */ "./src/assets/projects.png");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add.png */ "./src/assets/add.png");
/* harmony import */ var _assets_about_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/about.png */ "./src/assets/about.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.js */ "./src/home.js");







console.log('test');
setTimeout(function () {
  document.getElementById('loading').style.display = 'none';
}, 3000);
(0,_home_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
/*
Project Management: Functions to add, edit, and delete projects. This is crucial for organizing tasks.





Task Management: Functions for adding, editing, and deleting tasks, along with filtering tasks by date, priority.

Subtask Management: Functions for adding, editing, and deleting subtasks within a task.

------. These functions should save data to local storage and retrieve data from it.


Progress Tracking: Calculate and update project progress within your frontend code based on completed tasks stored in local storage. This could be done using a function that calculates the percentage of completed tasks in a project.

Viewing Options: Develop functions to filter and display tasks by day, week, or month within your app, using the data stored in local storage.These functions will allow users to visualize their tasks over different timeframes.

Data Storage: Utilize the browser's local storage API to store and retrieve data. You can use localStorage or sessionStorage to manage your app's data.


----------DATA STRUCTURES-----------
class User {
  constructor(userId, username, email, password) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.password = password;
    this.projects = [];
  }
}

class Project {
  constructor(projectId, title, description) {
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.progress = 0; // Progress percentage
    this.creationDate = new Date();
    this.tasks = [];
  }
}

class Task {
  constructor(taskId, title, description, dueDate, priority, category) {
    this.taskId = taskId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.status = "Incomplete";
    this.subtasks = [];
  }
}

class Subtask {
  constructor(subtaskId, description) {
    this.subtaskId = subtaskId;
    this.description = description;
    this.status = "Incomplete";
  }
}

// Example usage:

// Create a user
const user1 = new User(1, "exampleUser", "user@example.com", "hashedPassword");

// Create a project for the user
const project1 = new Project(1, "Project 1", "Description of project 1");
user1.projects.push(project1);

// Create a task within the project
const task1 = new Task(1, "Task 1", "Description of task 1", new Date("2023-11-15"), "High", "Work");
project1.tasks.push(task1);

// Create subtasks within the task
const subtask1 = new Subtask(1, "Subtask 1");
task1.subtasks.push(subtask1);

// Accessing data
console.log(user1); // Access user and their projects
console.log(project1); // Access a project and its tasks
console.log(task1); // Access a task and its subtasks
console.log(subtask1); // Access a subtask


-----------Using localStorage-------
Define your classes as shown in the previous example.

When you need to save or retrieve data to/from local storage, you can use the JSON.stringify and JSON.parse methods to convert your objects to JSON strings and vice versa.

When your app loads, check if the data exists in local storage. If not, create empty arrays to represent user, project, task, and subtask data structures. If it does exist, parse the JSON strings from local storage back into your object instances.

// Saving data to local storage
localStorage.setItem('userData', JSON.stringify(user1));
localStorage.setItem('projectData', JSON.stringify(user1.projects));
localStorage.setItem('taskData', JSON.stringify(project1.tasks));
localStorage.setItem('subtaskData', JSON.stringify(subtask1));

// Retrieving data from local storage
const savedUser = JSON.parse(localStorage.getItem('userData'));
const savedProjects = JSON.parse(localStorage.getItem('projectData'));
const savedTasks = JSON.parse(localStorage.getItem('taskData'));
const savedSubtasks = JSON.parse(localStorage.getItem('subtaskData'));

// Check if data exists in local storage
if (savedUser) {
  // If data exists, create instances from saved data
  const user1 = new User(savedUser.userId, savedUser.username, savedUser.email, savedUser.password);
  user1.projects = savedProjects || [];
  // Continue to populate your data structure
} else {
  // If no data exists, create new instances as needed
  const user1 = new User(1, "exampleUser", "user@example.com", "hashedPassword");
  const project1 = new Project(1, "Project 1", "Description of project 1");
  user1.projects.push(project1);
  // Continue to populate your data structure
}



-----------Using webpack to generate diferent HTML files from templates------
module.exports = {
  entry: {
    app: './src/app.js', // Entry point for your main JavaScript bundle
    anotherPage: './src/anotherPage.js', // Entry point for another JavaScript bundle
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file for the main entry
      filename: 'index.html', // Output HTML file name
      chunks: ['app'], // Include only 'app' JavaScript bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/anotherPage.html', // Template HTML file for another entry
      filename: 'anotherPage.html', // Output HTML file name
      chunks: ['anotherPage'], // Include only 'anotherPage' JavaScript bundle
    }),
  ],
};


*/
})();

/******/ })()
;
//# sourceMappingURL=bundle0d2305b4261b240534cc.js.map