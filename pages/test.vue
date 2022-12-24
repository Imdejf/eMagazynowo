<template>
  <div class="wrapper">
    <div class="columns is-mobile is-vcentered is-centered is-gapless">
      <div
        class="column is-11-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd"
      >
        <a>dsa</a>
        <LanguageSwitcher type="select-box" />
        <a>daw</a>
        {{ $t('components.theme_switcher.theme') }}
        <h2 class="title is-2 has-text-centered mb-6 has-text-white">
          VeeValidate Tutorial
        </h2>
        <button @click="handleSubmit" class="bg-red-400">clicke me</button>
        <VForm
          class="card p-5"
          :validation-schema="schema"
          :initial-values="initialValues"
          v-slot="{ meta: formMeta, errors: formErrors }"
          @submit="handleSubmit"
        >
          <button
            class="toggle-debug button is-link is-inverted is-pulled-right p-2"
            @click="debug = !debug"
          >
            {{ debug ? 'Remove Debug' : 'Show Debug' }}
          </button>

          <h2 class="title is-4 mt-2">Sign Up</h2>

          <FormVTextInput
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            :debug="debug"
            leftIcon="fa-envelope"
          />
          <FormVTextInput
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            :debug="debug"
            leftIcon="fa-lock"
          />
          <FormVTextInput
            type="password"
            name="confirmed"
            label="Confirm Password"
            placeholder="Confirm Password"
            :debug="debug"
            leftIcon="fa-lock"
          />

          <template v-if="Object.keys(formErrors).length">
            <p class="help is-danger has-text-weight-bold">
              Please correct the following errors:
            </p>
            <ul>
              <li
                v-for="(message, field) in formErrors"
                :key="field"
                class="help is-danger"
              >
                {{ message }}
              </li>
            </ul>
          </template>

          <button
            class="button mt-3"
            :class="{ 'is-primary': formMeta.valid }"
            :disabled="!formMeta.valid"
            type="submit"
          >
            Submit
          </button>

          <div class="debug" v-if="debug">
            <pre>{{ formMeta }}</pre>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script setup>
import { object, string, ref as yupRef } from 'yup'
import { configure } from 'vee-validate'
import { Fetch } from '~/composables/useFetch'
import { useApplication } from '~/stores/application'

const debug = ref(false)
const config = useRuntimeConfig()

console.log(config.public.baseURL)

const handleSubmit = async (values, actions) => {
  const application = useApplication()
  application.fetchLanguage()
  console.log()
  // const result = await Fetch('/User/Identity/test', { method: 'get' })
  // onMounted(() => console.log(document.cookie))
}
onMounted(() => console.log(document.cookie))

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})
const schema = object({
  email: string().required().email().label('Email Address'),
  password: string().required().min(8).label('Your Password'),
  confirmed: string()
    .required()
    .oneOf([yupRef('password')], 'Passwords do not match') //Cross-Field Validation
    .label('Your Confirmation Password'),
})
const initialValues = { email: '', password: '', confirmed: '' }
</script>

<style scoped>
.columns {
  min-height: 100vh;
}
.wrapper {
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
