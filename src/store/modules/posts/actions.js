import * as types from "./types";
import { getTopPosts } from "@/services/reddit.service";

export default {
  async [types.ACT_GET_TOP_POSTS]({ commit }) {
    const data = await getTopPosts();
    commit(types.MUT_SET_TOP_POSTS, data);
  }
};
