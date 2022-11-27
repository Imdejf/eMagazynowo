<script lang="ts" setup>
const isActive = ref(false)
const toggleSlideover = () => {
  isActive.value = !isActive.value
}
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
                  @click="toggleSlideover()"
                  class="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
                >
                  <Icon
                    name="majesticons:close"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  ></Icon>
                </div>
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
  </div>
</template>
