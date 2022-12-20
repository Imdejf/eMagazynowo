<script lang="ts" setup>
import { object, string, ref as yupRef } from 'yup'
import { configure } from 'vee-validate'
import { Fetch } from '~/composables/useFetch'

// compiler macro
definePageMeta({
  layout: 'page',
})

const registerForm = ref(null)

const handleRegister = (values, actions) => {
  console.log(values)
  var test = Fetch('User/Identity/CreateUser', { method: 'post', body: values })
  console.log(test)
}

const invalidHandleRegister = () => {
  window.scrollTo(0, 150)
}

const schema = object({
  username: string().required().email().label('Username'),
  email: string().required().email().label('Email Address'),
  password: string().required().min(8).label('Your Password'),
  repeatedPassword: string()
    .required()
    .oneOf([yupRef('password')], 'Passwords do not match') //Cross-Field Validation
    .label('Your Confirmation Password'),
  name: string().required().email().label('Name'),
  surname: string().required().email().label('Surname'),
})

const initialValues = {
  username: '',
  email: '',
  password: '',
  repeatedPassword: '',
  name: '',
  surname: '',
  companyName: '',
  nip: '',
  city: '',
  country: '',
  postalCode: '',
  region: '',
  address: '',
}
</script>

<template>
  <PageWrapper>
    <PageHeader class="!m-0">
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <div class="bg-white">
        <PageSection>
          <div class="w-full lg:w-8/12 px-4 py-10 mx-auto">
            <div
              class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-100 border-0"
            >
              <div class="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                  <h6 class="text-blueGray-700 text-xl font-bold">
                    Rejestracja
                  </h6>
                  <a
                    class="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow"
                    type="button"
                  >
                    Konto
                  </a>
                </div>
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <VForm
                  ref="registerForm"
                  @submit="handleRegister"
                  @invalid-submit="invalidHandleRegister"
                  :validation-schema="schema"
                  :initial-values="initialValues"
                  v-slot="{ meta: formMeta, errors: formErrors }"
                >
                  <h6
                    class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                  >
                    Dane do logowania
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="username"
                        label="Nazwa użytkownika*"
                        placeholder="Nazwa użytkownika*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="email"
                        label="Adres email*"
                        placeholder="Adres email*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="password"
                        name="password"
                        label="Hasło*"
                        placeholder="Hasło*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="password"
                        name="repeatedPassword"
                        label="Potwierdz hasło*"
                        placeholder="Potwierdz hasło*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="name"
                        label="Imie"
                        placeholder="Imię*"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="surname"
                        label="Nazwisko"
                        placeholder="Nazwisko*"
                      />
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />
                  <div class="rounded-t bg-white mb-0 px-6 py-6">
                    <div class="text-center flex justify-end">
                      <a
                        class="bg-blue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow"
                        type="button"
                      >
                        Faktura
                      </a>
                    </div>
                  </div>
                  <h6
                    class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                  >
                    Dane do wystawienia faktury
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="companyName"
                        label="Imię i nazwisko lub nazwa firmy"
                        placeholder="Imię i nazwisko lub nazwa firmy"
                      />
                    </div>
                    <div class="w-full lg:w-8/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="nip"
                        label="NIP"
                        placeholder="NIP"
                      />
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="city"
                        label="Miejscowość"
                        placeholder="Miejscowość"
                      />
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="country"
                        label="Kraj"
                        placeholder="Kraj"
                      />
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="postalCode"
                        label="Kod pocztowy"
                        placeholder="Kod pocztowy"
                      />
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="region"
                        label="Województwo"
                        placeholder="Województwo"
                      />
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                      <FormVTextInput
                        type="text"
                        name="address"
                        label="Adres/ulica"
                        placeholder="Adres/ulica"
                      />
                    </div>
                  </div>
                  <div class="form-group form-check text-left mt-4">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800 cursor-pointer"
                      >Chcę założyć Konto Klienta na emagazynowo.pl *
                      więcej...</label
                    >
                  </div>
                  <div class="form-group form-check text-left mt-4">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800 cursor-pointer"
                      >Przeczytałem i akceptuję Regulamin oraz Politykę
                      prywatności * więcej...</label
                    >
                  </div>
                  <div class="form-group form-check text-left mt-4">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800 cursor-pointer"
                      >Zapoznałem się z Regulaminem i chcę otrzymywać na podany
                      adres e-mail informacje od gomez.pl o najnowszych
                      kolekcjach i ofertach więcej...</label
                    >
                  </div>
                  <div class="form-group form-check text-left mt-4">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800 cursor-pointer"
                      >Zapoznałem się z Regulaminem i chcesz otrzymywać
                      wiadomości SMS informacje o najnowszych produktach i
                      ofertach więcej...</label
                    >
                  </div>
                  <button
                    type="submit"
                    class="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3"> Zarejestruj się </span>
                  </button>
                </VForm>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection></PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
