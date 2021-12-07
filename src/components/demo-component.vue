<script setup lang="ts">
import demoStore from '@store/demo';

const store = demoStore();
</script>

<template lang="pug">
n-space
  n-button(@click.prevent="store.sum")
    | +
  n-button(@click.prevent="store.rest")
    | -
  p Total: {{ store.getCounter }}
  p Clicks: {{ store.getClicks }}
  router-view
</template>
