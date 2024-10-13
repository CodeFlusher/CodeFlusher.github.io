<script setup lang="ts">
import { ref } from 'vue';
import CardUnit from './CardUnit.vue';

const things = ref([
    {name: "GCalc", icon:"gcalc", description:"3 Dimentional Graphical calcualator capable of executing different functions. Calcurator makes dynamic graphs and static presicion graphs", link:"https://github.com/codeflusher/GCalc"},
    {name: "Redstone Assembly Virtual Machine", icon:"ravm", description:"Project for fun. VM for executing imaginary bytecode and using registers.", link:"https://github.com/codeflusher/RedstoneAssemblyVirtualMachine"},
    {name: "EasyCompress", icon:"encodes", description:"A FFMPEG graphical interface targeted to make ffmpeg usage easier for any user.", link:"https://github.com/codeflusher/EasyCompress"}
])

const directToPage = (link:string)=>{
    window.open(link)
}

</script>

<template>
    <div class="self-center flex flex-col gap-4">
        <h2 class="text-4xl font-bold self-center text-black dark:text-white"> Projects</h2>
        <CardUnit v-for="item in things" @click="directToPage(item.link)" :page-description="item.description" :page-name="item.name" :page-img="item.icon" class="m-auto rounded-xl backdrop:rounded-xl hover:shadow-lg hover:shadow-gray-500 dark:hover:shadow-gray-800" />
    </div>
    
</template>