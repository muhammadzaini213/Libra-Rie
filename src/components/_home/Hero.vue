<script setup>
import Button from '@/components/buttons/Button.vue';
import LineBreak from '../LineBreak.vue';

</script>
<template>
    <section class="flex flex-row justify-center xl:justify-between min-h-screen xl:min-h-[70rem] items-center">
        <div class="flex flex-col gap-y-14 xl:gap-y-32 items-center xl:items-start">
            <div
                class="flex flex-col font-playfair text-center xl:text-left text-secondary text-xl lg:text-4xl xl:text-7xl gap-y-2 xl:gap-y-10">
                <h1>Discover Thousands of Books</h1>
                <h1>Gain Unlimited Knowlege</h1>
            </div>

            <img class="xl:hidden w-52" src="@/assets/home/hero.png"></img>


            <div
                class="flex flex-col font-montserrat text-center xl:text-left text-xl xl:text-4xl font-extralight italic gap-y-2 xl:gap-y-8">
                <p>“Think before you speak. Read before you
                    think”
                </p>
                <p>~ Fran Lebowitz</p>
            </div>

            <div class="flex flex-col gap-y-5 xl:gap-y-10 items-center xl:items-start">
                <Button text="Find Newest Books" badge="2" href="/Catalog" />
                <Button text="Our Events" badge="5" href="/Events" />
            </div>
        </div>

        <div class="flex-col gap-y-24 justify-center items-center pt-24 hidden 2xl:flex">
            <img class="w-[50rem]" src="@/assets/home/hero.png"></img>
            <a href="/About" class="italic text-4xl font-extralight underline font-montserrat">What is this?</a>
        </div>

    </section>
    <LineBreak />
</template>