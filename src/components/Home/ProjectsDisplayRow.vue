<template>
    <display-row
        title="Check out some of my work!"
        viewMoreText="view more cool stuff"
        viewMoreLink="/projects"
    >
        <project-card
            v-for="project in projects"
            :key="project.id"
            :title="project.name"
            :description="project.description"
            :languageColor="project.primaryLanguage.color"
            :primaryLanguage="project.primaryLanguage.name"
            :starCount="project.stargazers"
            :showDetails="true"
            :link="project.url"
        />
    </display-row>
</template>

<script>
import DisplayRow from "../DisplayRow";
import ProjectCard from "../ProjectCard";
import projects from '../../constants/projects.json';

export default {
    components: {
        DisplayRow,
        ProjectCard
    },
    data: () => ({ projects: projects.slice(0, 3) }),
}
</script>

<style scoped>

</style>