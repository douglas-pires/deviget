const TopPosts = () =>
  import(/* webpackChunkName: "top-posts" */ "../../views/TopPosts.vue");

export default {
  name: "TopPosts",
  path: "/",
  component: TopPosts
};
