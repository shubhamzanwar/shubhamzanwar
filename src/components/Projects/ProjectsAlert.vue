<template>
    <div class="spacer">
        <alert type="success">
            Most of these projects are available on 
            <a href="https://github.com/shubhamzanwar" target="_blank">GitHub</a>. You can also find them all in 
            <a href="/resume.pdf" target="_blank">my resume</a>
        </alert>
    </div>
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
    .spacer {
        margin-top: 3rem;
    }
    a {
        color: inherit
    }
</style>