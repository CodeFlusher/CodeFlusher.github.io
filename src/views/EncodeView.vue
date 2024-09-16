<script setup lang="ts">
import { ref } from 'vue';
import InputField from '../components/InputField.vue';
import CodeModifier from '@/components/CodeModifier.vue';
import DatagenUnit from '@/components/DatagenUnit.vue';
import router from '@/router';
import { useCookies } from 'vue3-cookies';

const inputFieldReference = ref("")
const outputFieldReference = ref("")

const swap = ()=>{
  let buffer = inputFieldReference.value;
  inputFieldReference.value = outputFieldReference.value
  outputFieldReference.value = buffer
}

const datagenSliderState = ref(5)
const datagenAddMistakes = ref(false)

const cookies = useCookies();

const fetchCookies = ()=>{

  if(!cookies.cookies.isKey('encode_datagen_slider_state')){
    return
  }

  datagenSliderState.value = Number.parseInt(cookies.cookies.get('encode_datagen_slider_state'))
  datagenAddMistakes.value = cookies.cookies.get('encode_datagen_add_mistakes')[0] == "t"

  inputFieldReference.value = cookies.cookies.get('encode_input_field')
  outputFieldReference.value = cookies.cookies.get('encode_output_field')
}

fetchCookies()

const saveCookies = () =>{
  cookies.cookies.set('encode_datagen_slider_state', datagenSliderState.value.toString())
  cookies.cookies.set('encode_datagen_add_mistakes', datagenAddMistakes.value.toString())
  if(inputFieldReference.value == null){
    cookies.cookies.set('encode_input_field', "")  
  }else{
    cookies.cookies.set('encode_input_field', inputFieldReference.value.toString())
  }
  
  if(outputFieldReference.value == null){
    cookies.cookies.set('encode_output_field', "")  
  }else{
    cookies.cookies.set('encode_output_field', outputFieldReference.value.toString())
  }
}

router.beforeEach(()=>{
  saveCookies()
})

</script>

<template>

  <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
    <div class="w-full flex flex-col gap-4">
      <CodeModifier ref="codeModifierRef" v-model:in="inputFieldReference" v-model:out="outputFieldReference" class="w-full p-4 rounded-xl bg-transparent border-2 border-green-700 dark:border-green-500"></CodeModifier>
      <DatagenUnit ref="datagenRef" v-model:addMistakes ="datagenAddMistakes"  v-model:sliderState="datagenSliderState" v-model:in="inputFieldReference" v-model:out="outputFieldReference" class="w-full p-4 rounded-xl bg-transparent border-2 border-green-700 dark:border-green-500"></DatagenUnit>
    </div>
    <InputField v-model="inputFieldReference" class="w-full"/>
    <img @click="swap" src="../assets/arrow-swap.svg" class="aspect-square w-24 md:w-48 m-auto">
    <InputField v-model="outputFieldReference" class="w-full"/>
  </div>
  
</template>


