<script setup>

import MeDescription from '@/components/MeDescription.vue';
import MeView from '@/components/MeView.vue';
import Technologies from '@/components/Technologies.vue';
import { ref } from 'vue';



</script>

<template>
    
    <main class="w-full flex-col gap-8 p-4">
        <MeView></MeView>
        <MeDescription></MeDescription>
        <Technologies class="m-auto"></Technologies>
    </main>
</template>
