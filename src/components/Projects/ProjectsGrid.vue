<template>
    <div class="projects-grid">
        <project-card
            v-for="project in projects"
            :key="project.id"
            :title="project.name"
            :description="project.description"
            :languageColor="project.primaryLanguage.color"
            :primaryLanguage="project.primaryLanguage.name"
            :starCount="project.stargazers"
            :showDetails="true"
            :style="{margin: 0}"
            :link="project.url"
        />
    </div>
</template>

<script>
import ProjectCard from "../ProjectCard";
import projects from "../../constants/projects.json";

export default {
    data: () => ({projects}),
    components: {
        ProjectCard,
    }
}
</script>

<style scoped>
    .projects-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        margin-top: 3rem;
    }

    @media (max-width: 600px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>