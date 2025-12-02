<script setup>
import { ref } from 'vue'
import { useRoute } from "vue-router";
import { computed } from "vue";
import LineBreak from "@/components/LineBreak.vue";
import { catalogBooks } from "@/data/catalogData";
import Modal from '@/components/Modal.vue'

const showCheckout = ref(false)
const route = useRoute();

const id = Number(route.params.id);

const book = computed(() => catalogBooks.find(b => b.id === id));
</script>

<template>

    <!-- Desktop -->
    <section v-if="book" class="hidden lg:flex flex-row my-10 gap-x-32 w-full">
        <div class="flex flex-col gap-y-10 w-[35rem]">
            <div class="w-[35rem] overflow-hidden">
                <img :src="book.imgUrl" class="w-full h-full object-cover" />
            </div>

            <div class="flex flex-row w-full gap-4">
                <a href="/Catalog" class="flex-1 text-center bg-transparent border-secondary border-4 py-4 
               rounded-3xl text-2xl font-medium font-montserrat text-secondary">
                    Back
                </a>

                <button @click="showCheckout = true" class="flex-1 bg-secondary border-secondary border-4 py-4 
               rounded-3xl text-2xl font-medium font-montserrat text-quaternary text-center">
                    Buy for ${{ book.price }}!
                </button>
            </div>

        </div>

        <div class="flex flex-col justify-start gap-y-10">
            <p class="font-playfair text-7xl">{{ book.title }}</p>
            <p class="italic text-4xl font-extralight">by {{ book.author }}</p>
            <p class="italic text-4xl font-extralight">{{ book.year }}</p>
            <p class="italic text-4xl font-extralight">
                {{ book.tags.join(", ") }}
            </p>

            <p class="italic text-3xl font-extralight text-justify">
                {{ book.desc }}
            </p>
        </div>

        <Modal :show="showCheckout" :img="book.imgUrl" @close="showCheckout = false" />

    </section>


    <!-- Mobile -->
    <section v-if="book" class="flex lg:hidden flex-row my-20 gap-x-32 w-full">

        <div class="flex flex-col justify-start gap-y-5 items-center mx-8 lg:mx-16">
            <p class="font-playfair text-4xl text-center lg:text-left">{{ book.title }}</p>
            <p class="italic text-xl font-extralight">by {{ book.author }}</p>
            <p class="italic text-xl font-extralight">{{ book.year }}</p>
            <p class="italic text-xl font-extralight">
                {{ book.tags.join(", ") }}
            </p>

            <div class="w-[10rem] lg:w-[25rem] overflow-hidden">
                <img :src="book.imgUrl" class="w-full h-full object-cover" />
            </div>

            <div class="flex flex-row w-full gap-4 mt-5">
                <a href="/Catalog" class="flex-1 text-center bg-transparent border-secondary border-4 py-4 
               rounded-3xl text-md xl:text-xl font-medium font-montserrat text-secondary">
                    Back
                </a>

                <button @click="showCheckout = true" class="flex-1 bg-secondary border-secondary border-4 py-4 
               rounded-3xl text-md xl:text-xl font-medium font-montserrat text-quaternary text-center">
                    Buy for ${{ book.price }}!
                </button>
            </div>


            <p class="italic text-lg font-extralight text-center mt-10">
                {{ book.desc }}
            </p>

        </div>

        <Modal :show="showCheckout" :img="book.imgUrl" @close="showCheckout = false" />

    </section>

    <section v-else class="text-center text-5xl mt-20">
        Book Not Found
    </section>

    <LineBreak />
</template>
