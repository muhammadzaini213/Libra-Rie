<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import TextInput from './input/TextInput.vue'
import PaymentButton from './buttons/PaymentButton.vue'

const props = defineProps({
    img: String,
    show: Boolean,
})

const emit = defineEmits(['close'])

// Qty
const qty = ref(1)

function decreaseQty() {
    if (qty.value > 1) qty.value--
}

function increaseQty() {
    qty.value++
}

// Checkout button
function getItem() {
    alert("Purchase Successful!")
}

// Close modal
function cancelCheckout() {
    emit('close')
}
</script>

<template>

    <div v-if="props.show"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="cancelCheckout">

        <div class="bg-primary border-secondary border-4 rounded-3xl py-16 px-8 xl:px-32 max-h-screen xl:max-h-auto overflow-scroll">

            <div class="flex flex-col gap-y-5">
                <h1 class="font-playfair text-3xl xl:text-6xl underline text-center lg:text-left">Checkout</h1>

                <div class="flex flex-col-reverse xl:flex-row gap-x-10 xl:gap-x-32">
                    <div class="flex flex-col gap-y-3 justify-between">

                        <div>
                            <p class="font-montserrat text-md xl:text-xl font-semibold pb-2">Name</p>
                            <TextInput placeholder="e.g John Doe" />
                        </div>

                        <div>
                            <p class="font-montserrat text-md xl:text-xl font-semibold pb-2">Address</p>
                            <TextInput placeholder="Random Road, Number xxxxx" />
                        </div>

                        <div>
                            <p class="font-montserrat text-md xl:text-xl font-semibold pb-2">Payment Methods</p>
                            <div class="flex flex-row gap-x-10">
                                <PaymentButton img="/src/assets/payment/paypal.png" />
                                <PaymentButton img="/src/assets/payment/mastercard.png" />
                                <PaymentButton img="/src/assets/payment/visa.png" />
                                <PaymentButton img="/src/assets/payment/worldpay.png" />
                            </div>
                        </div>

                        <div>
                            <p class="font-montserrat text-md xl:text-xl font-semibold pb-2">Card Number</p>
                            <TextInput placeholder="03xxxxxx" />
                        </div>

                        <div class="flex w-full gap-4 mt-4">
                            <button @click="cancelCheckout"
                                class="text-center flex-1 bg-transparent border-secondary border-4 py-4 rounded-3xl 
                                       text-xl xl:text-3xl font-medium font-montserrat text-secondary">
                                Cancel
                            </button>

                            <button @click="getItem"
                                class="flex-1 bg-secondary border-secondary py-4 rounded-3xl 
                                       text-xl xl:text-3xl font-medium font-montserrat text-quaternary text-center">
                                Get
                            </button>
                        </div>

                    </div>

                    <div class="flex flex-col justify-center items-center text-xl xl:text-3xl gap-y-0 xl:gap-y-5 mt-5">
                        <img :src="props.img" class="w-32 xl:w-96"/>
                        <p>Qty:</p>
                        <div class="flex flex-row gap-x-10 items-center text-2xl xl:text-5xl">
                            <button @click="decreaseQty" class="">-</button>
                            <p class="text-xl xl:text-3xl">{{ qty }}</p>
                            <button @click="increaseQty" class="">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
