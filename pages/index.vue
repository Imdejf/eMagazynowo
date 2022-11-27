<script lang="ts" setup>
import Swiper, { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper'
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
// meta
definePageMeta({
  layout: 'page',
})

let engine = new Swiper('.swiper')

onMounted(() => {
  Swiper.use([Pagination, Autoplay, Navigation])

  const swiperOptions: SwiperOptions = {
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: false,
    centeredSlides: true,
    enabled: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }

  nextTick(() => {
    engine = new Swiper('.swiper', swiperOptions)
  })
})

onBeforeUnmount(() => {
  engine?.destroy?.()
})
</script>

<template>
  <PageWrapper>
    <PageBody class="">
      <PageSection class="section__main pb-15 bg-no-repeatbg-center bg-center">
        <div class=""></div>
        <div class="layer w-full h-full top-0 left-0">
          <div
            class="container mx-auto block lg:px-10 text-center <md:px-2 text-white"
          >
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
              class="text-white tracking-wider bg-[#FF9119] font-600 hover:bg-[#FF9119]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
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
        <div class="container mx-auto block lg:px-10 <md:px-2">
          <div class="tracking-3px font-600 text-lg">
            <h2 class="uppercase">Polecane</h2>

            <ul
              class="grid-recommended <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 col-auto tracking-normal mt-8"
            >
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
      <div class="container mx-auto block lg:px-10 <md:px-2">
        <div class="tracking-3px font-600 text-lg"></div>
      </div>
      <PageSection>
        <div
          class="xl:h-2xl <lg:h-3xl <sm:h-xl <md:h-2xl <xl:h-2xl bg-slate-200"
        >
          <div
            class="w-full justify-center <lg:h-3xl items-center h-full mt-12 lg:mt-24 relative overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64"
          >
            <div
              class="container max-w-6xl mx-auto h-full flex <md:h-xl flex-col lg:flex-row justify-between items-center -mt-32 px-8 xl:px-0"
            >
              <div
                class="flex flex-col items-center items-center w-full max-w-xl lg:w-1/2 pt-48 lg:pt-20 xl:pt-40 text-center lg:text-left z-20"
              >
                <h4
                  class="text-gray-900 font-black text-6xl <xl:text-3xl leading-tight relative mb-4 xl:mb-8"
                >
                  Posiadasz jakieś pytania?
                </h4>
                <p
                  class="text-base sm:text-lg text-xl <xl:text-md text-gray-600 mb-8 pr-0"
                >
                  Skontaktuj się z nami a my postaramy się pomóc
                </p>
                <a
                  href="#_"
                  class="mt-0 sm:mt-1 px-8 py-4 rounded-md self-center fold-bold text-base bg-blue-500 shadow-xl text-white border-t border-gray-200 w-auto font-bold relative self-start inline-block lg:mx-0 mx-auto"
                  >Kontakt</a
                >
                <!-- Integrates with section -->
                <svg
                  class="absolute left-0 max-w-md <xl:h-sm -ml-64 left-svg"
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
                class="flex flex-col items-end justify-center <md:h-20 h-full w-full lg:w-1/2 ms:pl-10 relative z-20"
              >
                <div
                  class="relative lg:absolute xl:h-h-1xl <lg:20rem max-w-4xl xl:max-w-6xl left-0 container h-lg lg:w-screen w-full"
                >
                  <img
                    src="@/assets/img/macbook-emagazynowo.png"
                    class="mt-10 <sm:h-13rem <md:h-sm <lg:h-26rem lg:mt-24 xl:mt-40 w-full b-20 lg:mb-0 lg:h-full ml-0 lg:-ml-12 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection class="section__see-more pt-5">
        <div class="container mx-auto block lg:px-10 <md:px-2">
          <div class="tracking-3px font-600 text-lg">
            <h2 class="uppercase">Zobacz więcej</h2>
            <ul
              class="grid-recommended <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 col-auto tracking-normal mt-8"
            >
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>

              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
              <li class="w-auto">
                <PageTestCard></PageTestCard>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__selected_product">
          <div
            class="container pt-5 mx-auto block lg:px-10 <md:px-2 text-white"
          >
            <h2 class="uppercase tracking-3px font-600 text-lg">
              Produkty dla ciebie
            </h2>
            <ul
              class="grid-recommended <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 col-auto tracking-normal mt-8"
            >
              <li class="w-auto">
                <FormProductCard />
              </li>
              <li class="w-auto">
                <FormProductCard />
              </li>
              <li class="w-auto">
                <FormProductCard />
              </li>
              <li class="w-auto">
                <FormProductCard />
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="container mx-auto block lg:px-10 <md:px-2">
            <h2 class="uppercase tracking-3px font-600 text-lg">
              Rekomendowane produkty
            </h2>
            <ul
              class="grid-recommended <sm:grid-cols-1 <md:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 col-auto tracking-normal mt-8"
            >
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
              <li class="w-auto">
                <FormRecommendedProduct />
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="bg-white h-155 md:h-170">
            <div class="swiper md:h-630px <md:h-580px sm:h-650px">
              <div class="text-center font-600 uppercase mt-10">
                <h4 class="text-sm section-title text-gray-400">
                  Porady i wskazówki
                </h4>
                <h2 class="pb-1 blog-title tracking-3px font-600 text-lg">
                  Blog Magazynowy
                </h2>
              </div>
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper h-md">
                <!-- Slides -->
                <div class="swiper-slide"><FormBlogCard /></div>
                <div class="swiper-slide"><FormBlogCard /></div>
                <div class="swiper-slide"><FormBlogCard /></div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__newsletter"></div>
      </PageSection>
      <PageSection>
        <div class="section__recommended-product">
          <div class="container mx-auto block my-3 lg:px-10 <md:px-2">
            <div class="flex items-center">
              <a href="#" class="m-auto"
                ><img
                  src="@/img/content/przelewy24-logo-footer.webp"
                  alt=""
                  width="106"
                  height="35"
              /></a>
              <a href="#" class="m-auto"
                ><img
                  src="@/img/content/krs-logo-footer.webp"
                  alt=""
                  width="106"
                  height="35"
              /></a>
              <a href="#" class="m-auto"
                ><img
                  src="@/img/content/instantssl-logo-footer.png"
                  alt=""
                  width="106"
                  height="35"
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
  background-image: url(../assets/img/magazyn.jpg),
    linear-gradient(90deg, rgb(39, 73, 96, 1) 25%, rgba(54, 48, 100, 1) 60%);
  background-blend-mode: overlay;
}

.section__selected_product {
  background: rgb(98, 96, 249);
  background: linear-gradient(
    90deg,
    rgba(98, 96, 249, 1) 0%,
    rgba(137, 234, 254, 1) 100%
  );
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
