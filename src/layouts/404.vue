<template lang="pug">
n-layout
  router-view
</template>

<script setup lang="ts">
const message = 'Oops! This is a 404';
</script>

<script lang="ts">
export default {
  name: '404-layout',
};
</script>

<style scoped>
.n-layout {
  height: 100vh;
  padding-top: 40px;
}
</style>
