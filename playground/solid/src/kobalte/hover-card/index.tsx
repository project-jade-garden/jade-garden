import { HoverCard } from "@kobalte/core/hover-card";

export const Basic = () => {
  return (
    <HoverCard>
      <HoverCard.Trigger class="hovercard__trigger" href="https://twitter.com/mlfabien" target="_blank">
        @MLFabien
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content class="hovercard__content">
          <HoverCard.Arrow />
          <img
            src="https://pbs.twimg.com/profile_images/1509139491671445507/pzWYjlYN_400x400.jpg"
            alt="Fabien MARIE-LOUISE"
            class="hovercard__avatar"
          />
          <h2 class="hovercard__title">Fabien MARIE-LOUISE</h2>
          <p class="hovercard__description">
            Developer and UI Design enthusiast. Building UI related stuffs for @solid_js
          </p>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard>
  );
};
