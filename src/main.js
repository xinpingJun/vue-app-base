 
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/index";
const FastClick = require("fastclick");
FastClick.attach(document.body);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  router,
  components: { App },
  template: "<App/>"
});


router.beforeEach(function(to, from, next) {
  store.commit("updateLoadingStatus", { isLoading: true });
  next();
});

router.afterEach(function(to) {
  store.commit("updateLoadingStatus", { isLoading: false });
});
