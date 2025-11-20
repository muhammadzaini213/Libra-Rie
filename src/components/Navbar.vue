<script setup></script>

<template>
    <nav class="fixed z-50 w-screen flex flex-row justify-between items-center bg-secondary text-quaternary px-7 xl:px-14 py-5">

        <div class="flex flex-row items-center gap-x-5">
            <img class="w-14 xl:w-20" src="@/assets/icon.png" />
            <p class="font-playfair text-xl xl:text-4xl">LibraRie</p>
        </div>

        <div class="hidden xl:flex flex-row gap-x-48 text-3xl mr-16 font-montserrat font-light">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Catalog">Catalog</a>
            <a href="/Events">Events</a>
        </div>

        <button class="xl:hidden">
            <font-awesome-icon icon="bars" class="text-4xl" />
        </button>

    </nav>
</template>

<style scoped></style>