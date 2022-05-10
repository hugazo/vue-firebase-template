<script lang="ts" setup>
// Use Auth
import useAuth from '@composables/auth';

useAuth();
</script>

<script lang="ts">

export default {
  name: 'app-base',
};
</script>

<template lang="pug">
router-view
</template>
