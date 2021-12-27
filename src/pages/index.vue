<template lang="pug">
n-layout
  n-layout-header
  n-layout(
    has-sider
  )
    n-layout-sider
    n-layout
      n-grid
        n-gi
          n-text User Logged Template
          n-button(@click="auth.logout")
            | Logout
  n-layout-footer
</template>

<script lang="ts" setup>
import authStore from '@/store/auth';

const auth = authStore();
</script>

<script lang="ts">
export default {
  name: 'home-page',
};
</script>

<route lang="yaml">
name: 'home-page'
</route>
