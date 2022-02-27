<template lang="pug">
p Non Routed
</template>

<script setup lang="ts">
import chatsStore from '@/store/rooms';

const chats = chatsStore();

chats.selectRoom(null);
</script>

<route lang="yaml">
name: chat
meta:
  navbarDisplay: true
  navbarName: 'Chat'
</route>
