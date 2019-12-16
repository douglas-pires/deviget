import * as types from "./types";

export default () => ({
  [types.STATE_TOP_POSTS]: [],
  [types.STATE_SELECTED_POST]: {},
  [types.STATE_SELECTED_POST]: null,
  [types.STATE_MENU]: window.innerWidth > 768
});
