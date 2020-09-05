<template>
  <div class="base" :class="type">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style scoped>
    .base {
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        border-radius: 10px;
    }
    .primary {
        background: #CCE5FF;
        border: 1px solid #B8DAFF;
        color: #004085;
    }
    .warning {
        background: #FFF3CD;
        border: 1px solid #FFEEBA;
        color: #856404;
    }
    .success {
        background: #D4EDDA;
        border: 1px solid #C3E6CB;
        color: #155724;
    }
    .info {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
    }
    .danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }

    @media (max-width: 450px) {
        .base {
            font-size: 1rem;
        }
    }
</style>