<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <nav class="fixed z-50 w-screen flex flex-row justify-between items-center bg-secondary text-quaternary px-7 xl:px-14 py-5">
    <!-- Logo -->
    <div class="flex flex-row items-center gap-x-5">
      <img class="w-14 xl:w-20" src="@/assets/icon.png" />
      <p class="font-playfair text-xl xl:text-4xl">LibraRie</p>
    </div>

    <!-- Desktop menu -->
    <div class="hidden xl:flex flex-row gap-x-48 text-3xl mr-16 font-montserrat font-light">
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Catalog">Catalog</a>
      <a href="/Events">Events</a>
    </div>

    <!-- Mobile burger -->
    <button class="xl:hidden" @click="toggleMobileMenu">
      <font-awesome-icon icon="bars" class="text-4xl" />
    </button>

    <!-- Mobile menu overlay -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-start pt-24 text-3xl font-montserrat font-light">
        <a href="/" @click="closeMobileMenu" class="w-full text-center py-5 border-b border-quaternary font-semibold">Home</a>
        <a href="/About" @click="closeMobileMenu" class="w-full text-center py-5 border-b border-quaternary">About</a>
        <a href="/Catalog" @click="closeMobileMenu" class="w-full text-center py-5 border-b border-quaternary">Catalog</a>
        <a href="/Events" @click="closeMobileMenu" class="w-full text-center py-5 border-b border-quaternary">Events</a>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
