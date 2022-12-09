<script lang="ts" setup>
const variantActive = ref(false)

const toggleVariant = () => {
  variantActive.value = !variantActive.value
}
</script>
>

<template>
  <div
    @click="toggleVariant()"
    class="py-4 border-b flex relative items-center justify-between"
  >
    <p class="text-md leading-4 text-gray-800 dark:text-gray-300">Kolor</p>
    <div class="flex items-center justify-center">
      <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
        Smoke Blue with red accents
      </p>
      <div
        class="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"
      ></div>
      <Icon
        name="ic:round-keyboard-arrow-right"
        class="text-gray-400 w-5 h-5"
      />
    </div>
    <div
      class="absolute z-10 mt-4 top-10 width-full rounded-md border ease-in-out duration-300 border-gray-100 bg-white shadow-lg"
      role="menu"
      :class="variantActive ? 'opacity-100' : 'opacity-0 invisible'"
    >
      <div class="flow-root py-2">
        <div class="-my-2 divide-y py-4 divide-gray-100">
          <a
            class="inline-block rounded-full border-2 to-yellow-500 p-[2px] hover:bg-blue-200 focus:outline-none focus:ring active:text-opacity-75"
            href="/download"
          >
            <span
              class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent"
            >
              <span class="py-1 px-3 rounded-full mr-2 bg-blue-500"></span>
              Niebieski
            </span>
          </a>
          <a
            class="inline-block rounded-full border-2 to-yellow-500 p-[2px] hover:bg-blue-200 focus:outline-none focus:ring active:text-opacity-75"
            href="/download"
          >
            <span
              class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent"
            >
              <span class="py-1 px-3 rounded-full mr-2 bg-blue-500"></span>
              Niebieski
            </span>
          </a>
          <a
            class="inline-block rounded-full border-2 to-yellow-500 p-[2px] hover:bg-blue-200 focus:outline-none focus:ring active:text-opacity-75"
            href="/download"
          >
            <span
              class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent"
            >
              <span class="py-1 px-3 rounded-full mr-2 bg-blue-500"></span>
              Niebieski
            </span>
          </a>
          <a
            class="inline-block rounded-full border-2 to-yellow-500 p-[2px] hover:bg-blue-200 focus:outline-none focus:ring active:text-opacity-75"
            href="/download"
          >
            <span
              class="block rounded-full bg-white px-4 py-2 text-sm font-medium hover:bg-transparent"
            >
              <span class="py-1 px-3 rounded-full mr-2 bg-blue-500"></span>
              Niebieski
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
