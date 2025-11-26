<script setup>
import TopAuthorsCard from '../cards/TopAuthorsCard.vue';
import LineBreak from '../LineBreak.vue';
import { topAuthors } from '@/data/topAuthors.js';
</script>

<template>
  <section class="flex flex-row justify-center min-h-[70rem] items-center py-24">
    <div class="flex flex-col gap-y-32">

      <h1 class="flex flex-col font-playfair text-secondary text-center text-4xl xl:text-8xl gap-y-10">
        Top Authors
      </h1>

      <div class="flex flex-wrap w-screen justify-center xl:justify-between items-center px-16 xl:px-64">

        <TopAuthorsCard
          v-for="(author, index) in topAuthors"
          :key="index"
          :name="author.name"
          :src="author.src"
        />

      </div>
    </div>
  </section>

  <LineBreak />
</template>
