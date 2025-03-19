import { Search } from "@kobalte/core/search";
import { RefreshCcw, SearchIcon } from "lucide-solid";
import { createSignal } from "solid-js";

export const Basic = () => {
  const [options, setOptions] = createSignal([]);
  const [emoji, setEmoji] = createSignal<string[]>();

  const queryEmojiData = (query: string) => {
    return query.split("");
  };

  return (
    <>
      <Search
        triggerMode="focus"
        options={options()}
        // onInputChange={(query) => setOptions(queryEmojiData(query))}
        // onChange={(result) => setEmoji(result)}
        optionValue="name"
        optionLabel="name"
        placeholder="Search an emoji…"
        itemComponent={(props) => (
          <Search.Item item={props.item} class="search__item">
            {/* <Search.ItemLabel>{props.item.rawValue.emoji}</Search.ItemLabel> */}
          </Search.Item>
        )}
      >
        <Search.Control class="search__control" aria-label="Emoji">
          <Search.Indicator
            class="search__indicator"
            loadingComponent={
              <Search.Icon class="load__icon">
                <RefreshCcw class="spin__icon" />
              </Search.Icon>
            }
          >
            <Search.Icon class="search__icon">
              <SearchIcon class="center__icon" />
            </Search.Icon>
          </Search.Indicator>
          <Search.Input class="search__input" />
        </Search.Control>
        <Search.Portal>
          <Search.Content class="search__content" onCloseAutoFocus={(e) => e.preventDefault()}>
            <Search.Listbox class="search__listbox" />
            <Search.NoResult class="search__no_result">😬 No emoji found</Search.NoResult>
          </Search.Content>
        </Search.Portal>
      </Search>
      <div class="result__content">{/* Emoji selected: {emoji()?.emoji} {emoji()?.name} */}</div>
    </>
  );
};
