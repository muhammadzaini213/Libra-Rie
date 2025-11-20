<script setup>
import EventsCard from '@/components/cards/EventsCard.vue';
import LineBreak from '@/components/LineBreak.vue';


</script>

<template>
    <section class="flex flex-col gap-y-20 py-10">
        <h1 class="font-playfair text-secondary text-8xl text-center">Events</h1>

        <div class="flex flex-col gap-y-10">

            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />

        </div>
    </section>

    <LineBreak />
</template>

<style scoped></style>
