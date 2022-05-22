import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/login/components/Login.vue";
import Register from "../pages/login/components/Register.vue";
import Service from "../pages/login/Service.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/article/:slug",
    component: () => import("../pages/Article.vue"),
  },
  {
    path: "/service",
    name: "service",
    redirect: "/service/login",
    component: Service,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
  },
  {
    name: "edit-article",
    path: "/article/:slug/edit",
    component: () => import("../pages/Edit.vue"),
  },
  {
    name: "create-article",
    path: "/article/create",
    component: () => import("../pages/Edit.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
