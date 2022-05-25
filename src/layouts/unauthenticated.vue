<template lang="pug">
q-layout
  router-view
</template>

<script lang="ts" setup>
import useGuard from '@composables/auth/guards';

useGuard(false, 'home-page');
</script>

<script lang="ts">
export default {
  name: 'unauthenticated-layout',
};
</script>
