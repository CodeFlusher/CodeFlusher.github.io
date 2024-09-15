<script setup lang="ts">

import router from '@/router';
import CardUnit from '../components/CardUnit.vue'
import InputField from '@/components/InputField.vue';

const items = [{pageName:"Коды Хэмминга", pageDescription: "Утилита для расшифровки кодов Хэмминга, а так же генерации новых", pageBG:"encodes", pageDir:"encode"}]

const directToPage = (pageDirection:String)=>{
  router.push('/'+pageDirection)
}

</script>

<template>
  <main class="w-full flex-col gap-4">
    <li v-for="item in items" class="list-none ml-8 mr-8 md:m-auto ">
      <CardUnit @click="directToPage(item.pageDir)" class="rounded-xl backdrop:rounded-xl hover:shadow-lg hover:shadow-gray-500 dark:hover:shadow-gray-800" :page-description="item.pageDescription" :page-name="item.pageName" :page-img="item.pageBG"/>
    </li>
  </main>
</template>
