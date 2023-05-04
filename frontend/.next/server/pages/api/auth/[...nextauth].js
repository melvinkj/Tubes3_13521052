"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// // lib/prisma.ts\n// import { PrismaClient } from '@prisma/client';\n// let prisma: PrismaClient;\n// if (process.env.NODE_ENV === 'production') {\n//   prisma = new PrismaClient();\n// } else {\n//   if (!global.prisma) {\n//     global.prisma = new PrismaClient();\n//   }\n//   prisma = global.prisma;\n// }\n// export default prisma;\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQkFBbUI7QUFDbkIsaURBQWlEO0FBRWpELDRCQUE0QjtBQUU1QiwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWCwwQkFBMEI7QUFDMUIsMENBQTBDO0FBQzFDLE1BQU07QUFDTiw0QkFBNEI7QUFDNUIsSUFBSTtBQUVKLHlCQUF5QjtBQUNvQjtBQU83QyxJQUFJQztBQUNKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0MsWUFBWSxFQUFFO1FBQ3hCRCxPQUFPQyxZQUFZLEdBQUcsSUFBSUosd0RBQVlBO0lBQ3hDLENBQUM7SUFDREMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QixDQUFDO0FBRU0sTUFBTUMsS0FBS0osT0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1jaGF0Z3B0Ly4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBsaWIvcHJpc21hLnRzXHJcbi8vIGltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbi8vIGxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuXHJcbi8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbi8vICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4vLyB9IGVsc2Uge1xyXG4vLyAgIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4vLyAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuLy8gICB9XHJcbi8vICAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyLCBuby11bnVzZWQtdmFyc1xyXG4gIHZhciBjYWNoZWRQcmlzbWE6IFByaXNtYUNsaWVudFxyXG59XHJcblxyXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxufSBlbHNlIHtcclxuICBpZiAoIWdsb2JhbC5jYWNoZWRQcmlzbWEpIHtcclxuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLmNhY2hlZFByaXNtYVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWFcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(api)/./src/lib/prisma.ts\");\n\n\n\n// import prisma from \"../../../lib/prisma\";\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    secret: process.env.AUTH_SECRET,\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__.db),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDRTtBQUUxRCw0Q0FBNEM7QUFDVjtBQUUzQixNQUFNSSxjQUFjO0lBQ3pCLGlEQUFpRDtJQUNqREMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQy9CQyxTQUFTUCx3RUFBYUEsQ0FBQ0MsMkNBQUVBO0lBQ3pCTyxXQUFXO1FBQ1RULGlFQUFjQSxDQUFDO1lBQ1hVLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssZ0JBQWdCO1lBQ3RDQyxjQUFjUCxRQUFRQyxHQUFHLENBQUNPLGFBQWE7UUFDM0M7S0FFRDtBQUNILEVBQUM7QUFFRCxpRUFBZWQsZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtY2hhdGdwdC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbi8vIGltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQsXHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihkYiksXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCEsXHJcbiAgICB9KSxcclxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbiAgXSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiZGIiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX1NFQ1JFVCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();