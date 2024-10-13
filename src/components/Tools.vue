<script setup lang="ts">
import { ref } from 'vue';
import ToolCardView from './ToolCardView.vue';


const props = defineProps({
    tools: Array(Object),
    title: String
})

const scrollBarReference = ref<HTMLElement>();


const wheel = (event: WheelEvent)=>{
    // console.log("EVENT")
    if(!scrollBarReference.value){
           return
    }
    if(!event.currentTarget){
        return
    }
    // console.log(event.deltaY)
    event.preventDefault();
    (event.currentTarget as HTMLElement).scrollBy({
        top:0,
        left: event.deltaY*5,
        behavior: 'smooth'
        
    })
}


</script>

<template>
    <div class="w-full flex flex-col ">
        <h2 class="md:self-center text-3xl"><b>{{ props.title }}</b></h2>        
        <div class="flex md:ml-auto md:mr-auto mt-4 overflow-x-scroll max-w-full whitespace-nowrap no-scrollbar h-fit gap-4 p-1" @wheel="wheel">
            <ToolCardView class="min-w-24 max-w-24" ref="scrollBarReference" v-for="item in tools" :tool-img="item.toolImg" :tool-name="item.toolName"></ToolCardView>
        </div>
    </div>
</template>