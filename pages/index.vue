<script lang="ts" setup>
import { Size } from '~/composables/useScreen'
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
const screen = useScreen()
const topDistance = useTopDistance()
// meta
definePageMeta({
  layout: 'page',
})

const isLoadingMacbook = ref(false)

//refs
const macbook = ref<HTMLElement | null>(null)

const lazyLoad = () => {
  const onLoad = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (macbook.value !== null && isLoadingMacbook.value == false) {
      if (
        scrollTop >
        (screen.higherThan(Size.MEDIUM)
          ? topDistance.distance(macbook.value) - 500
          : topDistance.distance(macbook.value) - 500)
      ) {
        isLoadingMacbook.value = true
      }
    }
  }

  // lifecycle hooks
  window.addEventListener('scroll', onLoad)
  onUnmounted(() => {
    window.removeEventListener('scroll', onLoad)
  })

  return {
    onLoad,
  }
}

onMounted(() => {
  const { onLoad } = lazyLoad()
  setTimeout(() => onLoad(), 50)
})
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="section__main pb-15 bg-no-repeatbg-center bg-center">
        <div class="layer w-full h-full top-0 left-0">
          <div class="container mx-auto block text-center <md:px-2 text-white">
            <div
              class="section__main__header w-full uppercase text-center pt-5 text-xl text-600 text-cyan-400"
            >
              <h1>
                <span
                  >SKLEP INTERNETOWY EMAGAZYNOWO.PL - ZAOPATRZENIE MAGAZYNOWE
                </span>
              </h1>
            </div>
            <div class="section__main_content py-8 font-600">
              <span> Wyposażymy twój magazyn </span>
            </div>
            <a
              href="/kategorie"
              class="text-white tracking-wider bg-orange-900 font-600 hover:bg-orange-900/90 focus:ring-4 focus:ring-orange-900/50 font-medium rounded-lg text-14px px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
            >
              <Icon
                name="material-symbols:shopping-cart-checkout-rounded"
                class="mr-2 -ml-1 w-4.5 h-6"
              />
              Kup teraz!</a
            >
          </div>
        </div>
      </PageSection>
      <PageSection class="section__recommended pt-5">
        <div class="container mx-auto block <md:px-2">
          <div class="tracking-3px font-600 text-lg">
            <h2 class="uppercase">Polecane</h2>
            <GridRecommendedCategory></GridRecommendedCategory>
          </div>
        </div>
      </PageSection>
      <div class="container mx-auto block <md:px-2">
        <div class="tracking-3px font-600 text-lg"></div>
      </div>
      <PageSection>
        <div
          class="w-full justify-center items-center relative bg-slate-300 overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64"
        >
          <div
            ref="macbook"
            class="max-w-6xl mx-auto h-full p-20 <md:pb-10 flex flex-col lg:flex-row justify-between items-center -mt-32 px-8 xl:px-0"
          >
            <div
              class="flex flex-col mt-15 items-center lg:items-start w-full max-w-xl lg:w-1/2 <md:pt-6 pt-48 lg:pt-20 xl:pt-40 text-center z-30"
              :class="
                isLoadingMacbook == true
                  ? 'duration-1000 ease-in transition-all opacity-100'
                  : 'opacity-0 iFnvisible'
              "
            >
              <h1
                class="text-gray-900 z-40 font-black text-3xl sm:text-3xl leading-tight relative mb-4 xl:mb-8"
              >
                Potrzebujesz pomocy lub wyceny?
              </h1>
              <p
                class="text-lg sm:text-xl z-40 w-full xl:text-xl text-gray-600 mb-8 pr-0"
              >
                Skontaktuj się z nami
              </p>
              <a
                href="#_"
                class="mt-0 sm:mt-1 px-8 py-4 self-center rounded-md fold-bold text-base bg-blue-500 shadow-xl text-white border-t border-gray-200 w-auto font-bold relative self-start inline-block lg:mx-0 mx-auto"
                >Kontakt!</a
              >
              <svg
                class="absolute left-0 bottom-10 xl:bottom-30 max-w-md -ml-64 left-svg"
                viewBox="0 0 423 423"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <linearGradient
                    x1="100%"
                    y1="0%"
                    x2="4.48%"
                    y2="0%"
                    id="linearGradient-1"
                  >
                    <stop stop-color="#39bcf8" offset="0%"></stop>
                    <stop stop-color="#6267f1" offset="100%"></stop>
                  </linearGradient>
                  <filter
                    x="-9.3%"
                    y="-6.7%"
                    width="118.7%"
                    height="118.7%"
                    filterUnits="objectBoundingBox"
                    id="filter-3"
                  >
                    <feOffset
                      dy="8"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      stdDeviation="8"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    ></feGaussianBlur>
                    <feColorMatrix
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      in="shadowBlurOuter1"
                    ></feColorMatrix>
                  </filter>
                  <rect
                    id="path-2"
                    x="63"
                    y="504"
                    width="300"
                    height="300"
                    rx="40"
                  ></rect>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  opacity=".9"
                >
                  <g id="Desktop-HD" transform="translate(-39 -531)">
                    <g id="Hero" transform="translate(43 83)">
                      <g id="Rectangle-6" transform="rotate(45 213 654)">
                        <use
                          fill="#000"
                          filter="url(#filter-3)"
                          xlink:href="#path-2"
                        ></use>
                        <use
                          fill="url(#linearGradient-1)"
                          xlink:href="#path-2"
                        ></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="opacity-100 flex flex-col items-end justify-center h-full w-full lg:w-1/2 ms:pl-10 relative z-50"
            >
              <div
                class="relative lg:absolute max-w-4xl <md:mt-15 xl:max-w-6xl left-0 container lg:w-screen w-full"
              >
                <img
                  data-src="/assets/img/macbook-emagazynowo.webp"
                  alt="macbook eMagazynowo"
                  class="lazyload mt-20 lg:mt-24 xl:mt-40 w-full <md:mb-0 mb-20 lg:mb-0 ml-0 lg:-ml-12 h-full"
                  :class="
                    isLoadingMacbook == true
                      ? 'duration-300 ease-in transition-all opacity-100'
                      : 'opacity-0 invisible'
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection class="section__see-more pt-5">
        <div class="container mx-auto block <md:px-2">
          <div class="tracking-3px font-600 text-lg">
            <h2 class="uppercase">Zobacz więcej</h2>
            <GridMoreCategory />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <GridRecommendedForYou />
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="container mx-auto block <md:px-2">
            <h2 class="uppercase tracking-3px font-600 text-lg">
              Rekomendowane produkty
            </h2>
            <GridRecommendedProduct />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="bg-white pt-15 pb-30">
            <div class="md:h-530px xl:h-630px <md:h-580px sm:h-650px">
              <div class="text-center font-600 uppercase mt-10">
                <h4 class="text-sm section-title text-gray-500">
                  Porady i wskazówki
                </h4>
                <h2 class="pb-1 blog-title tracking-3px font-600 text-lg">
                  Blog Magazynowy
                </h2>
              </div>
              <!-- Additional required wrapper -->
              <GridSwiperBlogCard />
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__newsletter"></div>
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="container mx-auto block my-3 <md:px-2">
            <div class="flex w-max items-center m-auto">
              <a href="#">
                <img
                  data-src="/assets/img/content/przelewy24-logo-footer.webp"
                  class="lazyload w-1/3 h-full m-auto"
                  alt="logo Przelewy24"
                />
              </a>
              <a href="#">
                <img
                  alt="logo KRS"
                  data-src="/assets/img/content/krs-logo-footer.webp"
                  class="lazyload w-1/3 h-full m-auto"
                />
              </a>
              <a href="#">
                <img
                  alt="logo InstantSSL"
                  data-src="/assets/img/content/instantssl-logo-footer.webp"
                  class="lazyload w-1/3 h-full m-auto"
              /></a>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
<style>
.section__main {
  background-image: url(../assets/img/magazyn.webp),
    linear-gradient(90deg, rgb(39, 73, 96, 1) 25%, rgba(54, 48, 100, 1) 60%);
  background-blend-mode: overlay;
}

.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.grid-recommended {
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 3rem 0.75rem;
  list-style-type: none;
  margin-bottom: 40px;
  padding: 10px;
}

h2 {
  position: relative;
}
h2:before,
h2:after {
  display: block;
  content: '';
  width: 6vh;
  height: 3px;
  background: rgba(125, 211, 252, 1);
  position: absolute;
  bottom: 0;
  left: 0;
}

.blog-title::before {
  position: absolute;
  content: '';
  width: 80px;
  height: 3px;
  background-color: #d8d8d8;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
}
.blog-title::after {
  position: absolute;
  content: '';
  width: 50px;
  height: 3px;
  background: rgba(125, 211, 252, 1);
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}
</style>
