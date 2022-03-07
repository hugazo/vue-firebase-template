<template lang="pug">
n-form
  n-form-item
    n-input-group
      n-input(
        v-model:value="newRoom"
        :disabled="creatingRoom"
        @keyup.enter="$emit('createRoom', newRoom)"
      )
      n-button(@click="$emit('createRoom', newRoom)" :loading="creatingRoom")
        | {{ buttonText }}
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  creatingRoom: Boolean,
  buttonText: String,
});

defineEmits(['createRoom']);
const newRoom = ref('');

watch(() => props.creatingRoom, (value) => {
  if (!value) newRoom.value = '';
});
</script>
