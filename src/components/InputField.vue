<script setup lang="ts">
import { ref } from 'vue';

const file = ref(null)
const fileInput = ref(null)

const model = defineModel()

// i generated this via chat gpt yipee
const clearField = ()=>{
    console.log("Clearing Field" + model.value)
    model.value = ""
}

const triggerFileInput = () => {
    if(fileInput.value == null){
        return
    }
    // Programmatically click the hidden file input
    (fileInput.value as HTMLElement).click();
};

const onFileChange = (event: any) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    if (selectedFile) {
        file.value = selectedFile;
        // Read the file as text (you can change this to readAsDataURL, etc. for different formats)
        const reader = new FileReader();
        reader.onload = (e) => {
            if(e.target == null){
                return
            }
          model.value = e.target.result; // Store the file content
        };
        reader.readAsText(selectedFile);
    }
};

const downloadFile = () => {
        
    if(model.value == undefined){
        return
    }

    const blob = new Blob([model.value as BlobPart], { type: 'text/plain' }); // Create a new Blob with the text input
    const url = URL.createObjectURL(blob); // Create a URL for the Blob

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'download.txt'; // The default file name

    // Trigger the download
    document.body.appendChild(link); // Append the link to the document body
    link.click(); // Programmatically click the link to start download

    // Clean up
    document.body.removeChild(link); // Remove the link from the document
    URL.revokeObjectURL(url); // Revoke the object URL to free memory
};

</script>

<template>

    <div class="flex flex-col gap-3">
        <textarea v-model="model as string" name="name" id="id" class=" h-[65vh] rounded-lg bg-neutral-200 dark:bg-neutral-800  border-neutral-400 dark:border-neutral-700 focus:border-green-600 border-[2px] p-4 text-lg text-white placeholder:text-neutral-800 dark:placeholder:text-neutral-400" placeholder="Put Text Here" e>
        </textarea>
        <input ref="fileInput" type="file"  @change="onFileChange" class="hidden">
        <div class="flex md:flex-col gap-3 w-full justify-between">
            <button @click="clearField()" name="clear" class="h-12 w-full bg-red-800 rounded-lg hover:bg-red-600 transition-all text-white font-bold text-lg" > Очистить</button>
            <button @click="triggerFileInput()" name="upload" class="h-12 w-full bg-green-700 rounded-lg hover:bg-green-600 transition-all text-white font-bold text-lg" > Загрузить</button>
            <button @click="downloadFile()" name="download" class="h-12 w-full bg-neutral-700 dark:bg-neutral-300 hover:bg-green-500 bg-clip-text transition-all  text-transparent font-bold text-lg" > Скачать</button>
        </div>
        
    </div>
</template> 