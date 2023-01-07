import { useApplication } from '~/stores/application'
import { useAuth } from '~/stores/identity'

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-middleware',async (to, from) => {
      if(process.client){
          const application = useApplication()
          await application.fetchLanguage()
          localStorage.getItem('lang')
          const auth = useAuth()
          auth.setUserData()
        }
      },
      { global: true }
    )
  })