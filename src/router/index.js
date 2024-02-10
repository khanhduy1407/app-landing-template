import { createWebHistory, createRouter } from "kdu-router";
import HomeView from "../views/HomeView.kdu";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/play",
      name: "Play Game",
      // route level code-splitting
      // this generates a separate chunk (Play.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PlayView.kdu"),
    },
  ],
});

export default router;
