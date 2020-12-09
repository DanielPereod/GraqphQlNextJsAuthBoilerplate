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
    p: ["0", "0", "0", "3em", "3em"],
    justifyContent: "center",
    alignItems: "center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      zIndex: 0,
      order: 1,
      h: "100%",
      w: ["100%", "100%", "100%", "50%", "60%"],
      p: "2em",
      bgImage: "url('/images/auhtscreen.jpg')",
      bgSize: "cover",
      bgPos: "center",
      alignItems: "flex-end",
      position: ["absolute", "absolute", "absolute", "static", "static"],
      justifyContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
        textColor: "#ffffff",
        children: "Bienvenido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      h: "90vh",
      w: ["90%", "90%", "90%", "50%", "40%"],
      bgColor: "#ffffff",
      zIndex: 1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        m: ["1em", "6em", "7em", "6em", "6em"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          fontSize: "2.5em",
          mb: "1em",
          letterSpacing: "wider",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
              lineNumber: 48,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          mt: "2em",
          textAlign: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            variant: "smallText",
            children: "o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          justifyContent: "space-between",
          mt: "2em",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2F1dGhGb3JtTGF5b3V0LnRzeCJdLCJuYW1lcyI6WyJBdXRoRm9ybUxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVFPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBc0M7QUFBQSxNQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFDbEUsc0JBQ0UscUVBQUMscURBQUQ7QUFDRSxLQUFDLEVBQUMsTUFESjtBQUVFLEtBQUMsRUFBQyxPQUZKO0FBR0UsS0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLENBSEw7QUFJRSxrQkFBYyxFQUFDLFFBSmpCO0FBS0UsY0FBVSxFQUFDLFFBTGI7QUFBQSw0QkFPRSxxRUFBQyxxREFBRDtBQUNFLFlBQU0sRUFBRSxDQURWO0FBRUUsV0FBSyxFQUFFLENBRlQ7QUFHRSxPQUFDLEVBQUMsTUFISjtBQUlFLE9BQUMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLEtBQXpCLEVBQWdDLEtBQWhDLENBSkw7QUFLRSxPQUFDLEVBQUMsS0FMSjtBQU1FLGFBQU8sRUFBQywrQkFOVjtBQU9FLFlBQU0sRUFBQyxPQVBUO0FBUUUsV0FBSyxFQUFDLFFBUlI7QUFTRSxnQkFBVSxFQUFDLFVBVGI7QUFVRSxjQUFRLEVBQUUsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixVQUF6QixFQUFxQyxRQUFyQyxFQUErQyxRQUEvQyxDQVZaO0FBV0Usb0JBQWMsRUFBQyxRQVhqQjtBQUFBLDZCQWFFLHFFQUFDLHdEQUFEO0FBQVMsaUJBQVMsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQXNCRSxxRUFBQyxxREFBRDtBQUNFLE9BQUMsRUFBQyxNQURKO0FBRUUsT0FBQyxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLENBRkw7QUFHRSxhQUFPLEVBQUMsU0FIVjtBQUlFLFlBQU0sRUFBRSxDQUpWO0FBQUEsNkJBTUUscUVBQUMsb0RBQUQ7QUFBSyxTQUFDLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsQ0FBUjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQVMsa0JBQVEsRUFBQyxPQUFsQjtBQUEwQixZQUFFLEVBQUMsS0FBN0I7QUFBbUMsdUJBQWEsRUFBQyxPQUFqRDtBQUFBLG9CQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJR0MsUUFKSCxlQUtFLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFDLE9BQVI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFBLG1DQUNFLHFFQUFDLHFEQUFEO0FBQU0scUJBQU8sRUFBQyxXQUFkO0FBQTBCLHVCQUFTLEVBQUMsUUFBcEM7QUFBQSx3QkFDR0MsSUFBSSxLQUFLLE9BQVQsR0FBbUIsY0FBbkIsR0FBb0M7QUFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBWUUscUVBQUMsb0RBQUQ7QUFBSyxZQUFFLEVBQUMsS0FBUjtBQUFjLG1CQUFTLEVBQUMsUUFBeEI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFNLG1CQUFPLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFlRSxxRUFBQyxxREFBRDtBQUFNLHdCQUFjLEVBQUMsZUFBckI7QUFBcUMsWUFBRSxFQUFDLEtBQXhDO0FBQUEsaUNBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQXBETTtLQUFNSCxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2F1dGgvbG9naW4uM2M0N2ZjM2I2YzQwMzY4N2U3MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgTGluaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9naW5CdXR0b24gfSBmcm9tIFwiLi4vR29vZ2xlTG9naW5CdXR0b25cIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnQ7XHJcbiAgdHlwZTogXCJsb2dpblwiIHwgXCJzaWdudXBcIjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhGb3JtTGF5b3V0ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCB0eXBlIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgaD1cIjEwMHZoXCJcclxuICAgICAgcD17W1wiMFwiLCBcIjBcIiwgXCIwXCIsIFwiM2VtXCIsIFwiM2VtXCJdfVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIHpJbmRleD17MH1cclxuICAgICAgICBvcmRlcj17MX1cclxuICAgICAgICBoPVwiMTAwJVwiXHJcbiAgICAgICAgdz17W1wiMTAwJVwiLCBcIjEwMCVcIiwgXCIxMDAlXCIsIFwiNTAlXCIsIFwiNjAlXCJdfVxyXG4gICAgICAgIHA9XCIyZW1cIlxyXG4gICAgICAgIGJnSW1hZ2U9XCJ1cmwoJy9pbWFnZXMvYXVodHNjcmVlbi5qcGcnKVwiXHJcbiAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgIGJnUG9zPVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtbXCJhYnNvbHV0ZVwiLCBcImFic29sdXRlXCIsIFwiYWJzb2x1dGVcIiwgXCJzdGF0aWNcIiwgXCJzdGF0aWNcIl19XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRpbmcgdGV4dENvbG9yPVwiI2ZmZmZmZlwiPkJpZW52ZW5pZG88L0hlYWRpbmc+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiOTB2aFwiXHJcbiAgICAgICAgdz17W1wiOTAlXCIsIFwiOTAlXCIsIFwiOTAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnQ29sb3I9XCIjZmZmZmZmXCJcclxuICAgICAgICB6SW5kZXg9ezF9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG09e1tcIjFlbVwiLCBcIjZlbVwiLCBcIjdlbVwiLCBcIjZlbVwiLCBcIjZlbVwiXX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjIuNWVtXCIgbWI9XCIxZW1cIiBsZXR0ZXJTcGFjaW5nPVwid2lkZXJcIj5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPEJveCBtdD1cIjAuNWVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJzbWFsbFRleHRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0eXBlID09PSBcImxvZ2luXCIgPyBcIkNyZWFyIGN1ZW50YVwiIDogXCJJbmljaWFyIHNlc2nDs25cIn1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBtdD1cIjJlbVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwic21hbGxUZXh0XCI+bzwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgbXQ9XCIyZW1cIj5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnV0dG9uIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9