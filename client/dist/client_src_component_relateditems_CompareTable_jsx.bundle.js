"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_catwalk"] = self["webpackChunkproject_catwalk"] || []).push([["client_src_component_relateditems_CompareTable_jsx"],{

/***/ "./client/src/component/relateditems/CompareTable.jsx":
/*!************************************************************!*\
  !*** ./client/src/component/relateditems/CompareTable.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\nvar CompareTable = function CompareTable(_ref) {\n  var compareProduct = _ref.compareProduct,\n      currentProduct = _ref.currentProduct;\n  var products = [compareProduct, currentProduct];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      featuresArr = _useState2[0],\n      setFeaturesArr = _useState2[1];\n\n  var setFeatureList = function setFeatureList() {\n    var feats = [];\n    products.forEach(function (product) {\n      for (var key in product.features) {\n        if (!feats.includes(product.features[key].feature)) {\n          feats.push(product.features[key].feature);\n        }\n      }\n    });\n    setFeaturesArr(feats);\n  };\n\n  var findFeat = function findFeat(product, feature) {\n    var productFeat = Object.values(product.features).find(function (feat) {\n      return feat.feature === feature;\n    });\n    return productFeat ? productFeat.value : 'X';\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setFeatureList();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"th\", null, \"\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"th\", null, currentProduct.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"th\", null, compareProduct.name)), currentProduct && featuresArr.map(function (feature) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"td\", null, feature), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"td\", null, findFeat(currentProduct, feature)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"td\", null, findFeat(compareProduct, feature)));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompareTable);\n\n//# sourceURL=webpack://project-catwalk/./client/src/component/relateditems/CompareTable.jsx?");

/***/ })

}]);