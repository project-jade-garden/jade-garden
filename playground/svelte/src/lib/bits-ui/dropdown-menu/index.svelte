<script lang="ts">
import { Avatar, DropdownMenu } from "bits-ui";
import Bell from "phosphor-svelte/lib/Bell";
import Cardholder from "phosphor-svelte/lib/Cardholder";
import CaretRight from "phosphor-svelte/lib/CaretRight";
import Check from "phosphor-svelte/lib/Check";
import DotOutline from "phosphor-svelte/lib/DotOutline";
import DotsThree from "phosphor-svelte/lib/DotsThree";
import GearSix from "phosphor-svelte/lib/GearSix";
import UserCircle from "phosphor-svelte/lib/UserCircle";
import UserCirclePlus from "phosphor-svelte/lib/UserCirclePlus";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let notifications = $state<boolean>(false);
// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let invited = $state("");
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <DotsThree />
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content sideOffset={8}>
      <DropdownMenu.Item>
        <div>
          <UserCircle />
          Profile
        </div>
        <div >
          <kbd>
            ⌘
          </kbd>
          <kbd>
            P
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <div >
          <Cardholder />
          Billing
        </div>
        <div >
          <kbd>
            ⌘
          </kbd>
          <kbd>
            B
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <div >
          <GearSix />
          Settings
        </div>
        <div >
          <kbd>
            ⌘
          </kbd>
          <kbd>
            S
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.CheckboxItem bind:checked={notifications}>
        {#snippet children({ checked })}
          <div >
            <Bell />
            Notifications
          </div>
          <div >
            {#if checked}
              <Check />
            {/if}
          </div>
        {/snippet}
      </DropdownMenu.CheckboxItem>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>
          <div>
            <UserCirclePlus />
            Workspace
          </div>
          <div>
            <CaretRight />
          </div>
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent sideOffset={10}>
          <DropdownMenu.RadioGroup bind:value={invited}>
            <DropdownMenu.RadioItem value="huntabyte">
              {#snippet children({ checked })}
                <Avatar.Root>
                  <Avatar.Image
                    src="https://github.com/huntabyte.png"
                    alt="@huntabyte"
                  />
                  <Avatar.Fallback>HJ</Avatar.Fallback>
                </Avatar.Root>
                @huntabyte
                {#if checked}
                  <DotOutline  />
                {/if}
              {/snippet}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="pavel">
              {#snippet children({ checked })}
                <Avatar.Root>
                  <Avatar.Image
                    src="https://github.com/pavelstianko.png"
                    alt="@pavel_stianko"
                  />
                  <Avatar.Fallback>PS</Avatar.Fallback
                  >
                </Avatar.Root>
                @pavel_stianko
                {#if checked}
                  <DotOutline />
                {/if}
              {/snippet}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="cokakoala">
              {#snippet children({ checked })}
                <Avatar.Root>
                  <Avatar.Image
                    src="https://github.com/adriangonz97.png"
                    alt="@cokakoala_"
                  />
                  <Avatar.Fallback>CK</Avatar.Fallback
                  >
                </Avatar.Root>
                @cokakoala_
                {#if checked}
                  <DotOutline />
                {/if}
              {/snippet}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="tglide">
              {#snippet children({ checked })}
                <Avatar.Root>
                  <Avatar.Image
                    src="https://github.com/tglide.png"
                    alt="@tglide"
                  />
                  <Avatar.Fallback>
                    TL
                  </Avatar.Fallback>
                </Avatar.Root>
                @thomasglopes
                {#if checked}
                  <DotOutline />
                {/if}
              {/snippet}
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>