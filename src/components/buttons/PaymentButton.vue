<script setup>
const props = defineProps({
    img: String,
    selected: Boolean,   // tambahan
})

const emit = defineEmits(['select'])
</script>

<template>
    <div class="relative w-fit flex-1">
        <button @click="emit('select')" :class="[
            'items-center justify-center flex border-4 rounded-2xl xl:rounded-3xl py-1 lg:py-2.5 xl:py-5 px-3 lg:px-6 xl:px-12',
            selected ? 'bg-secondary border-secondary' : 'bg-primary border-secondary'
        ]">
            <img :src="props.img" class="w-10 h-10 object-contain" />
        </button>
    </div>
</template>
