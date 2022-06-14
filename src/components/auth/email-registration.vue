<template lang="pug">
q-form.full-width.q-gutter-y-md(
  @submit.prevent="emailRegistration"
)
  .row
    q-input.full-width(
      label="email"
      v-model="email"
      )
      template(v-slot:prepend)
        tabler-mail
  .row
    q-input.full-width(
      label="password"
      type="password"
      v-model="password"
      )
      template(v-slot:prepend)
        tabler-key
  .row
    q-btn.full-width(
      outline
      @click.prevent="emailRegistration"
      )
      | Register with Email
</template>

<script setup lang="ts">
import auth from '@/composables/auth';
import authStore from '@store/auth';

const store = authStore();

const email = ref('');
const password = ref('');

const emailRegistration = () => store.registerWithEmailAndPassword(email.value, password.value);
</script>
