<script setup>
import Footer from '@/components/Footer.vue';
import LineBreak from '@/components/LineBreak.vue';
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <section class="flex flex-row my-10 gap-x-32 w-full">

        <div class="flex flex-col gap-y-10 w-[170rem]">
            <img class="" src="@/assets/books/book_1.png" />
            <div class="flex w-full gap-4">
                <a href="/Catalog"
                    class="flex-1 text-center bg-transparent border-secondary border-4 py-4 rounded-3xl text-3xl font-medium font-montserrat text-secondary">
                    Back
                </a>

                <button
                    class="flex-1 bg-secondary border-secondary py-4 rounded-3xl text-3xl font-medium font-montserrat text-quaternary">
                    Buy for $99!
                </button>
            </div>
        </div>

        <div class="flex flex-col justify-start gap-y-10">
            <p class="font-playfair text-7xl">How to Win Friends and Influence People</p>
            <p class="italic text-4xl font-extralight">by Dale Carnegie</p>
            <p class="italic text-4xl font-extralight">20xx</p>
            <p class="italic text-4xl font-extralight">Self improvement, Psychology</p>

            <p class="italic text-3xl font-extralight text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br><br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum</p>

        </div>

    </section>
    <LineBreak />
</template>

<style scoped></style>
