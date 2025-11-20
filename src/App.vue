<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './assets/index.css'

</script>


<template>
  <div id="app" class="min-h-screen bg-primary">
    <Navbar />
    <main class="pt-10 xl:pt-40 px-5 xl:px-40">
      <router-view />
    </main>
    <Footer />
  </div>
</template>