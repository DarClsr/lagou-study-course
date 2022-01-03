exports.ids = [4];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=f08a12b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p>\r\n                        Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the\r\n                        Hunger Games\r\n                    </p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\r\n                         \r\n                        Follow "+_vm._s(_vm.user.username)+"\r\n                    ")+"</button></div></div></div></div> <div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><a href class=\"nav-link active\">My Articles</a></li> <li class=\"nav-item\"><a href class=\"nav-link\">Favorited Articles</a></li></ul></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/Qr71crq.jpg\"></a> <div class=\"info\"><a href class=\"author\">Eric Simons</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 29\r\n                        </button></div> <a href class=\"preview-link\"><h1>How to build webapps that scale</h1> <p>This is the description for the post.</p> <span>Read more...</span></a></div> <div class=\"article-preview\"><div class=\"article-meta\"><a href><img src=\"http://i.imgur.com/N4VcUeJ.jpg\"></a> <div class=\"info\"><a href class=\"author\">Albert Pai</a> <span class=\"date\">January 20th</span></div> <button class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i> 32\r\n                        </button></div> <a href class=\"preview-link\"><h1>The song you won't ever stop singing. No matter how hard you try.</h1> <p>This is the description for the post.</p> <span>Read more...</span> <ul class=\"tag-list\"><li class=\"tag-default tag-pill tag-outline\">Music</li> <li class=\"tag-default tag-pill tag-outline\">Song</li></ul></a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=f08a12b4&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'auth',

  async asyncData({
    params
  }) {
    const userRes = await Object(user["b" /* profile */])(params.username);
    return {
      user: userRes.data.profile
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a2af76a"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map