import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
    id: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'twemoji:flag-for-flag-united-states',
    id: '',
  },
  pl: {
    name: 'Polish',
    iso: 'pl',
    flag: 'twemoji:flag-poland',
    id: '',
  },
  ua: {
    name: 'Ukraine',
    iso: 'ua',
    flag: 'twemoji:flag-ukraine',
    id: '',
  },
  de: {
    name: 'Germany',
    iso: 'de',
    flag: 'twemoji:flag-germany',
    id: '',
  }
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
    window.location.reload()
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
