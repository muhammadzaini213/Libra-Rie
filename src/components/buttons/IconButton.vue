<script setup>
const props = defineProps({
    icon: String,
    badge: Number,
});

</script>

<template>
    <div class="relative w-fit flex-1">

        <div class="items-center justify-center flex bg-secondary rounded-full text-quaternary text-4xl font-extralight font-montserrat px-8 h-full">
            <i
                :class="props.icon"></i>
        </div>
        <span
            class="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-ternary text-quaternary text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center">
            {{ props.badge }}
        </span>
    </div>
</template>
