import fetch from "@/api/base.request";

const getTopPosts = () => {
  return fetch(process.env.VUE_APP_BASE_API_URL);
};

export { getTopPosts };
