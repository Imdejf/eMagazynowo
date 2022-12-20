import { defineStore } from 'pinia'
import { Fetch } from '~/composables/useFetch'

export interface ILocales {
    [key: string]: {
      name: string
      iso: string
      flag: string
      id: string
    }
}

export const useCounter = defineStore('languages', {
    state: (): ILocales => ({
        
    }),
    actions: {
      async fetchLanguage({commit}) {
        try {
          const data = await Fetch('Store/Language', { method: "get" })
          commit("SET_USERS", data.data);
        } catch(error) {
          alert(error);
          console.log(error);
        }
      }
    }
})

  