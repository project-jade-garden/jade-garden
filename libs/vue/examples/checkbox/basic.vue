<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { default as CheckIcon } from "../icons/check.vue";
</script>

<template>
  <Checkbox.Root>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
