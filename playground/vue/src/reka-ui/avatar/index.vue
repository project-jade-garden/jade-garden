<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot } from "reka-ui";

defineProps<{ delay?: number }>();
</script>

<template>
  <AvatarRoot>
    <AvatarImage
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      alt="Colm Tuite"
    />
    <AvatarFallback :delay-ms="delay ?? 0"> CT </AvatarFallback>
  </AvatarRoot>
</template>
