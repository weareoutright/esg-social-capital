"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 3527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getFooterMenu)
/* harmony export */ });
/* harmony import */ var _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6373);
/* harmony import */ var _WordPressClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__]);
([_pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__, _WordPressClient__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getFooterMenu() {
    const query = _pantheon_systems_wordpress_kit__WEBPACK_IMPORTED_MODULE_0__.gql`
		query FooterMenuQuery {
			menu(idType: NAME, id: "Example Menu") {
				menuItems {
					edges {
						node {
							id
							path
							label
						}
					}
				}
			}
		}
	`;
    try {
        const { data: { menu }, headers } = await _WordPressClient__WEBPACK_IMPORTED_MODULE_1__/* .client */ .Lp.rawRequest(query);
        if (!menu) {
            throw new Error("No footer menu data available. Try customizing your query.");
        }
        const menuItems = menu?.menuItems?.edges?.map(({ node })=>node);
        return {
            menuItems,
            menuItemHeaders: headers
        };
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   De: () => (/* binding */ paginationClient),
/* harmony export */   Lp: () => (/* binding */ client),
/* harmony export */   WA: () => (/* binding */ getAuthCredentials)
/* harmony export */ });
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

/***/ })

};
;