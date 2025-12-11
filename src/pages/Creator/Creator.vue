<script setup>
import hero from "@/assets/image.png";
import SkillCard from "@/components/cards/SkillCard.vue";
import { skillDatas } from "@/data/skillData";

</script>

<template>
    <section class="flex flex-col gap-y-20 py-10 my-32">

        <!-- Bagian atas -->
        <div class="flex flex-col md:flex-1 md:flex-row gap-x-32 justify-between">
            <div class="flex flex-col gap-y-5 md:gap-y-10 text-center md:text-left">
                <h1 class="font-playfair text-secondary text-4xl xl:text-8xl">Muhammad Zaini</h1>
                <h2 class="text-2xl xl:text-4xl">11241064 - Informatika - Institut Teknologi Kalimantan</h2>

                <p class="lg:text-2xl xl:text-4xl mt-0 xl:mt-10 font-thin leading-relaxed">Nama saya Muhammad Zaini,
                    seorang mahasiswa biasa
                    yang suka ngoding, writing, managing, teaching, gamedev, design, simulation
                    engineering, serta AI engineering. Saya memiliki minat besar di AI dan Simulation engineering serta
                    Project Planning. Jika anda ingin menghubungi saya, cukup hampiri github saya di <a
                        class="underline font-bold text-blue-500" href="https://github.com/muhammadzaini213">Github</a>
                </p>
            </div>
            <img class="hidden md:block md:w-96 xl:w-auto aspect-square object-cover border-secondary border-4 rounded-full " :src="hero"></img>
        </div>

        <!-- Skill skill -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <SkillCard v-for="skillData in skillDatas" :key="skillData.id" v-bind="skillData" />
        </div>
    </section>
</template>