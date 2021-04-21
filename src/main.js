import 'es6-promise/auto';
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import "./style/index.scss";
import App from "./App";
Vue.use(VueRouter);
new Vue({
  el: "#app",
  data() {
    return {
    };
  },
  router,
  template: "<App />",
  components: { App }
});
