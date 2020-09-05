<template>
  <alert type="primary">
    If you would like to chat, you can reach out to me on 
    <a href="https://twitter.com/szanwar22" target="_blank">Twitter</a> or even 
    <a href="mailto:zanwar.shubham@gmail.com">send me an email</a>
  </alert>
</template>

<script>
import Alert from '../Alert.vue';

export default {
    components: {
        Alert
    }
}
</script>

<style scoped>
    a {
        color: inherit;
    }
</style>