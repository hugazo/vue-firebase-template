<script setup lang="ts">
import demoStore from '@store/demo';

const store = demoStore();
</script>

<template lang="pug">
div
  button(@click="store.sum")
    | +
  button(@click="store.rest")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}
  router-view
</template>
