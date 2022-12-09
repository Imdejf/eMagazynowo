<script lang="ts" setup>
const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper: Swiper) => {
  thumbsSwiper.value = swiper
}
</script>
>

<template>
  <div class="flex h-sm <sm:h-50 <sm:w-full flex-row-reverse">
    <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[
        SwiperPagination,
        SwiperThumbs,
        SwiperNavigation,
        SwiperFreeMode,
      ]"
      class="mySwiper2 w-full"
    >
      <SwiperSlide
        ><img
          src="https://images.magazynuj.pl/towar/skrzyniopaleta-plastikowa-na-3-plozach-z-kranikiem-wym-zew-1200x1000x760mm-z/gallery0.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://images.magazynuj.pl/towar/wieszak-do-zawieszania-pojemnikow-warsztatowych-o-wym-315-x-200-x-150-mm-wym-wieszaka-455-x-182-mm-2-pojemniki/gallery0.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://images.magazynuj.pl/towar/pojemnik-plastikowy-warsztatowy-z-przekladkami-wym-600x240x95mm/gallery0.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://images.magazynuj.pl/towar/okragly-pojemnik-plastikowy-bez-pokrywy-60l/gallery1.jpg" /></SwiperSlide
      ><SwiperSlide
        ><img
          src="https://images.magazynuj.pl/towar/okragly-pojemnik-plastikowy-bez-pokrywy-60l/gallery0.jpg"
      /></SwiperSlide>
    </Swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :breakpoints="{
        '640': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }"
      :freeMode="true"
      :direction="'vertical'"
      :watchSlidesProgress="true"
      :modules="[
        SwiperPagination,
        SwiperNavigation,
        SwiperThumbs,
        SwiperFreeMode,
      ]"
      class="mySwiper w-20"
    >
      <SwiperSlide>
        <div className="slider__image">
          <img
            src="https://images.magazynuj.pl/towar/skrzyniopaleta-plastikowa-na-3-plozach-z-kranikiem-wym-zew-1200x1000x760mm-z/gallery0.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__image">
          <img
            src="https://images.magazynuj.pl/towar/wieszak-do-zawieszania-pojemnikow-warsztatowych-o-wym-315-x-200-x-150-mm-wym-wieszaka-455-x-182-mm-2-pojemniki/gallery0.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__image">
          <img
            src="https://images.magazynuj.pl/towar/pojemnik-plastikowy-warsztatowy-z-przekladkami-wym-600x240x95mm/gallery0.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__image">
          <img
            src="https://images.magazynuj.pl/towar/okragly-pojemnik-plastikowy-bez-pokrywy-60l/gallery1.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__image">
          <img
            src="https://images.magazynuj.pl/towar/okragly-pojemnik-plastikowy-bez-pokrywy-60l/gallery0.jpg"
          />
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<style>
.mySwiper {
  height: 100%;
  margin: 10px;
}

.slider__image img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.slider__image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.mySwiper .swiper-slide {
  opacity: 0.5;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
  border-radius: 10px;

  border: 2px solid #0ea5e9;
}

.swiper-button-prev {
  color: #0ea5e9;
}

.swiper-button-next {
  color: #0ea5e9;
}

.mySwiper2 .swiper-slide img {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
}

@media only screen and (max-width: 640px) {
  .mySwiper {
  }
  .mySwiper2 {
  }
}
</style>
