<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader class="!m-0">
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <div class="container mx-auto py-5 <md:px-2">
        <div>
          <h2 class="text-xl font-semibold">Twój koszyk</h2>
        </div>
        <PageSection>
          <div class="flex gap-5 w-full mt-5">
            <div class="w-2/3">
              <GridCheckoutProduct />
              <GridCheckoutProduct />
            </div>
            <div
              class="w-1/3 bg-slate-200 h-min sticky !top-31 rounded-lg border-1 border-slate-300 shadow-xl text-blue-800 p-5"
            >
              <div class="mb-5">
                <span class="text-lg font-600">Twoje zamówienie:</span>
              </div>
              <div>
                <div class="border-b-2 border-gray-300">
                  <div class="flex justify-between">
                    <span>Wartość produktów</span>
                    <span>2500 zł</span>
                  </div>
                  <div class="flex my-3 justify-between">
                    <span>Dostawa</span>
                    <span>400 zł</span>
                  </div>
                </div>
                <div class="flex my-3 justify-between">
                  <span class="self-center">Koszt całkowity</span>
                  <span class="font-600 text-2xl">2500 zł</span>
                </div>
              </div>
              <Anchor
                class="!block items-center !px-0 text-center justify-center rounded-md border border-transparent bg-blue-600 py-3 text-base font-medium text-white shadow-sm hover:text-white hover:bg-blue-500"
                text="Śledź zamówienie"
                to="onestep"
                >Złóż zamówienie</Anchor
              >
              <div class="flex mt-2">
                <Anchor
                  class="!block items-center w-full !px-0 text-center justify-center rounded-md border border-transparent bg-gray-400 text-sm font-medium text-white shadow-md hover:text-white hover:bg-gray-500"
                  text="Śledź zamówienie"
                  to="checkout"
                  ><Icon
                    name="fa6-solid:headset"
                    class="text-white w-4 h-4 mr-1.5"
                  />Wezwij konsultanta</Anchor
                >
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
