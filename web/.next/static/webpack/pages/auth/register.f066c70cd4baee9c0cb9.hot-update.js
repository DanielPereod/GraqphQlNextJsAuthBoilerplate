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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            size: "xl",
            mt: 4,
            isFullWidth: true,
            isLoading: isSubmitting,
            type: "submit",
            children: "Crear cuenta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZWdpc3Rlci50c3giXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VSZWdpc3Rlck11dGF0aW9uIiwiZmV0Y2hpbmciLCJyZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInNlbmREYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVwZWF0X3Bhc3N3b3JkIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaXNTdWJtaXR0aW5nIiwidmFsaWRhdGVVc2VybmFtZSIsInZhbGlkYXRlRW1haWwiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmFsaWRhdGVQYXNzd29yZFJlcGVhdCIsIndpdGhVcnFsQ2xpZW50IiwiY2xpZW50T3B0aW9ucyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsNkJBQ1lDLCtFQUFtQixFQUQvQjtBQUFBO0FBQUEsTUFDWkMsUUFEWSw0QkFDWkEsUUFEWTtBQUFBLE1BQ0FDLFFBREE7O0FBRXJCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTSxDQUFFLENBQXpCOztBQUNBLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsaUJBQWEsRUFBRTtBQUNiQyxjQUFRLEVBQUUsRUFERztBQUViQyxXQUFLLEVBQUUsRUFGTTtBQUdiQyxjQUFRLEVBQUUsRUFIRztBQUliQyxxQkFBZSxFQUFFO0FBSkosS0FEakI7QUFPRSxZQUFRO0FBQUEsbVdBQUUsaUJBQ1JDLE1BRFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU5DLDZCQUZNLFFBRU5BLGFBRk07QUFBQTtBQUFBO0FBQUEsdUJBS0FULFFBQVEsQ0FBQztBQUNiSSwwQkFBUSxFQUFFSSxNQUFNLENBQUNKLFFBREo7QUFFYkMsdUJBQUssRUFBRUcsTUFBTSxDQUFDSCxLQUZEO0FBR2JDLDBCQUFRLEVBQUVFLE1BQU0sQ0FBQ0Y7QUFISixpQkFBRCxDQUxSOztBQUFBO0FBVU5MLHNCQUFNLENBQUNTLElBQVAsQ0FBWSxHQUFaO0FBVk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZTkMsdUJBQU8sQ0FBQ0MsR0FBUjs7QUFaTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUFY7QUFBQSxjQXVCRztBQUFBLFVBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFVBQWlCTCxNQUFqQixTQUFpQkEsTUFBakI7QUFBQSwwQkFDQyxxRUFBQyxrRkFBRDtBQUFnQixhQUFLLEVBQUMsVUFBdEI7QUFBaUMsWUFBSSxFQUFDLFFBQXRDO0FBQUEsK0JBQ0UscUVBQUMsMkNBQUQ7QUFBQSxrQ0FDRSxxRUFBQywrREFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFLLEVBQUMsU0FIUjtBQUlFLHVCQUFXLEVBQUMsb0JBSmQ7QUFLRSxvQkFBUSxFQUFFLElBTFo7QUFNRSxzQkFBVSxFQUFFTSwwRkFBZ0JBO0FBTjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRSxxRUFBQywrREFBRDtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLGdCQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFLLEVBQUMsT0FIUjtBQUlFLHVCQUFXLEVBQUMsa0JBSmQ7QUFLRSxvQkFBUSxFQUFFLElBTFo7QUFNRSxzQkFBVSxFQUFFQyx1RkFBYUE7QUFOM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQWtCRSxxRUFBQyx1RUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFLLEVBQUMsZUFIUjtBQUlFLHVCQUFXLEVBQUMsMEJBSmQ7QUFLRSxvQkFBUSxFQUFFLElBTFo7QUFNRSxzQkFBVSxFQUFFQywwRkFBZ0JBO0FBTjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGLGVBMkJFLHFFQUFDLHVFQUFEO0FBQ0UsZ0JBQUksRUFBQyxpQkFEUDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFLLEVBQUMsd0JBSFI7QUFJRSx1QkFBVyxFQUFDLHlCQUpkO0FBS0Usb0JBQVEsRUFBRSxJQUxaO0FBTUUsc0JBQVUsRUFBRTtBQUFBLHFCQUNWQyx3R0FBc0IsQ0FBQ1QsTUFBTSxDQUFDRixRQUFSLEVBQWtCRSxNQUFNLENBQUNELGVBQXpCLENBRFo7QUFBQTtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JGLGVBc0NFLHFFQUFDLHVEQUFEO0FBQ0UsZ0JBQUksRUFBQyxJQURQO0FBRUUsY0FBRSxFQUFFLENBRk47QUFHRSx1QkFBVyxNQUhiO0FBSUUscUJBQVMsRUFBRU0sWUFKYjtBQUtFLGdCQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUF2Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEVELENBbEZEOztHQUFNaEIsUTtVQUM2QkMsdUUsRUFDbEJJLHFEOzs7S0FGWEwsUTtBQW9GU3FCLCtIQUFjLENBQUNDLGtFQUFELEVBQWdCO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQWhCLENBQWQsQ0FBOEN2QixRQUE5QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvcmVnaXN0ZXIuZjA2NmM3MGNkNGJhZWU5YzBjYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGb3JtaWtIZWxwZXJzIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybUlucHV0LCBGb3JtSW5wdXRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1JbnB1dFwiO1xyXG5pbXBvcnQgeyBBdXRoRm9ybUxheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dHMvYXV0aEZvcm1MYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuICB2YWxpZGF0ZUVtYWlsLFxyXG4gIHZhbGlkYXRlUGFzc3dvcmQsXHJcbiAgdmFsaWRhdGVQYXNzd29yZFJlcGVhdCxcclxuICB2YWxpZGF0ZVVzZXJuYW1lLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ZhbGlkYXRpb25zL3ZhbGlkYXRlVXNlcm5hbWVcIjtcclxuaW1wb3J0IHsgdXNlUmVnaXN0ZXJNdXRhdGlvbiB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL2dlbmVyYXRlZFwiO1xyXG5pbXBvcnQgeyBjbGllbnRPcHRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NyZWF0ZUNsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyVmFsdWVzIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICByZXBlYXRfcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgZmV0Y2hpbmcgfSwgcmVnaXN0ZXJdID0gdXNlUmVnaXN0ZXJNdXRhdGlvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNlbmREYXRhID0gKCkgPT4ge307XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGVhdF9wYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChcclxuICAgICAgICB2YWx1ZXM6IFJlZ2lzdGVyVmFsdWVzLFxyXG4gICAgICAgIHsgc2V0U3VibWl0dGluZyB9OiBGb3JtaWtIZWxwZXJzPFJlZ2lzdGVyVmFsdWVzPlxyXG4gICAgICApID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgcmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgPEF1dGhGb3JtTGF5b3V0IHRpdGxlPVwiUmVnaXN0cm9cIiB0eXBlPVwic2lnbnVwXCI+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpb1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IHVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb249e3ZhbGlkYXRlVXNlcm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZUVtYWlsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUlucHV0UGFzc3dvcmRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNlcnRhIHR1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uPXt2YWxpZGF0ZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1JbnB1dFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdF9wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcHRldGlyIGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlcGl0ZSB0dSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbj17KCkgPT5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlUGFzc3dvcmRSZXBlYXQodmFsdWVzLnBhc3N3b3JkLCB2YWx1ZXMucmVwZWF0X3Bhc3N3b3JkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBjdWVudGFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BdXRoRm9ybUxheW91dD5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjbGllbnRPcHRpb25zLCB7IHNzcjogZmFsc2UgfSkoUmVnaXN0ZXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9