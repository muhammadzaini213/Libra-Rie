<script setup>
import EventsCard from '@/components/cards/EventsCard.vue';
import LineBreak from '@/components/LineBreak.vue';
import { events } from '@/data/eventDatas.js';
</script>

<template>
  <section class="flex flex-col gap-y-20 py-10">
    <h1 class="font-playfair text-center text-secondary text-4xl lg:text-5xl xl:text-8xl mt-32 lg:mt-10">Events</h1>

    <div class="flex flex-col gap-y-10">

      <EventsCard v-for="(event, index) in events" :key="index" :title="event.title" :date="event.date" />

    </div>
  </section>

  <LineBreak />
</template>

<style scoped></style>
