<template lang="pug">
n-layout
  n-grid(
    x-gap="12"
    cols="1"
  )
    n-gi
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
