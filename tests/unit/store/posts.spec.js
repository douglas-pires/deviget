import top from "../top.json";
import store from "../../../src/store";
import * as types from "../../../src/store/modules/posts/types";

describe("Posts Store Module", () => {
  it("should properly populate post state", () => {
    store.commit(`${types.NAMESPACE}/${types.MUT_SET_TOP_POSTS}`, top.data);

    expect(store.state.posts[types.STATE_TOP_POSTS]).toHaveLength(50);
    expect(store.state.posts[types.STATE_TOP_POSTS][0].author).toEqual(
      "Eric__Fapton"
    );
  });
});
