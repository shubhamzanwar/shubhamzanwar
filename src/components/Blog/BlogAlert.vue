<template>
    <div class="spacer">
        <alert type="info">
            I recently shifted my blog to this website. You can find my older posts on
            <a href="https://github.com/shubhamzanwar" target="_blank">medium</a> and 
            <a href="https://dev.to/shubhamzanwar" target="_blank">Dev.to</a>.
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