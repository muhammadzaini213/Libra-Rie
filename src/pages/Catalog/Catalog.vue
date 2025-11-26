<script setup>
import { ref, computed } from "vue";
import IconButton from "@/components/buttons/IconButton.vue";
import CatalogCard from "@/components/cards/CatalogCard.vue";
import TextInput from "@/components/input/TextInput.vue";
import LineBreak from "@/components/LineBreak.vue";
import { catalogBooks } from "@/data/catalogData";

import { onMounted, onBeforeUnmount } from "vue";

const filterRef = ref(null);
const sortRef = ref(null);

const handleClickOutside = (e) => {
    // kalau klik di luar filter dropdown dan di luar tombol filter → tutup
    if (filterRef.value && !filterRef.value.contains(e.target)) {
        showFilter.value = false;
    }
    // kalau klik di luar sort dropdown dan di luar tombol sort → tutup
    if (sortRef.value && !sortRef.value.contains(e.target)) {
        showSort.value = false;
    }
};

onMounted(() => {
    window.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
    window.removeEventListener("click", handleClickOutside);
});

const search = ref("");

// dropdown visibility
const showSort = ref(false);
const showFilter = ref(false);

const sortOption = ref("az");

// sekarang array
const filterCategory = ref([]);

const visibleCount = ref(8);

const loadMore = () => {
    if (visibleCount.value < catalogBooks.length) {
        visibleCount.value += 4;
    }
};

const categories = [...new Set(catalogBooks.flatMap(book => book.tags))];

const sorted = (books) => {
    switch (sortOption.value) {
        case "az": return [...books].sort((a, b) => a.title.localeCompare(b.title));
        case "za": return [...books].sort((a, b) => b.title.localeCompare(a.title));
        case "priceLow": return [...books].sort((a, b) => a.price - b.price);
        case "priceHigh": return [...books].sort((a, b) => b.price - a.price);
        case "yearNew": return [...books].sort((a, b) => b.year - a.year);
        case "yearOld": return [...books].sort((a, b) => a.year - b.year);
    }
};

const filteredBooks = computed(() => {
    let filtered = catalogBooks;

    if (search.value.trim()) {
        filtered = filtered.filter(book =>
            book.title.toLowerCase().includes(search.value.toLowerCase()) ||
            book.author.toLowerCase().includes(search.value.toLowerCase()) ||
            book.tags.join(" ").toLowerCase().includes(search.value.toLowerCase())
        );
    }

    if (filterCategory.value.length > 0) {
        filtered = filtered.filter(book =>
            filterCategory.value.some(cat => book.tags.includes(cat))
        );
    }

    return sorted(filtered).slice(0, visibleCount.value);
});

const filterBadge = computed(() => filterCategory.value.length);
</script>

<template>
    <section class="flex flex-col gap-y-20 py-10">
        <h1 class="font-playfair text-secondary text-8xl text-center">Catalog</h1>

        <div class="flex flex-wrap gap-x-8 justify-center relative">

            <TextInput v-model="search" placeholder="Search..." />


            <div class="relative flex items-center" ref="sortRef">
                <div @click="showSort = !showSort; showFilter = false;" class="h-full flex items-center">
                    <IconButton icon="pi pi-sort-amount-up" badge="0" />
                </div>

                <div v-if="showSort"
                    class="absolute z-50 mt-2 bg-quaternary border-2 border-secondary rounded-xl p-4 flex flex-col gap-3 text-xl shadow-md">

                    <button @click="sortOption = 'az'; showSort = false" class="text-left hover:underline">
                        Title: A → Z
                    </button>

                    <button @click="sortOption = 'za'; showSort = false" class="text-left hover:underline">
                        Title: Z → A
                    </button>

                    <button @click="sortOption = 'priceLow'; showSort = false" class="text-left hover:underline">
                        Price: Low → High
                    </button>

                    <button @click="sortOption = 'priceHigh'; showSort = false" class="text-left hover:underline">
                        Price: High → Low
                    </button>

                    <button @click="sortOption = 'yearNew'; showSort = false" class="text-left hover:underline">
                        Year: Newest
                    </button>

                    <button @click="sortOption = 'yearOld'; showSort = false" class="text-left hover:underline">
                        Year: Oldest
                    </button>
                </div>
            </div>


            <div class="relative flex items-center" ref="filterRef">
                <div @click="showFilter = !showFilter; showSort = false;" class="h-full flex items-center">
                    <IconButton icon="pi pi-filter" :badge="filterBadge" />
                </div>

                <div v-if="showFilter" class="absolute z-50 mt-2 bg-quaternary border-2 border-secondary rounded-xl p-4 
           flex flex-col gap-3 text-xl shadow-md whitespace-nowrap
           max-h-64 overflow-y-auto">

                    <button @click="filterCategory = []; showFilter = false" class="text-left hover:underline">
                        Clear Filters
                    </button>

                    <div v-for="cat in categories" :key="cat" class="flex items-center gap-3">
                        <input type="checkbox" :value="cat" v-model="filterCategory" class="w-5 h-5 accent-secondary">
                        <label>{{ cat }}</label>
                    </div>
                </div>
            </div>


        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
            <CatalogCard v-for="catalogBook in filteredBooks" :key="catalogBook.id" v-bind="catalogBook" />
        </div>

        <a class="font-semibold text-3xl underline text-center cursor-pointer" @click="loadMore">
            More Books
        </a>
    </section>

    <LineBreak />
</template>
