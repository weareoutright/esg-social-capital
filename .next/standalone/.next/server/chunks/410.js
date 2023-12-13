exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 826:
/***/ ((module) => {

// Exports
module.exports = {
	"gradientPlaceholder": "grid_gradientPlaceholder__ZK_Xr",
	"card": "grid_card__oD4Ej",
	"cardTitle": "grid_cardTitle__3vO34"
};


/***/ }),

/***/ 3088:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "page-header_header__3VwtC",
	"headerTitle": "page-header_headerTitle__zYXE_"
};


/***/ }),

/***/ 6450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ PageGrid),
  Y: () => (/* binding */ PostGrid)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/index.mjs + 7 modules
var dist = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./lib/constants.js
const WQGRAPHQL_URL = "https://dev-esg-social-capital.pantheonsite.io/wp/graphql";
const WQGRAPHQL_DOMAIN = WQGRAPHQL_URL.replace("wp/graphql", "");
const IMAGE_URL = "https://dev-esg-social-capital.pantheonsite.io";

;// CONCATENATED MODULE: ./lib/getUrlPath.js
/**
 * Helper function that returns the path from a URL,
 *
 * @remarks mostly used to extract the path of an image
 * from a featuredImage URL from WordPress
 *
 * @param {string | URL} url - A full URL
 * @returns {string | null} The pathname of the URL, or null if url is undefined
 */ const getUrlPath = (url)=>{
    if (typeof url === "string") {
        return new URL(url).pathname;
    }
    if (url instanceof URL) {
        return url.pathname;
    }
    return null;
};

// EXTERNAL MODULE: ./components/grid.module.css
var grid_module = __webpack_require__(826);
var grid_module_default = /*#__PURE__*/__webpack_require__.n(grid_module);
;// CONCATENATED MODULE: ./components/grid.jsx







const GradientPlaceholder = ()=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (grid_module_default()).gradientPlaceholder
    });
const GridItem = ({ href, imgSrc, altText, title })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        passHref: true,
        href: href,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `${(grid_module_default()).card} rounded-lg cursor-pointer h-full overflow-x-hidden`,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "shrink-0 h-40 relative",
                    children: imgSrc !== null ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: IMAGE_URL + imgSrc,
                        fill: true,
                        alt: altText,
                        style: {
                            objectFit: "cover"
                        }
                    }) : /*#__PURE__*/ jsx_runtime.jsx(GradientPlaceholder, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                    className: `${(grid_module_default()).cardTitle} font-semibold py-4 px-6`,
                    children: [
                        title,
                        " →"
                    ]
                })
            ]
        })
    });
};
const PostGridItem = ({ content: post })=>{
    const imgSrc = getUrlPath(post?.featuredImage?.node?.sourceUrl);
    const altText = post?.featuredImage?.node.altText || post.title;
    return /*#__PURE__*/ jsx_runtime.jsx(GridItem, {
        href: `/posts${post.uri}`,
        imgSrc: imgSrc,
        altText: altText,
        title: post.title
    });
};
const PageGridItem = ({ content: page })=>{
    const imgSrc = getUrlPath(page?.featuredImage?.node?.sourceUrl);
    const altText = page?.featuredImage?.node.altText || page.title;
    return /*#__PURE__*/ jsx_runtime.jsx(GridItem, {
        href: `/pages${page.uri}`,
        imgSrc: imgSrc,
        altText: altText,
        title: page.title
    });
};
const PostGrid = (0,dist/* withGrid */.oL)(PostGridItem);
const PageGrid = (0,dist/* withGrid */.oL)(PageGridItem);


/***/ }),

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _page_header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3088);
/* harmony import */ var _page_header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_header_module_css__WEBPACK_IMPORTED_MODULE_1__);


function PageHeader({ title }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_page_header_module_css__WEBPACK_IMPORTED_MODULE_1___default().header),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: `${(_page_header_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerTitle)} font-extrabold my-auto mx-0 text-center`,
            children: title
        })
    });
}


/***/ })

};
;