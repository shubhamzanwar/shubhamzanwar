<template>
    <div class="project-card" :style="style">
        <a :href="link" target="_blank">
            <div class="project-title">{{title}}</div>
        </a>
        <div class="content-wrapper">
            <div class="project-description">{{description}}</div>
            <div v-if="showDetails" class="project-details">
                <span>{{starCount}} <font-awesome :icon="['fas', 'star']" class="star-icon" /></span>
                <span><font-awesome :icon="['fas', 'circle']" :style="{color: languageColor}" /> {{primaryLanguage}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        showDetails: Boolean,
        starCount: Number,
        primaryLanguage: String,
        languageColor: String,
        link: String,
        style: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
    .project-card {
        flex: 1;
        background: #F4F4F4;
        margin: 0 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        min-height: 9.5rem;
    }
    .project-card:first-child,
    .project-card:last-child {
        margin: 0
    }

    a {
        color: inherit;
    }

    .project-title {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .content-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .project-details {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .project-card {
            margin: 2rem 0;
        }
    }
</style>