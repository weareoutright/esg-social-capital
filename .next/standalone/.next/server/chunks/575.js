"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 6620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_NextPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./constants/nextArrow.svg
/* harmony default export */ const nextArrow = ({"src":"/_next/static/media/nextArrow.c0c1af2e.svg","height":25,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/NextPage.jsx





const NextPage = ({ nextPage, nextPageAnchorLink })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "NextPage",
        children: nextPage !== null ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    children: [
                        "Continue to ",
                        nextPage
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    className: "pill",
                    href: nextPageAnchorLink,
                    alt: "",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: "Next"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: nextArrow,
                            alt: ""
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime.jsx("span", {})
    });
};
/* harmony default export */ const components_NextPage = (NextPage);


/***/ }),

/***/ 9833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_PhaseHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/HeaderCustom.jsx + 1 modules
var HeaderCustom = __webpack_require__(2245);
;// CONCATENATED MODULE: ./constants/phase-corner-fold.svg
/* harmony default export */ const phase_corner_fold = ({"src":"/_next/static/media/phase-corner-fold.dcf0189d.svg","height":184,"width":188,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/PhaseHeader.jsx





const PhaseHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "layout_folded_corner",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: phase_corner_fold,
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(HeaderCustom/* default */.Z, {
                homePageHeader: false
            })
        ]
    });
};
/* harmony default export */ const components_PhaseHeader = (PhaseHeader);


/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Tool)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./constants/paper-clip.svg
/* harmony default export */ const paper_clip = ({"src":"/_next/static/media/paper-clip.6d4068b5.svg","height":33,"width":33,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/Tool.jsx





const Tool = ({ href, title })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
        className: "Tool",
        href: href,
        alt: "",
        target: "_blank",
        rel: "noreferrer",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: paper_clip,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: title
            })
        ]
    });
};
/* harmony default export */ const components_Tool = (Tool);


/***/ })

};
;