<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';

const props = defineProps({
    toolImg: String,
    toolName: String
})

const handleError = (event: ErrorEvent)=>{
    if(!event.target){
        return
    }
    (event.target as ImgHTMLAttributes).src='/NotFound.webp'
}

</script>

<template>
    <div class="flex flex-col h-full">
        <h3 class="text-2xl font-bold self-center"> {{ props.toolName }}</h3>
        <img :src="toolImg" class=" aspect-square self-center h-56" alt="" @error="handleError($event as ErrorEvent)">
    </div>
</template>