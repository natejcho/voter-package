webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vote */ "./components/Vote.js");



var _this = undefined,
    _jsxFileName = "/Users/nathanielcho/Projects/voter-package/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Styled = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("tr", {
  target: "eyvr5c10",
  label: "Styled"
})(".post{display:flex;flex-direction:column;.details{color:##828282;font-size:10pt;}.title{color:", function (props) {
  return props.visited ? '#828282' : '#000';
}, ";fontx-size:13pt;}}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3dCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW5pZWxjaG8vUHJvamVjdHMvdm90ZXItcGFja2FnZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVm90ZSBmcm9tIFwiLi9Wb3RlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgU3R5bGVkID0gc3R5bGVkLnRyYFxuICAucG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmRldGFpbHMge1xuICAgICAgY29sb3I6ICMjODI4MjgyO1xuICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy52aXNpdGVkID8gJyM4MjgyODInIDogJyMwMDAnfTtcbiAgICAgIGZvbnR4LXNpemU6IDEzcHQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQ+XG4gICAgICB7aXNWaXNpYmxlICYmXG4gICAgICAgIDw+XG4gICAgICAgICAgPHRkPntwcm9wcy5pbmRleH0uPC90ZD5cbiAgICAgICAgICA8dGQ+PFZvdGUgLz48L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5zaG9ydF90aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAge3Byb3BzLnBvaW50c30gcG9pbnRzIHwgU3BvbnNvciBOYW1lOiB7cHJvcHMuc3BvbnNvcl9uYW1lfXtcIiBcIn1cbiAgICAgICAgICAgICAge3Byb3BzLmxhdGVzdF9tYWpvcl9hY3Rpb25fZGF0ZX0gfCA8c3BhbiBvbkNsaWNrPXtzZXRJc1Zpc2libGUocHJldiA9PiAhcHJldil9PmhpZGU8L3NwYW4+IHx7XCIgXCJ9XG4gICAgICAgICAgICAgIHtwcm9wcy5jb21tZW50cy5sZW5ndGh9IGNvbW1lbnRzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8Lz59XG4gICAgPC9TdHlsZWQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */"));

var Card = function Card(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isVisible = _React$useState2[0],
      setIsVisible = _React$useState2[1];

  return __jsx(Styled, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, isVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, props.index, "."), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_Vote__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("td", {
    className: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, props.short_title), __jsx("div", {
    className: "details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, props.points, " points | Sponsor Name: ", props.sponsor_name, " ", props.latest_major_action_date, " | ", __jsx("span", {
    onClick: setIsVisible(function (prev) {
      return !prev;
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 50
    }
  }, "hide"), " |", " ", props.comments.length, " comments"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.919194329ca3c46e0cc1.hot-update.js.map