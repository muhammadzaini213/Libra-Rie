<script setup>
import { ref, computed } from "vue";
import IconButton from "@/components/buttons/IconButton.vue";
import CatalogCard from "@/components/cards/CatalogCard.vue";
import LineBreak from "@/components/LineBreak.vue";
import { catalogBooks } from "@/data/catalogData";

import { onMounted, onBeforeUnmount } from "vue";
import SearchInput from "@/components/input/SearchInput.vue";

import Modal from "@/components/Modal.vue"
import SortDropdown from "@/components/dropdown/SortDropdown.vue";
import FilterDropdown from "@/components/dropdown/FilterDropdown.vue";

const showCheckout = ref(false)
const selectedBook = ref(null)

const openCheckout = (book) => {
    selectedBook.value = book
    showCheckout.value = true
}


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
            <SearchInput v-model="search" placeholder="Search..." />

            <SortDropdown v-model:sortOption="sortOption">
                <template #button>
                    <IconButton icon="pi pi-sort-amount-up" badge="0" />
                </template>
            </SortDropdown>

            <FilterDropdown :categories="categories" v-model="filterCategory">
                <template #button>
                    <IconButton icon="pi pi-filter" :badge="filterBadge" />
                </template>
            </FilterDropdown>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mx-32 justify-items-center">
            <CatalogCard v-for="catalogBook in filteredBooks" :key="catalogBook.id" v-bind="catalogBook"
                @buy="openCheckout(catalogBook)" />
        </div>

        <a class="font-semibold text-3xl underline text-center cursor-pointer" @click="loadMore">
            More Books
        </a>

        <Modal v-if="selectedBook" :show="showCheckout" :img="selectedBook.imgUrl" @close="showCheckout = false" />
    </section>

    <LineBreak />
</template>
