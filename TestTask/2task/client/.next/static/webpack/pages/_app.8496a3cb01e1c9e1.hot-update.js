"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/context/MainContext.js":
/*!*******************************************!*\
  !*** ./components/context/MainContext.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainProvaider\": function() { return /* binding */ MainProvaider; },\n/* harmony export */   \"useMainContext\": function() { return /* binding */ useMainContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar MainProvaider = function(param) {\n    var children = param.children;\n    var navigation = [\n        {\n            title: \"Услуги\",\n            link: \"/services\"\n        },\n        {\n            title: \"Виджеты\",\n            link: \"/widgets\"\n        },\n        {\n            title: \"Интеграции\",\n            link: \"/integariotion\"\n        },\n        {\n            title: \"Кейсы\",\n            link: \"/keys\"\n        },\n        {\n            title: \"Сертификаты\",\n            link: \"/sertificates\"\n        }\n    ];\n    var params = {\n        phones: [\n            {\n                phone: \"+7 555 555-55-55\",\n                link: \"tel:+7 555 555-55-55\"\n            },\n            {\n                phone: \"+7 555 555-55-55\",\n                link: \"tel:+7 555 555-55-55\"\n            }\n        ],\n        socials: [\n            {\n                icon: \"./img/icons/whatsap.svg \",\n                link: \"https://t.me/blablalba\"\n            },\n            {\n                icon: \"./img/icons/phone.svg\",\n                link: \"tel:+12215555555\"\n            },\n            {\n                icon: \"./img/icons/telegram.svg\",\n                link: \"https://wa.me/2217777777\"\n            }, \n        ]\n    };\n    var value = {\n        navigation: navigation,\n        params: params\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\test\\\\TestTask\\\\2task\\\\client\\\\components\\\\context\\\\MainContext.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, _this);\n};\n_c = MainProvaider;\nvar useMainContext = function() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MainContext);\n};\n_s(useMainContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"MainProvaider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvTWFpbkNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUE0RDtBQUM1RCxJQUFNRyxXQUFXLGlCQUFHSCxvREFBYSxFQUFFO0FBRTVCLElBQU1JLGFBQWEsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQ3BDLElBQU1DLFVBQVUsR0FBRztRQUNmO1lBQ0lDLEtBQUssRUFBRSxRQUFRO1lBQ2ZDLElBQUksRUFBRSxXQUFXO1NBQ3BCO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLFNBQVM7WUFDaEJDLElBQUksRUFBRSxVQUFVO1NBQ25CO1FBQ0Q7WUFDSUQsS0FBSyxFQUFFLFlBQVk7WUFDbkJDLElBQUksRUFBRSxnQkFBZ0I7U0FDekI7UUFDRDtZQUNJRCxLQUFLLEVBQUUsT0FBTztZQUNkQyxJQUFJLEVBQUUsT0FBTztTQUNoQjtRQUNEO1lBQ0lELEtBQUssRUFBRSxhQUFhO1lBQ3BCQyxJQUFJLEVBQUUsZUFBZTtTQUN4QjtLQUNKO0lBRUQsSUFBTUMsTUFBTSxHQUFHO1FBQ1hDLE1BQU0sRUFBRTtZQUNKO2dCQUNJQyxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QkgsSUFBSSxFQUFFLHNCQUFzQjthQUMvQjtZQUNEO2dCQUNJRyxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QkgsSUFBSSxFQUFFLHNCQUFzQjthQUMvQjtTQUNKO1FBQ0RJLE9BQU8sRUFBRTtZQUNMO2dCQUNJQyxJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQ0wsSUFBSSxFQUFFLHdCQUF3QjthQUNqQztZQUVEO2dCQUNJSyxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QkwsSUFBSSxFQUFFLGtCQUFrQjthQUMzQjtZQUNEO2dCQUNJSyxJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQ0wsSUFBSSxFQUFFLDBCQUEwQjthQUNuQztTQUNKO0tBQ0o7SUFFRCxJQUFNTSxLQUFLLEdBQUc7UUFDWFIsVUFBVSxFQUFWQSxVQUFVO1FBQUVHLE1BQU0sRUFBTkEsTUFBTTtLQUNwQjtJQUVELHFCQUNJLDhEQUFDTixXQUFXLENBQUNZLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUM3QlQsUUFBUTs7Ozs7YUFDVSxDQUMxQjtBQUNMLENBQUM7QUE3RFlELEtBQUFBLGFBQWE7QUErRG5CLElBQU1ZLGNBQWMsR0FBRyxXQUFNZjs7SUFBQUEsT0FBQUEsaURBQVUsQ0FBQ0UsV0FBVyxDQUFDO0FBQUQsQ0FBQyxDQUFDO0dBQS9DYSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGV4dC9NYWluQ29udGV4dC5qcz9mMjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBNYWluQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluUHJvdmFpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn0KPRgdC70YPQs9C4JyxcclxuICAgICAgICAgICAgbGluazogJy9zZXJ2aWNlcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQktC40LTQttC10YLRiycsXHJcbiAgICAgICAgICAgIGxpbms6ICcvd2lkZ2V0cydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQmNC90YLQtdCz0YDQsNGG0LjQuCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvaW50ZWdhcmlvdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICfQmtC10LnRgdGLJyxcclxuICAgICAgICAgICAgbGluazogJy9rZXlzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ9Ch0LXRgNGC0LjRhNC40LrQsNGC0YsnLFxyXG4gICAgICAgICAgICBsaW5rOiAnL3NlcnRpZmljYXRlcydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBwaG9uZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcrNyA1NTUgNTU1LTU1LTU1JyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICd0ZWw6KzcgNTU1IDU1NS01NS01NSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcrNyA1NTUgNTU1LTU1LTU1JyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICd0ZWw6KzcgNTU1IDU1NS01NS01NSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc29jaWFsczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnLi9pbWcvaWNvbnMvd2hhdHNhcC5zdmcgJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3QubWUvYmxhYmxhbGJhJyxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb246ICcuL2ltZy9pY29ucy9waG9uZS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgbGluazogJ3RlbDorMTIyMTU1NTU1NTUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnLi9pbWcvaWNvbnMvdGVsZWdyYW0uc3ZnJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3dhLm1lLzIyMTc3Nzc3NzcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHtcclxuICAgICAgIG5hdmlnYXRpb24sIHBhcmFtc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L01haW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWFpbkNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KE1haW5Db250ZXh0KTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIk1haW5Db250ZXh0IiwiTWFpblByb3ZhaWRlciIsImNoaWxkcmVuIiwibmF2aWdhdGlvbiIsInRpdGxlIiwibGluayIsInBhcmFtcyIsInBob25lcyIsInBob25lIiwic29jaWFscyIsImljb24iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlTWFpbkNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/context/MainContext.js\n"));

/***/ })

});