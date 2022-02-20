<template lang="pug">
n-layout
  n-text User Logged Template
n-layout-footer
</template>

<script lang="ts">
export default {
  name: 'home-page',
};
</script>

<route lang="yaml">
name: 'home-page'
meta:
  requiresAuth: true
  navbarDisplay: true
</route>

