<script setup lang="ts">
import { ref } from 'vue';
import demoStore from '@store/demo';

const store = demoStore();

const handleSum = () => { store.sum(); };
const handleRest = () => { store.rest(); };
</script>

<template lang="pug">
div
  button(@click="handleSum")
    | +
  button(@click="handleRest")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}
  router-view
</template>
