<template lang="pug">
div
  n-card(
    title="Welcome"
    header-style="text-align: center;"
    )
    email-login
    social-login
</template>

<script lang="ts">
export default {
  name: 'auth-index',
};
</script>
