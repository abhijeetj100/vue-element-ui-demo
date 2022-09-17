import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const homeChunk = () =>
  import(
    /* webpackChunkName: "Home" */ /* webpackPrefetch: true */ "../views/Home.vue"
  );

const aboutChunk = () =>
  import(
    /* webpackChunkName: "About" */ /* webpackPrefetch: true */ "../views/AboutView.vue"
  );

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: homeChunk,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: aboutChunk,
  },
  // {
  //   path: "/login",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: aboutChunk,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
