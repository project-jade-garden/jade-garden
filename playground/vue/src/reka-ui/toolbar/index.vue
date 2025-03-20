<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "reka-ui";
import { ref } from "vue";

const toggleStateSingle = ref("center");
const toggleStateMultiple = ref([]);
</script>

<template>
  <ToolbarRoot aria-label="Formatting options">
    <ToolbarToggleGroup
      v-model="toggleStateMultiple"
      type="multiple"
      aria-label="Text formatting"
    >
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <Icon icon="radix-icons:font-bold" />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <Icon icon="radix-icons:font-italic" />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <Icon icon="radix-icons:strikethrough" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      v-model="toggleStateSingle"
      type="single"
      aria-label="Text Alignment"
    >
      <ToolbarToggleItem value="left" aria-label="Left Aligned">
        <Icon icon="radix-icons:text-align-left" />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center Aligned">
        <Icon icon="radix-icons:text-align-center" />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right Aligned">
        <Icon icon="radix-icons:text-align-right" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#" target="_blank" style="margin-right: 10">
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton style="margin-left: auto"> Share </ToolbarButton>
  </ToolbarRoot>
</template>
