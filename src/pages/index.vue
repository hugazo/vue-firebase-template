<template lang="pug">
p This text should update the site title
input(v-model="title")
demo-component
</template>

<script lang="ts" setup>
const title = ref('Hola mundo!');
useHead({ title });
</script>

<route lang="yaml">
name: 'home-page'
</route>
