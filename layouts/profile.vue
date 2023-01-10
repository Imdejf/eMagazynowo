<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const isActive = ref(false)
const isLoading = ref(false)

const toggleSlideover = () => {
  isActive.value = !isActive.value
}

nuxtApp.hook('page:finish', () => {
  isLoading.value = true
})
</script>

<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <slot name="header" class="">
        <PageNavbar @toogleSlide="toggleSlideover" />
      </slot>
      <div>
        <div>
          <div class="flex items-center justify-center">
            <div
              class="w-full h-full fixed inset-0 z-999"
              :class="isActive ? '' : 'invisible'"
            >
              <div
                id="slideover-bg"
                @click="toggleSlideover()"
                class="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900"
                :class="isActive ? 'opacity-60' : 'opacity-0'"
              ></div>
              <div
                id="slideover"
                class="w-0 absolute bg-white h-full absolute duration-300 ease-out transition-all"
                :class="isActive ? 'sm:w-4/5 <sm:w-11/12' : 'translate-x-full'"
              >
                <div
                  class="text-gray-600 top-0 w-full h-8 flex items-center justify-end right-0 mt-5 mr-5"
                >
                  <Icon
                    @click="toggleSlideover()"
                    name="majesticons:close"
                    class="w-10 h-10 cursor-pointer mr-10"
                    viewBox="0 0 24 24"
                  ></Icon>
                </div>
                <GridPopupCategory
                  :class="isActive ? 'opacity-100' : 'opacity-0'"
                />
              </div>
            </div>
          </div>
          <PageProfileNavbar />
          <slot></slot>
        </div>
      </div>
      <slot name="footer">
        <PageFooter v-show="isLoading" />
      </slot>
    </div>
  </div>
</template>
