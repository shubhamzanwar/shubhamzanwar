<template>
    <display-row
        title="Read some of my thoughts!"
        viewMoreText="read more cool stuff"
        viewMoreLink="/blog"
    >
        <blog-card
            v-for="blog in blogs"
            :key="blog.id"
            :title="blog.title"
            :date="blog.date"
            :image="blog.image"
            :link="blog.link"
        />
    </display-row>
</template>

<script>
import DisplayRow from "../DisplayRow";
import BlogCard from "../BlogCard";
import blogs from '../../constants/blogs.json';

export default {
    components: {
        DisplayRow,
        BlogCard,
    },
    data: () => ({ blogs: blogs.slice(0, 3) }),
}
</script>

<style scoped>

</style>