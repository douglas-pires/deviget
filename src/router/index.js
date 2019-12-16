import Vue from "vue";
import VueRouter from "vue-router";
import TopPosts from "./routes/TopPosts";

Vue.use(VueRouter);

const routes = [TopPosts];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
