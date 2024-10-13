<script setup lang="ts">
import ImagedLabel from '@/components/ImagedLabel.vue';
</script>

<template>
    <div class=" ml-24 mr-24 flex bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-5 w-fit self-center shadow-lg dark:shadow-black w-[48rem]">
        <img src="https://avatars.githubusercontent.com/u/50952974?v=4" class="rounded-full aspect-square h-64">
        <div class="m-6">
            <h1 class="text-4xl text-black dark:text-white ">👋I'm <b>CodeFlusher</b></h1>
            <div class="ml-2 flex flex-col gap-1">
                <h2 class="text-2xl"> IRL: Егор Свердлов (Egor Sverdlov)</h2>
                <ImagedLabel class="h-8" img="/discord.svg" adress="https://discord.gg/X8kUwRkRbW" label-text="Discord: codeflusher" copy-text="codefluser"></ImagedLabel>
                <ImagedLabel class="h-8" img="/youtube.svg" adress="https://www.youtube.com/@codeflusher" label-text="Youtube: CodeFlusher" copy-text="https://www.youtube.com/@codeflusher"></ImagedLabel>
                <ImagedLabel class="h-8" img="/telegram.svg" adress="https://t.me/codeflusher" label-text="Telegram: CodeFlusher" copy-text="@CodeFlusher"></ImagedLabel>
                <p class="text-2xl"> Meow.</p>
            </div>
        </div>
    </div>
</template>