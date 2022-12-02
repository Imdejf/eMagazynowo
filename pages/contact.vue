<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>
<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <PageSection>
        <div class="px-6 <sm:py-2 py-12 md:px-12 text-center">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 flex items-center">
              <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  class="block rounded-lg shadow-lg md:w-xl"
                  style="
                    background: hsla(0, 0%, 100%, 0.55);
                    backdrop-filter: blur(30px);
                  "
                >
                  <div class="grow-0 shrink-0 basis-auto w-full">
                    <div class="flex flex-wrap pt-10">
                      <div
                        class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-center <sm:justify-center">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md shadow-md w-12 h-12 flex items-center justify-center"
                            >
                              <Icon
                                name="fa6-solid:headset"
                                class="text-white"
                              />
                            </div>
                          </div>
                          <div class="grow ml-2">
                            <p class="font-bold mb-1">Pomoc</p>
                            <p class="text-gray-500">kontakt@emagazynowo.com</p>
                            <p class="text-gray-500">698 304 621</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-center <sm:justify-center">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md shadow-md w-12 h-12 flex items-center justify-center"
                            >
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="dollar-sign"
                                class="w-2.5 text-white"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 288 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div class="grow ml-2">
                            <p class="font-bold mb-1">Sprzedaż</p>
                            <p class="text-gray-500">handel@emagazynowo.com</p>
                            <p class="text-gray-500">698 304 621</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div
                          class="flex align-start items-center <sm:justify-center"
                        >
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md shadow-md w-12 h-12 flex items-center justify-center"
                            >
                              <Icon
                                name="material-symbols:mail"
                                class="text-white text-base w-6 h-6"
                              />
                            </div>
                          </div>
                          <div class="grow ml-2">
                            <p class="font-bold mb-1">Wiadomość</p>
                            <p class="text-gray-500">kontakt@emagazynowo.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-6 py-12 md:px-12">
                    <h3 class="text-3xl font-bold mb-12">Contact us</h3>
                    <form>
                      <div class="form-group mb-6">
                        <input
                          type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="Name"
                        />
                      </div>
                      <div class="form-group mb-6">
                        <input
                          type="email"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput8"
                          placeholder="Email address"
                        />
                      </div>
                      <div class="form-group mb-6">
                        <textarea
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlTextarea13"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="form-group form-check text-center mb-6">
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                          id="exampleCheck87"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800 cursor-pointer"
                          for="exampleCheck87"
                          >Wyślij do mnie kopie wiadomości</label
                        >
                      </div>
                      <button
                        type="submit"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="md:mb-12 lg:mb-0">
                <div class="h-700px -z-1 relative shadow-lg rounded-lg">
                  <iframe
                    title="eMagazynowo"
                    src="https://maps.google.com/maps?width=700&amp;height=700&amp;hl=en&amp;q=Przytoczna%20Polna%207+(eMagazynowo)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
                    class="h-full w-full absolute rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div class="section__selected_product">
          <div class="container py-5 mx-auto block lg:px-10 <md:px-2">
            <h2 class="uppercase tracking-3px font-600 text-lg">
              Zobacz również
            </h2>
            <GridCategory />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
