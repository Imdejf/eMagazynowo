<script lang="ts" setup></script>
<template>
  <section id="navbar-banner" class="header__banner">
    <slot name="banner" />
  </section>
  <header id="navbar__middle" class="header__search sticky bg-white top-0 z-99">
    <slot name="search" />
  </header>
  <div id="navbar__bottom" class="header__menu">
    <slot name="menu" />
  </div>
</template>
