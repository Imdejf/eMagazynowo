<script lang="ts" setup>
import { Fetch } from '~/composables/useFetch'

definePageMeta({
  middleware: ['is-authorized'],
  layout: 'page',
})

onMounted(() => {
  const config = useRuntimeConfig()
  const router = useRouter()
  const code = new URLSearchParams(window.location.search).get('code')
  const cookie = useCookie('Authorization')
  if (cookie) {
    router.push({ path: '/', force: true })
  }
  const result = $fetch(
    config.baseURL + 'Loopback/GoogleOauthLoopback?code=' + code,
    {
      method: 'GET',
      credentials: 'include',
    }
  )
    .then((response) => {
      SetTokenCookie(response.data.token)
      window.location.reload()
    })
    .catch((error) => {
      router.push({ path: '/', force: true })
    })
})

const SetTokenCookie = (token: string) => {
  var rememberMeMilliseconds = 0
  rememberMeMilliseconds = 24 * 60 * 60 * 1000
  const tokenCookie = useCookie('Authorization', {
    expires: new Date(Date.now() + rememberMeMilliseconds),
    path: '/',
  })
  tokenCookie.value = token
}
</script>
<template></template>
