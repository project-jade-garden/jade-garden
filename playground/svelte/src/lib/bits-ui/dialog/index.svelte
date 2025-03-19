<script lang="ts">
import { Dialog, Label, Separator } from "bits-ui";
import LockKeyOpen from "phosphor-svelte/lib/LockKeyOpen";
import X from "phosphor-svelte/lib/X";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    New API key
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title>
        Create API key
      </Dialog.Title>
      <Separator.Root  />
      <Dialog.Description >
        Create and manage API keys. You can create multiple keys to organize
        your applications.
      </Dialog.Description>
      <div >
        <Label.Root for="apiKey" >API Key</Label.Root
        >
        <div >
          <input
            id="apiKey"
            placeholder="secret_api_key"
            name="name"
          />
          <LockKeyOpen />
        </div>
      </div>
      <div >
        <Dialog.Close>
          Save
        </Dialog.Close>
      </div>
      <Dialog.Close>
        <div>
          <X />
          <span >Close</span>
        </div>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>