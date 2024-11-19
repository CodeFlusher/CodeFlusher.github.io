<script setup lang="ts">
import Tools from '@/components/Tools.vue';
import { ref } from 'vue';

const langs = ref([
    {toolImg:"/icons/lang/java.svg", toolName:"Java"},
    {toolImg:"/icons/lang/kotlin.svg", toolName:"Kotlin"},
    {toolImg:"/icons/lang/cs.svg", toolName:"C#"},
    {toolImg:"/icons/lang/python.svg", toolName:"Python"},
    {toolImg:"/icons/lang/js.svg", toolName:"JS"},
    {toolImg:"/icons/lang/ts.svg", toolName:"TS"}
])

const frameworks = ref([
    {toolImg:"/icons/frameworks/tailwind.svg", toolName:"Tailwind"},
    {toolImg:"/icons/frameworks/vue.svg", toolName:"VueJS"},
    {toolImg:"/icons/frameworks/nuxt.svg", toolName:"Nuxt.js"}
])

const tools = ref([
    {toolImg:"/icons/programms/jetbrains.svg", toolName:"IntelliJ idea"},
    {toolImg:"/icons/programms/unity.svg", toolName:"Unity"},
    {toolImg:"/icons/programms/jetbrains.svg", toolName:"PyCharm"},
    {toolImg:"/icons/programms/vscode.svg", toolName:"Visual Studio Code"},
])
</script>

<template>
    <h2 class="text-4xl font-bold self-center text-black dark:text-white"> Tools I use</h2>
        <Tools :tools="langs" title="Programming Languages"></Tools>
        <Tools :tools="frameworks" title="Frameworks"></Tools>
        <Tools :tools="tools" title="Programms & Tools"></Tools>
</template>
