<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion";
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

const items = ref(["React", "Solid", "Vue"]);
</script>

<template>
  <Accordion.Root collapsible>
    <Accordion.Item v-for="item in items" :key="item" :value="item">
      <Accordion.ItemTrigger>
        What is {{ item }}?
        <Accordion.ItemIndicator><ChevronDown /></Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>{{ item }} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
