<script setup>
import { ref, defineProps, defineEmits, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  categories: Array,
  modelValue: Array
});

const emits = defineEmits(["update:modelValue"]);

const showFilter = ref(false);
const dropdownRef = ref(null);
const localValue = ref([...props.modelValue]);

// Sync prop → localValue
watch(() => props.modelValue, (newVal) => {
  localValue.value = [...newVal];
});

// Emit saat localValue berubah
watch(localValue, (newVal) => {
  emits("update:modelValue", newVal);
});

const toggleDropdown = () => {
  showFilter.value = !showFilter.value;
};

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showFilter.value = false;
  }
};

onMounted(() => window.addEventListener("click", handleClickOutside));
onBeforeUnmount(() => window.removeEventListener("click", handleClickOutside));

const clearFilters = () => {
  localValue.value = [];
  showFilter.value = false;
};
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <div @click="toggleDropdown" class="cursor-pointer">
      <slot name="button" />
    </div>

    <div v-if="showFilter" class="absolute -right-10 xl:right-0 z-50 mt-2 bg-quaternary border-2 border-secondary rounded-xl p-4 flex flex-col gap-3 text-xs lg:text-base shadow-md whitespace-nowrap w-64 max-h-64 overflow-y-auto">
      <button @click="clearFilters" class="text-left hover:underline">Clear Filters</button>

      <div v-for="cat in categories" :key="cat" class="flex items-center gap-3">
        <input type="checkbox" :value="cat" v-model="localValue" class="w-5 h-5 accent-secondary">
        <label>{{ cat }}</label>
      </div>
    </div>
  </div>
</template>
