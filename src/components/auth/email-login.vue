<template lang="pug">
n-form(
  :disabled="auth.loadingStatus"
  :rules="rules"
  label-width=100
  @submit.prevent="emailPasswordLogin"
)
  n-form-item(
    label="Email"
    label-placement="left"
    :required="true"
  )
    n-input(
      round
      :input-props="{ type:'email' }"
      v-model:value="email"
    )
  n-form-item(
    label="Password"
    label-placement="left"
    :required="true"
  )
    n-input(
      round
      type="password"
      v-model:value="password"
      @keyup.enter="emailPasswordLogin"
    )
  n-space(
    justify="center"
  )
    n-button(
      round
      @click.prevent="emailPasswordLogin"
      :loading="auth.loadingStatus"
    )
      | Login With Email
</template>

<script setup lang="ts">
import authStore from '@/store/auth';

const auth = authStore();

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
