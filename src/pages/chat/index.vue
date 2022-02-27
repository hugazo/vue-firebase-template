<template lang="pug">
p No Room Selected
</template>

<script setup lang="ts">
import chatsStore from '@/store/rooms';

const chats = chatsStore();

onBeforeMount(() => chats.selectRoom(null));
</script>

<route lang="yaml">
name: chat
meta:
  navbarDisplay: true
  navbarName: 'Chat'
</route>
