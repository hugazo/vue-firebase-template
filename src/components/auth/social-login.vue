<template lang="pug">
.col
  .row
    p Or Just Login With
  .row
    q-btn-group(outline)
      q-btn(
        outline
        @click.prevent="auth.signInWithGoogle"
        )
        q-icon(left)
          tabler-brand-google
        | Google
      q-btn(
        outline
        @click.prevent="auth.signInWithFacebook"
        )
        q-icon(left)
          tabler-brand-facebook
        | Facebook
      q-btn(
        outline
        @click.prevent="auth.signInWithGithub"
        )
        q-icon(left)
          tabler-brand-github
        | Github
</template>

<script setup lang="ts">
import authStore from '@/store/auth';

const auth = authStore();
</script>
