import Vue from "vue";
import Vuetify from "vuetify";
import { mount } from "@vue/test-utils";
import DevPostDetails from "../../../src/components/dev-post-details";
import store from "../../../src/store";
import * as types from "../../../src/store/modules/posts/types";
import top from "../top.json";

Vue.use(Vuetify);

describe("DevPostDetails", () => {
  let wrapper;

  beforeAll(async () => {
    store.commit(`${types.NAMESPACE}/${types.MUT_SET_TOP_POSTS}`, top.data);
    const selectedPost = store.state.posts[types.STATE_TOP_POSTS][0];

    console.log(selectedPost.title);

    wrapper = mount(DevPostDetails, {
      propsData: {
        post: selectedPost
      }
    });

    await wrapper.vm.$nextTick();
  });

  it("should render DevPostDetails properly", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render title and data from the first post properly", () => {
    const titlePart = "TIL actor Robert Pattinson";
    const thumbnailPart = "pOezpz7V4oVgn8wM_WgU";

    expect(wrapper.vm.post.title).toContain(titlePart);
    expect(wrapper.vm.post.thumbnail).toContain(thumbnailPart);
  });
});
