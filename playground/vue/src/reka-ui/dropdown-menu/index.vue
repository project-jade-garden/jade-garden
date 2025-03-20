<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { DropdownMenuItemEmits } from "reka-ui";
import {
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useEmitAsProps,
} from "reka-ui";
import { ref } from "vue";

const props = defineProps<{ defaultOpen?: boolean }>();

const emits = defineEmits<DropdownMenuItemEmits>();
const toggleState = ref(props.defaultOpen ?? false);
const checkboxOne = ref(false);
const checkboxTwo = ref(false);
const person = ref("pedro");

function handleClick() {
  // alert("hello!");
}

function handleCheck(ev: Event) {
  // checkboxOne.value = ev;
  // eslint-disable-next-line no-console
  console.log(ev);
}
</script>

<template>
  <div>
    <DropdownMenuRoot v-model:open="toggleState">
      <DropdownMenuTrigger aria-label="Customise options">
        <Icon icon="radix-icons:hamburger-menu" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal to="#here">
        <DropdownMenuContent>
          <DropdownMenuItem
            value="New Tab"
            v-bind="useEmitAsProps(emits)"
            @click="handleClick"
          >
            New Tab
            <div>⌘+T</div>
          </DropdownMenuItem>
          <!-- <DropdownMenuSub>
            <DropdownMenuSubTrigger
              value="more toolsz"
             
            >
              More Tools
              <div
               
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
               
                :side-offset="2"
                :align-offset="-5"
              >
                <DropdownMenuItem
                 
                >
                  Save Page As…
                  <div
                   
                  >
                    ⌘+S
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                 
                >
                  Create Shortcut…
                </DropdownMenuItem>
                <DropdownMenuItem
                 
                >
                  Name Window…
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                 
                >
                  Developer Tools
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> -->
          <DropdownMenuItem value="New Window">
            New Window
            <div>⌘+N</div>
          </DropdownMenuItem>
          <DropdownMenuItem value="New Private Window" disabled>
            New Private Window
            <div>⇧+⌘+N</div>
          </DropdownMenuItem>
          <!-- <DropdownMenuSub>
            <DropdownMenuSubTrigger
              value="more tools"
             
            >
              More Tools
              <div
               
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
               
                :side-offset="2"
                :align-offset="-5"
              >
                <DropdownMenuItem
                 
                >
                  Save Page As…
                  <div
                   
                  >
                    ⌘+S
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem
                 
                >
                  Create Shortcut…
                </DropdownMenuItem>
                <DropdownMenuItem
                 
                >
                  Name Window…
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                 
                >
                  Developer Tools
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    value="more toolsz"
                   
                  >
                    More Tools
                    <div
                     
                    >
                      <Icon icon="radix-icons:chevron-right" />
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                     
                      :side-offset="2"
                      :align-offset="-5"
                    >
                      <DropdownMenuItem
                       
                      >
                        Save Page As…
                        <div
                         
                        >
                          ⌘+S
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                       
                      >
                        Create Shortcut…
                      </DropdownMenuItem>
                      <DropdownMenuItem
                       
                      >
                        Name Window…
                      </DropdownMenuItem>
                      <DropdownMenuSeparator
                       
                      />
                      <DropdownMenuItem
                       
                      >
                        Developer Tools
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          value="more toolsz"
                         
                        >
                          More Tools
                          <div
                           
                          >
                            <Icon icon="radix-icons:chevron-right" />
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent
                           
                            :side-offset="2"
                            :align-offset="-5"
                          >
                            <DropdownMenuItem
                             
                            >
                              Save Page As…
                              <div
                               
                              >
                                ⌘+S
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                             
                            >
                              Create Shortcut…
                            </DropdownMenuItem>
                            <DropdownMenuItem
                             
                            >
                              Name Window…
                            </DropdownMenuItem>
                            <DropdownMenuSeparator
                             
                            />
                            <DropdownMenuItem
                             
                            >
                              Developer Tools
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem
                 
                >
                  Developer Tools
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> -->
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model="checkboxOne" @select="handleCheck">
            <DropdownMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Show Bookmarks
            <div>⌘+B</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="checkboxTwo">
            <DropdownMenuItemIndicator>
              <Icon icon="radix-icons:check" />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />

          <DropdownMenuLabel> People </DropdownMenuLabel>
          <DropdownMenuRadioGroup v-model="person">
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <Icon icon="radix-icons:dot-filled" />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <DropdownMenuItemIndicator>
                <Icon icon="radix-icons:dot-filled" />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>

    <div id="here" />
  </div>
</template>
