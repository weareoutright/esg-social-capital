exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 9544:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "layout_layout__Xf50c",
	"footerCopy": "layout_footerCopy__bc4gk"
};


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/index.mjs + 7 modules
var dist = __webpack_require__(1686);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "browser-monads-ts"
var external_browser_monads_ts_ = __webpack_require__(2958);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./constants/home_btn.svg
/* harmony default export */ const home_btn = ({"src":"/_next/static/media/home_btn.50a55f99.svg","height":16,"width":14,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./constants/folder.svg
/* harmony default export */ const folder = ({"src":"/_next/static/media/folder.bfd7aca3.svg","height":24,"width":25,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/FooterNav.jsx







const FooterNav = ({ currentPage })=>{
    const [navProgress, setNavProgress] = (0,external_react_.useState)(12);
    const [offset, setOffset] = (0,external_react_.useState)(0);
    const [navPillHome, setNavPillHome] = (0,external_react_.useState)("navPill-whiteBg");
    const [navPillLayFoundation, setNavPillLayFoundation] = (0,external_react_.useState)("navPill-whiteBg");
    const [navPillDesign, setNavPillDesign] = (0,external_react_.useState)("navPill-whiteBg");
    const [navPillExecEval, setNavPillExecEval] = (0,external_react_.useState)("navPill-whiteBg");
    const [navPillShare, setNavPillShare] = (0,external_react_.useState)("navPill-whiteBg");
    const body = external_browser_monads_ts_.document.body;
    const html = external_browser_monads_ts_.document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    (0,external_react_.useEffect)(()=>{
        if (typeof external_browser_monads_ts_.window !== `undefined`) {
            external_browser_monads_ts_.window.onscroll = ()=>{
                setOffset(external_browser_monads_ts_.window.scrollY);
            };
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        // setNavProgress((offset / (height/2)) * 100)
        if (currentPage === "home") {
            setNavPillHome("navPill-whiteBg");
            setNavPillLayFoundation("navPill-whiteBg");
            setNavPillDesign("navPill-whiteBg");
            setNavPillExecEval("navPill-whiteBg");
            setNavPillShare("navPill-whiteBg");
        }
        if (currentPage === "lay-the-foundation") {
            setNavProgress(30);
            setNavPillHome("navPill-pinkBg");
            setNavPillLayFoundation("navPill-whiteBg");
            setNavPillDesign("navPill-whiteBg");
            setNavPillExecEval("navPill-whiteBg");
            setNavPillShare("navPill-whiteBg");
        }
        if (currentPage === "design-the-supports") {
            setNavProgress(55);
            setNavPillHome("navPill-pinkBg");
            setNavPillLayFoundation("navPill-pinkBg");
            setNavPillDesign("navPill-whiteBg");
            setNavPillExecEval("navPill-whiteBg");
            setNavPillShare("navPill-whiteBg");
        }
        if (currentPage === "execute-and-evaluate") {
            setNavProgress(80);
            setNavPillHome("navPill-pinkBg");
            setNavPillLayFoundation("navPill-pinkBg");
            setNavPillDesign("navPill-pinkBg");
            setNavPillExecEval("navPill-whiteBg");
            setNavPillShare("navPill-whiteBg");
        }
        if (currentPage === "resources") {
            setNavProgress(100);
            setNavPillHome("navPill-pinkBg");
            setNavPillLayFoundation("navPill-pinkBg");
            setNavPillDesign("navPill-pinkBg");
            setNavPillExecEval("navPill-pinkBg");
            setNavPillShare("navPill-whiteBg");
        }
    }, [
        offset
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "FooterNav",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("progress", {
                value: navProgress,
                max: "100"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                className: `pill ${navPillHome}`,
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: home_btn,
                    alt: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "laythefoundation",
                className: `pill ${navPillLayFoundation}`,
                children: "lay the foundation"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "designthesupports",
                className: `pill ${navPillDesign}`,
                children: "design the supports"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "executeandevaluate",
                className: `pill ${navPillExecEval}`,
                children: "execute & evaluate"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "resources",
                className: `pill ${navPillShare}`,
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: folder,
                    alt: "Share"
                })
            })
        ]
    });
};
/* harmony default export */ const components_FooterNav = (FooterNav);

// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9544);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/layout.jsx




function Layout({ children, preview, currentPage }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `${(layout_module_default()).layout} flex flex-col`,
        children: [
            preview && /*#__PURE__*/ jsx_runtime.jsx(dist/* PreviewRibbon */.ND, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "mb-auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_FooterNav, {
                currentPage: currentPage
            })
        ]
    });
}


/***/ })

};
;