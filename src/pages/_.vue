<template lang="pug">
router-link(:to="{ name: 'home-page' }")
  p Back Home
</template>

<script>
export default {
  name: '404-page',
};
</script>

<route lang="yaml">
meta:
  layout: '404'
</route>
