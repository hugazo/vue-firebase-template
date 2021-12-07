<template lang="pug">
p Index-page
router-link(:to="{ name: 'page-two' }") Page Two
n-button(@click.prevent="auth.logout") Logout
</template>

<script lang="ts">
import authStore from '@/store/auth';

export default {
  name: 'home-page',
  setup() {
    const auth = authStore();
    return {
      auth,
    };
  },
};
</script>

<route lang="yaml">
name: 'home-page'
</route>
