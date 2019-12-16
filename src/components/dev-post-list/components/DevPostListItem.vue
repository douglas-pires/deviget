<template>
  <div
    class="dev-post-list-item__wrapper"
    :class="{ 'dev-post-list-item--toggled': post.unreadStatus }"
    @click="$emit('click')"
  >
    <hr class="dev-post-list-item__divider pb-3 pt-3" />
    <div class="d-flex align-center mb-3">
      <div
        v-if="!post.unreadStatus"
        class="dev-post-list-item__unread-status mr-2"
      ></div>
      <span class="headline">{{ post.author }}</span>
    </div>
    <div class="d-flex">
      <v-img
        v-if="post.thumbnail"
        :src="post.thumbnail"
        max-width="100px"
        contain
      />
      <p class="pl-5">{{ post.title }}</p>
    </div>
    <div class="d-flex align-center justify-space-between mt-5 mb-5">
      <p class="warning--text" @click="mutDeletePost(post)">
        <span>
          <v-icon color="warning">
            mdi-close
          </v-icon>
        </span>
        Dismiss Post
      </p>
      <p>
        <span class="warning--text">{{ post.commentsLength }}</span> comments
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as types from "@/store/modules/posts/types";

export default {
  name: "DevPostListItem",
  props: {
    post: { type: Object, required: true }
  },
  methods: {
    ...mapMutations(types.NAMESPACE, {
      mutDeletePost: types.MUT_DELETE_POST
    })
  }
};
</script>

<style lang="scss">
.dev-post-list-item {
  &__wrapper {
    position: relative;
    cursor: pointer;
  }
  &__divider {
    border: none;
    border-top: 1px solid #aaa;
  }
  &__unread-status {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: lightseagreen;
  }
  &--toggled {
    color: #aaa;
  }
}
</style>
