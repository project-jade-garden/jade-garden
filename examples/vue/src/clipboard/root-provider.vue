<script setup lang="ts">
import { Clipboard, useClipboard } from "@ark-ui/vue/clipboard";
import { Check, ClipboardCopy } from "lucide-vue-next";

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
          <ClipboardCopy />
          <template #copied>
            <Check />
          </template>
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.RootProvider>
</template>
