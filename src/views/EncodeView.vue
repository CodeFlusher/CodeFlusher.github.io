<script setup>
import { ref } from 'vue';
import InputField from '../components/InputField.vue';
import CodeModifier from '@/components/CodeModifier.vue';
import DatagenUnit from '@/components/DatagenUnit.vue';

const inputFieldReference = ref("")
const outputFieldReference = ref("")

const swap = ()=>{
  let buffer = inputFieldReference.value;
  inputFieldReference.value = outputFieldReference.value
  outputFieldReference.value = buffer
}

</script>

<template>

  <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
    <div class="w-full flex flex-col gap-4">
      <CodeModifier v-model:in="inputFieldReference" v-model:out="outputFieldReference" class="w-full p-4 rounded-xl bg-transparent border-2 border-green-700 dark:border-green-500"></CodeModifier>
      <DatagenUnit v-model:in="inputFieldReference" v-model:out="outputFieldReference" class="w-full p-4 rounded-xl bg-transparent border-2 border-green-700 dark:border-green-500"></DatagenUnit>
    </div>
    <InputField v-model="inputFieldReference" class="w-full"/>
    <img @click="swap" src="../assets/arrow-swap.svg" class=" dark:fill-white aspect-square w-48">
    <InputField v-model="outputFieldReference" class="w-full"/>
  </div>
  
</template>


