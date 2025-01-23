<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { Check } from "lucide-vue-next";
</script>

<template>
  <Checkbox.Root>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Context v-slot="checkbox">
      <Checkbox.Label
        >Checkbox {{ checkbox.checked.toString() }}</Checkbox.Label
      >
    </Checkbox.Context>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
