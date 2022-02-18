import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
// import Vue2OrgTree from "vue2-org-tree";

// Vue.use(Vue2OrgTree);
// import fwflv from 'fwflv'
// import 'fwflv/lib/fwflv.css'
// Vue.use(fwflv)

import BaiduMap from "vue-baidu-map";

import G6 from "@antv/g6";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "q6S3S45K1cZ8KpTvX9704TLTZnKBEwhQ"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
