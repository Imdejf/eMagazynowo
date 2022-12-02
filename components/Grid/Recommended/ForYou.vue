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
    class="grid-recommended !py-10 <sm:grid-cols-2 <md:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 col-auto tracking-normal"
  >
    <li v-for="product in products" :key="product.productName">
      <div
        class="max-w-2xl mx-auto relative transform hover:scale-102 hover:shadow-2xl transition duration-400 ease-in-out rounded-lg"
      >
        <div
          class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              :data-src="product.photo"
              class="lazyload w-100px h-100px m-auto"
              alt="Krem"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h3
                class="card-text text-gray-900 font-400 text-sm tracking-tight"
              >
                {{ product.productName }}
              </h3>
            </a>
            <div class="flex items-center justify-between">
              <p class="text-xl font-bold text-blue-500">
                {{ product.price }}
              </p>
            </div>
            <div class="pt-3">
              <a
                href="#"
                class="block w-full text-center rounded-xl font-600 bg-orange-900 hover:bg-orange-900/90 py-4 text-14px font-medium"
              >
                Sprawdź produkt!
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
