<template>
    <banner
        title="404 - Not found!"
        subTitle="This page does not exist"
    >
        <template v-slot:image>
            <g-image src="~/assets/404.png" class="banner-image" />
        </template>
    </banner>
</template>

<script>
import Banner from "../Banner";

export default {
  components: {
    banner: Banner
  }
}
</script>

<style scoped>
  .banner-image {
    width: 26rem;
  }

  @media (max-width: 450px) {
    .banner-image {
      width: 22rem;
    }
  }
</style>