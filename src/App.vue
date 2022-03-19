<script lang="ts" setup>
// Use Auth
import useAuth from '@composables/auth';
import themeStore from '@store/theme';

const theme = themeStore();

const currentTheme = computed(() => theme.getCurrentTheme);

useAuth();
</script>

<script lang="ts">

export default {
  name: 'app-base',
};
</script>

<template lang="pug">
n-config-provider(:theme="currentTheme")
  router-view
</template>
