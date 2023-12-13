"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 6373:
/***/ ((module) => {

module.exports = import("@pantheon-systems/wordpress-kit");;

/***/ }),

/***/ 4061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nt: () => (/* binding */ getPagePreview)
/* harmony export */ });
/* unused harmony exports getLatestPages, getPageByUri */
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
/* harmony import */ var _WordPressClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__]);
([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getLatestPages(totalPages) {
    const query = gql`
		query LatestPagesQuery($totalPages: Int!) {
			pages(first: $totalPages) {
				edges {
					node {
						id
						uri
						title
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;
    const { data: { pages: { edges } }, headers } = await client.rawRequest(query, {
        totalPages
    });
    const pages = edges.map(({ node })=>node);
    return {
        pages,
        headers
    };
}
async function getPageByUri(uri) {
    const uriString = `${uri.join("/")}`;
    const query = gql`
		query PageByURIquery($uriString: ID!) {
			page(id: $uriString, idType: URI) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;
    const { data: { page }, headers } = await client.rawRequest(query, {
        uriString
    });
    return {
        page,
        headers
    };
}
async function getPagePreview(id) {
    const credentials = (0,_WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .getAuthCredentials */ .WA)();
    _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.setHeaders({
        Authorization: `Basic ${credentials}`
    });
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
		query PagePreviewQuery($id: ID!) {
			page(id: $id, idType: DATABASE_ID, asPreview: true) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;
    const { page } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.request(query, {
        id
    });
    return {
        page
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pV: () => (/* binding */ getPostPreview)
/* harmony export */ });
/* unused harmony exports getLatestPosts, getPostByUri */
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
/* harmony import */ var _WordPressClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__]);
([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getLatestPosts(totalPosts) {
    const query = gql`
		query LatestPostsQuery($totalPosts: Int!) {
			posts(first: $totalPosts) {
				edges {
					node {
						id
						uri
						title
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;
    const { data: { posts: { edges } }, headers } = await client.rawRequest(query, {
        totalPosts
    });
    const posts = edges.map(({ node })=>node);
    return {
        posts,
        headers
    };
}
async function getPostByUri(uri) {
    const uriString = `${uri.join("/")}`;
    const query = gql`
		query PostBySlugQuery($uriString: ID!) {
			post(id: $uriString, idType: URI) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;
    const { data: { post }, headers } = await client.rawRequest(query, {
        uriString
    });
    return {
        post,
        headers
    };
}
async function getPostPreview(id) {
    const credentials = (0,_WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .getAuthCredentials */ .WA)();
    _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.setHeaders({
        Authorization: `Basic ${credentials}`
    });
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
		query PostPreviewQuery($id: ID!) {
			post(id: $id, idType: DATABASE_ID, asPreview: true) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;
    const { post } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.request(query, {
        id
    });
    return {
        post
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lp: () => (/* binding */ client),
/* harmony export */   WA: () => (/* binding */ getAuthCredentials)
/* harmony export */ });
/* unused harmony export paginationClient */
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__]);
_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = new _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.GraphQLClientFactory("https://dev-esg-social-capital.pantheonsite.io/wp/graphql", {
    method: "GET"
}).create();
const paginationClient = new _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.GraphQLClientFactory("https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql", {
    method: "GET"
}).create();
const getAuthCredentials = ()=>{
    const credentials = `${process.env.WP_APPLICATION_USERNAME}:${process.env.WP_APPLICATION_PASSWORD}`;
    const encodedCredentials = Buffer.from(credentials, "binary").toString("base64");
    return encodedCredentials;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2306);
/* harmony import */ var _lib_Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_Posts__WEBPACK_IMPORTED_MODULE_0__, _lib_Pages__WEBPACK_IMPORTED_MODULE_1__]);
([_lib_Posts__WEBPACK_IMPORTED_MODULE_0__, _lib_Pages__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const PREVIEW_SECRET_DOES_NOT_MATCH = {
    error: "Preview secret does not match",
    message: "Check that your PREVIEW_SECRET environment variable matches the preview secret generated when creating the preview site in WordPress."
};
const CONTENT_NOT_FOUND = {
    error: "Requested preview path does not exist",
    message: "Make sure the content is published"
};
const preview = async (req, res)=>{
    const { secret, uri, id, content_type, test } = req.query;
    if (test) {
        if (secret !== process.env.PREVIEW_SECRET) {
            return res.status(401).json(PREVIEW_SECRET_DOES_NOT_MATCH);
        }
        try {
            if (content_type === "post") {
                const { post } = await (0,_lib_Posts__WEBPACK_IMPORTED_MODULE_0__/* .getPostPreview */ .pV)(id);
                if (!post) {
                    return res.status(404).json(CONTENT_NOT_FOUND);
                }
            }
            if (content_type === "page") {
                const { page } = await (0,_lib_Pages__WEBPACK_IMPORTED_MODULE_1__/* .getPagePreview */ .Nt)(id);
                if (!page) {
                    return res.status(404).json(CONTENT_NOT_FOUND);
                }
            }
            return res.status(200).json({
                message: `Preview successful for ${uri}`
            });
        } catch (error) {
            return res.status(404).json(CONTENT_NOT_FOUND);
        }
    }
    if (!secret || !uri || !id || !content_type) {
        return res.redirect("/500");
    }
    if (secret !== process.env.PREVIEW_SECRET) {
        return res.redirect("/500");
    }
    if (content_type !== "post" && content_type !== "page") {
        return res.redirect("/500");
    }
    if (content_type === "post") {
        const { post } = await (0,_lib_Posts__WEBPACK_IMPORTED_MODULE_0__/* .getPostPreview */ .pV)(id);
        if (!post) {
            return res.redirect("/500");
        }
        res.setPreviewData({
            key: id
        });
    }
    if (content_type === "page") {
        const { page } = await (0,_lib_Pages__WEBPACK_IMPORTED_MODULE_1__/* .getPagePreview */ .Nt)(id);
        if (!page) {
            return res.redirect("/500");
        }
        res.setPreviewData({
            key: id
        });
    }
    res.redirect(`/${content_type}s/${uri}?timestamp=${Date.now()}`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4917));
module.exports = __webpack_exports__;

})();