<template lang="pug">
n-layout(has-sider)
  n-layout-sider(
    bordered
    width="200"
  )
    n-form
      n-form-item
        n-input(v-model:value="newRoom" :disabled="creatingRoom")
        n-button(@click="handleRoomCreation" :disabled="creatingRoom") Send
    n-menu(:options="chats.getRoomMenuData")
  n-layout
</template>

<script setup lang="ts">
import chatsStore from '@/store/chat';

const chats = chatsStore();

chats.initRooms();

const newRoom = ref('');
const creatingRoom = ref(false);

const handleRoomCreation = async () => {
  creatingRoom.value = true;
  await chats.createRoom(newRoom.value);
  newRoom.value = '';
  creatingRoom.value = false;
};

onBeforeUnmount(() => chats.exitRooms());
</script>

<route lang="yaml">
meta:
  requiresAuth: true
  navbarDisplay: true
</route>

<style scoped>
.n-layout {
  height: 100%;
}
</style>
