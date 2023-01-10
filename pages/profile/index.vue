<script lang="ts" setup>
import consolaGlobalInstance from 'consola'

// compiler macro
definePageMeta({
  middleware: ['is-authorized'],
  layout: 'profile',
})

const app = useAppConfig()

const isCompany = ref(true)

const changeIsCompany = (value: Boolean) => {
  isCompany.value = value
}
</script>

<template>
  <PageWrapper>
    <PageHeader class="!m-0">
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <div class="bg-white pt-8">
        <PageSection class="profile__section container mx-auto <md:px-2">
          <div>
            <div class="flex">
              <input
                id="disabled-radio-1"
                type="radio"
                @click="changeIsCompany(false)"
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
                @click="changeIsCompany(true)"
                name="disabled-radio"
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="disabled-radio-2"
                class="ml-2 text-sm font-medium text-black"
                >Firma</label
              >
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10">
              <VForm ref="changePasswordForm">
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12">
                    <FormVTextInput
                      class="px-4"
                      type="text"
                      name="username"
                      label="Nazwa użytkownika*"
                      placeholder="Nazwa użytkownika*"
                      :visable="false"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <FormVTextInput
                      type="text"
                      name="email"
                      label="Hasło*"
                      placeholder="Hasło*"
                    />
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <FormVTextInput
                      type="text"
                      name="email"
                      label="Powtórz hasło*"
                      placeholder="Powtórz hasło*"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="mt-5 tracking-wide m-auto font-semibold bg-blue-500 text-gray-100 py-4 px-10 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex focus:shadow-outline focus:outline-none"
                >
                  <Icon name="radix-icons:update" class="w-5 h-5" />
                  <span class="ml-3"> Zmień hasło </span>
                </button>
              </VForm>
            </div>
            <div class="flex-auto pb-5 <md:px-2">
              <VForm ref="profileForm">
                <div class="text-18px">
                  <label>Dane podstawowe</label>
                </div>
                <div class="px-4 py-10 lg:px-10">
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="email"
                        label="Imię*"
                        placeholder="Imię*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="email"
                        label="Nazwisko*"
                        placeholder="Nazwisko*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="email"
                        label="Telefon*"
                        placeholder="Telefon*"
                      />
                    </div>
                  </div>
                </div>
                <div v-show="isCompany" class="<md:px-2">
                  <div class="text-18px !px-0">
                    <label>Dane do faktury</label>
                  </div>
                  <div class="px-4 py-10 lg:px-10">
                    <div class="flex">
                      <div class="w-full lg:w-6/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="email"
                          label="Imię i nazwisko lub nazwa firmy*"
                          placeholder="Imię i nazwisko lub nazwa firmy*"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-7/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].nip"
                          label="NIP"
                          placeholder="NIP"
                        />
                      </div>
                      <div class="w-full lg:w-5/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].city"
                          label="Miejscowość"
                          placeholder="Miejscowość"
                        />
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].country"
                          label="Kraj"
                          placeholder="Kraj"
                        />
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].zipPostalCode"
                          label="Kod pocztowy"
                          placeholder="Kod pocztowy"
                        />
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].region"
                          label="Województwo"
                          placeholder="Województwo"
                        />
                      </div>
                      <div class="w-full lg:w-8/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].address1"
                          label="Adres/ulica"
                          placeholder="Adres/ulica"
                        />
                      </div>
                      <div class="w-full lg:w-4/12 px-4">
                        <FormVTextInput
                          type="text"
                          name="addresses[0].phoneNumber"
                          label="Numer telefonu"
                          placeholder="Numer telefonu"
                        />
                      </div>
                    </div>
                    <div class="<md:px-2">
                      <div class="mt-5">
                        <FormSwitch />
                      </div>
                      <div class="mt-5">
                        <FormSwitch />
                      </div>
                      <div class="mt-5">
                        <FormSwitch />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <button
                    type="submit"
                    class="mt-5 tracking-wide m-auto font-semibold bg-blue-500 text-gray-100 py-4 px-10 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex focus:shadow-outline focus:outline-none"
                  >
                    <Icon name="radix-icons:update" class="w-5 h-5" />
                    <span class="ml-3"> Zapisz </span>
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
