<script lang="ts" setup>
// compiler macro
const propsInput = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  debug: {
    type: Boolean,
    default: false,
  },
})
const emitInput = defineEmits(['update:modelValue'])
const slots = useSlots()

// list styles
const paddingStyles = reactive<{
  [key: string]: string
}>({
  xs: 'px-2 py-1.5',
  sm: 'px-4 py-1.9',
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
      :class="`flex rounded-l  bg-gray-100 dark:bg-slate-800 text-gray-500 border ${selectedBorderStyle}`"
    >
      <slot name="prefix-disabled" />
    </div>
    <div
      v-if="slots.prefix"
      :class="`flex rounded-l  border ${selectedBorderStyle}`"
    >
      <slot name="prefix" />
    </div>

    <div class="text-field my-2 w-full">
      <VField :name="name" v-slot="{ field, meta, errors }">
        <input
          required
          v-bind="field"
          :class="
            {
              'is-success': meta.valid && meta.touched,
              'is-danger': !meta.valid && meta.touched,
            } &&
            `p-1 w-full border-1 border-gray-300 bg-gray-100  ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`
          "
          :type="type"
        />
        <span class="icon is-small is-left">
          <i class="fas" :class="leftIcon"></i>
        </span>
        <span class="icon is-small is-right" v-if="meta.valid && meta.touched">
          <i class="fas fa-check has-text-success"></i>
        </span>
        <span
          class="icon is-small is-right"
          v-else-if="!meta.valid && meta.touched"
        >
          <i class="fas fa-x has-text-danger"></i>
        </span>
        <!-- <template v-if="Object.keys(errors).length">
                  <ul>
                    <li
                      v-for="(message, field) in errors"
                      :key="field"
                      class="help is-danger"
                    >
                      {{ message }}
                    </li>
                  </ul>
                </template> -->
        <VErrorMessage :name="name" as="div" class="help is-danger" />
        <div class="debug" v-if="debug">
          <pre>{{ errors }}</pre>
          <pre>{{ meta }}</pre>
        </div>
      </VField>
      <label :class="` ${selectedFontSizeStyle}`">{{ placeholder }}</label>
    </div>
    <div
      v-if="slots.suffix"
      :class="`flex rounded-r border  ${selectedBorderStyle}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>

<style>
.text-field {
  position: relative;
}

.text-field input {
  display: inline-block;
  border-radius: 10px;
}

.text-field input:focus {
  background-color: #fff;
}

.text-field label {
  color: #999;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: 0.2s;
}
.text-field input:valid {
  background: white;
}

.text-field input:focus ~ label,
.text-field input:valid ~ label {
  top: -10px;
  left: 15px;
  font-size: small;
  background-color: #fff !important;
  padding: 0 5px 0 5px;
}
</style>
