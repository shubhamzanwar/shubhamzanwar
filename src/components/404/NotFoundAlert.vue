<template>
    <div class="spacer">
        <alert type="danger">
            You have either been linked to a non existing page or have reached a page that i yet to be built.
            Either way, you should head <g-link to="/">home</g-link>
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