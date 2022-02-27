<template lang="pug">
p Page Two
router-link(:to="{ name: 'home-page'}") Click Here To Return!
</template>

<script lang="ts">
export default {
  name: 'users-page',
};
</script>

<route lang="yaml">
name: 'users'
meta:
  requiresAuth: true
  navbarDisplay: true
  navbarName: 'Users'
</route>
