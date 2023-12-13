exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 9270:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "index_header__pInMz",
	"next": "index_next__K7iSH",
	"onPantheon": "index_onPantheon__CudUr"
};


/***/ }),

/***/ 2245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_HeaderCustom)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./constants/esg_logo.svg
/* harmony default export */ const esg_logo = ({"src":"/_next/static/media/esg_logo.711978e8.svg","height":63,"width":165,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/HeaderCustom.jsx





const HeaderCustom = ({ homePageHeader })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "HeaderCustom",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "logo",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    className: "logo-link",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: esg_logo,
                        alt: "ESG LOGO"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `pill ${homePageHeader === false ? "non-home-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        children: "DOWNLOAD PDF"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        children: "Share"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_HeaderCustom = (HeaderCustom);


/***/ })

};
;