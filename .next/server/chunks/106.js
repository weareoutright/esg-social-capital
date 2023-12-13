"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 2106:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ getPostByUri),
/* harmony export */   el: () => (/* binding */ getLatestPosts),
/* harmony export */   pV: () => (/* binding */ getPostPreview)
/* harmony export */ });
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
/* harmony import */ var _WordPressClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__]);
([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getLatestPosts(totalPosts) {
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
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
    const { data: { posts: { edges } }, headers } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.rawRequest(query, {
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
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
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
    const { data: { post }, headers } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.rawRequest(query, {
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

/***/ })

};
;