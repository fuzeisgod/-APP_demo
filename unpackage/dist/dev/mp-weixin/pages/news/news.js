(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/news"],{

/***/ 21:
/*!*******************************************************************!*\
  !*** D:/nui-app/-APP_demo/main.js?{"page":"pages%2Fnews%2Fnews"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _news = _interopRequireDefault(__webpack_require__(/*! ./pages/news/news.vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 22:
/*!************************************************!*\
  !*** D:/nui-app/-APP_demo/pages/news/news.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=63a77f28& */ 23);
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "nui-app/-APP_demo/pages/news/news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 23:
/*!*******************************************************************************!*\
  !*** D:/nui-app/-APP_demo/pages/news/news.vue?vue&type=template&id=63a77f28& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=template&id=63a77f28& */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_63a77f28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 24:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nui-app/-APP_demo/pages/news/news.vue?vue&type=template&id=63a77f28& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 25:
/*!*************************************************************************!*\
  !*** D:/nui-app/-APP_demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=script&lang=js& */ 26);
/* harmony import */ var _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/nui-app/-APP_demo/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var demo = [{
  username: "昵称1",
  userpic: "../../static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题",
  titlepic: "../../static/bgimg/1.jpg",
  support: {
    // 顶操作 type 为 "support",
    // 踩操作 type 为 "unsupport",
    // 未操作 type 为 ""
    type: "",
    support_count: 0,
    unsupport_count: 0 },

  comment_count: 2,
  share_num: 2 },
{
  username: "昵称2",
  userpic: "../../static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题",
  titlepic: "",
  support: {
    type: "",
    support_count: 1,
    unsupport_count: 2 },

  comment_count: 2,
  share_num: 2 },
{
  username: "昵称3",
  userpic: "../../static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题",
  titlepic: "",
  support: {
    type: "",
    support_count: 1,
    unsupport_count: 2 },

  comment_count: 2,
  share_num: 2 }];var uniNavBar = function uniNavBar() {return __webpack_require__.e(/*! import() | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 83));};var commonList = function commonList() {return __webpack_require__.e(/*! import() | components/common/common-list */ "components/common/common-list").then(__webpack_require__.bind(null, /*! @/components/common/common-list.vue */ 71));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! @/components/common/load-more.vue */ 78));};var hotCate = function hotCate() {return __webpack_require__.e(/*! import() | components/news/hot-cate */ "components/news/hot-cate").then(__webpack_require__.bind(null, /*! @/components/news/hot-cate.vue */ 90));};var _default =





{
  data: function data() {
    return {
      scrollH: 500,
      tabIndex: 0,
      tabBars: [{
        name: "关注" },
      {
        name: "话题" }],

      // 关注列表
      list: [],
      // 1.上拉加载更多 2.加载中... 3.没有更多了
      loadmore: "上拉加载更多",
      hotCate: [{
        name: "关注" },
      {
        name: "推荐" }] };


  },
  methods: {
    // 打开发布页
    openAddInput: function openAddInput() {
      uni.navigateTo({
        url: '../add-input/add-input' });

    },
    // 切换选项卡
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    // 监听滑动
    onChangeTab: function onChangeTab(e) {
      this.changeTab(e.detail.current);
    },
    // 顶踩操作
    doSupport: function doSupport(e) {
      // {type:"support", index:0}
      // 拿到当前对象
      var item = this.list[e.index];
      var msg = e.type === 'support' ? '顶' : '踩';
      // 之前没有操作过
      if (item.support.type === '') {
        item.support[e.type + '_count']++;
      } else if (item.support.type === 'support' && e.type === 'unsupport') {// 之前顶了
        // 顶 - 1
        if (item.support.support_count > 0) {
          item.support.support_count--;
        }
        // 踩 + 1
        item.support.unsupport_count++;
      } else if (item.support.type === 'unsupport' && e.type === 'support') {// 之前踩了
        // 踩 - 1
        if (item.support.unsupport_count > 0) {
          item.support.unsupport_count--;
        }
        // 顶 + 1
        item.support.support_count++;
      }
      item.support.type = e.type;
      uni.showToast({
        title: msg + '成功' });

    },
    // 上拉加载更多
    loadmoreEvent: function loadmoreEvent(index) {var _this = this;
      // 验证当前是否处于可加载状态
      if (this.loadmore !== '上拉加载更多') return;
      // 设置加载状态
      this.loadmore = '加载中...';
      // 模拟请求数据
      setTimeout(function () {
        // 加载数据
        _this.list = [].concat(_toConsumableArray(_this.list), _toConsumableArray(_this.list));
        // 设置加载状态
        _this.loadmore = '上拉加载更多';
      }, 2000);
    } },

  components: {
    uniNavBar: uniNavBar,
    commonList: commonList,
    loadMore: loadMore,
    hotCate: hotCate },

  onLoad: function onLoad() {var _this2 = this;
    var res = uni.getSystemInfo({
      success: function success(res) {
        _this2.scrollH = res.windowHeight - res.statusBarHeight - 44;
      } });

    // 加载测试数据
    this.list = demo;
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[21,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/news/news.js.map