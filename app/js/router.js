webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/load.gif";

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(12)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./register.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./register.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(34),
  /* scopeId */
  "data-v-db614c5c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/lefubao_h5/static/components/forget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] forget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db614c5c", Component.options)
  } else {
    hotAPI.reload("data-v-db614c5c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/lefubao_h5/static/components/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f4dd7d8", Component.options)
  } else {
    hotAPI.reload("data-v-7f4dd7d8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/lefubao_h5/static/components/public/lfb_topBar/lfb_topBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lfb_topBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9cf3ad64", Component.options)
  } else {
    hotAPI.reload("data-v-9cf3ad64", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  "data-v-7c789c48",
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/lefubao_h5/static/components/register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c789c48", Component.options)
  } else {
    hotAPI.reload("data-v-7c789c48", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {};
	},
	mounted: function mounted() {
		console.log(this.$route.query);
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".loadingBg {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  left: 0;\n  top: 0;\n}\n.loading {\n  width: 110px;\n  height: 30px;\n  padding-top: 70px;\n  background: url(" + __webpack_require__(5) + ") rgba(0, 0, 0, 0.8) center 30% no-repeat;\n  background-size: 35px;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  border-radius: 10px;\n  color: #fff;\n  font-size: 13px;\n  text-align: center;\n}\n.lfb {\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow-scrolling: touch;\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n}\n.tips {\n  width: 100%;\n  height: 0.933333rem;\n  position: fixed;\n  top: -0.933333rem;\n  left: 0;\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n  line-height: 0.933333rem;\n  z-index: 9999;\n}\n.tips_error {\n  background: #e60012;\n}\n.tips_success {\n  background: #04be02;\n}\n.contain {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 50px;\n}\n.contain .register_table {\n  width: 100%;\n  background: #f2f2f2;\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.contain .register_table table {\n  width: 94%;\n  margin: 0 auto;\n}\n.contain .register_table table tr:last-child td {\n  border-bottom: none;\n}\n.contain .register_table table tr td {\n  width: 100%;\n  height: 48px;\n  border-bottom: 1px solid #e5e5e5;\n  box-sizing: border-box;\n}\n.contain .register_table table tr td input {\n  width: 96%;\n  height: 100%;\n  font-size: 15px;\n  color: #333;\n}\n.contain .subBtn {\n  width: 100%;\n}\n.contain .subBtn button {\n  width: 100%;\n  height: 48px;\n  background: #FF5865;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n  line-height: 48px;\n  border-radius: 5px;\n}\n.contain .subBtn p {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.contain .subBtn p a {\n  font-size: 15px;\n  color: #333;\n  margin-top: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.login[data-v-7c789c48] {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2[data-v-7c789c48] {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.login {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2 {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 73px;\n}\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.lfb_topBar {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #333;\n  font-size: 18px;\n  border-bottom: 1px solid #B2B2B2;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.lfb_topBar .goBack {\n  font-size: 17px;\n  position: absolute;\n  left: 0.4rem;\n  top: 0;\n  height: 100%;\n  line-height: 50px;\n  background: url(" + __webpack_require__(30) + ") no-repeat left center;\n  background-size: 11px 12px;\n  padding-left: 17px;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.login[data-v-db614c5c] {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2[data-v-db614c5c] {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/search_left.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('h2', [_vm._v("欢迎加入乐富宝")]), _vm._v(" "), _c('div', {
    staticClass: "register_table"
  }, [_c('table', [_c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入您的手机号",
      "maxlength": "11"
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入验证码",
      "maxlength": "6"
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入密码"
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请再次输入密码"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "subBtn"
  }, [_c('button', [_vm._v("注册")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c789c48", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('h2', [_vm._v("欢迎回到乐富宝")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "subBtn"
  }, [_c('button', [_vm._v("登录")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": {
        path: '/register',
        query: {
          'tid': '123456',
          'uid': '222222'
        }
      }
    }
  }, [_vm._v("注册账号")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/forget"
    }
  }, [_vm._v("忘记密码？")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register_table"
  }, [_c('table', [_c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入您的手机号",
      "maxlength": "11"
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入密码"
    }
  })])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f4dd7d8", module.exports)
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lfb_topBar"
  }, [_c('div', {
    staticClass: "goBack",
    attrs: {
      "onclick": "javascript:history.go(-1)"
    }
  }, [_vm._v("返回")]), _vm._v("\n\t乐富宝登录（路由演示）\n")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9cf3ad64", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "register_table"
  }, [_c('table', [_c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入您的手机号",
      "maxlength": "11"
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    attrs: {
      "type": "tel",
      "placeholder": "请输入验证码",
      "maxlength": "6"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "subBtn"
  }, [_c('button', [_vm._v("下一步")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-db614c5c", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("24281ca7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7c789c48&scoped=true!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7c789c48&scoped=true!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("21e8c44b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f4dd7d8!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f4dd7d8!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("c8e45b86", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9cf3ad64!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lfb_topBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9cf3ad64!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lfb_topBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("66bfbf58", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db614c5c&scoped=true!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forget.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-db614c5c&scoped=true!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forget.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(21);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _lfb_topBar = __webpack_require__(18);

var _lfb_topBar2 = _interopRequireDefault(_lfb_topBar);

var _login = __webpack_require__(17);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(19);

var _register2 = _interopRequireDefault(_register);

var _forget = __webpack_require__(16);

var _forget2 = _interopRequireDefault(_forget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: _login2.default,
  meta: {
    title: "登录"
  }
}, {
  path: '/register',
  component: _register2.default,
  meta: {
    title: "注册"
  }
}, {
  path: '/forget',
  component: _forget2.default,
  meta: {
    title: "忘记密码"
  }
}];

var router = new _vueRouter2.default({
  routes: routes
});

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  next();
});

var vm = new _vue2.default({
  el: "#wrap",
  components: {
    lfbTopbar: _lfb_topBar2.default
  },
  router: router
});

/***/ })
],[49]);