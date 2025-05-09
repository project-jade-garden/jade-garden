<script setup lang="ts">
import type { AccordionRootEmits, AccordionRootProps } from "reka-ui";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  useEmitAsProps,
} from "reka-ui";
import { ref } from "vue";

withDefaults(defineProps<{ type?: AccordionRootProps["type"] }>(), {
  type: "single",
});
const emits = defineEmits<AccordionRootEmits>();
const values = ["One", "Two", "Three", "Four"];
const count = ref(1);
</script>

<template>
  <AccordionRoot v-bind="useEmitAsProps(emits)" :type="type ? type : 'single'">
    <AccordionItem v-for="value in values" :key="value" :value="value">
      <AccordionHeader>
        <AccordionTrigger>
          {{ value }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent v-for="i in count" :key="i">
        <div>Content {{ value }}</div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
