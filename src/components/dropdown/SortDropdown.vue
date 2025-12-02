<script setup>
import { ref, defineProps, defineEmits, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  sortOption: String,
});

const emits = defineEmits(["update:sortOption"]);

const showSort = ref(false);
const dropdownRef = ref(null);

const options = [
  { label: "Title: A → Z", value: "az" },
  { label: "Title: Z → A", value: "za" },
  { label: "Price: Low → High", value: "priceLow" },
  { label: "Price: High → Low", value: "priceHigh" },
  { label: "Year: Newest", value: "yearNew" },
  { label: "Year: Oldest", value: "yearOld" },
];

const toggleDropdown = () => {
  showSort.value = !showSort.value;
};

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    showSort.value = false;
  }
};

onMounted(() => window.addEventListener("click", handleClickOutside));
onBeforeUnmount(() => window.removeEventListener("click", handleClickOutside));

const selectOption = (value) => {
  emits("update:sortOption", value);
  showSort.value = false;
};
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <div @click="toggleDropdown" class="cursor-pointer">
      <slot name="button" />
    </div>

    <div v-if="showSort" class="absolute z-50 mt-2 bg-quaternary border-2 border-secondary rounded-xl p-4 flex flex-col gap-3 text-xs lg:text-base shadow-md w-32 xl:w-52">
      <button
        v-for="opt in options"
        :key="opt.value"
        @click="selectOption(opt.value)"
        class="text-left hover:underline"
      >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>
