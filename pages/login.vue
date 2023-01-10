<script lang="ts" setup>
import { object, string, ref as yupRef } from 'yup'
import { configure } from 'vee-validate'
import { Fetch } from '~/composables/useFetch'

// compiler macro
definePageMeta({
  middleware: ['is-authorized'],
  layout: 'page',
})

const rememberMe = ref('')
const googleRedirectUri = ref('')

const debug = ref(false)
onMounted(() => {
  const config = useRuntimeConfig()
  debug.value =
    useRouter().currentRoute.value.query.debug === 'true' ? true : false
})

const handleLoginGoogle = async () => {
  const config = useRuntimeConfig()

  const result = await Fetch('Google/Link', {
    method: 'GET',
    credentials: 'include',
  })

  navigateTo(result.data.value.data, { external: true })
}

const onAuthStatusChange = async (response) => {
  if (response.authResponse) {
    const result = await Fetch(
      'Facebook/Login/' + response.authResponse.accessToken,
      {
        method: 'GET',
      }
    )
    SetTokenCookie(result.data.value.data.token)
    window.location.reload()
  }
}

const handleLoginFacebook = async () => {
  const config = useRuntimeConfig()

  const result = await $fetch(config.baseURL + 'Facebook/Link', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  })
  navigateTo(result.data.value.data, { external: true })
}

const handleLogin = (values, actions) => {
  const config = useRuntimeConfig()
  $fetch(config.baseURL + 'Connect/Token', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `client_id=ro.client&client_secret=secret&grant_type=password&username=${values.email}&password=${values.password}`,
  }).then((response) => {
    SetTokenCookie(response.access_token)
    window.location.reload()
  })
}

const SetTokenCookie = (token: string) => {
  var rememberMeMilliseconds = 0
  if (rememberMe) {
    rememberMeMilliseconds = 365 * 24 * 60 * 60 * 1000
  } else {
    rememberMeMilliseconds = 24 * 60 * 60 * 1000
  }
  const tokenCookie = useCookie('Authorization', {
    expires: new Date(Date.now() + rememberMeMilliseconds),
    path: '/',
  })
  tokenCookie.value = token
}

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})
const schema = object({
  email: string().required().email().label('Email Address'),
  password: string().required().min(8).label('Your Password'),
})
const initialValues = { email: '', password: '' }
const route = useRoute()
</script>

<template>
  <PageWrapper>
    <PageHeader class="!m-0">
      <PageTitle></PageTitle>
    </PageHeader>
    <PageBody>
      <div class="bg-white">
        <PageSection>
          <div
            class="login__section m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1"
          >
            <div class="lg:w-1/2 p-6 sm:p-6">
              <div class="flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold text-blue-500">
                  Zaloguj się
                </h1>
                <div class="w-full flex-1 mt-8">
                  <div class="flex flex-col items-center">
                    <button
                      @click="handleLoginGoogle"
                      class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                    >
                      <div class="bg-white p-2 rounded-full">
                        <Icon name="logos:google-icon" class="w-6 h-6" />
                      </div>
                      <span class="ml-4"> Zaloguj się przez Google </span>
                    </button>
                    <button
                      @click="handleLoginFacebook"
                      class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                    >
                      <div class="p-2">
                        <Icon name="logos:facebook" class="w-6 h-6" />
                      </div>
                      <span class="ml-4"> Zaloguj się przez Facebook </span>
                    </button>
                  </div>
                  <div class="my-6 border-b text-center">
                    <div
                      class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                    >
                      Lub zaloguj się mailem
                    </div>
                  </div>
                  <VForm
                    class="mx-auto max-w-xs"
                    :validation-schema="schema"
                    :initial-values="initialValues"
                    v-slot="{ meta: formMeta, errors: formErrors }"
                    @submit="handleLogin"
                    @invalid-submit="invalidHandleLogin"
                  >
                    <FormVTextInput
                      type="text"
                      name="email"
                      label="Email"
                      placeholder="Email"
                      :debug="debug"
                      leftIcon="material-symbols:mail"
                    />
                    <FormVTextInput
                      type="password"
                      name="password"
                      label="Hasło"
                      placeholder="Hasło"
                      :debug="debug"
                      leftIcon="ic:sharp-lock-person"
                    />

                    <button
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
                      <span class="ml-3"> Zaloguj się </span>
                    </button>
                    <div class="debug" v-if="debug">
                      <pre>{{ formMeta }}</pre>
                    </div>
                    <div class="form-group form-check text-center mt-4">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800 cursor-pointer"
                        >Zapamiętaj mnie</label
                      >
                    </div>
                    <div class="flex justify-center mt-3 sm:hidden">
                      <span>Nie masz konta?</span>
                      <NuxtLink href="/register" class="ml-2 text-blue-400"
                        >Zarejestruj się</NuxtLink
                      >
                    </div>
                  </VForm>
                </div>
              </div>
            </div>
            <div class="flex-1 text-center hidden lg:flex">
              <div
                class="xl:m-16 w-full bg-contain bg-center bg-no-repeat p-6 sm:p-6"
              >
                <h1 class="text-2xl xl:text-3xl font-extrabold text-blue-500">
                  Nie masz konta?
                </h1>
                <ol class="relative border-l ml-10 border-gray-400 mt-8">
                  <li class="mb-10 ml-6">
                    <span
                      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Rabat
                    </h3>
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      5% rabatu na transport przy pierwszych zakupach
                    </p>
                  </li>
                  <li class="mb-10 ml-6">
                    <span
                      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      System lojalnościowy
                    </h3>
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Posiadamy atrakcyjny system lojalnościowy.
                    </p>
                  </li>
                  <li class="mb-10 ml-6">
                    <span
                      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Oszczędność czasu przy zamówieniu
                    </h3>
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Automatycznie wypełniamy dane w formularzu płatniczym.
                    </p>
                  </li>
                  <li class="mb-10 ml-6">
                    <span
                      class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-3 h-3 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3
                      class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                    >
                      Newsletter
                    </h3>
                    <p
                      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                    >
                      Poinformujemy Cię o nowych produktach i ofertach.
                    </p>
                  </li>
                </ol>
                <NuxtLink
                  href="/register"
                  class="mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span class="ml-3"> Załóż konto </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>

<style>
@media only screen and (min-width: 1024px) {
  .login__section::before {
    display: block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    content: '';
    margin: 50px 0;
    width: 1px;
    background-color: #e5e7eb;
  }
}
</style>
