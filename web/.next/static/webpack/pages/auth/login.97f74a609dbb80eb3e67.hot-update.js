webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.tsx":
/*!******************************!*\
  !*** ./pages/auth/login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-urql */ "./node_modules/next-urql/dist/next-urql.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FormInput */ "./components/FormInput.tsx");
/* harmony import */ var _components_layouts_authFormLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/layouts/authFormLayout */ "./components/layouts/authFormLayout.tsx");
/* harmony import */ var _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/validations/validateUsername */ "./components/validations/validateUsername.ts");
/* harmony import */ var _graphql_generated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../graphql/generated */ "./graphql/generated.tsx");
/* harmony import */ var _utils_createClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/createClient */ "./utils/createClient.ts");





var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/auth/login.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var Login = function Login() {
  _s();

  var _useLoginMutation = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_12__["useLoginMutation"])(),
      _useLoginMutation2 = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useLoginMutation, 2),
      fetching = _useLoginMutation2[0].fetching,
      login = _useLoginMutation2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      usernameOrEmail: "",
      password: ""
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref) {
        var setSubmitting;
        return _mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting = _ref.setSubmitting;
                _context.prev = 1;
                _context.next = 4;
                return login({
                  username: values.usernameOrEmail,
                  email: values.usernameOrEmail,
                  password: values.password
                });

              case 4:
                router.push("/");
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: function children(_ref3) {
      var isSubmitting = _ref3.isSubmitting,
          values = _ref3.values;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_layouts_authFormLayout__WEBPACK_IMPORTED_MODULE_10__["AuthFormLayout"], {
        title: "Iniciar sesi\xF3n",
        type: "login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
            name: "usernameOrEmail",
            type: "text",
            label: "Usuario o email",
            placeholder: "Inserta tu usuario o email",
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_9__["FormInputPassword"], {
            name: "password",
            type: "password",
            label: "Contrase\xF1a",
            placeholder: "Inserta tu contrase\xF1a",
            required: true,
            validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_11__["validatePassword"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
            w: "100%",
            textAlign: "right",
            mb: "1em",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                variant: "smallText",
                children: "No tienes cuenta?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            size: "xl",
            mt: 4,
            isFullWidth: true,
            isLoading: isSubmitting,
            type: "submit",
            children: "Crear cuenta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(Login, "/bxt0DXQ7pRnj+6aZssrUlUF2XE=", false, function () {
  return [_graphql_generated__WEBPACK_IMPORTED_MODULE_12__["useLoginMutation"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_6__["withUrqlClient"])(_utils_createClient__WEBPACK_IMPORTED_MODULE_13__["clientOptions"], {
  ssr: false
})(Login));

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi50c3giXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2dpbk11dGF0aW9uIiwiZmV0Y2hpbmciLCJsb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJuYW1lT3JFbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInVzZXJuYW1lIiwiZW1haWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImlzU3VibWl0dGluZyIsInZhbGlkYXRlUGFzc3dvcmQiLCJ3aXRoVXJxbENsaWVudCIsImNsaWVudE9wdGlvbnMiLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLDBCQUNZQyw0RUFBZ0IsRUFENUI7QUFBQTtBQUFBLE1BQ1RDLFFBRFMseUJBQ1RBLFFBRFM7QUFBQSxNQUNHQyxLQURIOztBQUVsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0Esc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxpQkFBYSxFQUFFO0FBQ2JDLHFCQUFlLEVBQUUsRUFESjtBQUViQyxjQUFRLEVBQUU7QUFGRyxLQURqQjtBQUtFLFlBQVE7QUFBQSxtV0FBRSxpQkFDUkMsTUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTkMsNkJBRk0sUUFFTkEsYUFGTTtBQUFBO0FBQUE7QUFBQSx1QkFLQU4sS0FBSyxDQUFDO0FBQ1ZPLDBCQUFRLEVBQUVGLE1BQU0sQ0FBQ0YsZUFEUDtBQUVWSyx1QkFBSyxFQUFFSCxNQUFNLENBQUNGLGVBRko7QUFHVkMsMEJBQVEsRUFBRUMsTUFBTSxDQUFDRDtBQUhQLGlCQUFELENBTEw7O0FBQUE7QUFVTkgsc0JBQU0sQ0FBQ1EsSUFBUCxDQUFZLEdBQVo7QUFWTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlOQyx1QkFBTyxDQUFDQyxHQUFSOztBQVpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FMVjtBQUFBLGNBcUJHO0FBQUEsVUFBR0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsVUFBaUJQLE1BQWpCLFNBQWlCQSxNQUFqQjtBQUFBLDBCQUNDLHFFQUFDLGtGQUFEO0FBQWdCLGFBQUssRUFBQyxtQkFBdEI7QUFBdUMsWUFBSSxFQUFDLE9BQTVDO0FBQUEsK0JBQ0UscUVBQUMsMkNBQUQ7QUFBQSxrQ0FDRSxxRUFBQywrREFBRDtBQUNFLGdCQUFJLEVBQUMsaUJBRFA7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBSyxFQUFDLGlCQUhSO0FBSUUsdUJBQVcsRUFBQyw0QkFKZDtBQUtFLG9CQUFRLEVBQUU7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0UscUVBQUMsdUVBQUQ7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBSSxFQUFDLFVBRlA7QUFHRSxpQkFBSyxFQUFDLGVBSFI7QUFJRSx1QkFBVyxFQUFDLDBCQUpkO0FBS0Usb0JBQVEsRUFBRSxJQUxaO0FBTUUsc0JBQVUsRUFBRVEsMEZBQWdCQTtBQU45QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBa0JFLHFFQUFDLG9EQUFEO0FBQUssYUFBQyxFQUFDLE1BQVA7QUFBYyxxQkFBUyxFQUFDLE9BQXhCO0FBQWdDLGNBQUUsRUFBQyxLQUFuQztBQUFBLG1DQUNFLHFFQUFDLHFEQUFEO0FBQUEscUNBQ0UscUVBQUMscURBQUQ7QUFBTSx1QkFBTyxFQUFDLFdBQWQ7QUFBQSwwQkFBMkI7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRixlQXdCRSxxRUFBQyx1REFBRDtBQUNFLGdCQUFJLEVBQUMsSUFEUDtBQUVFLGNBQUUsRUFBRSxDQUZOO0FBR0UsdUJBQVcsTUFIYjtBQUlFLHFCQUFTLEVBQUVELFlBSmI7QUFLRSxnQkFBSSxFQUFDLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUFBO0FBckJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQWpFRDs7R0FBTWYsSztVQUMwQkMsb0UsRUFDZkkscUQ7OztLQUZYTCxLO0FBbUVTaUIsK0hBQWMsQ0FBQ0Msa0VBQUQsRUFBZ0I7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBaEIsQ0FBZCxDQUE4Q25CLEtBQTlDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9sb2dpbi45N2Y3NGE2MDlkYmI4MGViM2U2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWssIEZvcm1pa0hlbHBlcnMgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtSW5wdXQsIEZvcm1JbnB1dFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybUlucHV0XCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoRm9ybUxheW91dFwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdmFsaWRhdGlvbnMvdmFsaWRhdGVVc2VybmFtZVwiO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IGNsaWVudE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3JlYXRlQ2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJWYWx1ZXMge1xyXG4gIHVzZXJuYW1lT3JFbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nIH0sIGxvZ2luXSA9IHVzZUxvZ2luTXV0YXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgdXNlcm5hbWVPckVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKFxyXG4gICAgICAgIHZhbHVlczogUmVnaXN0ZXJWYWx1ZXMsXHJcbiAgICAgICAgeyBzZXRTdWJtaXR0aW5nIH06IEZvcm1pa0hlbHBlcnM8UmVnaXN0ZXJWYWx1ZXM+XHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBsb2dpbih7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMudXNlcm5hbWVPckVtYWlsLFxyXG4gICAgICAgICAgICBlbWFpbDogdmFsdWVzLnVzZXJuYW1lT3JFbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgaXNTdWJtaXR0aW5nLCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgIDxBdXRoRm9ybUxheW91dCB0aXRsZT1cIkluaWNpYXIgc2VzacOzblwiIHR5cGU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVPckVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc3VhcmlvIG8gZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0YSB0dSB1c3VhcmlvIG8gZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0YSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dmFsaWRhdGVQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggdz1cIjEwMCVcIiB0ZXh0QWxpZ249XCJyaWdodFwiIG1iPVwiMWVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21hbGxUZXh0XCI+e1wiTm8gdGllbmVzIGN1ZW50YT9cIn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBjdWVudGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoTG9naW4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9