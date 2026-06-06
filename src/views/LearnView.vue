<script setup>
import { ref } from 'vue'
import { commands } from '../data/commands.js'
const selected = ref(commands[0])
const nextCommand = () => {
    const currentIndex = commands.findIndex(cmd => cmd.command === selected.value.command)
    const nextIndex = (currentIndex + 1) % commands.length
    selected.value = commands[nextIndex]
}
const prevCommand = () => {
    const currentIndex = commands.findIndex(cmd => cmd.command === selected.value.command)
    const prevIndex = (currentIndex - 1 + commands.length) % commands.length
    selected.value = commands[prevIndex]
}
</script>

<template>
<h1 class= "text-xl pb-4">This is the learn view</h1>
</br>
            <div v-if="selected">
                <h2>{{ selected.command }}</h2>
                <p>{{ selected.desc }}</p>
                <p>{{ selected.usage }}</p>
                <img :src="selected.picture" alt="" width="200" height="200" />
            </div>
            <div class="flex justify-between mt-4">        
                <button class="text-green-500 hover:text-green-300" @click="prevCommand">[Previous]</button>
                <button class="text-green-500 hover:text-green-300" @click="nextCommand">[Next]</button>
            </div>
</template>


