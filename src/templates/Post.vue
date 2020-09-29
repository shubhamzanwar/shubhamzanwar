<template>
  <Layout :maxWidth="900">
    <div class="title-wrapper">
      <div class="post-title">{{ $page.post.title }}</div>
      <div class="post-sub-title">{{ $page.post.subTitle }}</div>
      <div class="post-time">
        {{ $page.post.date }} | {{ coffee }} {{ $page.post.timeToRead }} min read
      </div>
    </div>
    <img :src="$page.post.coverImage" class="cover" alt="" />
    <div class="coverCredit" v-html="$page.post.coverCredit" />
    <div class="post-content">
      <p v-html="$page.post.content" />
    </div>
    <divider />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
    date (format: "DD MMM YYYY")
    timeToRead
    coverImage
    subTitle
    coverCredit
  }
}
</page-query>

<script>
import Divider from "../components/Divider";
import { getCoffeeCount } from "../utils/getCoffeeCount";

export default {
  components: {
    Divider,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.subTitle
        },
        {
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          property: 'og:description',
          content: this.$page.post.subTitle
        },
      ]
    }
  },
  computed: {
    coffee() {
      return getCoffeeCount(this.$page.post.timeToRead);
    },
  },
};
</script>

<style>
.title-wrapper {
  text-align: center;
  margin: 3rem 0 1.5rem;
}
.post-title {
  font-weight: 500;
  font-size: 2.2rem;
}

.post-sub-title {
  color: #999;
  font-size: 1.5rem;
}

.post-time {
  margin-top: 0.5rem;
  color: #999;
}

.cover {
  width: 100%;
}

.coverCredit {
  font-size: 1rem;
  text-align: center;
  color: #999;
  margin-top: 0.2rem;
}

.coverCredit a {
  color: #999;
}

.post-content {
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
