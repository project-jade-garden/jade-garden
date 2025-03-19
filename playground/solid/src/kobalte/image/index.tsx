import { Image } from "@kobalte/core/image";

export const Basic = () => {
  return (
    <>
      <Image fallbackDelay={600} class="image">
        <Image.Img class="image__img" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Nicole Steeves" />
        <Image.Fallback class="image__fallback">NS</Image.Fallback>
      </Image>
      <Image class="image">
        <Image.Fallback class="image__fallback">MD</Image.Fallback>
      </Image>
    </>
  );
};
