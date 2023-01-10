<script lang="ts" setup>
import { profileOptions } from '@/utils/profileOptions'
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const options = profileOptions()
const selectedOption = ref(options[0])

const logOut = () => {
  const cookie = useCookie('Authorization')
  cookie.value = null
  window.location.reload()
}
</script>

<template>
  <div class="container mx-auto <md:px-2">
    <div class="flex my-5">
      <div class="w-full">
        <div class="flex w-full <md:hidden">
          <NuxtLink
            v-for="option in options"
            :key="option.uri"
            :to="option.uri"
            class="w-1/5 py-2.5 mx-2 text-center border-1 border-blue-400 uppercase font-600 text-13px hover:text-white hover:bg-blue-400 duration-300"
            >{{ option.name }}</NuxtLink
          >
        </div>
        <div class="flex md:hidden">
          <div class="top-16 w-2/3">
            <Listbox v-model="selectedOption">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                  <span class="block truncate">{{ selectedOption.name }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <Icon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      name="heroicons-solid:chevron-up-down"
                    />
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="option in options"
                      :key="option.name"
                      :value="option"
                      as="template"
                    >
                      <li
                        :class="[
                          active
                            ? 'bg-blue-100 text-blue-900'
                            : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                      >
                        <NuxtLink :to="option.uri">
                          <span
                            :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]"
                            >{{ option.name }}</span
                          >
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                          >
                          </span>
                        </NuxtLink>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
          <a @click="logOut" class="block text-center self-center ml-auto mr-2">
            <Icon name="ic:round-power-settings-new" class="block w-5 h-5" />
            <span class="block text-14px self-center">Wyloguj</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
