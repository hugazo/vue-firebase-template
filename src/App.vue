<script setup lang="ts">
import { ref } from 'vue';

const value = ref('Hello');

const logMessage = () => console.log(value.value);
</script>

<template lang="pug">
div
  button(@click="logMessage")
    | {{ value }}
  router-view
</template>
