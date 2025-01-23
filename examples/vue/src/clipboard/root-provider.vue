<script setup lang="ts">
import { Clipboard, useClipboard } from "@ark-ui/vue/clipboard";
import { default as CheckIcon } from "../icons/check.vue";
import { default as ClipboardCopyIcon } from "../icons/clipboard-copy.vue";

const clipboard = useClipboard({ value: "https.//ark-ui.com" });
</script>

<template>
  <button @click="clipboard.copy()">Copy</button>

  <Clipboard.RootProvider :value="clipboard">
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
  </Clipboard.RootProvider>
</template>
