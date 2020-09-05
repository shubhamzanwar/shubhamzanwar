<template>
    <alert type="warning">
        You can also find my skills and project work documented in my resume. 
        <a href="/resume.pdf" target="_blank">Download now</a>
    </alert>
</template>

<script>
import Alert from "../Alert";

export default {
    components: {
        Alert
    }
}
</script>

<style scoped>
    a {
        color: inherit
    }
</style>