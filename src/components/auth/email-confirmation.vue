<template lang="pug">
q-form.full-width.q-gutter-y-md(
  @submit.prevent="emailSignIn"
)
  .row
    q-input.full-width(
      label="email"
      v-model="email"
      :loading="auth.loadingStatus"
      :disable="auth.loadingStatus"
    )
      template(v-slot:prepend)
        tabler-mail
  .row
    q-btn.full-width(
      outline
      :disabled="auth.loadingStatus"
      @click.prevent="emailSignIn"
    )
      | Confirm Email
</template>

<script setup lang="ts">
import authStore from '@store/auth';

const auth = authStore();

const email = ref('');

const emailSignIn = () => auth.signInWithEmail(email.value);
</script>
