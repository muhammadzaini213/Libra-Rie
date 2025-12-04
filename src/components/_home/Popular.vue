<script setup>
import { catalogBooks } from '@/data/catalogData';
import LineBreak from '../LineBreak.vue';
import PopularCard from '../cards/PopularCard.vue';
import Modal from '../Modal.vue';
import { ref } from 'vue';

function getRandomBooks(count = 4) {
  const shuffled = [...catalogBooks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const popularBooks = ref(getRandomBooks());

const showCheckout = ref(false);
const selectedBook = ref(null);

function openCheckout(book) {
  selectedBook.value = book;
  showCheckout.value = true;
}
</script>


<template>
  <section class="flex flex-row justify-center min-h-[70rem] items-center py-24">
    <div class="flex flex-col gap-y-32">

      <h1 class="flex flex-col font-playfair text-secondary text-center text-4xl xl:text-8xl gap-y-10">
        Popular Books
      </h1>

      <div class="flex flex-col gap-x-5 xl:flex-row w-screen justify-center xl:justify-between items-center px-16 xl:px-64">

        <PopularCard 
          v-for="(book, index) in popularBooks" 
          :key="index"
          :id="book.id"
          :title="book.title"
          :imgUrl="book.imgUrl"
          @buy="openCheckout(book)" 
        />
      </div>
    </div>

    <Modal 
      v-if="selectedBook" 
      :show="showCheckout" 
      :img="selectedBook.imgUrl"
      @close="showCheckout = false"
    />
  </section>

  <LineBreak />
</template>
