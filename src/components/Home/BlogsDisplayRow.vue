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
            :native="blog.native"
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
    props: {
        nativeBlogs: {
            type: Array,
            default: []
        }
    },
    computed: {
        blogs() {
            return [...this.nativeBlogs, ...blogs].slice(0, 3);
        }
    },
}
</script>

<style scoped>

</style>