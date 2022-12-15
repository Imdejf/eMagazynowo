<script lang="ts" setup>
export interface IMenuItem {
  categoryName: string
  photo: string
}
const app = useAppConfig()
const categories = computed((): IMenuItem[] => [
  { categoryName: 'Apteczki', photo: '/assets/img/apteczka.webp' },
  { categoryName: 'Pojemniki magazynowe', photo: '/assets/img/apteczka.webp' },
  {
    categoryName: 'Kontenery samowyładowcze i inne',
    photo: '/assets/img/apteczka.webp',
  },
  {
    categoryName: 'Kontenery samowyładowcze',
    photo: '/assets/img/apteczka.webp',
  },
])
</script>

<template>
  <div
    class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-5"
  >
    <div
      v-for="category in categories"
      :key="category.categoryName"
      class="flex self-center h-full border-b-2 border-dashed transform hover:scale-101 hover:shadow-md transition duration-400 ease-in-out"
    >
      <a
        href="#"
        class="w-full h-full flex text-center items-center hover:text-blue-400"
      >
        <img
          data-src="/assets/img/apteczka.webp"
          class="lazyload w-60px h-60px"
        />
        <p class="w-full font-600 break-normal">{{ category.categoryName }}</p>
      </a>
    </div>
  </div>
</template>
