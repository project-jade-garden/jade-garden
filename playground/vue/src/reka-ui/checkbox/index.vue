<script setup lang="ts">
import { Icon } from "@iconify/vue";
// import type { CheckboxRootProps } from "reka-ui";
import { CheckboxIndicator, CheckboxRoot } from "reka-ui";
// import { ref } from "vue";

// const props = defineProps<CheckboxRootProps>();
// const modelValue = ref(props.modelValue);
</script>

<template>
  <label for="test"> Test </label>
  <CheckboxRoot name="test" aria-label="Test">
    <CheckboxIndicator data-testid="test-indicator">
      <Icon icon="radix-icons:check" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
