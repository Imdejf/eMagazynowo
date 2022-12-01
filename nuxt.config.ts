// https://nuxt.com/docs/api/configuration/nuxt-config
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
    interface NuxtConfig {
      intlify?: IntlifyModuleOptions
    }
}

export default defineNuxtConfig({
  ssr: true,
  css:[
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: [],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // modules
  modules: [
    'nuxt-icon',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@nuxt/content',
    'nuxt-windicss',
    ['nuxt-swiper', {
      // Swiper options
      styleLang: 'css',
      modules: ['navigation', 'pagination'],
    }]
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [

    ],
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
