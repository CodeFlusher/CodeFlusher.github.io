<script setup lang="ts">
import Slider from '@vueform/slider';
import { ref } from 'vue';

const outField = defineModel<string>('out')
const inField = defineModel<string>('in')
const digitsSliderValue = defineModel<number>('sliderState') 

const addMistakes = defineModel<boolean>('addMistakes')

// const digitsSliderValue = ref(5)

const dec2bin = (dec:number)=> {
    let newNum = dec.toString(2)
  return '0'.repeat(4-newNum.length)+newNum;
}

const checkCode = (piece:String, a: number, b:number, c: number)=>{
    return (Number.parseInt(piece[a-1]) + Number.parseInt(piece[b-1]) + Number.parseInt(piece[c-1])) % 2
}

const replaceBit = (piece: String, failedBit: number)=>{
    console.log("replacing in: ",piece)
    var newString = ""
    for (let i = 0; i < piece.length ; i++) {
        if(i == failedBit - 1){
            newString = newString + (piece[i] == '1' ? '0' : '1')
            continue;
        }
        newString = newString + piece[i]
    }

    console.log("replace result: ", newString)
    return newString
}

const  executeCodeDatagen = ()=>{
    var digits = ""
    let values = ((String)(inField.value)).trim().split(' ')
    values.forEach(v=>{
        let value = v.trim()
        let parsedInt = Number.parseInt(value);
        if(parsedInt < 0 || parsedInt > 15){
            console.log("Smaller than zero or larger than 15: ", value)
            return
        }

        var binary = dec2bin(Number.parseInt(value))
        let bit1 = checkCode(binary, 1,2,4)
        let bit2 = checkCode(binary, 1,3,4)
        let bit3 = checkCode(binary, 2,3,4)

        if(addMistakes.value){
            
            let randomBit = Math.round(4*Math.random())
            console.log(randomBit)
            binary = replaceBit(binary, randomBit)
        }

        // console.log(bit1, bit2, bit3)
        let firstPart = bit1.toString() + bit2.toString()
        // console.log("first part: ", firstPart)
        let bin1 = binary[0].toString()
        // console.log("bin1: ", bin1)
        let secondPart = bit3.toString()
        // console.log("second part: ", secondPart)
        let otherBins = binary.substring(1, binary.length)
        // console.log("other bins: ", otherBins)

        let newString = firstPart + bin1 + secondPart+ otherBins
        
        digits = digits + newString + " "
    })
    outField.value = digits;
}

const  executeDigitDatagen = ()=>{
    var digits = ""
    for (let i = 0; i < (digitsSliderValue.value as number); i++) {
        digits = digits + Math.round(15*Math.random()) + " "
    }
    inField.value = digits;
}

</script>

<style src="@vueform/slider/themes/default.css"></style>

<template>
    <div class="flex flex-col gap-3 bg-neutral-200 dark:bg-neutral-800">
        <section class="flex flex-col gap-3 ">
            <h1 class="font-bold text-black dark:text-white text-xl">Datagen</h1>
            <span>Количество генерируемых цифр</span>
            <div class="flex w-full">
                <input type="number" v-model="digitsSliderValue" class="rounded-lg bg-neutral-300 dark:bg-neutral-900  border-neutral-400 dark:border-neutral-700 focus:border-green-600 border-[2px] p-1 text-lg dark:text-white placeholder:text-neutral-800 dark:placeholder:text-neutral-400 w-12">
                <Slider :min=1 :max=250 class="mt-8 w-full self-center m-4" v-model="digitsSliderValue" />
            </div>
            <button @click="executeDigitDatagen()" name="load" class="p-2 w-full bg-green-600 rounded-lg hover:bg-green-500 transition-all text-white font-bold text-lg" > Сгенерировать</button>
        </section>
        <section class="flex flex-col gap-3 ">
            <h2 class="font-bold text-black dark:text-white text-lg">Кодировка Данных</h2>
            <div class="flex">
                <input type="checkbox" v-model="addMistakes" id="mistakesInCodes" class="m-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 accent-green-500 aspect-square w-6 ">
                <label class="self-center" for="mistakesInCodes">Добавить ошибку?</label>
            </div>
            <button @click="executeCodeDatagen()" name="load" class="p-2 w-full bg-green-600 rounded-lg hover:bg-green-500 transition-all text-white font-bold text-lg" > Перевести в код Хэммига</button>
        </section>
    </div>  
</template>