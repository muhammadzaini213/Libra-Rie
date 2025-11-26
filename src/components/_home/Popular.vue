<script setup>
import LineBreak from '../LineBreak.vue';
import PopularCard from '../cards/PopularCard.vue';
import { popularBooks } from '@/data/popularBooks.js';
</script>

<template>
  <section class="flex flex-row justify-center min-h-[70rem] items-center py-24">
    <div class="flex flex-col gap-y-32">

      <h1 class="flex flex-col font-playfair text-secondary text-center text-4xl xl:text-8xl gap-y-10">
        Popular Books
      </h1>

      <div class="flex flex-wrap w-screen justify-center xl:justify-between items-center px-16 xl:px-64">

        <PopularCard
          v-for="(book, index) in popularBooks"
          :key="index"
          :title="book.title"
          :src="book.src"
        />

      </div>
    </div>
  </section>

  <LineBreak />
</template>
