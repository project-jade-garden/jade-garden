<script setup lang="ts">
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
} from "reka-ui";
import { ref } from "vue";

const hoverState = ref(false);
</script>

<template>
  <HoverCardRoot v-model:open="hoverState" :open-delay="100">
    <HoverCardTrigger
      href="https://twitter.com/unovue"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src="https://pbs.twimg.com/profile_images/1833445381986045952/jwoHkIIq_400x400.jpg"
        alt="Radix UI"
      />
    </HoverCardTrigger>
    <HoverCardPortal>
      <Transition name="fade">
        <HoverCardContent :side-offset="5" as-child>
          <div>
            <div>
              <img
                src="https://pbs.twimg.com/profile_images/1833445381986045952/jwoHkIIq_400x400.jpg"
                alt="Radix UI"
              />
              <div>
                <div>
                  <div>Radix</div>
                  <div>@radix_ui</div>
                </div>
                <div>
                  Components, icons, colors, and templates for building
                  high-quality, accessible UI. Free and open-source.
                </div>
                <div>
                  <div>
                    <div>0</div>
                    <div>Following</div>
                  </div>
                  <div>
                    <div>2,900</div>
                    <div>Followers</div>
                  </div>
                </div>
              </div>
            </div>

            <HoverCardArrow />
          </div>
        </HoverCardContent>
      </Transition>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
