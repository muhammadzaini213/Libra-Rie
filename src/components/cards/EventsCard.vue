<script setup>
const props = defineProps({
  title: String,
  date: String,
});
</script>

<template>
  <div class="font-playfair bg-secondary rounded-3xl xl:rounded-[4rem] flex flex-row justify-center items-center px-5 xl:px-10 py-7 xl:py-14">
    <p class="w-[70%] md:w-[75%] lg:w-[80%] text-quaternary text-sm md:text-xl lg:text-4xl xl:text-7xl text-center">{{ props.title }}</p>
    <p class="w-[30%] md:w-[25%] lg:w-[20%] bg-primary text-center text-xs rounded-3xl md:text-md lg:text-xl xl:text-4xl px-6 py-7">{{ props.date }}</p>
  </div>
</template>

<style scoped></style>
