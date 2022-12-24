// https://nuxt.com/docs/api/configuration/nuxt-config
import { IntlifyModuleOptions } from '@intlify/nuxt3'

declare module '@nuxt/schema' {
    interface NuxtConfig {
      intlify?: IntlifyModuleOptions
    }
}

export default defineNuxtConfig({
  ssr: true,

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:5000/api/',
    },
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'pl-PL',
      fallbackLocale: 'pl-PL',
      availableLocales: ['en-EN', 'pl-PL', 'ua-UA', 'de-DE'],
    },
  },

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
    transpile: ['@headlessui/vue', '@vee-validate/rules'],
  },

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // modules
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    '@nuxt/content',
    'nuxt-windicss',
    'nuxt-swiper',
  ],

  imports: {
    dirs: ['stores'],
  },

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

  //swiper options
  swiper: {
    styleLang: 'css',
    modules: ['navigation', 'pagination', 'free-mode', 'thumbs', 'mousewheel'],
  }
})
