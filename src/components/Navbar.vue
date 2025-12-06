<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const route = useRoute();
const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
    mobileMenuOpen.value = false;
}

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catalog", path: "/catalog" },
    { name: "Events", path: "/events" },
];
</script>
<template>
    <nav
        class="fixed z-50 w-screen flex flex-row justify-between items-center bg-secondary text-quaternary px-7 xl:px-14 py-5">
        <!-- Logo -->
        <div class="flex flex-row items-center gap-x-5 z-40">
            <img class="w-10 lg:w-14 xl:w-20" src="@/assets/icon.png" />
            <p class="font-playfair text-xl xl:text-4xl">LibraRie</p>
        </div>

        <!-- Desktop menu -->
        <div class="hidden lg:flex gap-x-16 xl:gap-x-40 mr-16 font-montserrat font-light">
            <div v-for="link in links" :key="link.path" class="relative">
                <a :href="link.path" class="text-base xl:text-2xl px-1">
                    {{ link.name }}
                </a>
                <div class="absolute -bottom-2 h-1 bg-ternary transition-all duration-300 rounded-3xl"
                    :class="{ 'opacity-100': route.path === link.path, 'opacity-0': route.path !== link.path }"
                    style="left: -14px; right: -14px"></div>
            </div>
        </div>

        <!-- Mobile burger -->
        <button class="lg:hidden z-10" @click="toggleMobileMenu">
            <font-awesome-icon icon="bars" class="text-2xl lg:text-4xl" />
        </button>

        <!-- Mobile menu overlay -->
        <transition name="fade">
            <div v-if="mobileMenuOpen"
                class="fixed inset-0 z-0 bg-secondary flex flex-col items-center justify-start pt-24 text-xl lg:text-3xl font-montserrat font-light h-fit">
                <a href="/" @click="closeMobileMenu" :class="route.path === '/' ? 'underline font-semibold' : ''"
                    class="w-full text-center py-5 border-b border-quaternary">Home</a>
                <a href="/about" @click="closeMobileMenu"
                    :class="route.path === '/About' ? 'underline font-semibold' : ''"
                    class="w-full text-center py-5 border-b border-quaternary">About</a>
                <a href="/catalog" @click="closeMobileMenu"
                    :class="route.path === '/Catalog' ? 'underline font-semibold' : ''"
                    class="w-full text-center py-5 border-b border-quaternary">Catalog</a>
                <a href="/events" @click="closeMobileMenu"
                    :class="route.path === '/Events' ? 'underline font-semibold' : ''"
                    class="w-full text-center py-5 border-b border-quaternary">Events</a>
            </div>

        </transition>
    </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
