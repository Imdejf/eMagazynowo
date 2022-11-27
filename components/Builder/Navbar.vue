<script lang="ts" setup>
//state
const navbarElement = ref<HTMLElement | null>(null)
const topbar = ref<HTMLElement | null>(null)

onMounted(() => {
  const navbarSticky = () => {
    if (navbarElement.value !== null) {
      useSticky(navbarElement.value, 50)
    }
  }

  setTimeout(() => navbarSticky(), 50)
})
</script>
<template>
  <section id="navbar-banner" class="header__banner">
    <slot name="banner" />
  </section>
  <header
    ref="navbarElement"
    id="navbar__middle"
    class="header__search bg-white top-0 z-99"
  >
    <slot name="search" />
  </header>
  <div id="navbar__bottom" class="header__menu">
    <slot name="menu" />
  </div>
</template>

<!-- <template>
  <div class="bg-white z-20">
    <div id="navbar-banner" class="header__banner">
      <slot name="banner" />
    </div>
    <div
      ref="navbar"
      id="navbar__middle"
      class="header__search bg-white fixed w-full"
    >
      <slot name="search" />
    </div>
    <div id="navbar__bottom" class="header__menu">
      <slot name="menu" />
    </div>
  </div>
</template> -->
