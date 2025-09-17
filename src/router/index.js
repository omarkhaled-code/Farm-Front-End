import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

import { useAuthStore } from "@/stores/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
