<script setup>
import LineBreak from "@/components/LineBreak.vue";

const props = defineProps({
    id: Number,
    title: String,
    imgUrl: String,
    desc: String,
});

</script>


<template>
    <!-- Desktop -->
    <div class="hidden lg:flex flex-col border-4 border-secondary rounded-3xl 
                w-full h-full p-10 gap-y-6">

        <div class="flex flex-wrap 2xl:flex-nowrap 2xl:flex-row gap-x-14 gap-y-10">
            <img :src="props.imgUrl" class="h-64 3xl:h-96 object-cover">

            <div class="flex flex-col gap-y-6 justify-around">
                <p class="font-playfair text-xl 2xl:text-3xl">{{ props.title }}</p>
            </div>
        </div>

        <LineBreak />

        <p class="font-extralight text-2xl line-clamp-4">
            {{ props.desc }}
        </p>

        <div class="flex-grow"></div>
    </div>

    <!-- Mobile -->
    <div class="flex flex-col lg:hidden border-4 border-secondary rounded-3xl 
                w-full h-full p-7 gap-y-0">

        <div class="flex flex-row gap-x-4 lg:gap-x-14 items-start">
            <img :src="props.imgUrl" class="w-20 object-contain">

            <div class="flex flex-col justify-around gap-y-1">
                <p class="font-playfair text-xs">{{ props.title }}</p>
                <p class="italic text-xs font-extralight">by {{ props.author }}</p>
                <p class="italic text-xs font-extralight">{{ props.year }}</p>

                <p class="italic text-xs font-extralight">
                    {{ props.tags?.join(", ") }}
                </p>

                <p class="text-xs font-bold">${{ props.price }}</p>
            </div>
        </div>

        <LineBreak />

        <p class="font-extralight text-xs line-clamp-4">
            {{ props.desc }}
        </p>
    </div>
</template>
