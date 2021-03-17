import { createWebHistory, createRouter } from "vue-router";
import Todo from "../views/todo/Index.vue"
import About from "../views/about/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;