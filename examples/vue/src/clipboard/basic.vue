<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { default as CheckIcon } from "../icons/check.vue";
import { default as ClipboardCopyIcon } from "../icons/clipboard-copy.vue";
</script>

<template>
  <Clipboard.Root value="https.//ark-ui.com">
    <Clipboard.Label>Copy this link</Clipboard.Label>
    <Clipboard.Control>
      <Clipboard.Input />
      <Clipboard.Trigger>
        <Clipboard.Indicator>
          <ClipboardCopyIcon />
          <template #copied>
            <CheckIcon />
          </template>
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</template>
