<script setup>
const props = defineProps({
  title: String,
  date: String,
});
</script>

<template>
  <div class="font-playfair bg-secondary rounded-[4rem] flex flex-row justify-center items-center px-10 py-14">
    <p class="w-[80%] text-quaternary text-7xl text-center">{{ props.title }}</p>
    <p class="w-[20%] bg-primary text-center rounded-3xl text-4xl px-6 py-7">{{ props.date }}</p>
  </div>
</template>

<style scoped></style>
