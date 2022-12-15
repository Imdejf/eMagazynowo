<script lang="ts" setup>
export interface ISectionItem {
  id: number
  section: string
  name: string
}
// compiler macro
definePageMeta({
  layout: 'page',
})

const lastSectionId = ref(1)
const activeSectionId = ref({
  id: 1,
  section: 'data',
})

const sections = computed((): ISectionItem[] => [
  {
    id: 1,
    section: 'data',
    name: 'Data',
  },
  {
    id: 2,
    section: 'delivery',
    name: 'Delivery',
  },
  {
    id: 3,
    section: 'payment',
    name: 'Payment',
  },
  {
    id: 4,
    section: 'summary',
    name: 'Summary',
  },
])

const changeSection = (value: ISectionItem) => {
  lastSectionId.value = activeSectionId.value.id
  activeSectionId.value = {
    id: value.id,
    section: value.section,
  }
}

const nextSection = () => {
  const nextStep = sections.value.find(
    (c) => c.id == activeSectionId.value.id + 1
  )
  lastSectionId.value = activeSectionId.value.id
  if (nextStep) {
    activeSectionId.value = {
      id: nextStep.id,
      section: nextStep.section,
    }
  }
  window.scrollTo(0, 150)
}
</script>

<template>
  <PageWrapper>
    <PageHeader class="!m-0 overflow-x-hidden">
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody class="">
      <PageSection>
        <div class="container items-center mx-auto md:py-8">
          <div class="inline-flex justify-center items-center w-full">
            <hr
              class="my-8 w-full h-px bg-gray-200 border-0.5 border-gray-300"
            />
            <h1
              class="absolute px-5 font-600 text-2xl text-blue-700 bg-light-600"
            >
              Zamówienie
            </h1>
          </div>

          <div class="<sm:bg-white mb-5">
            <div class="hidden <sm:inline-block w-full">
              <div
                class="container flex justify-between h-13 mx-auto md:justify-center md:space-x-8 border-b-1 border-gray-300 mb-3"
              >
                <ul class="items-stretch space-x-3 gap-3 flex m-auto">
                  <li v-for="(item, i) in sections" :key="i" class="flex">
                    <a
                      @click="changeSection(item)"
                      rel="noopener noreferrer"
                      href="#"
                      class="flex uppercase font-600 text-12px items-center"
                      >{{ item.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative <sm:overflow-x-hidden md:flex md:gap-10">
              <div
                class="md:w-1/3 h-max rounded-md md:border-1 <sm:top-0 border-gray-300 bg-white"
              >
                <div
                  class="relative p-3 <sm:transform duration-600 ease-out transition-all"
                  :class="
                    activeSectionId.section == 'data'
                      ? 'opacity-100 !-translate-x-0/2 '
                      : activeSectionId.id >= lastSectionId
                      ? '<sm:opacity-0 !-translate-x-3/2 <sm:absolute '
                      : '<sm:opacity-0 !-translate-x-3/2 <sm:absolute '
                  "
                >
                  <div class="bg-white">
                    <div>
                      <h2 class="font-600 text-xl mb-4">1. Twoje dane</h2>
                    </div>
                    <div class="border-b border-gray-400">
                      <button
                        class="items-center rounded border-2 w-full border-blue-600 px-8 py-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 duration-400"
                      >
                        <span class="text-sm font-600"> Zaloguj </span>

                        <Icon
                          name="material-symbols:arrow-right-alt-rounded"
                          class="w-6 h-6"
                        />
                      </button>
                      <div class="text-center text-sm mt-2 font-500 mb-4">
                        Masz już konto? Kliknij żeby się zalogować.
                      </div>
                    </div>
                    <div class="my-4">
                      <div class="flex items-center justify-center">
                        <input
                          id="disabled-radio-1"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          for="disabled-radio-1"
                          class="ml-2 text-sm mr-2 font-medium text-black"
                          >Osoba prywatna</label
                        >
                        <input
                          checked
                          id="disabled-radio-2"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                          for="disabled-radio-2"
                          class="ml-2 text-sm font-medium text-black"
                          >Firma</label
                        >
                      </div>
                    </div>
                    <div>
                      <FormTextInput
                        v-model="test"
                        placeholder="Adres e-mail*"
                        size="sm"
                        class="w-full"
                      />
                      <FormTextInput
                        v-model="test"
                        placeholder="Firma*"
                        size="sm"
                        class="w-full"
                      />
                      <FormTextInput
                        v-model="test"
                        placeholder="Imie*"
                        size="sm"
                        class="w-full"
                      />
                      <FormTextInput
                        v-model="test"
                        placeholder="Nazwisko*"
                        size="sm"
                        class="w-full"
                      />
                      <FormTextInput
                        v-model="test"
                        placeholder="Telefon*"
                        size="sm"
                        class="w-full"
                      />
                      <div class="flex gap-3">
                        <FormTextInput
                          v-model="test"
                          placeholder="Ulica*"
                          size="sm"
                          class="w-2/3"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Nr*"
                          size="sm"
                          class="w-1/3"
                        />
                      </div>
                      <div class="flex gap-2">
                        <FormTextInput
                          v-model="test"
                          placeholder="Kod pocztowy*"
                          size="sm"
                          class="w-2/5"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Miasto*"
                          size="sm"
                          class="w-3/5"
                        />
                      </div>
                    </div>
                    <div class="form-group form-check text-lefty mt-4">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800 cursor-pointer"
                        >Dostawa na inny adres</label
                      >
                    </div>
                    <div class="hidden">
                      <div class="my-4">
                        <div class="flex items-center justify-center">
                          <input
                            id="disabled-radio-1"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            for="disabled-radio-1"
                            class="ml-2 text-sm mr-2 font-medium text-black"
                            >Osoba prywatna</label
                          >
                          <input
                            checked
                            id="disabled-radio-2"
                            type="radio"
                            value=""
                            name="disabled-radio"
                            class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            for="disabled-radio-2"
                            class="ml-2 text-sm font-medium text-black"
                            >Firma</label
                          >
                        </div>
                      </div>
                      <div>
                        <FormTextInput
                          v-model="test"
                          placeholder="Adres e-mail*"
                          size="sm"
                          class="w-full"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Firma*"
                          size="sm"
                          class="w-full"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Imie*"
                          size="sm"
                          class="w-full"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Nazwisko*"
                          size="sm"
                          class="w-full"
                        />
                        <FormTextInput
                          v-model="test"
                          placeholder="Telefon*"
                          size="sm"
                          class="w-full"
                        />
                        <div class="flex gap-3">
                          <FormTextInput
                            v-model="test"
                            placeholder="Ulica*"
                            size="sm"
                            class="w-2/3"
                          />
                          <FormTextInput
                            v-model="test"
                            placeholder="Nr*"
                            size="sm"
                            class="w-1/3"
                          />
                        </div>
                        <div class="flex gap-2">
                          <FormTextInput
                            v-model="test"
                            placeholder="Kod pocztowy*"
                            size="sm"
                            class="w-2/5"
                          />
                          <FormTextInput
                            v-model="test"
                            placeholder="Miasto*"
                            size="sm"
                            class="w-3/5"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group form-check text-left mt-4">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800 cursor-pointer"
                        >Proszę o wystawienie faktury VAT</label
                      >
                    </div>
                    <div class="hidden">
                      <FormTextInput
                        v-model="test"
                        placeholder="Numer NIP*"
                        size="sm"
                        class="mt-3"
                      />
                    </div>
                    <p class="mt-4">* Wymagane pola</p>
                    <div class="border-b border-gray-400 mt-7">
                      <button
                        @click="nextSection()"
                        class="items-center rounded border-2 w-full border-blue-600 px-8 py-3 text-white bg-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring active:bg-blue-500 duration-400"
                      >
                        <span class="text-sm font-600 uppercase">
                          Przejdź do wyboru metody dostawy
                        </span>

                        <Icon
                          name="material-symbols:arrow-right-alt-rounded"
                          class="w-6 h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="<sm:flex md:w-1/3">
                <div
                  class="relative <sm:top-0 <sm:transform w-full duration-600 ease-out transition-all"
                  :class="
                    activeSectionId.section == 'delivery'
                      ? 'opacity-100 !-translate-x-0/2 <sm:p-0'
                      : activeSectionId.id >= lastSectionId
                      ? '<sm:opacity-0 !-translate-x-3/2  <sm:absolute'
                      : lastSectionId > 3
                      ? '<sm:opacity-0 !-translate-x-3/2  <sm:absolute'
                      : '<sm:opacity-0 !translate-x-3/2 <sm:absolute'
                  "
                >
                  <div
                    class="md:border-1 p-3 rounded-md border-gray-300 px-3 bg-white <sm:transform duration-600 ease-out transition-all"
                    :class="activeSectionId.section == 'delivery' ? '' : ''"
                  >
                    <div>
                      <h2 class="font-600 text-xl mb-4">2. Metoda dostawy</h2>
                    </div>
                    <div class="items-center">
                      <div class="flex">
                        <input
                          id="disabled-radio-1"
                          type="radio"
                          value=""
                          name="disabled-radio"
                          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <Icon name="mdi:truck-fast" class="h-10 w-10 ml-3" />
                        <label
                          for="disabled-radio-1"
                          class="ml-2 text-sm mr-2 text-md font-medium text-black"
                          >Kurier</label
                        >
                        <label
                          class="ml-auto text-sm justify-end mr-2 text-lg font-600 text-black"
                          >243,53</label
                        >
                      </div>
                      <div class="pt-3 text-13px text-wrap leading-4">
                        Szczegóły odnośnie przewoźnika realizującego Twoją
                        dostawę otrzymasz mailowo po złożeniu zamówienia.
                        <br />Przewidywana dostawa w 1-2 dni robocze
                      </div>
                    </div>
                    <div class="flex items-center mt-4">
                      <input
                        id="disabled-radio-1"
                        type="radio"
                        value=""
                        name="disabled-radio"
                        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <Icon
                        name="fa6-solid:map-location-dot"
                        class="h-10 w-10 ml-3"
                      />
                      <label
                        for="disabled-radio-1"
                        class="ml-2 text-sm mr-2 text-md font-medium text-black"
                        >Odbiór własny</label
                      >
                      <label
                        class="ml-auto text-sm justify-end mr-2 text-lg font-600 text-black"
                        >0,00</label
                      >
                    </div>
                    <div class="border-b border-gray-400 mt-7">
                      <button
                        @click="nextSection()"
                        class="items-center rounded border-2 w-full border-blue-600 px-8 py-3 text-white bg-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring active:bg-blue-500 duration-400"
                      >
                        <span class="text-sm font-600 uppercase">
                          Przejdź do wyboru metody dostawy
                        </span>

                        <Icon
                          name="material-symbols:arrow-right-alt-rounded"
                          class="w-6 h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="relative rounded-md border-1 border-gray-300 p-3 <sm:top-0 w-full <sm:transform duration-600 ease-out transition-all bg-white md:mt-5"
                  :class="
                    activeSectionId.section == 'payment'
                      ? 'opacity-100 !-translate-x-0/2 '
                      : activeSectionId.id >= lastSectionId &&
                        activeSectionId.id > 3
                      ? '<sm:opacity-0 !-translate-x-3/2 <sm:absolute'
                      : '<sm:opacity-0 !translate-x-3/2 <sm:absolute'
                  "
                >
                  <div
                    :class="
                      activeSectionId.section != 'payment' ? '<sm:hidden' : ''
                    "
                  >
                    <h2 class="font-600 text-xl mb-4">3. Metoda płatności</h2>
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      id="disabled-radio-1"
                      type="radio"
                      value=""
                      name="disabled-radio"
                      class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <Icon
                      name="icon-park-solid:bank-transfer"
                      class="h-8 w-8 ml-3"
                    />
                    <label
                      for="disabled-radio-1"
                      class="ml-2 text-sm mr-2 text-md font-medium text-black"
                      >Przelew standardowy</label
                    >
                    <label
                      class="ml-auto text-sm justify-end mr-2 text-lg font-600 text-black"
                      >0,00</label
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      id="disabled-radio-1"
                      type="radio"
                      value=""
                      name="disabled-radio"
                      class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <Icon name="game-icons:wallet" class="h-8 w-8 ml-3" />
                    <label
                      for="disabled-radio-1"
                      class="ml-2 text-sm mr-2 text-md font-medium text-black"
                      >Płatość za pobraniem</label
                    >
                    <label
                      class="ml-auto text-sm justify-end mr-2 text-lg font-600 text-black"
                      >0,00</label
                    >
                  </div>
                  <div class="flex items-center mt-4">
                    <input
                      id="disabled-radio-1"
                      type="radio"
                      value=""
                      name="disabled-radio"
                      class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <img
                      src="/assets/img/content/przelewy24.png"
                      class="ml-3 w-14 h-8"
                      alt="Logo Przelewy24"
                    />
                    <label
                      for="disabled-radio-1"
                      class="ml-2 text-sm mr-2 text-md font-medium text-black"
                      >Przelew online</label
                    >
                    <label
                      class="ml-auto text-sm justify-end mr-2 text-lg font-600 text-black"
                      >0,00</label
                    >
                  </div>
                  <div class="border-b border-gray-400 mt-7">
                    <button
                      @click="nextSection()"
                      class="items-center rounded border-2 w-full border-blue-600 px-8 py-3 text-white bg-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring active:bg-blue-500 duration-400"
                    >
                      <span class="text-sm font-600 uppercase">
                        Przejdź do podsumowania
                      </span>

                      <Icon
                        name="material-symbols:arrow-right-alt-rounded"
                        class="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="md:w-1/3 <sm:top-0 <sm:transform duration-600 ease-out transition-all"
                :class="`${
                  activeSectionId.section != 'data' ? '' : '<sm:hidden'
                }
                ${
                  activeSectionId.section == 'summary'
                    ? 'opacity-100 !-translate-x-0/2 <sm:p-0 relative'
                    : activeSectionId.id >= lastSectionId
                    ? '<sm:opacity-0 !translate-x-3/2  <sm:absolute'
                    : '<sm:opacity-0 !translate-x-3/2 <sm:!absolute'
                }
                `"
              >
                <div
                  class="border-1 rounded-md border-gray-300 bg-white"
                  :class="
                    activeSectionId.section != 'summary' ? '<sm:hidden' : ''
                  "
                >
                  <div class="p-3">
                    <div class="border-b-2 border-gray-300">
                      <h2 class="font-600 text-xl mb-1">4. Podsumowanie</h2>
                      <Anchor
                        class="text-blue-500 hover:text-blue-300 hover:underline"
                        text="Śledź zamówienie"
                        to="onestep"
                        >Edytuj koszyk</Anchor
                      >
                    </div>
                    <div>
                      <ul class="divide-y divide-gray-700">
                        <li class="py-6 sm:flex-row sm:justify-between">
                          <div class="flex w-full space-x-2 sm:space-x-4">
                            <img
                              class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-24 sm:h-24"
                              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                              alt="Polaroid camera"
                            />
                            <div class="w-full pb-4">
                              <div class="flex w-full pb-2 space-x-2">
                                <div class="space-y-1">
                                  <h3
                                    class="text-md font-semibold leading-snug sm:pr-8"
                                  >
                                    Polaroid camera
                                  </h3>
                                </div>
                              </div>
                              <div class="flex text-sm justify-between">
                                <div>
                                  <div>Kolor: niebieski</div>
                                  <div>Ilość: 1</div>
                                </div>
                                <div class="justify-end text-right">
                                  <p
                                    class="text-sm line-through dark:text-gray-600"
                                  >
                                    75.50€
                                  </p>
                                  <p class="text-lg font-semibold">59.99€</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="block mt-2">
                            <button
                              class="text-blue-500 text-sm hover:text-blue-300 hover:underline"
                            >
                              Główne cechy produktu »
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-slate-200 py-2">
                    <div class="flex items-center">
                      <span
                        for="disabled-radio-1"
                        class="ml-2 text-sm mr-2 text-md font-medium text-black"
                        >Wartość produktów</span
                      >
                      <span
                        class="ml-auto text-sm justify-end mr-2 text-md font-500 text-black"
                        >243,53</span
                      >
                    </div>
                    <div class="flex items-center py-3">
                      <span
                        for="disabled-radio-1"
                        class="ml-2 text-sm mr-2 text-md font-medium text-black"
                        >Koszt transportu</span
                      >
                      <span
                        class="ml-auto text-sm justify-end mr-2 text-md font-500 text-black"
                        >243,53</span
                      >
                    </div>
                    <div class="flex items-center mt-3 mb-1">
                      <span
                        for="disabled-radio-1"
                        class="ml-2 text-sm mr-2 text-lg font-600 text-blue-600"
                        >Łącznie
                      </span>
                      <span class="text-md text-gray-400">(brutto)</span>
                      <span
                        class="ml-auto text-sm justify-end mr-2 text-xl font-600 text-blue-600"
                        >243,53</span
                      >
                    </div>
                    <div class="flex items-center">
                      <span
                        for="disabled-radio-1"
                        class="ml-2 text-sm mr-2 text-1rem font-500 text-red-800"
                        >Oszczędzasz
                      </span>
                      <span
                        class="ml-auto text-sm justify-end mr-2 text-xl font-600 text-red-800"
                        >75,50</span
                      >
                    </div>
                  </div>
                  <div class="border-1 rounded-b-md border-gray-300 bg-white">
                    <div class="p-3">
                      <div
                        class="form-group flex form-check gap-3 text-lefty mt-4"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 p-2 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800 cursor-pointer"
                          >Zaznacz wszystkie</label
                        >
                      </div>
                      <div
                        class="form-group flex form-check gap-3 text-lefty mt-4"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 p-2 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800 cursor-pointer"
                          >Chcę otrzymywać od Data Sharp, zgodnie z regulaminem
                          który akceptuję, informacje handlowe dot. tej firmy
                          oraz jej partnerów, na adres email.</label
                        >
                      </div>
                      <div
                        class="form-group flex form-check gap-3 text-lefty mt-4"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 p-2 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800 cursor-pointer"
                          >Chcę otrzymywać od Data Sharp, zgodnie z regulaminem
                          który akceptuję, informacje handlowe dot. tej spółki
                          oraz jej partnerów, na numer telefonu.
                        </label>
                      </div>
                      <div
                        class="form-group flex form-check gap-3 text-lefty mt-4"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 p-2 border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain cursor-pointer"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800 cursor-pointer"
                          >*Oświadczam, że zapoznałem się z treścią
                          <a class="font-600 hover:underline">Regulaminu</a>
                          serwisu i akceptuję jego postanowienia.</label
                        >
                      </div>
                      <div class="border-b border-gray-400 mt-7">
                        <button
                          class="items-center rounded border-2 w-full border-blue-600 px-8 py-3 text-white bg-blue-600 hover:bg-white hover:text-blue-600 focus:outline-none focus:ring active:bg-blue-500 duration-400"
                        >
                          <span class="text-sm font-600 uppercase">
                            Zamawiam i płacę
                          </span>

                          <Icon
                            name="material-symbols:arrow-right-alt-rounded"
                            class="w-6 h-6"
                          />
                        </button>
                      </div>
                      <div
                        class="text-12px text-gray-500 leading-5 mt-3 text-font"
                      >
                        <p>
                          Administratorem Twoich danych osobowych jest Data
                          Sharp z siedzibą w Przytocznej . Twoje dane osobowe
                          będą przetwarzane w celu realizacji procesu
                          zakupowego, działań marketingowych, wypełnienia
                          obowiązków wynikających z przepisów prawa oraz obrony
                          i dochodzenia ewentualnych roszczeń. Szczegółowe
                          informacje na temat przetwarzania Twoich danych
                          osobowych, w tym o przysługujących Ci prawach
                          znajdziesz w [<a
                            class="text-gray-600 font-600 hover:underline cursor-pointer"
                            >Polityce Prywatności: Złożenie zamówienia</a
                          >]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style>
.text-font {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
