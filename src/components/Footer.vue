<script setup></script>

<template>
    <footer class="flex flex-col bg-secondary text-quaternary px-16 xl:px-32 pt-32 pb-10 text-lg xl:text-2xl font-light">

        <div class="flex flex-col xl:flex-row gap-x-64 gap-y-24">

            <img class="w-24 xl:w-64 aspect-square" src="@/assets/icon.png" />

            <div class="flex flex-col gap-y-8 underline">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Catalog">Catalog</a>
                <a href="/Events">Events</a>
            </div>

            <div class="flex flex-col gap-y-8 underline">
                <p>Email: example@gmail.com</p>
                <p>Phone: 081234567890</p>
            </div>
            
        </div>

        <p class="pt-24 text-left md:text-center">Copyright @LibraRie. All Rights Reserved</p>
    </footer>
</template>

<style scoped></style>