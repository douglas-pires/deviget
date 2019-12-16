<template>
  <div
    v-touch:swipe.right="$device.isMobile ? mutToggleMenu : null"
    class="top-posts__wrapper"
  >
    <div class="d-flex">
      <transition name="slide-fade">
        <dev-post-list
          v-touch:swipe.left="$device.isMobile ? mutToggleMenu : null"
          :class="{
            'pt-10': $device.isMobile
          }"
          v-if="stateMenu"
          :posts="stateTopPosts"
          @click:item="setSelectedPost"
        />
      </transition>

      <dev-post-details
        v-if="!stateMenu || $device.isDesktop"
        class="pa-5"
        :class="{
          'mt-5': $device.isMobile
        }"
        :post="stateSelectedPost"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import * as types from "@/store/modules/posts/types";
import DevPostList from "@/components/dev-post-list";
import DevPostDetails from "@/components/dev-post-details";

export default {
  components: {
    DevPostDetails,
    DevPostList
  },
  name: "TopPosts",
  async created() {
    await this.actGetTopPosts();
  },
  data() {
    return {
      headers: [
        {
          text: "Thumbnail",
          value: "thumbnail"
        },
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Author",
          value: "author"
        },
        {
          text: "Entry Date",
          value: "entryDate"
        },
        {
          text: "Number of Comments",
          value: "commentsLength"
        },
        {
          text: "Read Status",
          value: "unreadStatus"
        },
        { text: "Actions", value: "action" }
      ]
    };
  },
  computed: {
    ...mapState(types.NAMESPACE, {
      stateTopPosts: types.STATE_TOP_POSTS,
      stateSelectedPost: types.STATE_SELECTED_POST,
      stateMenu: types.STATE_MENU
    })
  },
  methods: {
    ...mapActions(types.NAMESPACE, {
      actGetTopPosts: types.ACT_GET_TOP_POSTS
    }),
    ...mapMutations(types.NAMESPACE, {
      mutSetSelectedPost: types.MUT_SET_SELECTED_POST,
      mutSetReadStatus: types.MUT_SET_READ_STATUS,
      mutDeleteAll: types.MUT_DELETE_ALL,
      mutToggleMenu: types.MUT_TOGGLE_MENU
    }),
    setSelectedPost(post) {
      if (this.$device.isMobile) this.mutToggleMenu();
      this.mutSetReadStatus(post);
      this.mutSetSelectedPost(post);
    }
  }
};
</script>

<style lang="scss">
.top-posts {
  &__wrapper {
    height: 100vh;
  }
  &__menu-button {
    position: absolute;
    z-index: 1;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
