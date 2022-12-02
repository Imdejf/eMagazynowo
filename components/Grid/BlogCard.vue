<script lang="ts" setup>
export interface IMenuItem {
  title: string
  content: string
}
const app = useAppConfig()
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
  <Swiper
    :modules="[SwiperNavigation, SwiperPagination]"
    :slidesPerGroup="3"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="swiper-wrapper h-md"
  >
    <SwiperSlide v-for="blog in blogs" :key="blog.title">
      <div class="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="mt-8 h-sm">
          <article
            class="overflow-hidden rounded-lg border border-gray-100 shadow-sm"
          >
            <img
              data-src="/assets/img/blog.webp"
              class="lazyload w-full h-full"
              alt="Blog"
            />

            <div class="p-4 sm:p-6 bg-slate-300">
              <a href="#">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ blog.title }}
                </h3>
              </a>

              <p
                class="mt-2 card-text text-sm leading-relaxed text-gray-600 line-clamp-3"
              >
                {{ blog.content }}
              </p>

              <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 text_line section_text"
              >
                Find out more

                <span
                  aria-hidden="true"
                  class="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
