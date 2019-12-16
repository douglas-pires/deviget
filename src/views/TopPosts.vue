<template>
  <div class="top-posts__wrapper">
    <v-data-table
      calculate-widths
      :items="stateTopPosts"
      :headers="headers"
      @click:row="setSelectedPost"
    >
      <template #item.thumbnail="{ item }">
        <v-img
          v-if="item.thumbnail && item.thumbnail !== 'default'"
          :src="item.thumbnail"
        />
      </template>
    </v-data-table>
    <dev-post-details class="top-posts__details" :post="selectedPost" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as types from "@/store/modules/posts/types";
import DevPostDetails from "@/components/dev-post-details";

export default {
  components: {
    DevPostDetails
  },
  name: "TopPosts",
  async created() {
    await this.actGetTopPosts();
  },
  data: () => ({
    selectedPost: null,
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
        text: "Unread Status",
        value: "unreadStatus"
      }
    ]
  }),
  computed: {
    ...mapState(types.NAMESPACE, {
      stateTopPosts: types.STATE_TOP_POSTS
    })
  },
  methods: {
    ...mapActions(types.NAMESPACE, {
      actGetTopPosts: types.ACT_GET_TOP_POSTS
    }),
    setSelectedPost(post) {
      this.selectedPost = post;
    }
  }
};
</script>

<style lang="scss">
.top-posts {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 20px;
    position: relative;
  }
}
</style>
