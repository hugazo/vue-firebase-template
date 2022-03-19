<template lang="pug">
n-button(@click="theme.changeTheme")
  | {{ theme.getThemeName }}
</template>

<script setup lang="ts">
import themeStore from '@store/theme';

const theme = themeStore();
</script>
