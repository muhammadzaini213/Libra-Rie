<script setup>
import LineBreak from '../LineBreak.vue';
import PopularCard from '../cards/PopularCard.vue';

</script>
<template>
    <section class="flex flex-row justify-center min-h-[70rem] items-center py-24">
        <div class="flex flex-col gap-y-32">
            <h1 class="flex flex-col font-playfair text-secondary text-center text-4xl xl:text-8xl gap-y-10">Popular
                Books</h1>

            <div class="flex flex-wrap w-screen justify-center xl:justify-between items-center px-16 xl:px-64">

                <PopularCard title="How to Win Friends and Influence People" src="/src/assets/books/book_1.png" />
                <PopularCard title="Crime and Punishment" src="/src/assets/books/book_2.png" />
                <PopularCard title="The Intelligent Investor" src="/src/assets/books/book_3.png" />
                <PopularCard title="Stoicism" src="/src/assets/books/book_4.png" />

            </div>
        </div>
    </section>
    <LineBreak />
</template>