webpackHotUpdate_N_E("pages/auth/register",{

/***/ "./components/layouts/authFormLayout.tsx":
/*!***********************************************!*\
  !*** ./components/layouts/authFormLayout.tsx ***!
  \***********************************************/
/*! exports provided: AuthFormLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormLayout", function() { return AuthFormLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GoogleLoginButton */ "./components/GoogleLoginButton.tsx");


var _jsxFileName = "/mnt/c/Users/Daniel/Code/Projects/GraqphQlNextJsAuthBoilerplate/web/components/layouts/authFormLayout.tsx",
    _this = undefined;




var AuthFormLayout = function AuthFormLayout(_ref) {
  var title = _ref.title,
      children = _ref.children,
      type = _ref.type;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    w: "100%",
    h: "100vh",
    minW: "300px",
    minH: "770px",
    p: ["0", "0", "0", "3em", "3em"],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      zIndex: 0,
      order: 1,
      h: "100%",
      w: ["100%", "100%", "100%", "50%", "60%"],
      minW: "300px",
      p: "2em",
      bgImage: "url('/images/auhtscreen.jpg')",
      bgSize: "cover",
      bgPos: "center",
      alignItems: "flex-end",
      position: ["absolute", "absolute", "absolute", "static", "static"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
        textColor: "#ffffff",
        children: "Bienvenido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      h: "90vh",
      minH: "770px",
      w: ["90%", "90%", "90%", "50%", "40%"],
      bgColor: "#ffffff",
      zIndex: 1,
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        m: ["1em", "6em", "7em", "6em", "6em"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          fontSize: "2.5em",
          mb: "1em",
          letterSpacing: "wider",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "0.5em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              variant: "smallText",
              textAlign: "center",
              children: type === "login" ? "Crear cuenta" : "Iniciar sesión"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "2em",
          textAlign: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "smallText",
            children: "o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          justifyContent: "space-between",
          mt: "2em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};
_c = AuthFormLayout;

var _c;

$RefreshReg$(_c, "AuthFormLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2F1dGhGb3JtTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJBdXRoRm9ybUxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBc0M7QUFBQSxNQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFDbEUsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsTUFESjtBQUVFLEtBQUMsRUFBQyxPQUZKO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLEtBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQUxMO0FBTUUsa0JBQWMsRUFBQyxRQU5qQjtBQU9FLGNBQVUsRUFBQyxRQVBiO0FBQUEsNEJBU0UscUVBQUMscURBQUQ7QUFDRSxZQUFNLEVBQUUsQ0FEVjtBQUVFLFdBQUssRUFBRSxDQUZUO0FBR0UsT0FBQyxFQUFDLE1BSEo7QUFJRSxPQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxDQUpMO0FBS0UsVUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFDLEVBQUMsS0FOSjtBQU9FLGFBQU8sRUFBQywrQkFQVjtBQVFFLFlBQU0sRUFBQyxPQVJUO0FBU0UsV0FBSyxFQUFDLFFBVFI7QUFVRSxnQkFBVSxFQUFDLFVBVmI7QUFXRSxjQUFRLEVBQUUsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixVQUF6QixFQUFxQyxRQUFyQyxFQUErQyxRQUEvQyxDQVhaO0FBQUEsNkJBYUUscUVBQUMsd0RBQUQ7QUFBUyxpQkFBUyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBd0JFLHFFQUFDLHFEQUFEO0FBQ0UsT0FBQyxFQUFDLE1BREo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLE9BQUMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUhMO0FBSUUsYUFBTyxFQUFDLFNBSlY7QUFLRSxZQUFNLEVBQUUsQ0FMVjtBQU1FLG9CQUFjLEVBQUMsUUFOakI7QUFPRSxnQkFBVSxFQUFDLFFBUGI7QUFBQSw2QkFTRSxxRUFBQyxvREFBRDtBQUFLLFNBQUMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUFSO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBUyxrQkFBUSxFQUFDLE9BQWxCO0FBQTBCLFlBQUUsRUFBQyxLQUE3QjtBQUFtQyx1QkFBYSxFQUFDLE9BQWpEO0FBQUEsb0JBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHQyxRQUpILGVBS0UscUVBQUMsb0RBQUQ7QUFBSyxZQUFFLEVBQUMsT0FBUjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQUEsbUNBQ0UscUVBQUMscURBQUQ7QUFBTSxxQkFBTyxFQUFDLFdBQWQ7QUFBMEIsdUJBQVMsRUFBQyxRQUFwQztBQUFBLHdCQUNHQyxJQUFJLEtBQUssT0FBVCxHQUFtQixjQUFuQixHQUFvQztBQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFZRSxxRUFBQyxvREFBRDtBQUFLLFlBQUUsRUFBQyxLQUFSO0FBQWMsbUJBQVMsRUFBQyxRQUF4QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQU8sRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQWVFLHFFQUFDLHFEQUFEO0FBQU0sd0JBQWMsRUFBQyxlQUFyQjtBQUFxQyxZQUFFLEVBQUMsS0FBeEM7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0RELENBekRNO0tBQU1ILGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9yZWdpc3Rlci4zNmYwYjMwZTU1ZmU1ZWQ4MjgzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gXCIuLi9Hb29nbGVMb2dpbkJ1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICB0eXBlOiBcImxvZ2luXCIgfCBcInNpZ251cFwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aEZvcm1MYXlvdXQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHR5cGUgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBoPVwiMTAwdmhcIlxyXG4gICAgICBtaW5XPVwiMzAwcHhcIlxyXG4gICAgICBtaW5IPVwiNzcwcHhcIlxyXG4gICAgICBwPXtbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIzZW1cIiwgXCIzZW1cIl19XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgekluZGV4PXswfVxyXG4gICAgICAgIG9yZGVyPXsxfVxyXG4gICAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgXCI2MCVcIl19XHJcbiAgICAgICAgbWluVz1cIjMwMHB4XCJcclxuICAgICAgICBwPVwiMmVtXCJcclxuICAgICAgICBiZ0ltYWdlPVwidXJsKCcvaW1hZ2VzL2F1aHRzY3JlZW4uanBnJylcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBiZ1Bvcz1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJcclxuICAgICAgICBwb3NpdGlvbj17W1wiYWJzb2x1dGVcIiwgXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwic3RhdGljXCIsIFwic3RhdGljXCJdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmcgdGV4dENvbG9yPVwiI2ZmZmZmZlwiPkJpZW52ZW5pZG88L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiOTB2aFwiXHJcbiAgICAgICAgbWluSD1cIjc3MHB4XCJcclxuICAgICAgICB3PXtbXCI5MCVcIiwgXCI5MCVcIiwgXCI5MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYmdDb2xvcj1cIiNmZmZmZmZcIlxyXG4gICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG09e1tcIjFlbVwiLCBcIjZlbVwiLCBcIjdlbVwiLCBcIjZlbVwiLCBcIjZlbVwiXX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjIuNWVtXCIgbWI9XCIxZW1cIiBsZXR0ZXJTcGFjaW5nPVwid2lkZXJcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEJveCBtdD1cIjAuNWVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0eXBlID09PSBcImxvZ2luXCIgPyBcIkNyZWFyIGN1ZW50YVwiIDogXCJJbmljaWFyIHNlc2nDs25cIn1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBtdD1cIjJlbVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21hbGxUZXh0XCI+bzwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgbXQ9XCIyZW1cIj5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnV0dG9uIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9