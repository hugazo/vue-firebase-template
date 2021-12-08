<template lang="pug">
router-view
</template>

<script lang="ts" setup>
import useGuard from '@composables/auth/guards';

useGuard(true, 'sign-in');
</script>

<script lang="ts">
export default {
  name: 'authenticated-layout',
};
</script>
