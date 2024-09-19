<script setup lang="ts">
import { ref } from 'vue';


const inField = defineModel<String>('in')
const outField = defineModel<String>('out')

const usenBits = ref('')
const table = ref('')

const isFailed = ref<boolean>(false)

const insureLen = (value : string)=>{
    return '0'.repeat(bitComputed()/getTableSymbolBits() - value.length) + value
}

const getTableSymbolBits = () =>{
    switch(table.value){
        case "ШЕСНАДЦАТИРИЧНОЕ":
            return 4;
        case "ДВОИЧНОЕ":
            return 1;
        default:
            return 1;
    }
}

const bitComputed = () =>{
    switch(usenBits.value){
        case "255 СИМВОЛЬНЫХ КОДОВ":
            return 8;
        default:
            return 16
        
    }
}

const executeEncode = ()=>{

    if(usenBits.value == '' || table.value == ''){
        isFailed.value = true
        return
    }
    isFailed.value = false;
    if(inField.value == undefined){
        //console.log('undefined')
        return;
    }

    // console.log('start encode')
    
    var byteArray: number[] = [];
    let maxCount = Math.pow(2, bitComputed()) - 1;


    var lastSymbol = ''
    var count = 0

    for (let i = 0; i < inField.value.length; i++) {
        
        var currentSymb = inField.value[i];
        // console.log(currentSymb)
        if(currentSymb != lastSymbol ){
            // console.log('not prev')
            if(lastSymbol != ''){
                byteArray.push(count + Math.pow(2, bitComputed() - 1))
                byteArray.push(lastSymbol.charCodeAt(0))
            }
            lastSymbol = currentSymb
            count = 1
        }
        count ++;
        lastSymbol == currentSymb
        if(count == maxCount){
            if(lastSymbol != ''){
                byteArray.push(count + Math.pow(2, bitComputed() - 1))
                byteArray.push(currentSymb.charCodeAt(0))
            }
            count = 0
        }
    }

    byteArray.push(count + Math.pow(2, bitComputed() - 1))
    byteArray.push(lastSymbol.charCodeAt(0))
    
    var newVal = ""

    switch(table.value){
        
        case "ШЕСНАДЦАТИРИЧНОЕ":
            byteArray.forEach(item =>{
                // console.log(item)
                newVal = newVal +  ' ' + insureLen(item.toString(16))
            })
            break
        case "ДВОИЧНОЕ":
            byteArray.forEach(item =>{  
                // console.log(item)
                newVal = newVal + ' ' +insureLen( item.toString(2))
            })
            break
        default:
            newVal = byteArray.join(' ')
            break
            
    }
    outField.value = newVal
    
}

const executeDecode = ()=>{
    try{
        if(usenBits.value == '' || table.value == ''){
            isFailed.value = true
            return
        }
        isFailed.value = false;
        let fixedInput = inField.value?.trim()

        let baseRleTag = Math.pow(2, bitComputed()-1)

        var outputBuf = ""

        if(table.value == "РАЗДЕЛЬНЫЕ БАЙТЫ"){
            let array = fixedInput?.split(' ').map(Number)
            if(array == undefined){
                isFailed.value = true
                return
            }
            for (let i = 0; i < array.length - 1; i+=2) {
                const element = array[i];
                if(element < baseRleTag){
                    continue
                }
                outputBuf = outputBuf + String.fromCharCode(array[i+1]).repeat(element-baseRleTag - 1)

            }
            outField.value = outputBuf
            return
        }

        const bitsPerSymbol = bitComputed()/getTableSymbolBits()

        var separatedElements = [];

        let inputText = fixedInput?.replace(new RegExp(' ', 'g'), '')
        if(inputText == undefined){
            isFailed.value = true
            return
        }

        for (var i = 0, charsLength = inputText.length; i < charsLength; i += bitsPerSymbol) {
            separatedElements.push(inputText.substring(i, i + bitsPerSymbol));
        }

        let array = separatedElements.map(item => Number.parseInt(item, table.value == "ДВОИЧНОЕ" ? 2 : 16))

        if(array == undefined){
            isFailed.value = true
                return
        }
        for (let i = 0; i < array.length - 1; i+=2) {
            const element = array[i];
            if(element < baseRleTag){
                continue
            }
            outputBuf = outputBuf + String.fromCharCode(array[i+1]).repeat(element-baseRleTag - 1)
        }
        outField.value = outputBuf
    }catch(e){
        isFailed.value = true
    }
}


</script>

<template>
    <div class="flex flex-col gap-3 bg-neutral-300 dark:bg-neutral-800">
    <h1 class="font-bold text-black dark:text-white text-xl">Code Modifiers</h1>
    <span>Количество символов</span>
    <div>
        <select v-model="usenBits" class="rounded-md bg-neutral-300 dark:bg-neutral-900 w-full text-xl">
        <option disabled value="">Пожалуйста выберете параметр</option>
        <option>255 СИМВОЛЬНЫХ КОДОВ</option>
        <option>65535 СИМВОЛЬНЫХ КОДОВ</option>
        </select>
    </div>
    <span>Charset</span>
    <div>
        <select v-model="table" class="rounded-md bg-neutral-300 dark:bg-neutral-900 w-full text-xl">
        <option disabled value="">Пожалуйста выберете параметр</option>
        <option>РАЗДЕЛЬНЫЕ БАЙТЫ</option>
        <option>ШЕСНАДЦАТИРИЧНОЕ</option>
        <option>ДВОИЧНОЕ</option>
        </select>
    </div>
    <h1 class="text-transparent transition-colors font-extrabold text-lg duration-200" :class="{'text-red-500' : isFailed}">Произошла ошибка! (Если не выбран параметр, пожалуйста выберете)</h1>

    <button @click="executeEncode()" name="load" class="p-2 w-full bg-green-600 rounded-lg hover:bg-green-500 transition-all text-white font-bold text-lg" > Сжать</button>
    <button @click="executeDecode()" name="load" class="p-2 w-full bg-green-600 rounded-lg hover:bg-green-500 transition-all text-white font-bold text-lg" > Вернуть в исходное состояние</button>
   
    </div>
</template>