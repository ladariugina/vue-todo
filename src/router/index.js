import { createWebHistory, createRouter } from "vue-router";
import About from "../views/about/components/About.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import('../views/todo/components/Todo.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;