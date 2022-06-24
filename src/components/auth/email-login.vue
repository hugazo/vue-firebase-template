<template lang="pug">
q-form.full-width.q-gutter-y-md(
  @submit.prevent="emailAuth"
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
      @click.prevent="emailAuth"
      )
      | Email Authentication
</template>

<script setup lang="ts">
import authStore from '@/store/auth';

const auth = authStore();

// TODO: Form validation
const email = ref('');

const emailAuth = () => auth.emailAuth(email.value);

const rules = {
  email: {
    required: true,
    message: 'Please input a valid email',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: 'Input your password',
    trigger: [
      'blur',
      'input',
    ],
    min: 6,
  },
};
</script>
