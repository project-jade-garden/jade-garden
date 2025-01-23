<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { default as CheckIcon } from "../icons/check.vue";
</script>

<template>
  <Checkbox.Root>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Context v-slot="checkbox">
      <Checkbox.Label>Checkbox {{ checkbox.checked.toString() }}</Checkbox.Label>
    </Checkbox.Context>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
