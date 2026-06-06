<script setup>
import { ref } from "vue";
import { commands } from "../data/commands.js";
const selected = ref(commands[0]);
const nextCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.command === selected.value.command,
  );
  const nextIndex = (currentIndex + 1) % commands.length;
  selected.value = commands[nextIndex];
};
const prevCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.command === selected.value.command,
  );
  const prevIndex = (currentIndex - 1 + commands.length) % commands.length;
  selected.value = commands[prevIndex];
};
</script>

<template>
  <div v-if="selected">
    <h2 class="text-2xl font-bold mb-4">{{ selected.command }}</h2>
    <p class="text-gray-300 mb-4">{{ selected.desc }}</p>
    <p class="text-gray-300">Syntax: {{ selected.usage }}</p>
    <p class="text-gray-300 mt-4">Real-world Example:</p>
    <div class="command-box">
      <code>
        <span class="text-green-500 rounded text-sm font-mono">
          &lt;/&gt; Bash </span
        ><br />
        <span class="text-green-500">andrea@ubuntu:~$</span>
        {{ selected.realworldsample }}</code
      >
    </div>
  </div>
  <div class="flex justify-between mt-4">
    <button class="text-green-500 hover:text-green-300" @click="prevCommand">
      [Previous]
    </button>
    <button class="text-green-500 hover:text-green-300" @click="nextCommand">
      [Next]
    </button>
  </div>
</template>
