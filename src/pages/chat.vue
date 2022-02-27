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
    n-menu(:options="chats.getRoomMenuData" :value="chats.selectedRoom")
  router-view
</template>

<script setup lang="ts">
import chatsStore from '@store/rooms';

// Chats Store Setup
const chats = chatsStore();
chats.initRooms();
onBeforeUnmount(() => chats.exitRooms());

// Local Room Creation Form
const newRoom = ref('');
const creatingRoom = ref(false);

const handleRoomCreation = async () => {
  creatingRoom.value = true;
  await chats.createRoom(newRoom.value);
  newRoom.value = '';
  creatingRoom.value = false;
};
</script>

<route lang="yaml">
meta:
  requiresAuth: true
</route>

<style scoped>
.n-layout {
  height: 100%;
}
</style>
