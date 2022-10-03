import Vue from "vue";
import VueRouter from "vue-router";
import PermitListView from "../views/PermitListView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "permitList",
    component: PermitListView
  },
  {
    path: "/addPermit",
    name: "addPermit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AddPermitView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
