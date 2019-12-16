<template>
  <div class="top-posts__wrapper">
    <v-btn color="error" class="mb-5" @click="mutDeleteAll">Delete All</v-btn>
    <div class="top-posts__table-detail-wrapper">
      <v-data-table
        transition="slide-x-transition"
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
        <template v-slot:item.action="{ item }">
          <v-icon small @click="mutDeletePost(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <dev-post-details
        v-if="$device.isDesktop"
        class="top-posts__details"
        :post="stateSelectedPost"
      />
    </div>
    <v-dialog
      v-if="$device.isMobile"
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Post</v-toolbar-title>
        </v-toolbar>
        <dev-post-details
          class="top-posts__details pa-5"
          :post="stateSelectedPost"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
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
    dialog: false,
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
  }),
  computed: {
    ...mapState(types.NAMESPACE, {
      stateTopPosts: types.STATE_TOP_POSTS,
      stateSelectedPost: types.STATE_SELECTED_POST
    })
  },
  methods: {
    ...mapActions(types.NAMESPACE, {
      actGetTopPosts: types.ACT_GET_TOP_POSTS
    }),
    ...mapMutations(types.NAMESPACE, {
      mutSetSelectedPost: types.MUT_SET_SELECTED_POST,
      mutSetReadStatus: types.MUT_SET_READ_STATUS,
      mutDeletePost: types.MUT_DELETE_POST,
      mutDeleteAll: types.MUT_DELETE_ALL
    }),
    setSelectedPost(post) {
      if (this.$device.isMobile) this.dialog = !this.dialog;
      this.mutSetReadStatus(post);
      this.mutSetSelectedPost(post);
    }
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .top-posts {
    &__table-detail-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px 20px;
      position: relative;
    }
  }
}
</style>
