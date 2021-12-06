<template lang="pug">
p {{ text }}
demo-component
</template>

<script lang="ts" setup>
const text = 'Hello world! This is a Vue 3 Template!';
</script>

<route lang="yaml">
name: 'home-page'
</route>
