<template lang="pug">
q-form.login-form.q-px-xl(@submit.prevent="emailPasswordLogin")
  .row.justify-center
    q-input(
      label="email"
      v-model="email"
      :loading="auth.loadingStatus"
      :disable="auth.loadingStatus"
      )
      template(v-slot:prepend)
        tabler-mail
  .row.justify-center
    q-input(
      label="password"
      type="password"
      v-model="password"
      :loading="auth.loadingStatus"
      :disable="auth.loadingStatus"
      @keyup.enter="emailPasswordLogin"
      )
      template(v-slot:prepend)
        tabler-key
  .row.justify-center
    q-btn.q-mt-md(
      color="primary"
      :disabled="auth.loadingStatus"
      @click="emailPasswordLogin"
      )
      | Login With Email
</template>

<script setup lang="ts">
import authStore from '@/store/auth';

const auth = authStore();

// TODO: Form validation
const email = ref('');
const password = ref('');

const emailPasswordLogin = () => auth.loginWithEmailAndPassword(email.value, password.value);

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
