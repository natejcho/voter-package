webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");


var _this = undefined,
    _jsxFileName = "/Users/nathanielcho/Projects/voter-package/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var Styled = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("tr", {
  target: "eyvr5c10",
  label: "Styled"
})(false ? undefined : {
  name: "avikci",
  styles: ".post{display:flex;flex-direction:column .details{color:##828282;font-size:7pt;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3dCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVm90ZSBmcm9tIFwiLi9Wb3RlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgU3R5bGVkID0gc3R5bGVkLnRyYFxuICAucG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBjb2xvcjogIyM4MjgyODI7XG4gICAgICBmb250LXNpemU6IDdwdDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiAoXG4gIDxTdHlsZWQ+XG4gICAgPHRkPntwcm9wcy5pbmRleH0uPC90ZD5cbiAgICA8dGQ+PFZvdGUgLz48L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICA8c3Bhbj57cHJvcHMuc2hvcnRfdGl0bGV9PC9zcGFuPlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb3BzLnBvaW50c30gcG9pbnRzIHwgU3BvbnNvciBOYW1lOiB7cHJvcHMuc3BvbnNvcl9uYW1lfXtcIiBcIn1cbiAgICAgICAge3Byb3BzLmxhdGVzdF9tYWpvcl9hY3Rpb25fZGF0ZX0gfCA8c3Bhbj5oaWRlPC9zcGFuPiB8e1wiIFwifVxuICAgICAgICB7cHJvcHMuY29tbWVudHMubGVuZ3RofSBjb21tZW50c1xuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgPC9TdHlsZWQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Card = function Card(props) {
  return __jsx(Styled, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, props.index, "."), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("td", {
    className: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, props.short_title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, props.points, " points | Sponsor Name: ", props.sponsor_name, " ", props.latest_major_action_date, " | ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 44
    }
  }, "hide"), " |", " ", props.comments.length, " comments")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.37fe3c8eb87a108ae88c.hot-update.js.map