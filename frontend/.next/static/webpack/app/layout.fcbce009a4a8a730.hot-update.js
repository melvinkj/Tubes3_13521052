"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"34a0678482e2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz84YmY4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMzRhMDY3ODQ4MmUyXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/components/NewChat.tsx":
/*!************************************!*\
  !*** ./src/components/NewChat.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/PlusIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction NewChat() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const createNewChat = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{\n        const data = await fetch(\"api/chats\", {\n            method: \"POST\"\n        });\n    // handle the response data here\n    }, []);\n    // Execute createNewChat only on the client-side\n    if (true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: createNewChat,\n            className: \"border border-gray-700 items-center chatRow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__, {\n                    className: \"h-4 w-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\melvi\\\\Documents\\\\Tubes Stima 3\\\\Tubes3_13521052\\\\frontend\\\\src\\\\components\\\\NewChat.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"New Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\melvi\\\\Documents\\\\Tubes Stima 3\\\\Tubes3_13521052\\\\frontend\\\\src\\\\components\\\\NewChat.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\melvi\\\\Documents\\\\Tubes Stima 3\\\\Tubes3_13521052\\\\frontend\\\\src\\\\components\\\\NewChat.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this);\n    } else {}\n}\n_s(NewChat, \"gsO4mBI2piedh7P9nJjA4Su07Wk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = NewChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewChat);\nvar _c;\n$RefreshReg$(_c, \"NewChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTmV3Q2hhdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ1I7QUFDRDtBQUdSO0FBRXBDLFNBQVNJLFVBQVU7O0lBQ2pCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLEVBQUNJLE1BQU1DLFFBQU8sRUFBQyxHQUFHTiwyREFBVUE7SUFFbEMsTUFBTU8sZ0JBQWdCTCxrREFBV0EsQ0FBQyxVQUFZO1FBQzVDLE1BQU1HLE9BQU8sTUFBTUcsTUFBTSxhQUFhO1lBQ3BDQyxRQUFRO1FBQ1Y7SUFDQSxnQ0FBZ0M7SUFDbEMsR0FBRyxFQUFFO0lBRUwsZ0RBQWdEO0lBQ2hELElBQUksSUFBa0IsRUFBYTtRQUNqQyxxQkFDRSw4REFBQ0M7WUFBSUMsU0FBU0o7WUFBZUssV0FBVTs7OEJBQ25DLDhEQUFDYixzREFBUUE7b0JBQUNhLFdBQVU7Ozs7Ozs4QkFDcEIsOERBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7SUFHWCxPQUFPLEVBRU47QUFDSDtHQXRCU1Y7O1FBQ1FGLHNEQUFTQTtRQUNBRCx1REFBVUE7OztLQUYzQkc7QUF3QlQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3Q2hhdC50c3g/YTExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgUGx1c0ljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbi8vIGltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIlxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBOZXdDaGF0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlTmV3Q2hhdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImFwaS9jaGF0c1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB9KTtcclxuICAgIC8vIGhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBFeGVjdXRlIGNyZWF0ZU5ld0NoYXQgb25seSBvbiB0aGUgY2xpZW50LXNpZGVcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17Y3JlYXRlTmV3Q2hhdH0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTcwMCBpdGVtcy1jZW50ZXIgY2hhdFJvd1wiPlxyXG4gICAgICAgICAgPFBsdXNJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIi8+XHJcbiAgICAgICAgICA8cD5OZXcgQ2hhdDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q2hhdCJdLCJuYW1lcyI6WyJQbHVzSWNvbiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsIk5ld0NoYXQiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsImNyZWF0ZU5ld0NoYXQiLCJmZXRjaCIsIm1ldGhvZCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/NewChat.tsx\n"));

/***/ })

});