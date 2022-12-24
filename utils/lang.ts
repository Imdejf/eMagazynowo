import { useI18n } from 'vue-i18n'

export interface ILocales {
  nameInternational: string
  nameOriginal: string
  isoCode: string
  flag: string
  id: string
  storeId: string,
  defaultLanguage: Boolean
}

export const availableLocales: ILocales[] = [];

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const defaultLocale = availableLocales.find(locale => locale.defaultLanguage === true);
      const defaultIsoCode = defaultLocale ? defaultLocale.isoCode : '';
      const foundLang = window
      ? window.navigator.language.substring(0, 2) + "-" + window.navigator.language.substring(0, 2).toUpperCase()
      : defaultIsoCode
        return foundLang
      } catch (error) {
        const defaultLocale = availableLocales.find(locale => locale.defaultLanguage === true);
        const defaultIsoCode = defaultLocale ? defaultLocale.isoCode : '';
        return defaultIsoCode;
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
    const application = useApplication()
    for(const item of application.locales) {
      const mappedItem: ILocales = {
        nameInternational: item.nameInternational,
        nameOriginal: item.nameOrginal,
        isoCode: item.isoCode,
        flag: item.flag,
        id: item.id,
        storeId: item.storeId,
        defaultLanguage: item.defaultLanguage
      }
      availableLocales.push(mappedItem)    
    }    
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
