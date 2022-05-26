<script lang="ts" setup>
// Use Auth
import useAuth from '@composables/auth';
import themeStore from '@store/theme';

useAuth();

const theme = themeStore();

theme.loadTheme(theme.getTheme.value);
</script>

<script lang="ts">

export default {
  name: 'app-base',
};
</script>

<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-page-container
    router-view
</template>
