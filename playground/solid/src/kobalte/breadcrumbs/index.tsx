import { Breadcrumbs } from "@kobalte/core/breadcrumbs";

export const Basic = () => {
  return (
    <Breadcrumbs>
      <ol class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <Breadcrumbs.Link href="/" class="breadcrumbs__link">
            Home
          </Breadcrumbs.Link>
          <Breadcrumbs.Separator class="breadcrumbs__separator" />
        </li>
        <li class="breadcrumbs__item">
          <Breadcrumbs.Link href="/components" class="breadcrumbs__link">
            Components
          </Breadcrumbs.Link>
          <Breadcrumbs.Separator class="breadcrumbs__separator" />
        </li>
        <li class="breadcrumbs__item">
          <Breadcrumbs.Link current class="breadcrumbs__link">
            Breadcrumbs
          </Breadcrumbs.Link>
        </li>
      </ol>
    </Breadcrumbs>
  );
};
