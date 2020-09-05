<template>
    <div class="blog-grid">
        <blog-card
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title"
            :date="blog.date"
            :image="blog.image"
            :link="blog.link"
            :style="{margin: 0}"
        />
    </div>
</template>

<script>
import BlogCard from "../BlogCard";
import blogs from "../../constants/blogs.json";

export default {
    data: () => ({blogs}),
    components: {
        BlogCard,
    }
}
</script>

<style scoped>
    .blog-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        margin-top: 3rem;
    }

    @media (max-width: 600px) {
        .blog-grid {
            grid-template-columns: 1fr;
        }
    }
</style>