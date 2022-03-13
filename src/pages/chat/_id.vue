<template lang="pug">
n-layout
  p(v-if="$attrs.id") Selected: {{ $attrs.id }}
</template>

<script lang="ts" setup>
import roomsStore from '@/store/rooms';

const attrs = useAttrs();

const rooms = roomsStore();

const selectRoom = () => rooms.selectRoom(attrs.id as string);

onBeforeMount(selectRoom);

onBeforeUpdate(selectRoom);
</script>
