<template lang="pug">
n-space(justify="center")
  n-text Or just log in with:
n-space(justify="center")
  n-button-group
    n-button(
      :loading="auth.loadingStatus"
      @click="auth.signInWithGoogle"
      )
      template(#icon)
        n-icon
          tabler-brand-google
      | Google
    n-button(
      :loading="auth.loadingStatus"
      @click="auth.signInWithFacebook"
      )
      template(#icon)
        n-icon
          tabler-brand-facebook
      | Facebook
    n-button(
      :loading="auth.loadingStatus"
      @click="console.log('Github Login')"
      )
      template(#icon)
        n-icon
          tabler-brand-github
      | Github
</template>

<script setup lang="ts">
import authStore from '@/store/auth';

const auth = authStore();
</script>
