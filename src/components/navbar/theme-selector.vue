<template lang="pug">
n-button(@click="theme.changeTheme")
  template(#icon)
    n-icon
      template(v-if="theme.getTheme.name == 'Light'")
        tabler-sun
      template(v-if="theme.getTheme.name == 'Dark'")
        tabler-moon
      template(v-if="theme.getTheme.name == 'System'")
        tabler-device-laptop
  | {{ theme.getTheme.name }}
</template>

<script setup lang="ts">
import themeStore from '@store/theme';

const theme = themeStore();
</script>

<style scoped>
.n-button {
  width: 80px;
}
</style>
