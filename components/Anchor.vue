<script lang="ts" setup>
// micro compiler
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: null,
  },
  classToIcon: {
    type: String,
    default: null,
  },
})

// state
const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>

<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`transition-colors duration-300 text-xs hover:text-cyan-300 gap-1.5 flex justify-between items-center pr-2 py-2`"
  >
    <i v-if="icon" class="text-cyan-300 justify-between text-base"
      ><icon :class="classToIcon" :name="icon" /></i
    ><slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`transition-colors duration-300 text-xs hover:text-cyan-300 gap-1.5 flex justify-between items-center p-2`"
    :href="href"
  >
    <i v-if="icon" class="text-cyan-300 justify-between text-base"
      ><icon :class="classToIcon" :name="icon"
    /></i>
    <a>{{ text }}</a>
  </a>
</template>
