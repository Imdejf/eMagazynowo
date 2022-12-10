<template>
  <div class="bg-white w-full rounded-lg border-1 border-gray-300 shadow-xl">
    <div class="border-b-3 border-dashed <lg:border-b-2">
      <h1 class="py-4 mx-8 font-bold text-blue-700 leading-none text-xl">
        Tytuł
      </h1>
    </div>
    <div class="flex px-4">
      <div class="py-7 <sm:py-3 w-2/12">
        <img
          data-src="/assets/img/apteczka.webp"
          class="lazyload w-120px h-120px <sm:h-60px <sm:w-60px"
        />
      </div>
      <div class="py-7 <sm:py-3 w-7/12 text-sm pr-3 md:self-center">
        <p class="product_content">
          Kompaktowa drabina trzyelementowa, tłoczona, 15 stopni. Maksymalna
          wysokość robocza to 10,4 m. Idealna do pracy w domu, okazjonalnych
          remontach a także w użyciu profesjonalnym.
        </p>
        <span class="text-blue-500">Więcej...</span>
      </div>
      <div
        class="py-7 <sm:py-3 px-4 <sm:px-2.5 w-3/12 border-l-3 border-dashed"
      >
        <div class="rounded">
          <p class="text-sm relative pt-4 w-60">
            <span
              class="absolute -top-1 right-22 <sm:right-40 line-through decoration-red-700 font-600 text-lg text-red-500"
            >
              6,47 zł
            </span>
            <strong class="font-600 text-4xl <sm:text-xl text-blue-600">
              3,47 zł
            </strong>
            <span
              class="font-600 text-md <sm:text-11px <sm:block text-gray-400"
            >
              4,47 zł (brutto)
            </span>
          </p>
        </div>

        <div class="flex mt-3 <sm:hidden">
          <FormQuantityInput />
          <div
            class="w-full text-center bg-blue-600 rounded-r-xl rounded hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-400"
          >
            <button class="h-full text-md <sm:text-sm font-500 text-white">
              <Icon name="uil:shopping-cart" class="w-5 h-5 m-1" />Dodaj do
              koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-55 ml-auto p-2 <sm:flex hidden">
      <FormQuantityInput />
      <div
        class="w-full text-center bg-blue-600 rounded-r-xl rounded hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-400"
      >
        <button class="h-full text-md <sm:text-sm font-500 text-white">
          <Icon name="uil:shopping-cart" class="w-5 h-5 m-1" />Dodaj do koszyka
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@media (max-width: 640px) {
  .product_content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
