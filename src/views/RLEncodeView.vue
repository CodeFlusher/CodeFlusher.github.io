<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import RLEncodeUnit from '@/components/RLEncodeUnit.vue';
import { ref } from 'vue';

const inputFieldReference = ref('')
const outputFieldReference = ref('')

const swap = ()=>{
    let buffer = inputFieldReference.value;
    inputFieldReference.value = outputFieldReference.value
    outputFieldReference.value = buffer
}



</script>

<template>

<div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
    <div class="w-full flex flex-col gap-4">
        <RLEncodeUnit v-model:in="inputFieldReference" v-model:out="outputFieldReference" class="w-full p-4 rounded-xl bg-transparent border-2 border-green-700 dark:border-green-500"></RLEncodeUnit>
    </div>
    <InputField v-model="inputFieldReference" class="w-full"/>
    <img @click="swap" src="../assets/arrow-swap.svg" class="aspect-square w-24 md:w-48 m-auto">
    <InputField v-model="outputFieldReference" class="w-full"/>
  </div>

</template>