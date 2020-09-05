<template>
  <div class="banner">
      <div class="text-section">
          <div class="banner-title">{{title}}</div>
          <div class="banner-sub-title">{{subTitle}}</div>
      </div>
      <slot name="image"></slot>
  </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        subTitle: String
    }
}
</script>

<style scoped>
    .banner {
        display: flex;
        align-items: flex-end;
        /* border: 1px solid; */
    }

    .text-section {
        flex: 1;
    }

    .banner-title {
        font-size: 4rem;
        font-weight: 300;
    }

    .banner-sub-title {
        color: #999;
        font-weight: 500;
        font-size: 2.2rem;
    }

    @media (max-width: 768px) {
        .banner {
            flex-direction: column-reverse;
            align-items: center;
        }
        .text-section {
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        .banner-title {
            font-size: 3.5rem;
        }

        .banner-sub-title {
            color: #999;
            font-weight: 500;
            font-size: 1.7rem;
        }
    }

    @media (max-width: 450px) {
        .banner-title {
            font-size: 2.2rem;
        }

        .banner-sub-title {
            color: #999;
            font-weight: 500;
            font-size: 1.2rem;
        }
    }
</style>