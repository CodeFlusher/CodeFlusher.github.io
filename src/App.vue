<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed w-full top-0 p-6 h-24 flex backdrop-blur-xl max-h-24 bg-transparent z-10">
    <nav class="m-auto flex gap-10">
     <RouterLink to="/" class="text-3xl font-bold hover:font-extrabold dark:hover:text-white hover:text-[24pt] transition-all duration-200">Home</RouterLink>
     <RouterLink to="/about" class="text-3xl font-bold hover:font-extrabold dark:hover:text-white hover:text-[24pt] transition-all duration-200">Developer</RouterLink>
    </nav>
  </header>

  <div class=" bg-hexcode hidden"></div>
  <div class=" bg-encodes hidden"></div>
  <div class=" bg-gcalc hidden"></div>
  <div class=" bg-ravm hidden"></div>

  <RouterView class="w-full mt-24 flex m-auto " />
 
</template>