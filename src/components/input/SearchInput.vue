<script setup>
import 'primeicons/primeicons.css';

const props = defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

function handleInput(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <div
    class="flex flex-row border-secondary border-4 py-4 rounded-full px-10 text-3xl font-thin font-montserrat text-secondary w-fit gap-w-8">
    
    <input
      class="appearance-none bg-transparent border-none outline-none focus:outline-none focus:ring-0"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />

    <i class="ml-5 pi pi-search text-[2.5rem]"></i>
  </div>
</template>
