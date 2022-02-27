<template lang="pug">
n-layout
  p(v-if="$attrs.id") {{ $attrs.id }}
  p(v-else) Non Attrs
</template>

<script lang="ts" setup>
import chatsStore from '@/store/rooms';

const attrs = useAttrs();

const chats = chatsStore();

onBeforeUpdate(() => chats.selectRoom(attrs.id));
</script>
