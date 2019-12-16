import * as types from "./types";

const handlePosts = rawData => {
  return rawData.children.map((post, index) => {
    const { author, title, thumbnail, created_utc, num_comments } = post.data;
    return {
      author,
      title,
      thumbnail,
      entryDate: new Date(created_utc * 1000).toLocaleDateString(),
      commentsLength: num_comments,
      rawData: rawData.children[index].data
    };
  });
};

export default {
  [types.MUT_SET_TOP_POSTS](state, rawData) {
    state[types.STATE_TOP_POSTS] = handlePosts(rawData);
  }
};
