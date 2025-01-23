<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { Check } from "lucide-vue-next";
</script>

<template>
  <Checkbox.Root>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <Check />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
