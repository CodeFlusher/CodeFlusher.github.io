<script setup lang="ts">
import { ref } from 'vue';

const outField = defineModel('out')
const inField = defineModel('in')

const outputStyle = ref('value')

const checkCode = (piece:String, a: number, b:number, c: number)=>{
    return (Number.parseInt(piece[a-1]) + Number.parseInt(piece[b-1]) + Number.parseInt(piece[c-1])) % 2
}

const replaceBit = (piece: String, failedBit: number)=>{
    let first = piece.substring(0, failedBit - 1)
    let second = piece.substring(failedBit)
    let mid = piece[failedBit - 1] == '1' ? '0' : '1'
    let newString = first + mid + second
    return newString
}

const evaluatePiece = (piece:String) =>{
    let bit1 = checkCode(piece, 3, 5, 7) != Number.parseInt(piece[0])
    let bit2 = checkCode(piece, 3, 6, 7)!= Number.parseInt(piece[1])
    let bit4 = checkCode(piece, 5, 6, 7)!= Number.parseInt(piece[3])
    

    let failedBit = (bit1 ? 1 : 0) + (bit2 ? 2 : 0) + (bit4 ? 4 : 0)

    if(failedBit == 0){
        return piece
    }

    return replaceBit(piece, failedBit)
}

const getBinaryValue = (piece:String)=>{
    return piece[2] + piece[4] + piece[5] + piece[6]
}

const mapTo =(piece: String) =>{
    switch(outputStyle.value){
        case "4-BITS":
            return getBinaryValue(piece)

        case "VALUE":
            return Number.parseInt( getBinaryValue(piece), 2)
            
        default:
            return piece

    }
}

const execute = ()=>{
    let inputText = (String)(inField.value)
    let separatedPieces = inputText.split(' ').filter((item)=>item.length == 7);

    var newText = ""

    separatedPieces.forEach(piece=>{
        newText = newText + mapTo(evaluatePiece(piece)) + " "
    })

    outField.value = newText
}
</script>

<template>


<div class="flex flex-col gap-3 bg-neutral-300 dark:bg-neutral-800">
    <h1 class="font-bold text-black dark:text-white text-xl">Code Modifiers</h1>
    <span>Тип выходных данных</span>
    <div>
        <select v-model="outputStyle" class="rounded-md bg-neutral-300 dark:bg-neutral-900 w-full text-xl">
        <option>7-BITS</option>
        <option>4-BITS</option>
        <option>VALUE</option>
        </select>
    </div>
    <button @click="execute()" name="load" class="p-2 w-full bg-green-600 rounded-lg hover:bg-green-500 transition-all text-white font-bold text-lg" > Исправить</button>
</div>


</template>