webpackHotUpdate_N_E("pages/auth/login",{

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
            href: type === "login" ? "/auth/register" : "/auth/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                variant: "smallText",
                textAlign: "center",
                children: type === "login" ? "Crear cuenta" : "Iniciar sesión"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)
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
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          justifyContent: "space-between",
          mt: "2em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2F1dGhGb3JtTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJBdXRoRm9ybUxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBc0M7QUFBQSxNQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFDbEUsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsTUFESjtBQUVFLEtBQUMsRUFBQyxPQUZKO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLEtBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixLQUFoQixFQUF1QixLQUF2QixDQUxMO0FBTUUsa0JBQWMsRUFBQyxRQU5qQjtBQU9FLGNBQVUsRUFBQyxRQVBiO0FBQUEsNEJBU0UscUVBQUMscURBQUQ7QUFDRSxZQUFNLEVBQUUsQ0FEVjtBQUVFLFdBQUssRUFBRSxDQUZUO0FBR0UsT0FBQyxFQUFDLE1BSEo7QUFJRSxPQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQyxDQUpMO0FBS0UsVUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFDLEVBQUMsS0FOSjtBQU9FLGFBQU8sRUFBQywrQkFQVjtBQVFFLFlBQU0sRUFBQyxPQVJUO0FBU0UsV0FBSyxFQUFDLFFBVFI7QUFVRSxnQkFBVSxFQUFDLFVBVmI7QUFXRSxjQUFRLEVBQUUsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixVQUF6QixFQUFxQyxRQUFyQyxFQUErQyxRQUEvQyxDQVhaO0FBQUEsNkJBYUUscUVBQUMsd0RBQUQ7QUFBUyxpQkFBUyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBd0JFLHFFQUFDLHFEQUFEO0FBQ0UsT0FBQyxFQUFDLE1BREo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLE9BQUMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUhMO0FBSUUsYUFBTyxFQUFDLFNBSlY7QUFLRSxZQUFNLEVBQUUsQ0FMVjtBQU1FLG9CQUFjLEVBQUMsUUFOakI7QUFPRSxnQkFBVSxFQUFDLFFBUGI7QUFBQSw2QkFTRSxxRUFBQyxvREFBRDtBQUFLLFNBQUMsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixDQUFSO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBUyxrQkFBUSxFQUFDLE9BQWxCO0FBQTBCLFlBQUUsRUFBQyxLQUE3QjtBQUFtQyx1QkFBYSxFQUFDLE9BQWpEO0FBQUEsb0JBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHQyxRQUpILGVBS0UscUVBQUMsb0RBQUQ7QUFBSyxZQUFFLEVBQUMsT0FBUjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQUksRUFBRUMsSUFBSSxLQUFLLE9BQVQsR0FBbUIsZ0JBQW5CLEdBQXNDLGFBQWxEO0FBQUEsbUNBQ0U7QUFBQSxxQ0FDRSxxRUFBQyxxREFBRDtBQUFNLHVCQUFPLEVBQUMsV0FBZDtBQUEwQix5QkFBUyxFQUFDLFFBQXBDO0FBQUEsMEJBQ0dBLElBQUksS0FBSyxPQUFULEdBQW1CLGNBQW5CLEdBQW9DO0FBRHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFjRSxxRUFBQyxvREFBRDtBQUFLLFlBQUUsRUFBQyxLQUFSO0FBQWMsbUJBQVMsRUFBQyxRQUF4QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQU8sRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRixlQWlCRSxxRUFBQyxxREFBRDtBQUFNLHdCQUFjLEVBQUMsZUFBckI7QUFBcUMsWUFBRSxFQUFDLEtBQXhDO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0EzRE07S0FBTUgsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL2xvZ2luLjhmNGNkNzc1NWU4MTFkMDI1MzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luQnV0dG9uIH0gZnJvbSBcIi4uL0dvb2dsZUxvZ2luQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xyXG4gIHR5cGU6IFwibG9naW5cIiB8IFwic2lnbnVwXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoRm9ybUxheW91dCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgdHlwZSB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIGg9XCIxMDB2aFwiXHJcbiAgICAgIG1pblc9XCIzMDBweFwiXHJcbiAgICAgIG1pbkg9XCI3NzBweFwiXHJcbiAgICAgIHA9e1tcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjNlbVwiLCBcIjNlbVwiXX1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPEZsZXhcclxuICAgICAgICB6SW5kZXg9ezB9XHJcbiAgICAgICAgb3JkZXI9ezF9XHJcbiAgICAgICAgaD1cIjEwMCVcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjUwJVwiLCBcIjYwJVwiXX1cclxuICAgICAgICBtaW5XPVwiMzAwcHhcIlxyXG4gICAgICAgIHA9XCIyZW1cIlxyXG4gICAgICAgIGJnSW1hZ2U9XCJ1cmwoJy9pbWFnZXMvYXVodHNjcmVlbi5qcGcnKVwiXHJcbiAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgIGJnUG9zPVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtbXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwiYWJzb2x1dGVcIiwgXCJzdGF0aWNcIiwgXCJzdGF0aWNcIl19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGluZyB0ZXh0Q29sb3I9XCIjZmZmZmZmXCI+QmllbnZlbmlkbzwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCI5MHZoXCJcclxuICAgICAgICBtaW5IPVwiNzcwcHhcIlxyXG4gICAgICAgIHc9e1tcIjkwJVwiLCBcIjkwJVwiLCBcIjkwJVwiLCBcIjUwJVwiLCBcIjQwJVwiXX1cclxuICAgICAgICBiZ0NvbG9yPVwiI2ZmZmZmZlwiXHJcbiAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggbT17W1wiMWVtXCIsIFwiNmVtXCIsIFwiN2VtXCIsIFwiNmVtXCIsIFwiNmVtXCJdfT5cclxuICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMi41ZW1cIiBtYj1cIjFlbVwiIGxldHRlclNwYWNpbmc9XCJ3aWRlclwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8Qm94IG10PVwiMC41ZW1cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17dHlwZSA9PT0gXCJsb2dpblwiID8gXCIvYXV0aC9yZWdpc3RlclwiIDogXCIvYXV0aC9sb2dpblwifT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFwibG9naW5cIiA/IFwiQ3JlYXIgY3VlbnRhXCIgOiBcIkluaWNpYXIgc2VzacOzblwifVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IG10PVwiMmVtXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIj5vPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtdD1cIjJlbVwiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b24gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=