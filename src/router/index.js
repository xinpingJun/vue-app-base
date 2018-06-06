import Vue from "vue";
import Router from "vue-router";
import {routers} from './routers.js'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: routers
});
