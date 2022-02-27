import { createWebHistory, createRouter } from "vue-router";
import About from "../views/about/About.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import('../views/todo/Todo.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;