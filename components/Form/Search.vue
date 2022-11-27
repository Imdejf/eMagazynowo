<template>
  <div class="header_search flex w-full mx-5">
    <form class="w-full">
      <div class="flex">
        <div class="hidden md:block">
          <Listbox v-model="selectedPerson">
            <div class="relative h-full">
              <ListboxButton
                class="relative border border-gray-300 dropdown w-full h-full cursor-default rounded-lg bg-gray-100 py-2 pl-3 pr-10 focus:border-blue-500 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-xs lg:text-sm"
              >
                <span class="block truncate">{{ selectedPerson.name }}</span>
                <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon
                    name="heroicons:chevron-up-down-solid"
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute px-0 z-99 list-none mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 outline-none focus:outline-none sm:text-xs"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="person in people"
                    :key="person.name"
                    :value="person"
                    as="div"
                  >
                    <li
                      :class="[
                        active ? 'bg-blue-300 text-amber-900' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-10 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                        ]"
                        >{{ person.name }}</span
                      >
                      <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                      >
                        <Icon
                          name="ic:outline-check"
                          class="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-99 focus:outline-none text-sm text-gray-900 bg-gray-50 md:rounded-r-lg <md:rounded-lg md:border-l-gray-50 <md: md:border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Szukaj..."
          />
          <button
            type="submit"
            class="absolute top-0 right-0 p-2.5 focus:outline-none text-sm font-medium text-white bg-blue-500 rounded-r-lg border border-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Szukaj</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedPerson = ref(people[0])
</script>

<style lang="scss">
.dropdown {
  border-radius: 7px 0px 0px 7px;
}
</style>
