exports.ids = [2];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return favorArcticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return faviorArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeFavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articleInfo; });
/* unused harmony export postComment */
/* unused harmony export articleComments */
/* unused harmony export removeComment */
/* harmony import */ var _plugins_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取说话也文章列表

const getArticles = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get('/articles', {
    params
  });
}; // 获取用户关注文章列表

const favorArcticles = params => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get('/articles/feed', params);
}; // 获取标签

const getTags = () => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get('/tags');
}; // 点赞

const faviorArticle = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].post(`/articles/${slug}/favorite`);
}; // 取消点赞

const removeFavior = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].delete(`/articles/${slug}/favorite`);
}; // 文章详情

const articleInfo = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get(`/articles/${slug}`);
}; // 评论文章

const postComment = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].post(`/articles/${slug}`);
}; // 文章评论列表

const articleComments = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].get(`/articles/${slug}、comm`);
}; // 删除评论

const removeComment = slug => {
  return _plugins_http__WEBPACK_IMPORTED_MODULE_0__[/* http */ "b"].delete(`/articles/${slug}`);
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=d260baac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\">"+(_vm._s(_vm.article.body))+"</div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span></div></div> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=d260baac&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(26);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(25);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/article-mate.vue?vue&type=template&id=5c9c8b6a&
var article_matevue_type_template_id_5c9c8b6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_vm._v("\n      "+_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active:_vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n      Follow"+_vm._s(_vm.article.author.username)+"\n    ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button> <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active:_vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n      Favorite Post <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_matevue_type_template_id_5c9c8b6a_staticRenderFns = []


// CONCATENATED MODULE: ./components/article-mate.vue?vue&type=template&id=5c9c8b6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-mate.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_matevue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./components/article-mate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_matevue_type_script_lang_js_ = (article_matevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/article-mate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_matevue_type_script_lang_js_,
  article_matevue_type_template_id_5c9c8b6a_render,
  article_matevue_type_template_id_5c9c8b6a_staticRenderFns,
  false,
  null,
  null,
  "04cebe86"
  
)

/* harmony default export */ var article_mate = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  middleware: "auth",

  async asyncData({
    params
  }) {
    const articleRes = await Object(api_article["a" /* articleInfo */])(params.id);
    const article = articleRes.data.article;
    const md = new external_markdown_it_default.a();
    console.log(articleRes);
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_mate
  },

  head() {
    return {
      title: `${this.article.title}`,
      meta: [{
        content: this.article.description,
        name: "description",
        hid: "description"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08c6cb58"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map