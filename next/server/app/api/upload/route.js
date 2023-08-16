"use strict";
(() => {
var exports = {};
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 83646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/upload/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(91534);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
;// CONCATENATED MODULE: ./app/api/upload/route.ts




function sanitizeFilename(filename) {
    return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
}
async function POST(request, res) {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file) {
        return next_response/* default */.Z.json({
            error: "File blob is required."
        }, {
            status: 400
        });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const pathDist = "/var/www/html/images";
    const relativeUploadDir = `${date_fns.format(Date.now(), "dd-MM-Y")}`;
    const uploadDir = (0,external_path_.join)(pathDist, relativeUploadDir);
    try {
        await (0,promises_namespaceObject.stat)(uploadDir);
    } catch (e) {
        if (e.code === "ENOENT") {
            await (0,promises_namespaceObject.mkdir)(uploadDir, {
                recursive: true
            });
        } else {
            console.error("Error while trying to create directory when uploading a file\n", e);
            return next_response/* default */.Z.json({
                error: "Something went wrong."
            }, {
                status: 500
            });
        }
    }
    try {
        const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
        const fileExtension = (0,external_path_.extname)(file.name);
        const originalFilename = file.name.replace(/\.[^/.]+$/, "");
        const sanitizedFilename = sanitizeFilename(originalFilename);
        const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
        console.log("filename : " + filename);
        await (0,promises_namespaceObject.writeFile)(`${uploadDir}/${filename}`, buffer);
        const finalFilePath = "http://localhost:3000/images/" + `${relativeUploadDir}/${filename}`;
        return next_response/* default */.Z.json({
            done: "ok",
            name: `/images/${relativeUploadDir}/${filename}`,
            httpfilepath: finalFilePath
        }, {
            status: 200
        });
    } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return next_response/* default */.Z.json({
            error: "Something went wrong."
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fupload%2Froute&name=app%2Fapi%2Fupload%2Froute&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=C%3A%5CUsers%5CVadimus%5CDesktop%5Cimobile-back%5Capp&appPaths=%2Fapi%2Fupload%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/upload/route","pathname":"/api/upload","filename":"route","bundlePath":"app/api/upload/route"},"resolvedPagePath":"C:\\Users\\Vadimus\\Desktop\\imobile-back\\app\\api\\upload\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/upload/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981,917,976,867], () => (__webpack_exec__(83646)));
module.exports = __webpack_exports__;

})();