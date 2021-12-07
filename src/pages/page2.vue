<template lang="pug">
p Page Two
router-link(:to="{ name: 'home-page'}") Click Here To Return!
</template>

<script lang="ts">
export default {
  name: 'page-two',
};
</script>

<route lang="yaml">
name: 'page-two'
</route>
