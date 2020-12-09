webpackHotUpdate_N_E("pages/register",{

/***/ "./graphql/generated.tsx":
/*!*******************************!*\
  !*** ./graphql/generated.tsx ***!
  \*******************************/
/*! exports provided: GoogleLoginDocument, useGoogleLoginMutation, RegisterDocument, useRegisterMutation, LoginDocument, useLoginQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginDocument", function() { return GoogleLoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleLoginMutation", function() { return useGoogleLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginQuery", function() { return useLoginQuery; });
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");



var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query Login($username: String, $email: String, $password: String!) {\n  login(username: $username, email: $email, password: $password) {\n    token\n    errors {\n      field\n      message\n    }\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation Register($username: String, $email: String, $password: String!) {\n  register(username: $username, email: $email, password: $password) {\n    token\n    errors {\n      field\n      message\n    }\n  }\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation GoogleLogin($username: String, $email: String, $password: String!) {\n  googleLogin(username: $username, email: $email, password: $password) {\n    token\n    errors {\n      field\n      message\n    }\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GoogleLoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function useGoogleLoginMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](GoogleLoginDocument);
}

_s(useGoogleLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
function useRegisterMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"](RegisterDocument);
}

_s2(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useMutation"]];
});

;
var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
function useLoginQuery() {
  _s3();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"](_objectSpread({
    query: LoginDocument
  }, options));
}

_s3(useLoginQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9nZW5lcmF0ZWQudHN4Il0sIm5hbWVzIjpbIkdvb2dsZUxvZ2luRG9jdW1lbnQiLCJncWwiLCJ1c2VHb29nbGVMb2dpbk11dGF0aW9uIiwiVXJxbCIsIlJlZ2lzdGVyRG9jdW1lbnQiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luUXVlcnkiLCJvcHRpb25zIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFrSU8sSUFBTUEsbUJBQW1CLEdBQUdDLGtEQUFILG1CQUF6QjtBQVlBLFNBQVNDLHNCQUFULEdBQWtDO0FBQUE7O0FBQ3ZDLFNBQU9DLGdEQUFBLENBQW9FSCxtQkFBcEUsQ0FBUDtBQUNEOztHQUZlRSxzQjtVQUNQQyxnRDs7O0FBQ1I7QUFDTSxJQUFNQyxnQkFBZ0IsR0FBR0gsa0RBQUgsb0JBQXRCO0FBWUEsU0FBU0ksbUJBQVQsR0FBK0I7QUFBQTs7QUFDcEMsU0FBT0YsZ0RBQUEsQ0FBOERDLGdCQUE5RCxDQUFQO0FBQ0Q7O0lBRmVDLG1CO1VBQ1BGLGdEOzs7QUFDUjtBQUNNLElBQU1HLGFBQWEsR0FBR0wsa0RBQUgsb0JBQW5CO0FBWUEsU0FBU00sYUFBVCxHQUE0RjtBQUFBOztBQUFBLE1BQXJFQyxPQUFxRSx1RUFBSixFQUFJO0FBQ2pHLFNBQU9MLDZDQUFBO0FBQTRCTSxTQUFLLEVBQUVIO0FBQW5DLEtBQXFERSxPQUFyRCxFQUFQO0FBQ0Q7O0lBRmVELGE7VUFDUEosNkM7OztBQUNSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmM0OGEzM2VlMThhN2JiZDgxNmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICByZWZyZXNoVG9rZW46IFRva2VuUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyVG9rZW47XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5TG9naW5BcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFRva2VuUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVG9rZW5SZXNwb25zZSc7XG4gIHN1Y2Nlc3M6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgYWNjZXNzVG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclRva2VuID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbic7XG4gIHRva2VuPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxVc2VyRXJyb3I+Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyRXJyb3InO1xuICBmaWVsZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1lc3NhZ2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICByZXZva2VSZWZyZXNoVG9rZW5Gb3JVc2VyOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyVG9rZW47XG4gIGdvb2dsZUxvZ2luOiBVc2VyVG9rZW47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmV2b2tlUmVmcmVzaFRva2VuRm9yVXNlckFyZ3MgPSB7XG4gIHVzZXJJZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Hb29nbGVMb2dpbkFyZ3MgPSB7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgR29vZ2xlTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdXNlcm5hbWU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBHb29nbGVMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGdvb2dsZUxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJUb2tlbicgfVxuICAgICYgUGljazxVc2VyVG9rZW4sICd0b2tlbic+XG4gICAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyRXJyb3InIH1cbiAgICAgICYgUGljazxVc2VyRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4gICAgKT4+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgZW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclRva2VuJyB9XG4gICAgJiBQaWNrPFVzZXJUb2tlbiwgJ3Rva2VuJz5cbiAgICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJFcnJvcicgfVxuICAgICAgJiBQaWNrPFVzZXJFcnJvciwgJ2ZpZWxkJyB8ICdtZXNzYWdlJz5cbiAgICApPj4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5RdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyVG9rZW4nIH1cbiAgICAmIFBpY2s8VXNlclRva2VuLCAndG9rZW4nPlxuICAgICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVXNlckVycm9yJyB9XG4gICAgICAmIFBpY2s8VXNlckVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuICAgICk+PiB9XG4gICkgfVxuKTtcblxuXG5leHBvcnQgY29uc3QgR29vZ2xlTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBHb29nbGVMb2dpbigkdXNlcm5hbWU6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBnb29nbGVMb2dpbih1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgdG9rZW5cbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR29vZ2xlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248R29vZ2xlTG9naW5NdXRhdGlvbiwgR29vZ2xlTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oR29vZ2xlTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmcsICRlbWFpbDogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIodXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCkge1xuICAgIHRva2VuXG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlZ2lzdGVyRG9jdW1lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IExvZ2luKCR1c2VybmFtZTogU3RyaW5nLCAkZW1haWw6IFN0cmluZywgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICB0b2tlblxuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpblF1ZXJ5KG9wdGlvbnM6IE9taXQ8VXJxbC5Vc2VRdWVyeUFyZ3M8TG9naW5RdWVyeVZhcmlhYmxlcz4sICdxdWVyeSc+ID0ge30pIHtcbiAgcmV0dXJuIFVycWwudXNlUXVlcnk8TG9naW5RdWVyeT4oeyBxdWVyeTogTG9naW5Eb2N1bWVudCwgLi4ub3B0aW9ucyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==