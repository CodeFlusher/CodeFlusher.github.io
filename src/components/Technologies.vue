<script setup lang="ts">
import Tools from '@/components/Tools.vue';
import { ref } from 'vue';

const langs = ref([
    {toolImg:"", toolName:"Java"},
    {toolImg:"", toolName:"Kotlin"},
    {toolImg:"", toolName:"C#"},
    {toolImg:"", toolName:"Python"},
    {toolImg:"", toolName:"JS"},
    {toolImg:"", toolName:"TS"}
])

const frameworks = ref([
    {toolImg:"", toolName:"Tailwind"},
    {toolImg:"", toolName:"VueJS"},
])

const tools = ref([
    {toolImg:"", toolName:"IntelliJ idea"},
    {toolImg:"", toolName:"Unity"},
    {toolImg:"", toolName:"PyCharm"},
    {toolImg:"", toolName:"Visual Studio Code"},
])
</script>

<template>
    <h2 class="text-4xl font-bold self-center text-black dark:text-white"> Tools I use</h2>
        <Tools :tools="langs" title="Programming Languages"></Tools>
        <Tools :tools="frameworks" title="Known Frameworks"></Tools>
        <Tools :tools="tools" title="Programms & Tools"></Tools>
</template>