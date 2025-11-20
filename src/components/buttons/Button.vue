<script setup>
const props = defineProps({
    text: String,
    badge: Number,
    href: String
});
</script>

<template>
    <div class="relative w-fit">
        <a :href="props.href"
            class="inline-block bg-secondary rounded-full text-quaternary text-sm xl:text-3xl underline font-extralight font-montserrat px-8 xl:px-20 py-4 xl:py-8">
            {{ props.text }}
        </a>
        <span
            class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-ternary text-quaternary text-sm xl:text-3xl font-bold rounded-full aspect-square w-8 xl:w-20 flex items-center justify-center">
            {{ props.badge }}
        </span>
    </div>
</template>