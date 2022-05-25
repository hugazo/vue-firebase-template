<template lang="pug">
q-page.window-height.window-width.row.justify-center.items-center
  .column
    .row.justify-center
      h5 42devs - Sign-in
    .row
      Auth
//- n-layout-content
//-   n-grid(
//-     :cols="12"
//-     item-responsive
//-     responsive="screen"
//-   )
//-     n-gi(
//-       offset="0 s:1 m:2 l:3 xl:4"
//-       span="12 s:10 m:8 l:6 xl:4"
//-     )
//-       Auth
</template>

<script lang="ts">
import authStore from '@/store/auth';

export default {
  setup() {
    const auth = authStore();
    return {
      auth,
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

<style scoped>
.n-layout {
  height: 100vh;
}

.n-layout-content {
  padding-top: 24px;
}
</style>
