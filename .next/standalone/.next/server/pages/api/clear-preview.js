"use strict";
(() => {
var exports = {};
exports.id = 901;
exports.ids = [901];
exports.modules = {

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const redirect = new URL(req.headers.referer).pathname;
    console.log("Clearing preview data...");
    // clear the previewData cookie and redirect back to the page
    res.clearPreviewData();
    res.redirect(redirect);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(787));
module.exports = __webpack_exports__;

})();