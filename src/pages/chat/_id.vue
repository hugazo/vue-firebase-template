<template lang="pug">
n-layout
  p(v-if="$attrs.id") Selected: {{ $attrs.id }}
</template>

<script lang="ts" setup>
import chatsStore from '@/store/rooms';

const attrs = useAttrs();

const chats = chatsStore();

onBeforeMount(() => chats.selectRoom(attrs.id as string));

onBeforeUpdate(() => chats.selectRoom(attrs.id as string));
</script>
