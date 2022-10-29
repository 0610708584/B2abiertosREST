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
exports.id = "pages/api/madrid/pollution";
exports.ids = ["pages/api/madrid/pollution"];
exports.modules = {

/***/ "(api)/./pages/api/madrid/pollution/index.js":
/*!*********************************************!*\
  !*** ./pages/api/madrid/pollution/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                var data = await fetch(\"https://datos.alcobendas.org/dataset/26b78554-d43c-4f20-af96-78041179980a/resource/51a2fefa-d24b-45ee-820f-e9f3b9a60e15/download/datos-de-contaminacion-por-horas_2022.json\").then((response)=>response.text());\n                var pollutions = JSON.parse(data);\n                return res.status(200).json(pollutions);\n            } catch (error) {\n                return res.status(400).json({\n                    error: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                msg: \"This method is not supported.\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFkcmlkL3BvbGx1dGlvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUNDLE1BQU0sR0FBQyxHQUFHRixHQUFHO0lBRXBCLE9BQU9FLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDVCxJQUFJO2dCQUNILElBQUlDLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsNktBQTZLLENBQUMsQ0FDdExDLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDO2dCQUNoRCxJQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxJQUFJLENBQUM7Z0JBQ2pDLE9BQU9GLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLFVBQVUsQ0FBQztZQUV4QyxFQUFFLE9BQU1LLEtBQUssRUFBRTtnQkFDZCxPQUFPWixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFDQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ0MsT0FBTztpQkFBQyxDQUFDO1lBQ3BELENBQUM7UUFDRjtZQUNDLE9BQU9iLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUNHLEdBQUcsRUFBRSwrQkFBK0I7YUFBQyxDQUFDO0tBQ3BFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l3ZWIvLi9wYWdlcy9hcGkvbWFkcmlkL3BvbGx1dGlvbi9pbmRleC5qcz9kMTgzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHRjb25zdCB7bWV0aG9kfSA9IHJlcVxyXG5cclxuXHRzd2l0Y2gobWV0aG9kKSB7XHJcblx0XHRjYXNlICdHRVQnOlxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGF0b3MuYWxjb2JlbmRhcy5vcmcvZGF0YXNldC8yNmI3ODU1NC1kNDNjLTRmMjAtYWY5Ni03ODA0MTE3OTk4MGEvcmVzb3VyY2UvNTFhMmZlZmEtZDI0Yi00NWVlLTgyMGYtZTlmM2I5YTYwZTE1L2Rvd25sb2FkL2RhdG9zLWRlLWNvbnRhbWluYWNpb24tcG9yLWhvcmFzXzIwMjIuanNvbicpXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0dmFyIHBvbGx1dGlvbnMgPSBKU09OLnBhcnNlKGRhdGEpXHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBvbGx1dGlvbnMpXHJcblxyXG5cdFx0XHR9IGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyb3IubWVzc2FnZX0pXHJcblx0XHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bXNnOiAnVGhpcyBtZXRob2QgaXMgbm90IHN1cHBvcnRlZC4nfSlcclxuXHR9XHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJwb2xsdXRpb25zIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/madrid/pollution/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/madrid/pollution/index.js"));
module.exports = __webpack_exports__;

})();