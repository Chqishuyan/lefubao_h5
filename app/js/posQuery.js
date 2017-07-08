webpackJsonp([4],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(17)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/postcss-loader/index.js!./posQuery.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/postcss-loader/index.js!./posQuery.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".posQuery {\n  width: 100%;\n}\n.posQuery ul li {\n  padding: 15px 0;\n  background: #fff;\n  margin-top: 10px;\n  width: 96%;\n  padding-left: 4%;\n  position: relative;\n}\n.posQuery ul li p {\n  font-size: 14px;\n  color: #333;\n}\n.posQuery ul li span {\n  color: #999;\n  display: block;\n  margin-top: 3px;\n  font-size: 12px;\n}\n.posQuery ul li a {\n  background: #ff5865;\n  border-radius: 5px;\n  padding: 0 5px;\n  height: 28px;\n  line-height: 28px;\n  color: #fff;\n  font-size: 12px;\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _common = __webpack_require__(6);

var base = _interopRequireWildcard(_common);

var _comfirmBox = __webpack_require__(61);

var _comfirmBox2 = _interopRequireDefault(_comfirmBox);

__webpack_require__(10);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vm = new _vue2.default({
    el: "#root",
    data: {
        loginKey: base.getUrlParam("LOGINKEY"),
        posList: [],
        comfirm_show: false
    },
    mounted: function mounted() {

        base.useAjax({
            url: "https://v.lefu8.com/alliance-front/pos/findPosList",
            type: "post",
            data: {
                loginKey: this.loginKey,
                pageNum: 1,
                posSn: "",
                status: "",
                sign: base.useMd5([{ loginKey: this.loginKey }, { pageNum: 1 }, { posSn: "" }, { status: "" }])
            },
            success: function success(data) {
                console.log(data);
                data.data.map(function (el, index) {
                    vm.posList.push(el);
                });
            }
        });
    },

    methods: {
        comfirm_toggle: function comfirm_toggle() {
            this.comfirm_show = !this.comfirm_show;
            $(document).bind('touchmove', function (e) {
                e.preventDefault();
            });
        },
        comfirm_success: function comfirm_success() {
            this.comfirm_show = false;
            // $(document).unbind('touchmove');
            alert("执行成功的回调");
        }
    },
    components: {
        comfirmBox: _comfirmBox2.default
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrlParam = exports.tips = exports.clearCookie = exports.getCookie = exports.setCookie = exports.useMd5 = exports.loading = exports.useAjax = undefined;

var _md = __webpack_require__(44);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//封装ajax；
var useAjax = exports.useAjax = function useAjax(options) {

    var defaults = {
        url: '',
        type: 'POST',
        overtime: "30000",
        dataType: 'json',
        data: {},
        success: null
    };

    options = $.extend({}, defaults, options);

    jQuery.ajax({
        url: options.url,
        type: options.type,
        timeout: options.overtime,
        dataType: options.dataType,
        data: options.data,
        beforeSend: function beforeSend() {
            loading("show");
        },
        complete: function complete(xhr, textStatus) {
            if (textStatus == 'timeout') {
                tips({
                    content: "请求超时，请稍后重试！"
                });
                loading("hide");
            }
        },
        success: function success(data) {

            loading("hide");

            if (!data) return;

            if (data.code == "0000") {
                if (typeof options.success == "function") {
                    options.success(data);
                }
            } else {
                tips({
                    content: data.msg
                });
                if (typeof errorCall == "function") {
                    errorCall(data);
                }
            }
        },
        error: function error() {
            loading("hide");
            tips({
                content: "服务器请求失败，请稍后重试！"
            });
        }
    });
};

var loading = exports.loading = function loading(state) {
    if (state == "show") {
        $(document).bind("touchmove", function (e) {
            e.preventDefault();
        });

        $(".loadingBg").remove();
        $("body").append("<div class='loadingBg'><div class='loading'>请稍后</div></div>");
    } else if (state == "hide") {
        $(".loadingBg").remove();
        $(document).unbind("touchmove");
    }
};

//md5添加签名标识
var useMd5 = exports.useMd5 = function useMd5(array) {
    var signKey = '86eb1492-6e08-481d-b377-678acd5c3de5';
    var resultString = "";

    if (array.length > 0) {

        var parmas = [];
        var resultArray = [];

        for (var i = 0; i < array.length; i++) {
            for (var key in array[i]) {
                parmas.push(key);
            }
        }

        for (var _i = 0; _i < parmas.sort(function (a, b) {
            if (a.toString().toLowerCase() > b.toString().toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        }).length; _i++) {
            for (var j = 0; j < array.length; j++) {
                for (var _key in array[j]) {
                    if (parmas[_i] == _key) {
                        resultArray.push(array[j]);
                    }
                }
            }
        }

        resultArray.map(function (el, index) {
            for (var _key2 in el) {
                resultString += _key2 + "=" + el[_key2];
            }
        });

        //console.log(resultString)
    }

    return (0, _md2.default)(resultString + signKey);
};

var setCookie = exports.setCookie = function setCookie(name, value, Days) {
    if (Days === null || Days === '') {
        Days = 30;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString();
};

var getCookie = exports.getCookie = function getCookie(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};

var clearCookie = exports.clearCookie = function clearCookie(name) {
    setCookie(name, '', -1);
};

var tips = exports.tips = function tips(options) {
    var defaults = {
        "content": '请输入内容',
        'duration': 2500,
        'type': 'error'
    };

    options = $.extend(true, defaults, options);

    var timer = null;
    $('.weui_toptips').remove();
    var tips = $(".tips").remove();
    tips = $('<div class="tips tips_' + options.type + '">' + options.content + '</div>').appendTo(document.body);
    tips.stop(true, true).animate({
        'top': 0
    }, 300);

    clearTimeout(timer);
    timer = setTimeout(function () {
        tips.stop(true, true).animate({
            'top': '-0.933333rem'
        }, 300, function () {
            tips.remove();
        });
    }, options.duration);
};

var getUrlParam = exports.getUrlParam = function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substring(1).match(reg); //匹配目标参数
    if (r !== null) return decodeURI(r[2]);
    return ''; //返回参数值
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/lefubao_h5/static/components/public/comfirmBox/comfirmBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] comfirmBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32a0c4ee", Component.options)
  } else {
    hotAPI.reload("data-v-32a0c4ee", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
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


exports.default = {
	data: function data() {
		return {
			isShow: false
		};
	},

	props: {
		comfirm_show: false
	},
	methods: {
		closeBox: function closeBox() {
			this.isShow = false;
			this.$emit("comfirm_toggle", this.isShow);
			this.addDrag();
		},
		comfirmBox: function comfirmBox() {
			this.isShow = false;
			this.$emit("comfirm_success", this.isShow);
			this.addDrag();
		},
		addDrag: function addDrag() {
			$(document).unbind('touchmove');
		}
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.lfb_vue_comfirmBg {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-transition-duration: .3s;\n  transition-duration: .3s;\n}\n.lfb_vue_comfirmBox {\n  width: 88%;\n  position: fixed;\n  background: #fff;\n  border-radius: 5px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -80%);\n  transform: translate(-50%, -80%);\n  z-index: 300;\n}\n.lfb_vue_comfirmBox h2 {\n  height: 60px;\n  text-align: center;\n  font-size: 16px;\n  color: #333;\n  line-height: 60px;\n}\n.lfb_vue_comfirmBox .body {\n  width: 92%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0 0 20px;\n}\n.lfb_vue_comfirmBox .body div {\n  font-size: 16px;\n  color: #666;\n  line-height: 20px;\n}\n.lfb_vue_comfirmBox .body div p {\n  width: 96%;\n  margin: 0 auto;\n  font-size: 13px;\n  color: #666;\n  line-height: 20px;\n  text-align: left;\n  text-align: justify;\n  margin-bottom: 5px;\n}\n.lfb_vue_comfirmBox .body div p.center {\n  text-align: center;\n}\n.lfb_vue_comfirmBox .body div p span {\n  color: #ff5865;\n}\n.lfb_vue_comfirmBox .footer {\n  width: 100%;\n  height: 50px;\n  clear: both;\n  border-top: 1px solid #e5e5e5;\n}\n.lfb_vue_comfirmBox .footer a {\n  display: block;\n  height: 100%;\n  line-height: 50px;\n  width: 50%;\n  float: left;\n  font-size: 16px;\n  text-align: center;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.lfb_vue_comfirmBox .footer a:first-child {\n  border-right: 1px solid #e5e5e5;\n  color: #ff5865;\n}\n.lfb_vue_comfirmBox .footer a:last-child {\n  color: #333;\n}\n.opacityIn-enter-active,\n.opacityIn-leave-active {\n  transition: all .3s ease;\n}\n.opacityIn-enter {\n  opacity: 0;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: all .5s ease;\n  opacity: 1;\n}\n.fade-enter,\n.fade-leave-active {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('transition', {
    attrs: {
      "name": "opacityIn"
    }
  }, [(_vm.comfirm_show) ? _c('div', {
    staticClass: "lfb_vue_comfirmBg"
  }) : _vm._e()]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.comfirm_show) ? _c('div', {
    staticClass: "lfb_vue_comfirmBox"
  }, [_vm._t("default"), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.closeBox
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.comfirmBox
    }
  }, [_vm._v("确定")])])], 2) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32a0c4ee", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fd771fa6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32a0c4ee!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comfirmBox.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-32a0c4ee!../../../../node_modules/less-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./comfirmBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

},[46]);