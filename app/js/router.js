webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(12)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/postcss-loader/index.js!./register.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/postcss-loader/index.js!./register.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(29),
  /* scopeId */
  "data-v-db614c5c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Desktop/lefubao_h5/static/components/forget.vue"
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Desktop/lefubao_h5/static/components/login.vue"
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
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Desktop/lefubao_h5/static/components/public/lfb_topBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lfb_topBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-270921f4", Component.options)
  } else {
    hotAPI.reload("data-v-270921f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  "data-v-7c789c48",
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Desktop/lefubao_h5/static/components/register.vue"
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
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
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".contain {\n  width: 100%;\n  overflow: hidden;\n  margin-top: 50px;\n}\n.contain .register_table {\n  width: 100%;\n  background: #f2f2f2;\n  border-radius: 5px;\n  margin-bottom: 30px;\n}\n.contain .register_table table {\n  width: 94%;\n  margin: 0 auto;\n}\n.contain .register_table table tr:last-child td {\n  border-bottom: none;\n}\n.contain .register_table table tr td {\n  width: 100%;\n  height: 48px;\n  border-bottom: 1px solid #e5e5e5;\n  box-sizing: border-box;\n}\n.contain .register_table table tr td input {\n  width: 96%;\n  height: 100%;\n  font-size: 15px;\n  color: #333;\n}\n.contain .subBtn {\n  width: 100%;\n}\n.contain .subBtn button {\n  width: 100%;\n  height: 48px;\n  background: #FF5865;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n  line-height: 48px;\n  border-radius: 5px;\n}\n.contain .subBtn p {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n.contain .subBtn p a {\n  font-size: 15px;\n  color: #333;\n  margin-top: 16px;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.lfb_topBar {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #333;\n  font-size: 18px;\n  border-bottom: 1px solid #B2B2B2;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.lfb_topBar .goBack {\n  font-size: 17px;\n  position: absolute;\n  left: 0.4rem;\n  top: 0;\n  height: 100%;\n  line-height: 50px;\n  background: url(" + __webpack_require__(24) + ") no-repeat left center;\n  background-size: 11px 12px;\n  padding-left: 17px;\n}\n", ""]);

// exports


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.login[data-v-7c789c48] {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2[data-v-7c789c48] {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.login {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2 {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 73px;\n}\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.login[data-v-db614c5c] {\n  width: 92%;\n  margin: 0 auto;\n  overflow: hidden;\n  padding-top: 26px;\n}\n.login h2[data-v-db614c5c] {\n  width: 100%;\n  display: block;\n  text-align: center;\n  font-size: 21px;\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/search_left.ba1c5ab7.png";

/***/ }),
/* 25 */
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
     require("vue-hot-reload-api").rerender("data-v-270921f4", module.exports)
  }
}

/***/ }),
/* 26 */,
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8bad85c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-270921f4!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lfb_topBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-270921f4!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lfb_topBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(14);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _lfb_topBar = __webpack_require__(10);

var _lfb_topBar2 = _interopRequireDefault(_lfb_topBar);

var _login = __webpack_require__(8);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(11);

var _register2 = _interopRequireDefault(_register);

var _forget = __webpack_require__(7);

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
],[43]);