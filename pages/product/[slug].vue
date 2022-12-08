<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageHeader>
    <PageTitle></PageTitle>
  </PageHeader>
  <PageBody>
    <PageWrapper class="flex flex-col mx-5">
      <PageSection class="product__section__title">
        <div
          class="mx-auto w-full h-full block mb-2 rounded-md <md:px-2 self-center h-full bg-white"
        >
          <div class="border-b-3 border-dashed <lg:border-b-2">
            <h1 class="text-xl py-4 mx-8 font-bold leading-none sm:text-2xl">
              Tytuł
            </h1>
          </div>
          <div class="relative mx-auto">
            <div class="flex">
              <div class="pt-4 w-4/6">
                <GridSwiperProductCard />
                <div class="mt-10 px-4">
                  <p class="font-600 text-lg">Opis produktu:</p>
                  <p class="mt-4">
                    Pojemnik do segregacji odpadów na kółkach 360 l. Wygodna,
                    ergonomiczna i bezpieczna segregacja aż 360 litrów odpadów!
                    Ten pojemnik na odpady to gwarancja jeszcze łatwiejszej
                    segregacji śmieci w magazynach, halach produkcyjnych czy
                    warsztatach. Producent wykonał go z bardzo wysokiej jakości
                    tworzywa, dzięki czemu kosz jest niezwykle odporny na
                    uszkodzenia mechaniczne, a także działanie niekorzystnych
                    warunków atmosferycznych. Ergonomia przede wszystkim.
                    Pojemnik do segregacji odpadów na kółkach 360 l został
                    wyposażony w bardzo wytrzymałe koła do swobodnego
                    transportowania oraz przestawiania pojemnika. Ergonomiczny
                    uchwyt pozwala na wygodne przenoszenie go, opróżnianie z
                    odpadów oraz otwieranie i zamykanie. Doskonale dopasowana
                    pokrywa szczelnie zabezpiecza przed wydobywającymi się z
                    wnętrza kosza nieprzyjemnymi zapachami. Pojemnik z uchwytem
                    grzebieniowym dzięki czemu śmieciarka może go opróżniać.
                  </p>
                </div>
                <div class="mt-5 flex w-full gap-5 px-4">
                  <div class="w-1/3">
                    <p class="font-600 text-lg border-b pb-3 border-gray-300">
                      Cechy:
                    </p>
                    <ul class="list_characteristics list-square list-inside">
                      <li class="characteristics">test</li>
                      <li class="characteristics">test</li>
                      <li class="characteristics">test</li>
                    </ul>
                  </div>
                  <div class="w-2/3">
                    <div>
                      <p class="font-600 text-lg border-b pb-3 border-gray-300">
                        Szczegóły:
                      </p>
                      <ul class="list_details">
                        <li class="details">
                          <span class="justify-start">Gramatura [gr/m2]</span>
                          <span class="justify-end">80</span>
                        </li>
                        <li class="details">
                          <span class="justify-start">Gramatura [gr/m2]</span>
                          <span class="justify-end">80</span>
                        </li>
                        <li class="details">
                          <span class="justify-start">Gramatura [gr/m2]</span>
                          <span class="justify-end">80</span>
                        </li>
                        <li class="details">
                          <span class="justify-start">Gramatura [gr/m2]</span>
                          <span class="justify-end">80</span>
                        </li>
                        <li class="details">
                          <span class="justify-start">Gramatura [gr/m2]</span>
                          <span class="justify-end">80</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="lg:sticky top-31 border-l-3 flex-1 w-2/6 <lg:border-l-2 border-dashed h-full"
              >
                <div>
                  <div class="flex justify-between">
                    <strong
                      class="rounded-full border self-center border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                    >
                      BestSeller
                    </strong>
                    <strong
                      class="inline-flex items-center gap-1 rounded-tl-xl rounded-bl-xl bg-[#00309a] py-1.5 px-3 text-white"
                    >
                      <Icon
                        name="game-icons:european-flag"
                        class="w-20px h-20px text-[#ffd700]"
                      />

                      <span class="text-[10px] font-medium sm:text-xs"
                        >Wyprodukowano w UE</span
                      >
                    </strong>
                  </div>
                  <form class="space-y-2 pt-2">
                    <div class="rounded px-5 pb-6 border-b-3 border-dashed">
                      <p class="text-sm">
                        <span class="block font-600 text-xl">
                          Twoja cena:
                        </span>
                      </p>
                      <p class="text-sm relative pt-4 w-60">
                        <span
                          class="absolute -top-1 right-22 line-through decoration-red-700 font-600 text-lg text-red-500"
                        >
                          6,47 zł
                        </span>
                        <strong class="font-600 text-4xl text-blue-600">
                          3,47 zł
                        </strong>
                        <span class="font-600 text-md text-gray-400">
                          4,47 zł (brutto)
                        </span>
                      </p>
                    </div>

                    <div class="px-5">
                      <div class="flex pt-3">
                        <p class="text-lg w-5/12 font-600 text-gray-400">
                          Dostępność:
                        </p>
                        <p class="text-lg w-3/12 font-800 text-gray-600">
                          24-48 h
                        </p>
                      </div>
                      <div class="flex">
                        <p class="text-lg w-5/12 font-600 text-gray-400">
                          Jednostka:
                        </p>
                        <p class="text-lg w-3/12 font-800 text-gray-600">
                          szt.
                        </p>
                      </div>
                      <div class="">
                        <p
                          class="font-600 text-lg mt-8 w-full pb-4 border-b border-gray-300"
                        >
                          Wybierz wariant
                        </p>
                        <FormDropdownProduct />
                        <FormDropdownProduct />
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="w-full rounded bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                    >
                      Dodaj do koszyka
                    </button>

                    <div class="flex gap-2">
                      <button
                        type="button"
                        class="w-full rounded border border-gray-300 bg-gray-100 py-3 text-0.75rem font-bold uppercase tracking-wide"
                      >
                        <Icon
                          name="openmoji:white-question-mark"
                          class="w-5 h-5"
                        />
                        Zapytaj o produkt
                      </button>
                      <button
                        type="button"
                        class="w-full rounded border border-gray-300 bg-gray-100 py-3 text-0.75rem font-bold uppercase tracking-wide"
                      >
                        <Icon name="mdi:heart-outline" class="w-5 h-5" />

                        Do ulubionych
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="h-90">
              <GridSwiperCheckAlos />
            </div>
            <div class="!-mb-10">
              <GridRecommendedForYou />
            </div>
          </div>
        </div>
      </PageSection>
    </PageWrapper>
  </PageBody>
</template>

<style>
.details {
  border-bottom: 1px solid #cbd5e1;
  padding: 8px;
  justify-content: space-between;
  display: flex;
}

.characteristics {
  border-bottom: 1px solid #cbd5e1;
  padding: 8px;
}
</style>
