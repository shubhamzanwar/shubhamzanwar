<template>
  <div class="intro-row">
      <div class="content">
        I’m an Indian software developer currently living in 
        <a href="https://goo.gl/maps/KKJPp9zt7VAz8Crb7" target="_blank">Stockholm, Sweden</a>. 
        I’ve been designing and developing solutions since 2018
      </div>
      <div class="content margined-content">
        I currently work at <a href="https://anyfin.com/sv_SE">Anyfin AB</a> where we help our
        customers improve their financial life by refinancing their existing loans and credit cards at lower rates.
      </div>
      <div class="content">
        I love learning and experimenting in my free time. I also actively contribute to 
        <a href="https://github.com/shubhamzanwar" target="_blank">open source projects</a> and maintain a 
        <a href="https://medium.com/@zanwar.shubham" target="_blank">blog</a> to document my learnings
      </div>

      <div class="mobile-content">
        I’m an Indian software developer currently living in 
        <a href="https://goo.gl/maps/KKJPp9zt7VAz8Crb7" target="_blank">Stockholm, Sweden</a>. 
        I’ve been designing and developing solutions since 2018. I currently work at 
        <a href="https://anyfin.com/sv_SE">Anyfin AB</a> where we help our
        customers improve their financial life by refinancing their existing loans and credit cards at lower rates.
        I love learning and experimenting in my free time. I also actively contribute to 
        <a href="https://github.com/shubhamzanwar" target="_blank">open source projects</a> and maintain a 
        <a href="https://medium.com/@zanwar.shubham" target="_blank">blog</a> to document my learnings
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .intro-row {
        display: flex;
        margin-top: 3rem;
    }

    .content {
        flex: 1;
        font-size: 1.3rem;
        color: #222222;
        font-weight: 400;
    }
    .margined-content {
        margin: 0 2rem;
    }

    a {
      color: inherit;
      text-decoration: underline;
    }

    .mobile-content {
      flex: 1;
      font-size: 1rem;
      color: #222222;
      font-weight: 400;
      display: none;
    }

    @media (max-width: 600px) {
        .intro-row {
            flex-direction: column;
            margin-top: 2rem;
        }

        .mobile-content {
          display: block;
        }

        .content {
          display: none;
        }
    }
</style>