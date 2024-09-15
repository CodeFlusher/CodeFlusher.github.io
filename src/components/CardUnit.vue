<script setup lang="ts">

const props = defineProps({pageName:String, pageImg:String, pageDescription:String})

</script>

<template>
  <div class="h-64 w-full md:w-fit md:aspect-[3/1] flex bg-cover bg-center flex-row-reverse duration-200" :class="'bg-' + props.pageImg" >
    <div class="h-full w-full md:w-fit md:aspect-video md:rounded-l-none bg-transparent flex backdrop-brightness-95 rounded-xl backdrop-blur-md flex-col p-8 transition-[width] duration-100" >
      <h1 class=" bg-transparent text-4xl text-white font-bold break-words">{{ props.pageName }}</h1>
      <span class="bg-transparent text-xl text-neutral-200 break-words overflow-y-scroll scroll-smooth no-scrollbar">{{ props.pageDescription }}</span>
      <div class="w-full flex flex-row-reverse mt-auto">
        <button class=" font-bold text-2xl bg-gradient-to-r bg-clip-text hover:text-transparent to-green-400 from-green-700 w-fit duration-100 "> Переход </button>
      </div>
    </div>
  </div>

</template>
  