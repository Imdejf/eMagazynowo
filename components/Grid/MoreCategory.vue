<script lang="ts" setup>
export interface IMenuItem {
  photo: string
  categoryName: string
  articleCount: number
  hiddeText: string
}
const app = useAppConfig()
const categories = computed((): IMenuItem[] => [
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
  {
    photo: '/assets/img/icon.webp',
    categoryName: 'Plastikowe pojemniki magazynowe z tworzywa sztucznego',
    articleCount: 100,
    hiddeText:
      'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',
  },
])
</script>

<template>
  <ul
    ref="testRec"
    class="grid-recommended <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 tracking-normal mt-8"
  >
    <li v-for="category in categories" :key="category.categoryName">
      <a href="#" class="group relative block h-60 <sm:w-40 <lg:w-40">
        <span
          class="absolute inset-0 border-2 rounded-3xl border-dashed border-gray-400"
        ></span>

        <div
          class="relative flex flex-col h-full transform items-end rounded-3xl bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
          <div
            class="w-full items-center group-hover:h-1px h-3/5 flex justify-center group-hover:opacity-0"
          >
            <img
              src="/assets/img/icon.webp"
              alt="Bariery"
              class="w-80px h-80px <sm:w-2.5rem <sm:h-2.5rem"
            />
          </div>
          <div
            class="px-2 pb-4 group-hover:h-1px transition-opacity h-2/5 group-hover:absolute group-hover:opacity-0"
          >
            <h3
              class="mt-4 group-hover:h-1px text-sm font-600 text-center group-hover:opacity-0"
            >
              Plastikowe pojemniki magazynowe z towrzywa sztucznego
            </h3>
          </div>

          <div
            class="absolute text-center w-full h-full opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
          >
            <h3 class="mt-4 text-sm font-600">
              Plastikowe pojemniki magazynowe z towrzywa sztucznego
            </h3>

            <p class="card-text mt-4 font-400">
              Test Test test test Test test testTest test testTest test testTest
              test test Test test test
            </p>
          </div>
          <div
            class="w-full h-1/5 bg-blue-900 text-blue-500 text-center text-xs rounded-b-3xl"
          >
            <span class="my-3 inline-block">100 artyku????w</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
