require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ },
/* 1 */
/***/ function(module, exports) {

var env = process.env.__ENV;

console.log('env:', process.env.__ENV);

module.exports = {
  secret: 'nuxt-koa-mongoose-pwa',
  app: {
    domain: env === 'production' ? 'https://bd.7ipr.com' : env === 'uat' ? 'https://bduat.7ipr.com' : 'http://localhost:3008',
    host: '0.0.0.0',
    port: 3008
  },
  admin: {
    role: '超级管理员',
    username: 'paddy',
    password: 'paddy',
    name: 'paddy',
    email: 'niepeng@7ipr.com'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'ipms',
    port: 25015,
    username: 'paddy',
    password: 'paddy123'
  },
  SMTPConfig: {
    user: 'niepeng@7ipr.com',
    pass: 'Yes18926990080'
  }
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("web-base");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var webpack = __webpack_require__(18);
var config = __webpack_require__(1);
module.exports = {
  head: {
    title: '大数据2.0',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }, { name: 'renderer', content: 'webkit' }, { name: 'author', content: 'paddy' }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { hid: 'description', name: 'description', content: '七弦琴国家知识产权运营平台拥有数量众多的知识产权领域专家，善于为企业解决包括但不限于各类知识产权难题，协助企业建立完善的知识产权布局。' }, { hid: 'keywords', name: 'keywords', content: '珠海，知识产权，贯标，企业政府补贴，辅导，专利，商标，七弦琴' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'apple-touch-icon', href: '/icon.png' }, { rel: 'stylesheet', href: '//at.alicdn.com/t/font_252407_v6e5keil5ep.css' }],
    script: [{ src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }, { src: '/gt.js' }]
  },
  css: ['~/scss/main.scss'],
  loading: false,
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/components', '~/plugins/filters', '~/plugins/directives', '~/plugins/axios', '~/plugins/vue-moment', '~/plugins/element-ui'],
  router: {
    middleware: ['route']
  },
  build: {
    analyze: process.env.__ENV === 'development' ? true : false,
    extractCSS: true,
    cssSourceMap: false,
    maxChunkSize: 100000,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 15 // 转换基本单位
    //   })
    // ],
    plugins: [new webpack.ProvidePlugin({
      // '_': 'lodash'
    })],
    extend: function extend(config, ctx) {
      // console.log('webpack config:', config)
      // if (ctx.isClient) {
      //   config.entry['polyfill'] = ['babel-polyfill']
      // 添加 alias 配置
      // Object.assign(config.resolve.alias, {
      //   'utils': path.resolve(__dirname, 'utils')
      // })
      // }
    }
  },
  env: {
    __ENV: process.env.__ENV
  },
  axios: {
    // baseURL: `${config.app.domain}`,
    // credentials: true,
    proxy: true,
    debug: process.env.__ENV == 'development' ? true : false
  },
  proxy: {
    '/api1/': { target: 'http://di2.7ipr.com', pathRewrite: { '^/api1/': '' } },
    '/api2/': { target: 'http://114.251.8.193', pathRewrite: { '^/api2/': '' } }
  },
  manifest: {
    name: 'nuxt-cms',
    description: 'A pwa program',
    theme_color: '#618cb9'
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_handlers__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_web_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vm__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vm__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

var appSecret = 'pc498uoxYSOtl8bQAhBRTcgE1tmvYc';
var url = 'http://partner-api.quandashi.com/qds/api';
var commonData = {
  appKey: 'quandashi6238833432',
  signMethod: 'md5',
  v: '1.0',
  executor: '113.106.110.194',
  ip: '113.106.110.194'
};

router.get('/getPatentHtml', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("request:", ctx.query);
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_superagent___default.a.get(ctx.query.url);

          case 3:
            res = _context.sent;

            console.log("resGet:", res.text);
            ctx.body = res.text;

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ exports["a"] = router;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("@koa/cors");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__);
/* unused harmony export sleep */
/* unused harmony export body */
/* unused harmony export error */
/* unused harmony export filePath */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var sleep = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(time) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve();
              }, time);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sleep(_x) {
    return _ref.apply(this, arguments);
  };
}();

function body(ctx, body) {
  return ctx.body = body;
}
function error(ctx, error) {
  console.error(error);
  return ctx.body = {
    ok: false,
    message: error.message
  };
}

function filePath(ctx, uri) {
  var file = ctx.request.files.file;

  var fileName = void 0,
      filePath = void 0;
  if (file.length > 0) {
    filePath = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = file[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;

        fileName = F.getFileName(f.path);
        var fPath = domain + "/uploads" + uri + "/" + fileName;
        filePath.push({ name: f.name, url: fPath });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return ctx.body = {
      success: true,
      data: filePath
    };
  } else {
    fileName = F.getFileName(file.path);
    filePath = domain + "/uploads" + uri + "/" + fileName;

    return ctx.body = {
      success: true,
      data: {
        name: file.name,
        url: filePath
      }
    };
  }
}

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("md5");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("superagent");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("vm");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_session__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__koa_cors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_web_base__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_web_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_web_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_api__ = __webpack_require__(5);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, router, host, port, nuxtConfig, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            router = new __WEBPACK_IMPORTED_MODULE_4_koa_router___default.a();


            app.keys = [config.secret];

            host = process.env.HOST || config.app.host;
            port = process.env.PORT || config.app.port;

            // static

            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_static___default()(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, 'public')));

            // session
            app.use(__WEBPACK_IMPORTED_MODULE_6_koa_session___default()(serverConfig.session, app));

            //cors
            // app.use(cors(serverConfig.cors))

            //routes
            router.use('/api', __WEBPACK_IMPORTED_MODULE_5_koa_body___default()(), __WEBPACK_IMPORTED_MODULE_10__routes_api__["a" /* default */].routes());

            app.use(router.routes());
            app.use(router.allowedMethods());

            // Import and Set Nuxt.js options
            nuxtConfig = __webpack_require__(4);

            nuxtConfig.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](nuxtConfig);

            // Build in development

            if (!nuxtConfig.dev) {
              _context2.next = 17;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 17;
            return builder.build();

          case 17:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_mingtaoli_dashuju_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            promise.then(resolve).catch(reject); // nuxt.render passes a rejected promise into callback on error.
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port);

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }













var config = __webpack_require__(1);
var serverConfig = {
  session: {
    key: 'koa:sess',
    maxAge: __WEBPACK_IMPORTED_MODULE_9_web_base___default.a.date.countMillisecond(10, 'minute'),
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  },
  cors: {
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: '' + config.app.domain //前端带cookie访问需要设置跨域源
  }
};


start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map