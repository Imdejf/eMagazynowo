<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
const currentLang =
  availableLocales.find((c) => c.isoCode == localeSetting.value) ||
  availableLocales[0]
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">Theme</ListboxLabel>
      <ListboxButton
        type="button"
        title="Change Language"
        class="transition-colors duration-300"
      >
        <span class="justify-center items-center flex mr-1">
          <Icon :name="currentLang?.flag" class="mr-2" />
          {{ currentLang?.nameInternational }}
        </span>
      </ListboxButton>
      <ListboxOptions
        class="p-1 absolute z-999 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.isoCode"
          :value="lang.isoCode"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              localeSetting === lang.isoCode,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.isoCode,
          }"
        >
          <span class="text-sm mr-2">
            <Icon :name="lang.flag" />
          </span>
          <span class="flex-1 truncate">
            {{ lang.nameInternational }}
            <span class="text-xs">({{ lang.isoCode }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.isoCode"
        :value="lang.isoCode"
        class="flex items-center space-x-2"
      >
        {{ lang.flag }} {{ lang.nameInternational }} ({{ lang.isoCode }})
      </option>
    </select>
  </div>
</template>
