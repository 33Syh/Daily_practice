import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "baidu",
    component: Layout,
    redirect: "/es6",
    children: [
      {
        path: "/baidu",
        name: "Baidu",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "baidu_onself" */ "../views/baidu_map/BdmPoint.vue"
          )
      },
      {
        path: "/g6",
        name: "g6",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "baidu_onself" */ "../views/G6/changeItem.vue"
          )
      },
      {
        path: "/eat",
        name: "eat",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "baidu_onself" */ "../views/eat/index.vue"
          )
      },
      {
        path: "/org",
        name: "org",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "baidu_onself" */ "../views/org/index.vue"
          )
      },
      {
        path: "/b",
        name: "b",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "baidu_onself" */ "../views/b.vue")
      },
      {
        path: "/es6",
        name: "es6",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "baidu_onself" */ "../views/es6/index.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
