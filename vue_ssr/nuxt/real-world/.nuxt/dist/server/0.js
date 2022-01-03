exports.ids = [0];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return profile; });
/* unused harmony export updateInfo */
/* harmony import */ var _plugins_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 登录

const login = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].post('/users/login', params);
}; // 注册

const register = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].post('/users', params);
}; // 获取用户信息

const profile = username => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get(`/profiles/${username}`);
}; // 修改用户信息

const updateInfo = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].put('/user', params);
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=be37ffe4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n        ")+"</h1> "),(!_vm.isLogin)?_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v(" Have an account? ")])],1):_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v(" Need an account? ")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(msgs,field){return ((_vm._ssrList((msgs),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+"\n              "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.formParams.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.formParams.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.formParams.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? "Sign in" : "Sign up")+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=be37ffe4&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "login",
  computed: {
    isLogin() {
      return this.$route.name == "login";
    }

  },

  data() {
    return {
      errors: {},
      formParams: {
        username: "iwan_dd",
        email: "12@12.com",
        password: "123456"
      }
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])(["setUser"]),

    async submit() {
      try {
        const res = this.isLogin ? await Object(user["a" /* login */])({
          user: this.formParams
        }) : await Object(user["c" /* register */])({
          user: this.formParams
        });

        if (res.status == 200) {
          this.setUser(res.data.user);
          Cookie.set("user", JSON.stringify(res.data.user));
          this.$router.push("/");
        }
      } catch ({
        errors
      }) {
        this.errors = errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "26d5bf0b"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=0.js.map