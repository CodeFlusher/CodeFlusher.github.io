<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer utilities {
      /* Hide scrollbar for Chrome, Safari and Opera */
      .no-scrollbar::-webkit-scrollbar {
          display: none;
      }
     /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
    }
  }
  
  @layer base {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

</style>

<template>
  <header class="fixed w-full top-0 p-6 h-24 flex backdrop-blur-xl max-h-24 bg-transparent z-10">
    <nav class="m-auto">
     <RouterLink to="/" class="text-3xl font-bold hover:font-extrabold hover:text-white hover:text-[24pt] transition-all duration-200">Home</RouterLink>
    </nav>
  </header>

  <!-- <div class=" bg-encodes bg-transparent"></div> -->

  <RouterView class="w-full mt-24 flex m-auto" />
</template>