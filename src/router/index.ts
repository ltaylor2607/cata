import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cata",
    name: "cata",
    component: () => import("../views/CATAView.vue"),
  },
  {
    path: "/whatwedo",
    name: "whatwedo",
    component: () => import("../views/WhatWeDoView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/BookCallView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
