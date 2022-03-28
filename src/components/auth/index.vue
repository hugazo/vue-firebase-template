<template lang="pug">
div
  n-card(
    title="Welcome"
    header-style="text-align: center;"
    )
    email-login
    social-login
    n-space(justify="center")
      n-text Select Your Theme:
    n-space(justify="center")
      theme-selector
</template>

<script lang="ts">
export default {
  name: 'auth-index',
};
</script>
