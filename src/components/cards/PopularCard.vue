<script setup>
import LineBreak from '../LineBreak.vue';


const props = defineProps({
    id: Number,
    title: String,
    imgUrl: String,
});

const emit = defineEmits(["buy"])

function buyNow(event) {
    event.stopPropagation()
    emit("buy")
}

</script>

<template>
    <div class="flex flex-col justify-between text-center max-w-96 gap-y-8">

        <div class="h-16 flex items-center justify-center">
            <h3 class="text-center text-secondary underline font-playfair text-xl xl:text-3xl">{{ props.title }}</h3>
        </div>
        <img class="h[-20rem] xl:h-[35rem]" :src="props.imgUrl"></img>

        <a :href="`/details/${props.id}`"
            class="bg-transparent border-secondary border-4 py-4 rounded-3xl text-xl xl:text-3xl font-medium font-montserrat text-secondary">Details</a>

        <button @click="buyNow"
            class="bg-secondary border-secondary py-4 rounded-3xl text-xl xl:text-3xl font-medium font-montserrat text-quaternary">Buy
            Now!</button>

        <div class="xl:hidden">
            <LineBreak />
        </div>
    </div>
</template>