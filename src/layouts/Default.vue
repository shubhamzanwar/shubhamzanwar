<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="brand-btn">SZ</g-link>
      </strong>
    </header>
    <slot/>
    <footer class="footer">
      © Shubham Zanwar
    </footer>
  </div>
</template>

<style>

  html {
    font-size: 16px;
  }
  body {
    font-family: Roboto,"Helvetica Neue",Arial,sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  .layout {
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 1280px;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    height: 1.75rem;
    margin-top: 3rem;
  }

  .footer {
    padding: 1rem 0 3rem;
    font-size: 0.8rem;
    color: #999999;
  }

  .brand-btn {
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: normal;
    color: black;
  }

  @media (max-width: 1175px) {
    html {
      font-size: 12px;
    }
  }
</style>

<script>
export default {
}
</script>
