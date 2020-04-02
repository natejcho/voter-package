webpackHotUpdate("static/development/pages/comments/[congress]/[bill].js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");

var _jsxFileName = "/Users/nathanielcho/Projects/voter-package/components/Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import fetch from "isomorphic-unfetch";


function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Comment(props) {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/comments?post_id=' + props.postId, fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  console.error(error);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(data.value),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      comment = _React$useState2[0],
      setComment = _React$useState2[1];

  var updateComment = function updateComment() {
    fetch('/api/updateComment');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Comments"), __jsx("input", {
    onChange: setComment,
    value: comment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: updateComment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Update"));
}

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=[bill].js.5f75925e84df69ae7faa.hot-update.js.map