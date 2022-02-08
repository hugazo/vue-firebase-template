<script lang="ts" setup>
// Use Auth
import useAuth from '@composables/auth';
import { darkTheme } from 'naive-ui';

useAuth();
</script>

<script lang="ts">

export default {
  name: 'app-base',
};
</script>

<template lang="pug">
n-config-provider(:theme="darkTheme")
  router-view
</template>
