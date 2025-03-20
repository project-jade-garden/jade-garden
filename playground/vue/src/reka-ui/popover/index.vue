<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "reka-ui";
import { ref } from "vue";

const toggleState = ref(false);
</script>

<template>
  <PopoverRoot v-model:open="toggleState" :modal="false">
    <PopoverTrigger aria-label="Update dimensions">
      <Icon icon="radix-icons:mixer-horizontal" />
      Open
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent side="bottom" :side-offset="5">
        <div>
          <p>Dimensions</p>
        </div>
        <PopoverClose aria-label="Close"> Close </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
