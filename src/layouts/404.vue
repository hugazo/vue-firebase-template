<template lang="pug">
p {{ message }}
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
