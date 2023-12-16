(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 2389:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar__container": "ErrorPage_navbar__container__5srSA",
	"error-page": "ErrorPage_error-page__zLwfk",
	"error-text": "ErrorPage_error-text__hcUmc"
};


/***/ }),

/***/ 395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@bloomreach/spa-sdk"
var spa_sdk_ = __webpack_require__(8655);
// EXTERNAL MODULE: ./components/index.ts + 68 modules
var components = __webpack_require__(5388);
// EXTERNAL MODULE: ./pages/ErrorPage.module.scss
var ErrorPage_module = __webpack_require__(2389);
var ErrorPage_module_default = /*#__PURE__*/__webpack_require__.n(ErrorPage_module);
;// CONCATENATED MODULE: ./pages/error.gif
/* harmony default export */ const error = ({"src":"/_next/static/media/error.ccd52f70.gif","height":253,"width":380});
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(9384);
// EXTERNAL MODULE: ./components/App.tsx + 3 modules
var App = __webpack_require__(4057);
;// CONCATENATED MODULE: ./pages/_error.tsx









var ErrorCode;
(function(ErrorCode) {
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["GENERAL_ERROR"] = "GENERAL_ERROR";
})(ErrorCode || (ErrorCode = {}));
const ERROR_PAGE_PATH_MAP = {
    [ErrorCode.NOT_FOUND]: "/404",
    [ErrorCode.INTERNAL_SERVER_ERROR]: "/500",
    [ErrorCode.GENERAL_ERROR]: "/error"
};
const Error = ({ configuration , page , commerceConfig  })=>{
    if (configuration && page) {
        return /*#__PURE__*/ jsx_runtime_.jsx(App/* App */.g, {
            configuration: configuration,
            page: page,
            commerceConfig: commerceConfig
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
                    bg: "light",
                    expand: "lg",
                    sticky: "top",
                    className: "py-2 py-lg-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                        className: "justify-content-start px-sm-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Navbar.Brand, {
                            as: components/* Link */.BY,
                            href: "/",
                            title: "Pacific Nuts & Bolts",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    alt: "Pacific Nuts & Bolts",
                                    src: "/logo.png",
                                    srcSet: "/logo.png 1x, /logo@2x.png 2x",
                                    height: "30",
                                    className: "d-none d-sm-block"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    alt: "Pacific Nuts & Bolts",
                                    src: "/logo-sm.png",
                                    srcSet: "/logo-sm.png 1x, /logo-sm@2x.png 2x",
                                    height: "30",
                                    className: "d-block d-sm-none"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                as: "section",
                fluid: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                as: "section",
                className: "flex-fill pt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    className: "flex-lg-nowrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        xs: "auto",
                        className: "flex-fill",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            className: (ErrorPage_module_default())["error-page"],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Critical error"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (ErrorPage_module_default())["error-text"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Something is not working properly. Try again later."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                        src: error.src,
                                        alt: "Critical error"
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                as: "section",
                fluid: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-secondary text-light py-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "9",
                                xl: "10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "3",
                                xl: "2",
                                className: "text-center text-lg-right py-lg-2",
                                children: "\xa9 Bloomreach 2021"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
Error.getInitialProps = async ({ req: request , res: response , err , asPath  })=>{
    let errorCode;
    if (err) {
        if (err.isAxiosError) {
            const axiosError = err;
            errorCode = axiosError.response?.status === 404 ? ErrorCode.NOT_FOUND : ErrorCode.INTERNAL_SERVER_ERROR;
        } else if (err instanceof components/* ProductNotFoundError */.JT) {
            errorCode = ErrorCode.NOT_FOUND;
        } else {
            errorCode = ErrorCode.GENERAL_ERROR;
        }
    } else {
        errorCode = response?.statusCode === 404 ? ErrorCode.NOT_FOUND : ErrorCode.GENERAL_ERROR;
    }
    let search = asPath?.split("?")[1] ?? "";
    if (search) {
        search = `?${search}`;
    }
    const path = `${ERROR_PAGE_PATH_MAP[errorCode] ?? ERROR_PAGE_PATH_MAP[ErrorCode.GENERAL_ERROR]}${search}`;
    const configuration = (0,utils/* buildConfiguration */._7)(path);
    // console.log('[_error]: path=', path);
    try {
        const page = await (0,spa_sdk_.initialize)({
            ...configuration,
            request,
            httpClient: (external_axios_default())
        });
        const pageJson = page.toJSON();
        const commerceConfig = (0,utils/* loadCommerceConfig */.S_)(pageJson);
        return {
            configuration,
            page: page.toJSON(),
            commerceConfig
        };
    } catch (e) {
        return {};
    }
};
/* harmony default export */ const _error = (Error);


/***/ }),

/***/ 4432:
/***/ ((module) => {

"use strict";
module.exports = require("@bloomreach/connector-components-react");

/***/ }),

/***/ 803:
/***/ ((module) => {

"use strict";
module.exports = require("@bloomreach/react-sdk");

/***/ }),

/***/ 2640:
/***/ ((module) => {

"use strict";
module.exports = require("@bloomreach/segmentation");

/***/ }),

/***/ 8655:
/***/ ((module) => {

"use strict";
module.exports = require("@bloomreach/spa-sdk");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2433:
/***/ ((module) => {

"use strict";
module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 9779:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie-consent");

/***/ }),

/***/ 8924:
/***/ ((module) => {

"use strict";
module.exports = require("react-player");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6109:
/***/ ((module) => {

"use strict";
module.exports = require("sanitize-html");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,57], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();