<script lang="ts" setup>
// compiler macro
const propsInput = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'default',
  },
})
const emitInput = defineEmits(['update:modelValue'])
const slots = useSlots()

// list styles
const paddingStyles = reactive<{
  [key: string]: string
}>({
  xs: 'px-2 py-1.5',
  sm: 'px-4 py-1.5',
  md: 'px-6 py-2',
  lg: 'px-8 py-4',
})
const fontSizeStyles = reactive<{
  [key: string]: string
}>({
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-sm',
})

// states
const modelValue = useSyncProps<string>(propsInput, 'modelValue', emitInput)
const havePreEl = computed(
  () =>
    typeof slots.prefix !== 'undefined' ||
    typeof slots['prefix-disabled'] !== 'undefined'
)
const haveSuEl = computed(() => typeof slots.suffix !== 'undefined')
const selectedBorderStyle = computed(() => 'focus:bg-white')
const selectedOnHoverBorderStyle = computed(
  () => 'focus:border-gray-400 focus:outline-none'
)
const selectedPaddingStyle = computed(
  () => paddingStyles[propsInput.size] || paddingStyles.md
)
const selectedFontSizeStyle = computed(
  () => fontSizeStyles[propsInput.size] || fontSizeStyles.md
)
</script>

<template>
  <div :class="`text-input-container relative flex`">
    <div
      v-if="slots['prefix-disabled']"
      :class="`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${selectedBorderStyle}`"
    >
      <slot name="prefix-disabled" />
    </div>
    <div
      v-if="slots.prefix"
      :class="`flex rounded-l border ${selectedBorderStyle}`"
    >
      <slot name="prefix" />
    </div>
    <div class="text-input-wrapper relative flex flex-1">
      <input
        v-model="modelValue"
        :class="`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="slots.suffix"
      :class="`flex rounded-r border ${selectedBorderStyle}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>
