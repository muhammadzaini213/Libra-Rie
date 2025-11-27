<script setup>
const props = defineProps({
    img: String,
});
</script>

<template>
    <div class="relative w-fit flex-1">

        <div
            class="items-center justify-center flex bg-primary border-4 border-secondary rounded-3xl 
                   py-5 px-12 text-quaternary">
            <img :src="props.img" class="w-10 h-10 object-contain" />
        </div>

    </div>
</template>
