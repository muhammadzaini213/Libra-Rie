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
    class="flex flex-row border-secondary border-4 py-2 xl:py-4 rounded-full px-10 text-lg md:text-xl lg:text-3xl font-thin font-montserrat text-secondary w-full gap-w-8">
    
    <input
      class="appearance-none bg-transparent border-none outline-none focus:outline-none focus:ring-0 lg:max-w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />

  </div>
</template>
