<script setup>
import IconButton from '@/components/buttons/IconButton.vue';
import CatalogCard from '@/components/cards/CatalogCard.vue';
import TextInput from '@/components/input/TextInput.vue';
import LineBreak from '@/components/LineBreak.vue';


</script>

<template>
    <section class="flex flex-col gap-y-20 py-10">
        <h1 class="font-playfair text-secondary text-8xl text-center">Catalog</h1>

        <div class="flex flex-wrap gap-x-8 justify-center">
            <TextInput />
            <TextInput />

            <div class="flex flex-row gap-x-4">
                <IconButton icon="pi pi-sort-amount-up" badge="4" />
                <IconButton icon="pi pi-filter" badge="2" />
            </div>

        </div>

        <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-16">

            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
        </div>

        <a class="font-semibold text-3xl underline text-center">More Books</a>

    </section>
    <LineBreak />
</template>

<style scoped></style>
