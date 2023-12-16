"use strict";
(() => {
var exports = {};
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _route_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
// EXTERNAL MODULE: external "@bloomreach/spa-sdk"
var spa_sdk_ = __webpack_require__(8655);
// EXTERNAL MODULE: external "@bloomreach/connector-components-react"
var connector_components_react_ = __webpack_require__(4432);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(9384);
// EXTERNAL MODULE: ./components/App.tsx + 3 modules
var App = __webpack_require__(4057);
;// CONCATENATED MODULE: ./pages/[[...route]].tsx




// import { relevance } from '@bloomreach/spa-sdk/lib/express';



let commerceClientFactory;
const Index = ({ configuration , page , commerceConfig , [connector_components_react_.APOLLO_STATE_PROP_NAME]: apolloState , cookies ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(App/* App */.g, {
        configuration: configuration,
        page: page,
        commerceConfig: commerceConfig,
        apolloState: apolloState,
        commerceClientFactory: commerceClientFactory,
        cookies: cookies
    });
};
Index.getInitialProps = async ({ req: request , res: response , asPath: path , query  })=>{
    // console.log('[getServerSideProps]: path=', path);
    // console.log('[getServerSideProps]: query=', query);
    const configuration = (0,utils/* buildConfiguration */._7)(path ?? "/");
    // console.log('[getServerSideProps]: configuration=', configuration);
    const page = await (0,spa_sdk_.initialize)({
        ...configuration,
        request,
        httpClient: (external_axios_default())
    });
    const pageJson = page.toJSON();
    // console.log('[getServerSideProps]: page=', pageJson);
    const commerceConfig = (0,utils/* loadCommerceConfig */.S_)(pageJson, query);
    // console.log('[getServerSideProps]: commerceConfig=', commerceConfig);
    const props = {
        configuration,
        commerceConfig,
        page: pageJson
    };
    if (!request || !response) {
        return props;
    }
    // relevance(request, response);
    const cookies = external_cookie_default().parse(request.headers.cookie ?? "");
    props.cookies = cookies;
    const { graphqlServiceUrl , connector , brAccountName: accountEnvId  } = commerceConfig;
    const defaultRequestHeaders = undefined;
    const defaultAnonymousCredentials = undefined;
    // For SSG and SSR always create a new Apollo Client
    commerceClientFactory = new connector_components_react_.CommerceApiClientFactory(graphqlServiceUrl, connector, accountEnvId, defaultRequestHeaders, defaultAnonymousCredentials, true);
    // Apollo client will go thru all components on the page and perform queries necessary.
    // The results will be stored in the cache for client-side rendering.
    // const pageProps = { pageProps: { ...props } };
    // const apolloData = await commerceClientFactory.getDataFromTree(<MyApp.AppTree {...pageProps} />);
    // console.log('[getServerSideProps]: apolloData=', apolloData);
    // props = { ...props, ...apolloData.stateProp };
    // eslint-disable-next-line max-len
    // Hack needed to avoid JSON-Serialization validation error from Next.js https://github.com/zeit/next.js/discussions/11209
    // >>> Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value all together.
    if (false) {}
    return props;
};
/* harmony default export */ const _route_ = (Index);


/***/ }),

/***/ 4432:
/***/ ((module) => {

module.exports = require("@bloomreach/connector-components-react");

/***/ }),

/***/ 803:
/***/ ((module) => {

module.exports = require("@bloomreach/react-sdk");

/***/ }),

/***/ 2640:
/***/ ((module) => {

module.exports = require("@bloomreach/segmentation");

/***/ }),

/***/ 8655:
/***/ ((module) => {

module.exports = require("@bloomreach/spa-sdk");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 5515:
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ 9779:
/***/ ((module) => {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6109:
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,57], () => (__webpack_exec__(6198)));
module.exports = __webpack_exports__;

})();