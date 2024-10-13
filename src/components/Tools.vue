<script setup lang="ts">
import { ref } from 'vue';
import ToolCardView from './ToolCardView.vue';

const tools = ref([
    {toolImg:"", toolName:"Java"}
])

</script>

<template>
    <div class="flex">
        <ToolCardView v-for="item in tools" ></ToolCardView>
    </div>
</template>