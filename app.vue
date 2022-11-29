<template>
  <Html class="min-height scroll-smooth">
    <Body class="bg-light-400 text-gray-600">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
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
