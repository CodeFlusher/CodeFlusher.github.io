<script setup lang="ts">
import ImagedLabel from '@/components/ImagedLabel.vue';
</script>

<template>
    <div class="ml-16 mr-16 w-full md:w-[48rem] lg:ml-24 lg:mr-24 flex bg-neutral-200 dark:bg-neutral-800 rounded-2xl p-5 flex-col md:flex-row self-center shadow-lg dark:shadow-black ">
        <img src="https://avatars.githubusercontent.com/u/50952974?v=4" class="rounded-full aspect-square h-64 w-64 self-center">
        <div class="p-2 flex flex-col w-full">
            <h1 class="text-4xl text-black dark:text-white w-full text-center">👋I'm <b>CodeFlusher</b></h1>
            <div class=" flex flex-col gap-1">
                <h2 class="text-2xl"> IRL: Егор Свердлов (Egor Sverdlov)</h2>
                <ImagedLabel class="h-fit" img="/icons/social/discord.svg" adress="https://discord.gg/X8kUwRkRbW" label-text="Discord: codeflusher" copy-text="codefluser"></ImagedLabel>
                <ImagedLabel class="h-fit" img="/icons/social/youtube.svg" adress="https://www.youtube.com/@codeflusher" label-text="Youtube: CodeFlusher" copy-text="https://www.youtube.com/@codeflusher"></ImagedLabel>
                <ImagedLabel class="h-fit" img="/icons/social/telegram.svg" adress="https://t.me/codeflusher" label-text="Telegram: CodeFlusher" copy-text="@CodeFlusher"></ImagedLabel>
                <p class="text-2xl"> Meow.</p>
            </div>
        </div>
    </div>
</template>