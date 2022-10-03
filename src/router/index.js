import Vue from "vue";
import VueRouter from "vue-router";
import PlateListView from "../views/PlateListView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "plateList",
    component: PlateListView
  },
  {
    path: "/addPlate",
    name: "addPlate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AddPlateView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
