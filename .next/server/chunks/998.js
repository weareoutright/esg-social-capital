"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 4998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $c: () => (/* binding */ getLatestPages),
/* harmony export */   Cg: () => (/* binding */ getPageByUri),
/* harmony export */   Nt: () => (/* binding */ getPagePreview)
/* harmony export */ });
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
/* harmony import */ var _WordPressClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__]);
([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getLatestPages(totalPages) {
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
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
    const { data: { pages: { edges } }, headers } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.rawRequest(query, {
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
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
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
    const { data: { page }, headers } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.rawRequest(query, {
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

/***/ })

};
;