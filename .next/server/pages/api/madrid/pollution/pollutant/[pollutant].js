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
exports.id = "pages/api/madrid/pollution/pollutant/[pollutant]";
exports.ids = ["pages/api/madrid/pollution/pollutant/[pollutant]"];
exports.modules = {

/***/ "(api)/./pages/api/madrid/pollution/pollutant/[pollutant].js":
/*!*************************************************************!*\
  !*** ./pages/api/madrid/pollution/pollutant/[pollutant].js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , query: { pollutant  } ,  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                var data = await fetch(\"https://datos.alcobendas.org/dataset/26b78554-d43c-4f20-af96-78041179980a/resource/51a2fefa-d24b-45ee-820f-e9f3b9a60e15/download/datos-de-contaminacion-por-horas_2022.json\").then((response)=>response.text());\n                var pollutions = JSON.parse(data);\n                var pollution = pollutions.filter(function(pollutions) {\n                    return pollutions.Contaminante == pollutant;\n                });\n                return res.status(200).json(pollution);\n            } catch (error) {\n                return res.status(400).json({\n                    error: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                msg: \"This method is not supported.\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFkcmlkL3BvbGx1dGlvbi9wb2xsdXRhbnQvW3BvbGx1dGFudF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLE9BQU1BLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU0sRUFDTEMsTUFBTSxHQUNOQyxLQUFLLEVBQUUsRUFBQ0MsU0FBUyxHQUFDLEtBQ2xCLEdBQUdKLEdBQUc7SUFFUCxPQUFPRSxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1QsSUFBSTtnQkFDSCxJQUFJRyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZLQUE2SyxDQUFDLENBQ3RMQyxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEQsSUFBSUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1AsSUFBSSxDQUFDO2dCQUU3QixJQUFJUSxTQUFTLEdBQUdILFVBQVUsQ0FBQ0ksTUFBTSxDQUFDLFNBQVNKLFVBQVUsRUFBRTtvQkFBRSxPQUFPQSxVQUFVLENBQUNLLFlBQVksSUFBSVgsU0FBUztnQkFBQSxDQUFDLENBQUM7Z0JBQzFHLE9BQU9ILEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLFNBQVMsQ0FBQztZQUN2QyxFQUFFLE9BQU1LLEtBQUssRUFBRTtnQkFDZCxPQUFPakIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBQ0MsS0FBSyxFQUFFQSxLQUFLLENBQUNDLE9BQU87aUJBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0Y7WUFDQyxPQUFPbEIsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0csR0FBRyxFQUFFLCtCQUErQjthQUFDLENBQUM7S0FDcEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXdlYi8uL3BhZ2VzL2FwaS9tYWRyaWQvcG9sbHV0aW9uL3BvbGx1dGFudC9bcG9sbHV0YW50XS5qcz82OGIwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XHJcblx0Y29uc3Qge1xyXG5cdFx0bWV0aG9kLFxyXG5cdFx0cXVlcnk6IHtwb2xsdXRhbnR9LFxyXG5cdH0gPSByZXE7XHJcblxyXG5cdHN3aXRjaChtZXRob2QpIHtcclxuXHRcdGNhc2UgJ0dFVCc6XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYXRvcy5hbGNvYmVuZGFzLm9yZy9kYXRhc2V0LzI2Yjc4NTU0LWQ0M2MtNGYyMC1hZjk2LTc4MDQxMTc5OTgwYS9yZXNvdXJjZS81MWEyZmVmYS1kMjRiLTQ1ZWUtODIwZi1lOWYzYjlhNjBlMTUvZG93bmxvYWQvZGF0b3MtZGUtY29udGFtaW5hY2lvbi1wb3ItaG9yYXNfMjAyMi5qc29uJylcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0XHR2YXIgcG9sbHV0aW9ucyA9IEpTT04ucGFyc2UoZGF0YSlcclxuXHJcbiAgICAgICAgdmFyIHBvbGx1dGlvbiA9IHBvbGx1dGlvbnMuZmlsdGVyKGZ1bmN0aW9uKHBvbGx1dGlvbnMpIHsgcmV0dXJuIHBvbGx1dGlvbnMuQ29udGFtaW5hbnRlID09IHBvbGx1dGFudH0pO1xyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb2xsdXRpb24pXHJcblx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlcnJvci5tZXNzYWdlfSlcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttc2c6ICdUaGlzIG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkLid9KVxyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJwb2xsdXRhbnQiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwicG9sbHV0aW9ucyIsIkpTT04iLCJwYXJzZSIsInBvbGx1dGlvbiIsImZpbHRlciIsIkNvbnRhbWluYW50ZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/madrid/pollution/pollutant/[pollutant].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/madrid/pollution/pollutant/[pollutant].js"));
module.exports = __webpack_exports__;

})();