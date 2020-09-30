<template>
  <a :href="link">
    <font-awesome :icon="['fab', iconType]" class="social-icon" />
  </a>
</template>

<script>
export default {
    props: {
        iconType: String,
        link: String
    }
}
</script>

<style scoped>
    .social-icon {
        color: #999;
        margin-right: 0.3rem;
    }
</style>