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
exports.id = "pages/api/madrid/weather";
exports.ids = ["pages/api/madrid/weather"];
exports.modules = {

/***/ "(api)/./pages/api/madrid/weather/index.js":
/*!*******************************************!*\
  !*** ./pages/api/madrid/weather/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                var data = await fetch(\"https://datos.alcobendas.org/dataset/083e08c7-1647-4bb1-a64b-957d3604f346/resource/9f58d5b2-9d2d-4a1c-91eb-c9c34b2b7614/download/recurso.json\").then((response)=>response.text());\n                var weather = JSON.parse(data.substring(1));\n                return res.status(200).json(weather.records);\n            } catch (error) {\n                return res.status(400).json({\n                    error: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                msg: \"This method is not supported.\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFkcmlkL3dlYXRoZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFDQyxNQUFNLEdBQUMsR0FBR0YsR0FBRztJQUVwQixPQUFPRSxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1QsSUFBSTtnQkFDSCxJQUFJQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDLCtJQUErSSxDQUFDLENBQ3hKQyxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEQsSUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxDQUFDUSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE9BQU9WLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sT0FBTyxDQUFDO1lBRTdDLEVBQUUsT0FBTUMsS0FBSyxFQUFFO2dCQUNkLE9BQU9kLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUNFLEtBQUssRUFBRUEsS0FBSyxDQUFDQyxPQUFPO2lCQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNGO1lBQ0MsT0FBT2YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0ksR0FBRyxFQUFFLCtCQUErQjthQUFDLENBQUM7S0FDcEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXdlYi8uL3BhZ2VzL2FwaS9tYWRyaWQvd2VhdGhlci9pbmRleC5qcz8yMTMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCB7bWV0aG9kfSA9IHJlcVxyXG5cclxuXHRzd2l0Y2gobWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGF0b3MuYWxjb2JlbmRhcy5vcmcvZGF0YXNldC8wODNlMDhjNy0xNjQ3LTRiYjEtYTY0Yi05NTdkMzYwNGYzNDYvcmVzb3VyY2UvOWY1OGQ1YjItOWQyZC00YTFjLTkxZWItYzljMzRiMmI3NjE0L2Rvd25sb2FkL3JlY3Vyc28uanNvbicpXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0dmFyIHdlYXRoZXIgPSBKU09OLnBhcnNlKGRhdGEuc3Vic3RyaW5nKDEpKVxyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih3ZWF0aGVyLnJlY29yZHMpXHJcblx0XHRcclxuXHRcdFx0fSBjYXRjaChlcnJvcikge1xyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3I6IGVycm9yLm1lc3NhZ2V9KVxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21zZzogJ1RoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQuJ30pXHJcblx0fVxyXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0Iiwid2VhdGhlciIsIkpTT04iLCJwYXJzZSIsInN1YnN0cmluZyIsInN0YXR1cyIsImpzb24iLCJyZWNvcmRzIiwiZXJyb3IiLCJtZXNzYWdlIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/madrid/weather/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/madrid/weather/index.js"));
module.exports = __webpack_exports__;

})();