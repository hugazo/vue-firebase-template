<template lang="pug">
n-result(
  status="404"
  title="Oops! 404 Not Found"
  description="Sorry we could not find the page you were looking for."
)
  template(#footer)
    n-button(@click="goHome")
      | Go Home
</template>

<script lang="ts" setup>
const router = useRouter();

const goHome = () => router.push({ name: 'home-page' });
</script>

<script lang="ts">
export default {
  name: '404-page',
};
</script>

<route lang="yaml">
meta:
  layout: '404'
</route>
