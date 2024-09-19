<script setup lang="ts">

import router from '@/router';
import CardUnit from '../components/CardUnit.vue'
import InputField from '@/components/InputField.vue';

const items = [
  {pageName:"Коды Хэмминга", pageDescription: "Утилита для расшифровки кодов Хэмминга, а так же генерации новых", pageBG:"encodes", pageDir:"encode"},
  {pageName:"RLE Кодировка", pageDescription: "Утилита для работы с RLE кодами", pageBG:"hexcode", pageDir:"rle"},
]

const directToPage = (pageDirection:String)=>{
  router.push('/'+pageDirection)
}

</script>

<template>
  <main class="w-full flex-col gap-4 p-4">
    <CardUnit v-for="item in items" @click="directToPage(item.pageDir)" class="m-auto rounded-xl backdrop:rounded-xl hover:shadow-lg hover:shadow-gray-500 dark:hover:shadow-gray-800" :page-description="item.pageDescription" :page-name="item.pageName" :page-img="item.pageBG"/>
  </main>
</template>
