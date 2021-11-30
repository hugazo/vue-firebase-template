<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);

const handleButtonClick = () => {
  value.value += 1;
};
</script>

<template lang="pug">
div
  button(@click="handleButtonClick")
    | Clicks: {{ value }}
  router-view
</template>
