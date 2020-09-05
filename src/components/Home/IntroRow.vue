<template>
  <div class="intro-row">
      <div class="content">
        I’m a software developer from 
        <a href="https://goo.gl/maps/mn5mJev3FBNnU6GR8" target="_blank">Bangalore, India</a>. 
        I’ve been designing and developing solutions since 2018
      </div>
      <div class="content margined-content">
        I have been working in agile teams at 
        <a href="https://www.mckinsey.com/business-functions/mckinsey-digital/how-we-help-clients" target="_blank">Mckinsey digital labs</a> 
        and serving varied clients across different geographies
      </div>
      <div class="content">
        I also actively contribute to 
        <a href="https://github.com/shubhamzanwar" target="_blank">open source projects</a> and maintain a 
        <a href="https://medium.com/@zanwar.shubham" target="_blank">blog</a> to document my learnings
      </div>

      <div class="mobile-content">
        I’m a software developer from 
        <a href="https://goo.gl/maps/mn5mJev3FBNnU6GR8" target="_blank">Bangalore, India</a>. 
        I’ve been designing and developing solutions since 2018. I have been working in agile teams at 
        <a href="https://www.mckinsey.com/business-functions/mckinsey-digital/how-we-help-clients" target="_blank">Mckinsey digital labs</a> 
        and serving varied clients across different geographies. I also actively contribute to 
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