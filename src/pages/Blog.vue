<template>
    <Layout>
        <div class="blog-page">
            <blog-banner />
            <blog-alert />
            <blog-grid />
            <divider />
        </div>
    </Layout>
</template>

<script>
import BlogBanner from "../components/Blog/BlogBanner";
import BlogAlert from "../components/Blog/BlogAlert";
import BlogGrid from "../components/Blog/BlogGrid";
import Divider from "../components/Divider";
import Projects from '../constants/projects.json';

export default {
    data: () => ({
        projects: Projects
    }),
    components: {
        BlogBanner,
        BlogAlert,
        BlogGrid,
        Divider,
    },
    metaInfo: {
        title: 'Blog'
    }
}
</script>

<style scoped>
    .blog-page {
        flex: 1;
    }
</style>
