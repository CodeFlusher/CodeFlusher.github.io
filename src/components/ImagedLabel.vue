<script setup lang="ts">

const props = defineProps({
    img: String,
    labelText: String,
    adress: String,
    copyText: String
})

const redirect = () => {
    window.open(props.adress)
}

const copy = ()=>{
    if(props.copyText == undefined){
        return
    }
    // alert("Copied!")
    navigator.clipboard.writeText(props.copyText)
}

</script>

<template>
    <div class="flex gap-2">
        <img :src="props.img" alt="" class="h-full aspect-square" @click="redirect">
        <img src="/redirect.svg" alt="" class="h-full aspect-square bg-green-700 hover:bg-green-600 transition-colors rounded-lg p-1" @click="redirect">
        <h2 class="text-2xl dark:hover:text-white hover:text-black transition-colors" @click="copy"> {{ props.labelText }}</h2>
    </div>
</template>