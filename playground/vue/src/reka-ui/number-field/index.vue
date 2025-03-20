<script setup lang="ts">
import { Icon } from "@iconify/vue";
// import type { NumberFieldRootProps } from "reka-ui";
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from "reka-ui";

// const props = defineProps<NumberFieldRootProps>();
</script>

<template>
  <NumberFieldRoot id="number-field" data-testid="root">
    <label for="number-field" data-testid="label">Number Field</label>
    <NumberFieldDecrement data-testid="decrement">
      <Icon icon="radix-icons:minus" />
    </NumberFieldDecrement>
    <NumberFieldInput data-testid="input" />
    <NumberFieldIncrement data-testid="increment">
      <Icon icon="radix-icons:plus" />
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>
