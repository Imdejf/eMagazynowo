<script lang="ts" setup>
export interface IMenuItem {
  title: string
  content: string
}

const blogs = computed((): IMenuItem[] => [
  {
    title: 'Tutaj tytuł bloga',
    content:
      'Apteczki przemysłowe są obowiązkowym wyposażeniem hal produkcyjnych, magazynów, placów budowy, warsztatów samochodowych, zakładów i podobnych miejsc. Muszą znajdować się w dobrze widocznym miejscu. Konieczne jest również ich odpowiednie zabezpieczenie. Tego typu kwestie podlegają ocenie m.in. inspekcji pracy i są jednym z warunków otrzymania wszelkich certyfikatów BHP w firmie.',
  },
  {
    title: 'Tutaj tytuł bloga',
    content:
      'Apteczki przemysłowe są obowiązkowym wyposażeniem hal produkcyjnych, magazynów, placów budowy, warsztatów samochodowych, zakładów i podobnych miejsc. Muszą znajdować się w dobrze widocznym miejscu. Konieczne jest również ich odpowiednie zabezpieczenie. Tego typu kwestie podlegają ocenie m.in. inspekcji pracy i są jednym z warunków otrzymania wszelkich certyfikatów BHP w firmie.',
  },
  {
    title: 'Tutaj tytuł bloga',
    content:
      'Apteczki przemysłowe są obowiązkowym wyposażeniem hal produkcyjnych, magazynów, placów budowy, warsztatów samochodowych, zakładów i podobnych miejsc. Muszą znajdować się w dobrze widocznym miejscu. Konieczne jest również ich odpowiednie zabezpieczenie. Tego typu kwestie podlegają ocenie m.in. inspekcji pracy i są jednym z warunków otrzymania wszelkich certyfikatów BHP w firmie.',
  },
  {
    title: 'Tutaj tytuł bloga',
    content:
      'Apteczki przemysłowe są obowiązkowym wyposażeniem hal produkcyjnych, magazynów, placów budowy, warsztatów samochodowych, zakładów i podobnych miejsc. Muszą znajdować się w dobrze widocznym miejscu. Konieczne jest również ich odpowiednie zabezpieczenie. Tego typu kwestie podlegają ocenie m.in. inspekcji pracy i są jednym z warunków otrzymania wszelkich certyfikatów BHP w firmie.',
  },
  {
    title: 'Tutaj tytuł bloga',
    content:
      'Apteczki przemysłowe są obowiązkowym wyposażeniem hal produkcyjnych, magazynów, placów budowy, warsztatów samochodowych, zakładów i podobnych miejsc. Muszą znajdować się w dobrze widocznym miejscu. Konieczne jest również ich odpowiednie zabezpieczenie. Tego typu kwestie podlegają ocenie m.in. inspekcji pracy i są jednym z warunków otrzymania wszelkich certyfikatów BHP w firmie.',
  },
])
</script>

<template>
  <div class="py-section">
    <div class="container">
      <h1 class="sr-only">All posts</h1>
    </div>
    <div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
        <!-- This is an example component -->
        <div v-for="blog in blogs" :key="blog.title" class="max-w-2xl mx-auto">
          <div
            class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="rounded-t-lg w-full h-full"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt="blog"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h1
                  class="text-blue-500 font-bold text-2xl tracking-tight mb-2 dark:text-white"
                >
                  Noteworthy technology acquisitions 2021
                </h1>
              </a>
              <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
