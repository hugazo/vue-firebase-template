<script lang="ts" setup>
// Use Auth
import useAuth from '@composables/auth';
import { darkTheme, useOsTheme } from 'naive-ui';

const osTheme = useOsTheme();

const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null));

useAuth();
</script>

<script lang="ts">

export default {
  name: 'app-base',
};
</script>

<template lang="pug">
n-config-provider(:theme="theme")
  router-view
</template>
