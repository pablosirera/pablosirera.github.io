<template>
  <section class="container">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'PageLayout',
}
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  padding: 16px;

  @media (max-width: 540px) {
    padding: 16px 0;
  }
}
</style>
