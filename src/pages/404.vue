<template>
    <Layout>
        <div class="not-found-page">
            <not-found-banner />
            <not-found-alert />
        </div>
    </Layout>
</template>

<script>
import NotFoundBanner from "../components/404/NotFoundBanner";
import NotFoundAlert from "../components/404/NotFoundAlert";

export default {
    components: {
        NotFoundBanner,
        NotFoundAlert,
    },
    metaInfo: {
        title: 'Not Found'
    }
}
</script>

<style scoped>
    .not-found-page {
        flex: 1;
    }
</style>
