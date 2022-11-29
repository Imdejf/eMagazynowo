<script lang="ts" setup>
const app = useAppConfig()
const navbar = ref(null)
const emit = defineEmits(['toogleSlide'])

const openMenu = () => {
  emit('toogleSlide')
}
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div class="navbar__banner bg-gray-900 text-sm">
        <div class="container mx-auto lg:px-10 <md:px-2">
          <div class="flex justify-between text-slate-100">
            <div class="flex">
              <Anchor
                class="<sm:hidden"
                text="Szybka dostawa"
                to="/newsletter"
                icon="mdi:truck-fast"
                classToIcon=""
              >
              </Anchor>
              <Anchor
                class=""
                text="Śledź zamówienie"
                to="/newsletter"
                icon="ion:location-sharp"
                classToIcon=""
              >
              </Anchor>
              <Anchor
                class="<md:hidden"
                text="Zapisz się do newslettera"
                to="/newsletter"
                icon="ion:notifications-outline"
                classToIcon="text-orange-300"
              >
              </Anchor>
            </div>
            <div class="hidden 2xl:block">
              <Anchor class="" text="test" to="" icon="ion:location-sharp">
              </Anchor>
            </div>
            <div class="flex">
              <Anchor
                class="<sm:hidden"
                text="kontakt@emagazynowo.pl"
                href="mailto: kontak@emagazynowo.pl"
                icon="material-symbols:mail"
              >
              </Anchor>
              <Anchor> </Anchor>
              <a
                class="tansition-colors font-600 duration-300 text-xs hover:text-cyan-300 gap-1.5 flex justify-between items-center p-2"
                href="tel:698304621"
              >
                <span
                  class="animate-ping self-center absolute inline-flex rounded-full h-4.5 w-4.5 bg-sky-400"
                ></span>
                <span
                  class="items-center inline-flex rounded-full h-5 w-5 bg-sky-400"
                >
                  <i
                    class="text-cyan-300 m-auto relative justify-between text-base"
                  >
                    <Icon class="!block" name="ic:outline-phone-in-talk" /> </i
                ></span>
                698-304-621
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #search>
      <div class="container mx-auto lg:px-10 bg-white">
        <div class="py-1 flex items-center <md:px-2">
          <a
            href="/"
            class="<sm:min-w-120px <md:min-w-170px md:min-w-170px xl:min-w-230px"
          >
            <NuxtPicture
              src="/logo.webp"
              :imgAttrs="{
                class: '<sm:w-120px <md:w-170px md:w-170px xl:w-230px',
              }"
              alt="logo eMagazynowo"
            />
          </a>
          <FormSearch></FormSearch>
          <div
            class="<md:bg-gray-100 py-2 flex <md:fixed header__right-user-nav <md:F <md:bottom-0 <md:left-0 <md:w-full <md:justify-center"
          >
            <button
              @click="openMenu()"
              class="hidden <md:block flex flex-col items-center px-4 hover:text-blue-400 duration-300"
            >
              <div class="space-y-0.9 m-1">
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
              </div>
              <span class="tracking-1px uppercase">Kategorie</span>
            </button>
            <a
              href="#"
              class="flex flex-col items-center px-4 hover:text-blue-400 duration-300"
            >
              <Icon name="mdi:heart-outline" class="w-5 h-5" />
              <span class="uppercase">Ulubione</span>
            </a>
            <a
              href="#"
              class="flex flex-col items-center px-4 hover:text-blue-400 duration-300"
            >
              <Icon name="mingcute:user-3-line" class="w-5 h-5" />
              <span class="uppercase">Zaloguj</span>
            </a>
            <a
              href="#"
              class="flex flex-col items-center pl-4 hover:text-blue-400 duration-300"
            >
              <Icon name="uil:shopping-cart" class="w-5 h-5" />
              <span class="uppercase">Koszyk</span>
            </a>
          </div>
        </div>
      </div>
      <div class="text-sm text-white shadow-lg">
        <div class="container mx-auto lg:px-10 text-center <md:px-2 md:flex">
          <div class="<sm:w-120px <md:w-170px md:w-170px xl:w-230px <md:hidden">
            <button
              @click="openMenu()"
              class="px-6 py-2 border border-none text-sm hover:text-blue-100 text-blue-600 rounded <md:hidden"
            >
              <div class="space-y-0.9 m-1">
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
                <div class="w-4.5 h-0.4 bg-gray-600 m-auto"></div>
              </div>
              <span class="font-600 tracking-1px uppercase">Kategorie</span>
            </button>
          </div>
          <div
            class="border-r-2 h-7 border-gray-200 text-center self-center <sm:hidden"
          ></div>
          <ul
            class="uppercase mx-5 font-600 justify-center text-gray-600 inline-flex my-4"
          >
            <li>
              <a
                href="/"
                class="duration-300 duration-300 hover:text-cyan-300 hover:text-cyan-300"
                >Home</a
              >
            </li>
            <li href="/contact">
              <a href="/kontakt" class="p-3 hover:text-sky-400">Kontakt</a>
            </li>
            <li href="/blog">
              <a href="/blog" class="hover:text-sky-400">Blog</a>
            </li>
            <li href="/faq">
              <a href="/faq" class="p-3 hover:text-sky-400">Faq</a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </BuilderNavbar>
</template>

<style>
.header__right-user-nav {
  font-size: 0.625rem;
}

.sticky {
  top: 0;
}
</style>
