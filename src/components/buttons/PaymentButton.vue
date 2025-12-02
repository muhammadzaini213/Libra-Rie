<script setup>
const props = defineProps({
    img: String,
});
</script>

<template>
    <div class="relative w-fit flex-1">

        <div
            class="items-center justify-center flex bg-primary border-4 border-secondary rounded-2xl xl:rounded-3xl 
                   py-1 lg:py-2.5 xl:py-5 px-3 lg:px-6 xl:px-12 text-quaternary">
            <img :src="props.img" class="w-10 h-10 object-contain" />
        </div>

    </div>
</template>
