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
      <blogs-display-row />
      <divider />
    </div>
  </Layout>
</template>

<script>
import HomeBanner from "../components/Home/HomeBanner";
import IntroRow from "../components/Home/IntroRow";
import Divider from "../components/Divider";
import HomeInfoAlert from "../components/Home/HomeInfoAlert";
import ProjectsDisplayRow from "../components/Home/ProjectsDisplayRow";
import ProjectsAlert from "../components/Home/ProjectsAlert";
import BlogsDisplayRow from "../components/Home/BlogsDisplayRow";

export default {
  metaInfo: {
    title: 'Hello'
  },
  components: {
    HomeBanner,
    IntroRow,
    Divider,
    HomeInfoAlert,
    ProjectsDisplayRow,
    ProjectsAlert,
    BlogsDisplayRow,
  }
}
</script>

<style scoped>
  .home-page {
    flex: 1;
  }

</style>
