<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import {
  Accordion,
  type AccordionRootEmits,
  type AccordionRootProps,
} from "@ark-ui/vue/accordion";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { ChevronDown } from "lucide-vue-next";
import { type Theme, getTheme } from "../utils";

export interface AccordionProps extends AccordionRootProps {
  items: string[];
  theme: Theme;
}

const props = defineProps<AccordionProps>();
const emits = defineEmits<AccordionRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
const styledSlots = getTheme(
  {
    minimal: minimal.accordionStyles,
    park: park.accordionStyles,
    shadcn: shadcn.accordionStyles,
  },
  props.theme
);
</script>

<template>
  <Accordion.Root v-bind="forwarded" :class="clsx(styledSlots.root)">
    <Accordion.Item
      v-for="item in items"
      :key="item"
      :value="item"
      :class="clsx(styledSlots.item)"
    >
      <Accordion.ItemTrigger :class="clsx(styledSlots.itemTrigger)">
        What is {{ item }}?
        <Accordion.ItemIndicator :class="clsx(styledSlots.itemIndicator)">
          <ChevronDown />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent :class="clsx(styledSlots.itemContent)"
        >{{ item }} is a JavaScript library for building user
        interfaces.</Accordion.ItemContent
      >
    </Accordion.Item>
  </Accordion.Root>
</template>
