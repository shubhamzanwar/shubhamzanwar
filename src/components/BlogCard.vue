<template>
    <div class="blog-card" :style="style">
        <a :href="link" target="_blank">
            <div class="image" :style="{backgroundImage: `url(${image})`}"></div>
            <div class="description">
                <div class="title">{{title}}</div>
                <div class="date">Published {{date}}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        date: String,
        link: String,
        style: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
    .blog-card {
        flex: 1;
        background: #F4F4F4;
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        min-height: 18rem;
    }
    .blog-card:first-child,
    .blog-card:last-child {
        margin: 0
    }

    .image {
        height: 12.5rem;
        background-position: center;
        background-size: 100%;

        transition: background-size 0.3s;
    }

    .blog-card:hover .image {
        background-size: 110%;
    }

    .description {
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
    }

    .date {
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #999;
        font-style: italic;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 600px) {
        .blog-card {
            margin: 2rem 0;
        }
    }
</style>