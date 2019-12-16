<template>
  <div class="dev-post-list__wrapper pa-5">
    <h1>Reddit Posts</h1>
    <transition name="list" v-if="posts.length">
      <div class="dev-post-list__list">
        <transition-group name="list" tag="div">
          <dev-post-list-item
            class="list-item"
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @click="$emit('click:item', post)"
          />
        </transition-group>
      </div>
    </transition>
    <div v-else>
      <h1>No posts available</h1>
    </div>
    <div
      class="dev-post-list__footer warning--text d-flex align-center justify-center"
      @click="mutDeleteAll"
    >
      <span>
        Dismiss All Posts
      </span>
    </div>
  </div>
</template>

<script>
import DevPostListItem from "./components/DevPostListItem.vue";
import * as types from "@/store/modules/posts/types";
import { mapMutations } from "vuex";

export default {
  name: "DevPostList",
  components: {
    DevPostListItem
  },
  props: {
    posts: { type: Array, default: () => [] }
  },
  methods: {
    ...mapMutations(types.NAMESPACE, {
      mutSetReadStatus: types.MUT_SET_READ_STATUS,
      mutDeleteAll: types.MUT_DELETE_ALL
    })
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .dev-post-list {
    &__wrapper {
      max-width: 500px;
      min-width: 500px;
      position: relative;
    }
    &__list {
      overflow-y: scroll;
      max-height: 100vh;
    }
    &__footer {
      position: sticky;
      height: 50px;
      background-color: #000;
      bottom: 0;
      width: 100%;
      cursor: pointer;
    }
  }
}

.dev-post-list {
  &__wrapper {
    background-color: #000;
    color: #fff;
    position: relative;
    height: 100vh;
  }
  &__list {
    overflow-y: scroll;
    max-height: 100vh;
  }
  &__footer {
    position: sticky;
    height: 50px;
    background-color: #000;
    bottom: 0;
    width: 100%;
    cursor: pointer;
  }
}

::-webkit-scrollbar {
  display: none;
}

.list-item {
  transition: all 1s;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
