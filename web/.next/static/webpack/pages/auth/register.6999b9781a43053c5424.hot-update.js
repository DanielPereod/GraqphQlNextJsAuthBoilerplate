webpackHotUpdate_N_E("pages/auth/register",{

/***/ "./pages/auth/register.tsx":
/*!*********************************!*\
  !*** ./pages/auth/register.tsx ***!
  \*********************************/
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





var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/pages/auth/register.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var Register = function Register() {
  _s();

  var _useRegisterMutation = Object(_graphql_generated__WEBPACK_IMPORTED_MODULE_12__["useRegisterMutation"])(),
      _useRegisterMutation2 = Object(_mnt_c_Users_Daniel_Code_Projects_GraqphQlNextJsAuthBoilerplate_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useRegisterMutation, 2),
      fetching = _useRegisterMutation2[0].fetching,
      register = _useRegisterMutation2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var sendData = function sendData() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeat_password: ""
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
                return register({
                  username: values.username,
                  email: values.email,
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
        title: "Registro",
        type: "signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
            name: "username",
            type: "text",
            label: "Usuario",
            placeholder: "Inserta tu usuario",
            required: true,
            validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_11__["validateUsername"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_9__["FormInput"], {
            name: "email",
            type: "text",
            label: "Email",
            placeholder: "Inserta tu email",
            required: true,
            validation: _components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_11__["validateEmail"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FormInput__WEBPACK_IMPORTED_MODULE_9__["FormInputPassword"], {
            name: "repeat_password",
            type: "password",
            label: "Reptetir contrase\xF1a",
            placeholder: "Repite tu contrase\xF1a",
            required: true,
            validation: function validation() {
              return Object(_components_validations_validateUsername__WEBPACK_IMPORTED_MODULE_11__["validatePasswordRepeat"])(values.password, values.repeat_password);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
            w: "100%",
            textAlign: "right",
            mb: "1em",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
                  variant: "smallText",
                  children: "Ya tienes una cuenta?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
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
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Register, "LqlABRz7fIxxp26nDSpcnrMuFno=", false, function () {
  return [_graphql_generated__WEBPACK_IMPORTED_MODULE_12__["useRegisterMutation"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_6__["withUrqlClient"])(_utils_createClient__WEBPACK_IMPORTED_MODULE_13__["clientOptions"], {
  ssr: false
})(Register));

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZWdpc3Rlci50c3giXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiZmV0Y2hpbmciLCJyZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlbmREYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVwZWF0X3Bhc3N3b3JkIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaXNTdWJtaXR0aW5nIiwidmFsaWRhdGVVc2VybmFtZSIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmFsaWRhdGVQYXNzd29yZFJlcGVhdCIsIndpdGhVcnFsQ2xpZW50IiwiY2xpZW50T3B0aW9ucyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsNkJBQ1lDLCtFQUFtQixFQUQvQjtBQUFBO0FBQUEsTUFDWkMsUUFEWSw0QkFDWkEsUUFEWTtBQUFBLE1BQ0FDLFFBREE7O0FBRXJCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTSxDQUFFLENBQXpCOztBQUNBLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUNiQyxjQUFRLEVBQUUsRUFERztBQUViQyxXQUFLLEVBQUUsRUFGTTtBQUdiQyxjQUFRLEVBQUUsRUFIRztBQUliQyxxQkFBZSxFQUFFO0FBSkosS0FEakI7QUFPRSxZQUFRO0FBQUEsbVdBQUUsaUJBQ1JDLE1BRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5DLDZCQUZNLFFB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O0FBdkJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFGRCxDQXpGRDs7R0FBTWhCLFE7VUFDNkJDLHVFLEVBQ2xCSSxxRDs7O0tBRlhMLFE7QUEyRlNxQiwrSEFBYyxDQUFDQyxrRUFBRCxFQUFnQjtBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFoQixDQUFkLENBQThDdkIsUUFBOUMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3JlZ2lzdGVyLjY5OTliOTc4MWE0MzA1M2M1NDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgTGluaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1paywgRm9ybWlrSGVscGVycyB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1JbnB1dCwgRm9ybUlucHV0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3JtSW5wdXRcIjtcclxuaW1wb3J0IHsgQXV0aEZvcm1MYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2F1dGhGb3JtTGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcbiAgdmFsaWRhdGVFbWFpbCxcclxuICB2YWxpZGF0ZVBhc3N3b3JkLFxyXG4gIHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQsXHJcbiAgdmFsaWRhdGVVc2VybmFtZSxcclxufSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy92YWxpZGF0aW9ucy92YWxpZGF0ZVVzZXJuYW1lXCI7XHJcbmltcG9ydCB7IHVzZVJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9nZW5lcmF0ZWRcIjtcclxuaW1wb3J0IHsgY2xpZW50T3B0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlscy9jcmVhdGVDbGllbnRcIjtcclxuXHJcbmludGVyZmFjZSBSZWdpc3RlclZhbHVlcyB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcmVwZWF0X3Bhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt7IGZldGNoaW5nIH0sIHJlZ2lzdGVyXSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzZW5kRGF0YSA9ICgpID0+IHt9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICByZXBlYXRfcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoXHJcbiAgICAgICAgdmFsdWVzOiBSZWdpc3RlclZhbHVlcyxcclxuICAgICAgICB7IHNldFN1Ym1pdHRpbmcgfTogRm9ybWlrSGVscGVyczxSZWdpc3RlclZhbHVlcz5cclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHZhbHVlcy51c2VybmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgaXNTdWJtaXR0aW5nLCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgIDxBdXRoRm9ybUxheW91dCB0aXRsZT1cIlJlZ2lzdHJvXCIgdHlwZT1cInNpZ251cFwiPlxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0YSB0dSB1c3VhcmlvXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZVVzZXJuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0YSB0dSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dmFsaWRhdGVFbWFpbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zZXJ0YSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17dmFsaWRhdGVQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtSW5wdXRQYXNzd29yZFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRfcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXB0ZXRpciBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBpdGUgdHUgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb249eygpID0+XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkUmVwZWF0KHZhbHVlcy5wYXNzd29yZCwgdmFsdWVzLnJlcGVhdF9wYXNzd29yZClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb3ggdz1cIjEwMCVcIiB0ZXh0QWxpZ249XCJyaWdodFwiIG1iPVwiMWVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj57XCJZYSB0aWVuZXMgdW5hIGN1ZW50YT9cIn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBjdWVudGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoUmVnaXN0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9