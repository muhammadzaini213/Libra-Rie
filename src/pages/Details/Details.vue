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
    <section v-if="book" class="flex flex-row my-10 gap-x-32 w-full">

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

    <section v-else class="text-center text-5xl mt-20">
        Book Not Found
    </section>

    <LineBreak />
</template>
