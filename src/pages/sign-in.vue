<template lang="pug">
n-button(
  v-if="!auth.logged"
  @click.prevent="auth.loginWithPopup"
  )
  | Sign In With Google!
n-button(
  v-else
  @click.prevent="auth.logout"
  )
  | Logout
n-button(@click="redirect") Home
</template>

<script lang="ts">
import authStore from '@/store/auth';

export default {
  setup() {
    const auth = authStore();
    const router = useRouter();
    const redirect = () => router.push('/');
    return {
      auth,
      redirect,
    };
  },
  name: 'sign-in',
};
</script>


<route lang="yaml">
name: 'sign-in'
meta:
  layout: 'unauthenticated'
</route>
