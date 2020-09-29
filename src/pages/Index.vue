<template>
  <Layout>
    <div class="home-page">
      <home-banner />
      <intro-row />
      <divider />
      <home-info-alert />
      <projects-display-row />
      <projects-alert />
      <divider />
      <blogs-display-row :nativeBlogs="nativeBlogs" />
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
import HomeBanner from "../components/Home/HomeBanner";
import IntroRow from "../components/Home/IntroRow";
import Divider from "../components/Divider";
import HomeInfoAlert from "../components/Home/HomeInfoAlert";
import ProjectsDisplayRow from "../components/Home/ProjectsDisplayRow";
import ProjectsAlert from "../components/Home/ProjectsAlert";
import BlogsDisplayRow from "../components/Home/BlogsDisplayRow";
import { getNativeBlogs } from "../utils/parseNativeBlogs";

export default {
  metaInfo: {
    title: "Shubham Zanwar's Portfolio",
    meta: [
      {
        name: "description",
        content: "blog and personal portfolio website of Shubham Zanwar"
      },
      {
        property: "og:title",
        content: "Shubham Zanwar's Portfolio"
      },
      {
        property: "og:description",
        content: "blog and personal portfolio website of Shubham Zanwar"
      },
    ]
  },
  components: {
    HomeBanner,
    IntroRow,
    Divider,
    HomeInfoAlert,
    ProjectsDisplayRow,
    ProjectsAlert,
    BlogsDisplayRow,
  },
  computed: {
    nativeBlogs() {
      return getNativeBlogs(this.$page.allPost.edges);
    },
  },
};
</script>

<style scoped>
.home-page {
  flex: 1;
}
</style>
