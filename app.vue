<template>
  <Html class="min-height scroll-smooth" lang="pl">
    <Body class="bg-light-600 text-gray-600">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
AppSetup()
const locale = useState<string>('locale.setting')
const app = useAppConfig()

import 'lazysizes'
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

useHead({
  title: 'eMagazynowo',
  titleTemplate: 'eMagazynowo - eMagazynowo',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'eMagazynowo',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>
<!-- #425466 -->
