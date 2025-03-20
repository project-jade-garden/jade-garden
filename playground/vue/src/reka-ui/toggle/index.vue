<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Toggle } from "reka-ui";
import { ref } from "vue";

const toggleState = ref<boolean>(false);
</script>

<template>
  <Toggle v-model="toggleState" aria-label="Toggle bold">
    <Icon icon="radix-icons:font-bold" />
  </Toggle>
</template>
