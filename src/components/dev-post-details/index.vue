<template>
  <div v-if="post">
    <h1 class="title">{{ post.title }}</h1>
    <h3 class="mt-2 subtitle-1 font-italic">by {{ post.author }}</h3>
    <v-img
      contain
      v-if="post.thumbnail"
      :src="post.thumbnail"
      max-width="300px"
      class="mt-2"
    />
    <div
      v-if="post.rawData.selftext_html"
      v-html="post.rawData.selftext_html"
    ></div>
  </div>
</template>

<script>
export default {
  name: "DevPostDetails",
  props: {
    post: { type: Object, default: () => {} }
  }
};
</script>
