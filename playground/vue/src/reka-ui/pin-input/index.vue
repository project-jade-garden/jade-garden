<script setup lang="ts">
import {
  PinInputInput,
  PinInputRoot,
  // type PinInputRootEmits,
  // type PinInputRootProps,
  // useEmitAsProps,
} from "reka-ui";
import { ref } from "vue";
import Label from "../label/index.vue";

// const props = defineProps<PinInputRootProps>();
// const emits = defineEmits<PinInputRootEmits>();

const value = ref<string[]>([]);
</script>

<template>
  <Label for="otp">Test label</Label>
  <PinInputRoot placeholder="*">
    <PinInputInput v-for="(id, index) in 5" :key="id" :index="index" />
  </PinInputRoot>

  <button @click="value = []">Reset value</button>
</template>
