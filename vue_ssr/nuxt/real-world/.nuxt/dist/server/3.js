exports.ids = [3];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=57545ef4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{ name: 'home', query: { tab: 'your_feed' } },"exact":""}},[_vm._v("\n                Your Feed\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{ name: 'home', query: { tab: 'gloab_feed' } },"exact":""}},[_vm._v("\n                Global Feed\n              ")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === _vm.tag },attrs:{"to":{ name: 'home', query: { tab: _vm.tag, tag: _vm.tag } },"exact":""}},[_vm._v("\n                "+_vm._s(_vm.tag)+"\n              ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),(_vm.articles.length > 0)?_vm._ssrNode("<div>","</div>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'profile',
                  params: { username: article.author.username },
                }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                    name: 'profile',
                    params: { slug: article.author.username },
                  }}},[_vm._v("\n                  "+_vm._s(article.author.username)+"\n                ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(article.updatedAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.disabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name: 'article',
                params: {
                  id: article.slug,
                },
              }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.body))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0):_vm._ssrNode(("<div><span>no Article</span></div>")),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pages),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{ active: _vm.page === item }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                name: 'home',
                query: {
                  page: item,
                },
              }}},[_vm._v(_vm._s(item))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tagList),function(tagItem){return _c('nuxt-link',{key:tagItem,staticClass:"tag-pill tag-default",attrs:{"to":{ name: 'home', query: { tag: tagItem } }}})}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=57545ef4&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "home",

  async asyncData({
    query,
    store
  }) {
    const limit = 2;
    const page = Number.parseInt(query.page || 1);
    const tab = query.tab || "global_feed";
    const loadArticle = store.state.user && tab === "your_feed" ? article["c" /* favorArcticles */] : article["d" /* getArticles */];
    const [articlesRes, tagRes] = await Promise.all([loadArticle({
      limit: limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), Object(article["e" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    articles.forEach(article => article.disabled = false);
    return {
      articles,
      articlesCount,
      limit,
      page,
      tag: "tag",
      tab,
      tagList: tagRes.data.tags
    };
  },

  watchQuery: ["page", "tag", "tab"],
  computed: {
    pages() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async toggleFeed(item) {
      console.log(item);
      item.disabled = true;

      if (item.favorited) {
        await Object(article["f" /* removeFavior */])(item.slug);
        item.favorited = false;
        item.favoritesCount -= 1;
      } else {
        await Object(article["b" /* faviorArticle */])(item.slug);
        item.favorited = true;
        item.favoritesCount += 1;
      }

      item.disabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "96b7b284"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map