webpackHotUpdate_N_E("pages/register",{

/***/ "./components/GoogleLoginButton.tsx":
/*!******************************************!*\
  !*** ./components/GoogleLoginButton.tsx ***!
  \******************************************/
/*! exports provided: GoogleLoginButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginButton", function() { return GoogleLoginButton; });
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _styles_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/icons */ "./styles/icons.tsx");





var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/GoogleLoginButton.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var GoogleLoginButton = function GoogleLoginButton(props) {
  _s();

  var _useGoogleLoginMutati = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_7__["useGoogleLoginMutation"])(),
      _useGoogleLoginMutati2 = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useGoogleLoginMutati, 2),
      fetching = _useGoogleLoginMutati2[0].fetching,
      googleLogin = _useGoogleLoginMutati2[1];

  var responseGoogle = /*#__PURE__*/function () {
    var _ref = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
      return _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return googleLogin({
                email: response.profileObj.email,
                username: response.profileObj.givenName
              });

            case 3:
              return _context.abrupt("return", _context.sent);

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function responseGoogle(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_6___default.a, {
    clientId: "967686666068-5bg4rsutbgd6agjveo6v4tbnkgf04ft3.apps.googleusercontent.com",
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    render: function render(renderProps) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: renderProps.onClick,
        disabled: renderProps.disabled,
        size: "xl",
        w: "100%",
        variant: "whiteWithBorder",
        leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styles_icons__WEBPACK_IMPORTED_MODULE_8__["GoogleIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this),
        children: "Inicia sesi\xF3n con Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(GoogleLoginButton, "NoZiG//f1fEwEhPLKC6RWd/RBhI=", false, function () {
  return [_graphql_generated__WEBPACK_IMPORTED_MODULE_7__["useGoogleLoginMutation"]];
});

_c = GoogleLoginButton;

var _c;

$RefreshReg$(_c, "GoogleLoginButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ1dHRvbi50c3giXSwibmFtZXMiOlsiR29vZ2xlTG9naW5CdXR0b24iLCJwcm9wcyIsInVzZUdvb2dsZUxvZ2luTXV0YXRpb24iLCJmZXRjaGluZyIsImdvb2dsZUxvZ2luIiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImVtYWlsIiwicHJvZmlsZU9iaiIsInVzZXJuYW1lIiwiZ2l2ZW5OYW1lIiwicHJvY2VzcyIsInJlbmRlclByb3BzIiwib25DbGljayIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLDhCQUNiQyxpRkFBc0IsRUFEVDtBQUFBO0FBQUEsTUFDeENDLFFBRHdDLDZCQUN4Q0EsUUFEd0M7QUFBQSxNQUM1QkMsV0FENEI7O0FBR2pELE1BQU1DLGNBQWM7QUFBQSxnV0FBRyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVORixXQUFXLENBQUM7QUFDdkJHLHFCQUFLLEVBQUVELFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQkQsS0FESjtBQUV2QkUsd0JBQVEsRUFBRUgsUUFBUSxDQUFDRSxVQUFULENBQW9CRTtBQUZQLGVBQUQsQ0FGTDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRMLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBVUEsc0JBQ0UscUVBQUMseURBQUQ7QUFDRSxZQUFRLEVBQUVNLDBFQURaO0FBRUUsY0FBVSxFQUFDLE9BRmI7QUFHRSxhQUFTLEVBQUVOLGNBSGI7QUFJRSxhQUFTLEVBQUVBLGNBSmI7QUFLRSxnQkFBWSxFQUFFLG9CQUxoQjtBQU1FLFVBQU0sRUFBRSxnQkFBQ08sV0FBRDtBQUFBLDBCQUNOLHFFQUFDLHVEQUFEO0FBQ0UsZUFBTyxFQUFFQSxXQUFXLENBQUNDLE9BRHZCO0FBRUUsZ0JBQVEsRUFBRUQsV0FBVyxDQUFDRSxRQUZ4QjtBQUdFLFlBQUksRUFBQyxJQUhQO0FBSUUsU0FBQyxFQUFDLE1BSko7QUFLRSxlQUFPLEVBQUMsaUJBTFY7QUFNRSxnQkFBUSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUFBO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBbENNOztHQUFNZCxpQjtVQUN5QkUseUU7OztLQUR6QkYsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZjEyYTExN2VhNzAwOTljYzBhOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlR29vZ2xlTG9naW5NdXRhdGlvbixcclxuICB1c2VSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBHb29nbGVJY29uIH0gZnJvbSBcIi4uL3N0eWxlcy9pY29uc1wiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlTG9naW5CdXR0b24gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgZ29vZ2xlTG9naW5dID0gdXNlR29vZ2xlTG9naW5NdXRhdGlvbigpO1xyXG5cclxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGdvb2dsZUxvZ2luKHtcclxuICAgICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcclxuICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5naXZlbk5hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxHb29nbGVMb2dpblxyXG4gICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0NMSUVOVF9JRH1cclxuICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcclxuICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgICByZW5kZXI9eyhyZW5kZXJQcm9wcykgPT4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIndoaXRlV2l0aEJvcmRlclwiXHJcbiAgICAgICAgICBsZWZ0SWNvbj17PEdvb2dsZUljb24gLz59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgSW5pY2lhIHNlc2nDs24gY29uIEdvb2dsZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9