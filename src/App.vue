<script lang="ts" setup>
// App wide Auth Store Init
import authStore from '@/store/auth';

const auth = authStore();
auth.init();
</script>

<script lang="ts">
export default {
  name: 'app-base',
};
</script>

<template lang="pug">
router-view
</template>
