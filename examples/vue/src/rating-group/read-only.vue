<script setup lang="ts">
import { RatingGroup } from "@ark-ui/vue/rating-group";
import { Star, StarOff } from "lucide-vue-next";
</script>

<template>
  <RatingGroup.Root :count="5" :model-value="3" readOnly>
    <RatingGroup.Label>Label</RatingGroup.Label>
    <RatingGroup.Control>
      <RatingGroup.Context v-slot="{ items }">
        <RatingGroup.Item v-for="item in items" :key="item" :index="item">
          <RatingGroup.ItemContext v-slot="{ highlighted }">
            <Star v-if="highlighted" />
            <StarOff v-else />
          </RatingGroup.ItemContext>
        </RatingGroup.Item>
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
</template>
