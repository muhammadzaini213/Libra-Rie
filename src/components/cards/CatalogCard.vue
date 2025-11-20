
<template>
    <div class="flex flex-col border-4 border-secondary rounded-3xl max-w-[60rem] px-16 py-10 gap-y-2">
        <div class="flex flex-row gap-x-14">
            <img src="@/assets/books/book_1.png" class="max-w-80"></img>

            <div class="flex flex-col justify-around">
                <p class="font-playfair text-3xl">How to Win Friends and Influence People</p>
                <p class="italic text-3xl font-extralight">by Dale Carnegie</p>
                <p class="italic text-3xl font-extralight">20xx</p>
                <p class="italic text-3xl font-extralight">Self improvement, Psychology</p>
                <p class="text-3xl font-bold">$99</p>
            </div>

        </div>
        <LineBreak />
        <p class="font-extralight text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat........</p>

        <div class="flex w-full gap-4">
            <a href="/Details"
                class="text-center flex-1 bg-transparent border-secondary border-4 py-4 rounded-3xl text-3xl font-medium font-montserrat text-secondary">
                Details
        </a>

            <button
                class="flex-1 bg-secondary border-secondary py-4 rounded-3xl text-3xl font-medium font-montserrat text-quaternary">
                Buy Now!
            </button>
        </div>
    </div>
</template>