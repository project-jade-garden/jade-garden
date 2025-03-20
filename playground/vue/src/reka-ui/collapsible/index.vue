<script setup lang="ts">
// import type { CollapsibleRootEmits, CollapsibleRootProps } from "reka-ui";
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  // useForwardPropsEmits,
} from "reka-ui";

// const props = defineProps<CollapsibleRootProps>();
// const emits = defineEmits<CollapsibleRootEmits>();
// const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <CollapsibleRoot>
    <CollapsibleTrigger>Trigger</CollapsibleTrigger>
    <CollapsibleContent>Content</CollapsibleContent>
  </CollapsibleRoot>
</template>
