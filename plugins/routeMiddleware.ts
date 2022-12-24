import { useApplication } from '~/stores/application'


export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-middleware',async (to, from) => {
      const application = useApplication()
      await application.fetchLanguage()
      if(process.client){
        localStorage.getItem('lang') 
        }
      },
      { global: true }
    )
  })