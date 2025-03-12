<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { Check, ClipboardCopy } from "lucide-vue-next";
</script>

<template>
  <Clipboard.Root value="https.//ark-ui.com">
    <Clipboard.Label>Copy this link</Clipboard.Label>
    <Clipboard.Control>
      <Clipboard.Input />
      <Clipboard.Trigger>
        <Clipboard.Indicator>
          <ClipboardCopy />
          <template #copied>
            <Check />
          </template>
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</template>
