<template lang="pug">
n-layout(has-sider)
  n-layout-sider(
    bordered
    width="280"
  )
    RoomCreation(
      @create-room="handleRoomCreation"
      :creating-room="creatingRoom"
      button-text="New Room"
    )
    n-menu(:options="chats.getRoomMenuData" :value="chats.selectedRoom")
  router-view
</template>

<script setup lang="ts">
import chatsStore from '@store/rooms';
import RoomCreation1 from '@components/rooms/roomCreation.vue';

// Chats Store Setup
const chats = chatsStore();
chats.initRooms();
onBeforeUnmount(() => chats.exitRooms());

// Local Room Creation Form
const creatingRoom = ref(false);

const handleRoomCreation = async (roomName: string) => {
  if (roomName.length === 0) return false;
  creatingRoom.value = true;
  await chats.createRoom(roomName);
  creatingRoom.value = false;
  return true;
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
