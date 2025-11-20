<script setup>
import LineBreak from '../LineBreak.vue';


const props = defineProps({
    name: String,
    src: String,
});

</script>

<template>
    <div class="flex flex-col justify-between text-center max-w-96 gap-y-10">
        <div class="h-16 flex items-center justify-center">
            <h3 class="text-center text-secondary underline font-playfair text-3xl">{{ props.name }}</h3>
        </div>
        <img class="h-[20] xl:h-[25rem]" :src="props.src"></img>

        <button
            class="bg-secondary border-secondary py-6 rounded-3xl text-3xl font-medium font-montserrat text-quaternary">Find
            Books</button>
        <LineBreak />

    </div>
</template>