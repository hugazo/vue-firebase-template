<template lang="pug">
q-page.window-height.window-width.row.justify-center.items-center
  .column
    .row.justify-center
      h5 42devs - Sign-in
    .row
      Auth
</template>

<script lang="ts">
import authStore from '@/store/auth';

export default {
  setup() {
    const auth = authStore();
    return {
      auth,
    };
  },
  name: 'sign-in',
};
</script>


<route lang="yaml">
name: 'sign-in'
meta:
  layout: 'unauthenticated'
</route>

<style scoped>
.n-layout {
  height: 100vh;
}

.n-layout-content {
  padding-top: 24px;
}
</style>
