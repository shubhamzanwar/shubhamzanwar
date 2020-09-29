<template>
    <Layout>
        <div class="blog-page">
            <blog-banner />
            <blog-alert />
            <blog-grid :nativeBlogs="nativeBlogs" />
            <divider />
        </div>
    </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        subTitle
        date (format: "DD MMM YYYY")
        path
        coverImage
      }
    }
  }
}
</page-query>

<script>
import BlogBanner from "../components/Blog/BlogBanner";
import BlogAlert from "../components/Blog/BlogAlert";
import BlogGrid from "../components/Blog/BlogGrid";
import Divider from "../components/Divider";
import { getNativeBlogs } from "../utils/parseNativeBlogs";

export default {
    components: {
        BlogBanner,
        BlogAlert,
        BlogGrid,
        Divider,
    },
    metaInfo: {
        title: 'Blog'
    },
    computed: {
        nativeBlogs() {
            return getNativeBlogs(this.$page.allPost.edges);
        },
    },
}
</script>

<style scoped>
    .blog-page {
        flex: 1;
    }
</style>
