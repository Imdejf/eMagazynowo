<script lang="ts" setup>
export interface IMenuItem {
  photo: string
  productName: string
  manofacturer: string
  availability: string
  price: string
}
const app = useAppConfig()
const products = computed((): IMenuItem[] => [
  {
    photo: '/assets/img/apteczka.webp',
    productName: 'Apteczka przenośna pierwszej pomocy',
    price: '240.99 zł',
    availability: '3-4 tygodnie',
    manofacturer: 'Nazwa producenta',
  },
  {
    photo: '/assets/img/apteczka.webp',
    productName: 'Apteczka przenośna pierwszej pomocy',
    price: '240.99 zł',
    availability: '3-4 tygodnie',
    manofacturer: 'Nazwa producenta',
  },
  {
    photo: '/assets/img/apteczka.webp',
    productName: 'Apteczka przenośna pierwszej pomocy',
    price: '240.99 zł',
    availability: '3-4 tygodnie',
    manofacturer: 'Nazwa producenta',
  },
  {
    photo: '/assets/img/apteczka.webp',
    productName: 'Apteczka przenośna pierwszej pomocy',
    price: '240.99 zł',
    availability: '3-4 tygodnie',
    manofacturer: 'Nazwa producenta',
  },
  {
    photo: '/assets/img/apteczka.webp',
    productName: 'Apteczka przenośna pierwszej pomocy',
    price: '240.99 zł',
    availability: '3-4 tygodnie',
    manofacturer: 'Nazwa producenta',
  },
])
</script>
<template>
  <ul
    class="grid-recommended <sm:grid-cols-1 <md:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 col-auto tracking-normal mt-8"
  >
    <li v-for="product in products" :key="product.productName">
      <a
        href="#"
        class="relative transform hover:scale-102 hover:shadow-2xl transition duration-400 ease-in-out rounded-lg bg-white p-4 flex flex-col shadow-sm shadow-indigo-100"
      >
        <div class="flex">
          <img
            data-src="/assets/img/apteczka.webp"
            class="lazyload w-100px h-100px"
            alt="Apteczka"
          />

          <div class="mt-2">
            <div class="flex flex-col">
              <h3></h3>
              <h3 class="sr-only">Name</h3>
              <h3 class="font-medium">{{ product.productName }}</h3>
              <p class="sr-only">Price</p>
              <p class="text-blue-600 font-600 text-lg">{{ product.price }}</p>
            </div>
          </div>
        </div>
        <div class="mt-6 h-15 flex items-center text-14px gap-8">
          <div
            class="<md:w-1/3 sm:inline-flex sm:shrink-0 sm:items-center text-center"
          >
            <Icon name="ion:calendar-number-sharp" class="w-6 h-6" />
            <div class="w-full">
              <p>Dostępność:</p>

              <p class="font-600 text-orange-900">{{ product.availability }}</p>
            </div>
          </div>

          <div
            class="<md:w-1/3 h-15 sm:inline-flex sm:shrink-0 sm:items-center text-center"
          >
            <Icon name="wpf:factory" class="w-8 h-6" />
            <div>
              <p>Producent:</p>

              <p class="font-600 text-orange-900">{{ product.manofacturer }}</p>
            </div>
          </div>

          <div
            class="<md:w-1/3 h-15 sm:inline sm:shrink-0 sm:items-center <md:hidden sm:block text-center"
          >
            <div class="sm:shrink-0 sm:items-center text-center">
              <div class="w-full">
                <p>Wyprodukowano:</p>

                <Icon
                  name="twemoji:flag-for-flag-european-union"
                  class="h-10 w-10 <md:w-8 text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
