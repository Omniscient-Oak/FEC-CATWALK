"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_component_relateditems_CompareModal_jsx"],{

/***/ "./client/src/component/relateditems/CompareModal.jsx":
/*!************************************************************!*\
  !*** ./client/src/component/relateditems/CompareModal.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar ModalBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"CompareModal__ModalBoxStyle\",\n  componentId: \"sc-nguz06-0\"\n})([\"position:fixed;background:#00000050;width:100%;height:100vh;top:0;left:0;z-index:100;\"]);\nvar BoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"CompareModal__BoxStyle\",\n  componentId: \"sc-nguz06-1\"\n})([\"position:relative;width:70%;margin:0 auto;height:auto;max-height:70vh;margin-top:calc(100vh - 85vh - 20px);background:#fff;border-radius:4px;padding:20px;border:1px solid #999;overflow:auto;z-index:101;\"]);\nvar CloseButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"CompareModal__CloseButtonStyle\",\n  componentId: \"sc-nguz06-2\"\n})([\"content:'x';cursor:pointer;position:fixed;right:calc(15% - 30px);top:calc(100vh - 85vh - 33px);background:#ededed;width:25px;height:25px;border-radius:50%;line-height:20px;text-align:center;border:1px solid #999;font-size:20px;z-index:102;\"]);\n\nvar Modal = function Modal(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalBoxStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoxStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseButtonStyle, {\n    onClick: function onClick() {\n      event.stopPropagation();\n      props.toggle(false);\n    }\n  }, \"X\"), props.content));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://project-catwalk/./client/src/component/relateditems/CompareModal.jsx?");

/***/ })

}]);