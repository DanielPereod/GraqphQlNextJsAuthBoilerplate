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
                username: response.profileObj.givenName,
                password: "googleAuth"
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
          lineNumber: 41,
          columnNumber: 21
        }, _this),
        children: "Inicia sesi\xF3n con Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ1dHRvbi50c3giXSwibmFtZXMiOlsiR29vZ2xlTG9naW5CdXR0b24iLCJwcm9wcyIsInVzZUdvb2dsZUxvZ2luTXV0YXRpb24iLCJmZXRjaGluZyIsImdvb2dsZUxvZ2luIiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsImVtYWlsIiwicHJvZmlsZU9iaiIsInVzZXJuYW1lIiwiZ2l2ZW5OYW1lIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBSU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsOEJBQ2JDLGlGQUFzQixFQURUO0FBQUE7QUFBQSxNQUN4Q0MsUUFEd0MsNkJBQ3hDQSxRQUR3QztBQUFBLE1BQzVCQyxXQUQ0Qjs7QUFHakQsTUFBTUMsY0FBYztBQUFBLGdXQUFHLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU5GLFdBQVcsQ0FBQztBQUN2QkcscUJBQUssRUFBRUQsUUFBUSxDQUFDRSxVQUFULENBQW9CRCxLQURKO0FBRXZCRSx3QkFBUSxFQUFFSCxRQUFRLENBQUNFLFVBQVQsQ0FBb0JFLFNBRlA7QUFHdkJDLHdCQUFRLEVBQUU7QUFIYSxlQUFELENBRkw7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkTixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVdBLHNCQUNFLHFFQUFDLHlEQUFEO0FBQ0UsWUFBUSxFQUFFTywwRUFEWjtBQUVFLGNBQVUsRUFBQyxPQUZiO0FBR0UsYUFBUyxFQUFFUCxjQUhiO0FBSUUsYUFBUyxFQUFFQSxjQUpiO0FBS0UsZ0JBQVksRUFBRSxvQkFMaEI7QUFNRSxVQUFNLEVBQUUsZ0JBQUNRLFdBQUQ7QUFBQSwwQkFDTixxRUFBQyx1REFBRDtBQUNFLGVBQU8sRUFBRUEsV0FBVyxDQUFDQyxPQUR2QjtBQUVFLGdCQUFRLEVBQUVELFdBQVcsQ0FBQ0UsUUFGeEI7QUFHRSxZQUFJLEVBQUMsSUFIUDtBQUlFLFNBQUMsRUFBQyxNQUpKO0FBS0UsZUFBTyxFQUFDLGlCQUxWO0FBTUUsZ0JBQVEsZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE07QUFBQTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQW5DTTs7R0FBTWYsaUI7VUFDeUJFLHlFOzs7S0FEekJGLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjA1YWIxMDY1Nzc2NDgxY2Y2NzE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdvb2dsZUxvZ2luTXV0YXRpb24sXHJcbiAgdXNlUmVnaXN0ZXJNdXRhdGlvbixcclxufSBmcm9tIFwiLi4vZ3JhcGhxbC9nZW5lcmF0ZWRcIjtcclxuaW1wb3J0IHsgR29vZ2xlSWNvbiB9IGZyb20gXCIuLi9zdHlsZXMvaWNvbnNcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZUxvZ2luQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nIH0sIGdvb2dsZUxvZ2luXSA9IHVzZUdvb2dsZUxvZ2luTXV0YXRpb24oKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBnb29nbGVMb2dpbih7XHJcbiAgICAgICAgZW1haWw6IHJlc3BvbnNlLnByb2ZpbGVPYmouZW1haWwsXHJcbiAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLnByb2ZpbGVPYmouZ2l2ZW5OYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcImdvb2dsZUF1dGhcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQ0xJRU5UX0lEfVxyXG4gICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxyXG4gICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XHJcbiAgICAgIHJlbmRlcj17KHJlbmRlclByb3BzKSA9PiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgIHNpemU9XCJ4bFwiXHJcbiAgICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwid2hpdGVXaXRoQm9yZGVyXCJcclxuICAgICAgICAgIGxlZnRJY29uPXs8R29vZ2xlSWNvbiAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBJbmljaWEgc2VzacOzbiBjb24gR29vZ2xlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=