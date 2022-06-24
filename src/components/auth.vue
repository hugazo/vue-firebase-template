<template lang="pug">
q-card.q-pa-lg.shadow-2
  .row(v-if="auth.askEmail")
    email-confirmation
  template(v-else)
    .row
      email-login
    .row
      social-login
  .row.justify-center
    .column
      .row
        p Select Your Theme:
      .row
        theme-selector
</template>

<script lang="ts">
import authStore from '@store/auth';

export default {
  name: 'auth-index',
  setup() {
    const auth = authStore();
    return {
      auth,
    };
  },
};
</script>
