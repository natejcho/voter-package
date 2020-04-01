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
  name: "12a5s3o",
  styles: ".post{display:flex;flex-direction:column .details{color:##828282;}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3dCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVm90ZSBmcm9tIFwiLi9Wb3RlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgU3R5bGVkID0gc3R5bGVkLnRyYFxuICAucG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBjb2xvcjogIyM4MjgyODI7XG4gICAgfVxuICB9XG5gO1xuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4gKFxuICA8U3R5bGVkPlxuICAgIDx0ZD57cHJvcHMuaW5kZXh9LjwvdGQ+XG4gICAgPHRkPjxWb3RlIC8+PC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgPHNwYW4+e3Byb3BzLnNob3J0X3RpdGxlfTwvc3Bhbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5wb2ludHN9IHBvaW50cyB8IFNwb25zb3IgTmFtZToge3Byb3BzLnNwb25zb3JfbmFtZX17XCIgXCJ9XG4gICAgICAgIHtwcm9wcy5sYXRlc3RfbWFqb3JfYWN0aW9uX2RhdGV9IHwgPHNwYW4+aGlkZTwvc3Bhbj4gfHtcIiBcIn1cbiAgICAgICAge3Byb3BzLmNvbW1lbnRzLmxlbmd0aH0gY29tbWVudHNcbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvU3R5bGVkPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var Card = function Card(props) {
  return __jsx(Styled, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, props.index, "."), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("td", {
    className: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, props.short_title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, props.points, " points | Sponsor Name: ", props.sponsor_name, " ", props.latest_major_action_date, " | ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 44
    }
  }, "hide"), " |", " ", props.comments.length, " comments")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.35e672d0a7ee24318c02.hot-update.js.map