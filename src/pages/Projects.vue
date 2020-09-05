<template>
    <Layout>
        <div class="projects-page">
            <projects-banner />
            <projects-alert />
            <projects-grid />
            <divider />
        </div>
    </Layout>
</template>

<script>
import ProjectsBanner from "../components/Projects/ProjectsBanner";
import ProjectsAlert from "../components/Projects/ProjectsAlert";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import Divider from "../components/Divider";
import Projects from '../constants/projects.json';

export default {
    data: () => ({
        projects: Projects
    }),
    components: {
        ProjectsBanner,
        ProjectsAlert,
        ProjectsGrid,
        Divider,
    },
    metaInfo: {
        title: 'Projects'
    }
}
</script>

<style scoped>
    .projects-page {
        flex: 1;
    }
</style>
