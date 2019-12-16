import * as types from "./types";

const handlePosts = rawData => {
  return rawData.children.map((post, index) => {
    const {
      author,
      title,
      thumbnail,
      created_utc,
      num_comments,
      id
    } = post.data;
    return {
      id,
      author,
      title,
      thumbnail,
      entryDate: new Date(created_utc * 1000).toLocaleDateString(),
      commentsLength: num_comments,
      unreadStatus: false,
      rawData: rawData.children[index].data
    };
  });
};

export default {
  [types.MUT_SET_TOP_POSTS](state, rawData) {
    state[types.STATE_TOP_POSTS] = handlePosts(rawData);
  },
  [types.MUT_SET_SELECTED_POST](state, post) {
    state[types.STATE_SELECTED_POST] = post;
  },
  [types.MUT_DELETE_POST](state, post) {
    const posts = state[types.STATE_TOP_POSTS];

    state[types.STATE_TOP_POSTS] = posts.filter(item => item.id !== post.id);
  },
  [types.MUT_SET_READ_STATUS](state, post) {
    const posts = state[types.STATE_TOP_POSTS];

    const idx = posts.findIndex(item => item.id === post.id);

    if (!posts[idx]) return;

    posts[idx].unreadStatus = true;

    state[types.STATE_TOP_POSTS] = [...posts];
  },
  [types.MUT_DELETE_ALL](state) {
    state[types.STATE_TOP_POSTS] = [];
  }
};
