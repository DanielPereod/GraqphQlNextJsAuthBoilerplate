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

  var _useRegisterMutation = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_7__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useRegisterMutation, 2),
      fetching = _useRegisterMutation2[0].fetching,
      register = _useRegisterMutation2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    {
      console.log();
    }
  });

  var responseGoogle = /*#__PURE__*/function () {
    var _ref = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
      return _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return register({
                email: response.profileObj.email,
                username: response.profileObj.givenName,
                password: null
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
          lineNumber: 43,
          columnNumber: 21
        }, _this),
        children: "Inicia sesi\xF3n con Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(GoogleLoginButton, "cZxIkqjK4fM2khRe5v1TDSYi7Rk=", false, function () {
  return [_graphql_generated__WEBPACK_IMPORTED_MODULE_7__["useRegisterMutation"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ1dHRvbi50c3giXSwibmFtZXMiOlsiR29vZ2xlTG9naW5CdXR0b24iLCJwcm9wcyIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJmZXRjaGluZyIsInJlZ2lzdGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJlbWFpbCIsInByb2ZpbGVPYmoiLCJ1c2VybmFtZSIsImdpdmVuTmFtZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsInJlbmRlclByb3BzIiwib25DbGljayIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsNkJBQ2hCQyw4RUFBbUIsRUFESDtBQUFBO0FBQUEsTUFDeENDLFFBRHdDLDRCQUN4Q0EsUUFEd0M7QUFBQSxNQUM1QkMsUUFENEI7O0FBRWpEQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNFQyxhQUFPLENBQUNDLEdBQVI7QUFDRDtBQUNGLEdBSlEsQ0FBVDs7QUFNQSxNQUFNQyxjQUFjO0FBQUEsZ1dBQUcsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTkwsUUFBUSxDQUFDO0FBQ3BCTSxxQkFBSyxFQUFFRCxRQUFRLENBQUNFLFVBQVQsQ0FBb0JELEtBRFA7QUFFcEJFLHdCQUFRLEVBQUVILFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQkUsU0FGVjtBQUdwQkMsd0JBQVEsRUFBRTtBQUhVLGVBQUQsQ0FGRjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWROLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBV0Esc0JBQ0UscUVBQUMseURBQUQ7QUFDRSxZQUFRLEVBQUVPLDBFQURaO0FBRUUsY0FBVSxFQUFDLE9BRmI7QUFHRSxhQUFTLEVBQUVQLGNBSGI7QUFJRSxhQUFTLEVBQUVBLGNBSmI7QUFLRSxnQkFBWSxFQUFFLG9CQUxoQjtBQU1FLFVBQU0sRUFBRSxnQkFBQ1EsV0FBRDtBQUFBLDBCQUNOLHFFQUFDLHVEQUFEO0FBQ0UsZUFBTyxFQUFFQSxXQUFXLENBQUNDLE9BRHZCO0FBRUUsZ0JBQVEsRUFBRUQsV0FBVyxDQUFDRSxRQUZ4QjtBQUdFLFlBQUksRUFBQyxJQUhQO0FBSUUsU0FBQyxFQUFDLE1BSko7QUFLRSxlQUFPLEVBQUMsaUJBTFY7QUFNRSxnQkFBUSxlQUFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUFBO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBeENNOztHQUFNbEIsaUI7VUFDc0JFLHNFOzs7S0FEdEJGLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjkyNWUwOTE0ZmZmZmY0ZmQ4ODFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VSZWdpc3Rlck11dGF0aW9uIH0gZnJvbSBcIi4uL2dyYXBocWwvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IEdvb2dsZUljb24gfSBmcm9tIFwiLi4vc3R5bGVzL2ljb25zXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBHb29nbGVMb2dpbkJ1dHRvbiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCBbeyBmZXRjaGluZyB9LCByZWdpc3Rlcl0gPSB1c2VSZWdpc3Rlck11dGF0aW9uKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHtcclxuICAgICAgY29uc29sZS5sb2coKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCByZWdpc3Rlcih7XHJcbiAgICAgICAgZW1haWw6IHJlc3BvbnNlLnByb2ZpbGVPYmouZW1haWwsXHJcbiAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLnByb2ZpbGVPYmouZ2l2ZW5OYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8R29vZ2xlTG9naW5cclxuICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9DTElFTlRfSUR9XHJcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cclxuICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJ3aGl0ZVdpdGhCb3JkZXJcIlxyXG4gICAgICAgICAgbGVmdEljb249ezxHb29nbGVJY29uIC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluaWNpYSBzZXNpw7NuIGNvbiBHb29nbGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==