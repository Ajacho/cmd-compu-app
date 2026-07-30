<script setup>
import { ref, computed } from "vue";
import { commands } from "../data/commands.js";
const selected = ref(commands[0]);
const currentOS = ref("linux");
const currentCategory = computed(() => selected.value.category);

// Categories
const categories = [
  { id: "navigation", label: "Navigation" },
  { id: "file-operations", label: "File Operations" },
  { id: "file-viewing", label: "File Viewing" },
  { id: "search", label: "Search" },
  { id: "permissions", label: "Permissions" },
  { id: "system-info", label: "System Info" },
  { id: "networking", label: "Networking" },
];

// Operating Systems
const operatingSystems = [
  { id: "linux", label: "Linux" },
  { id: "mac", label: "Mac" },
  { id: "windows", label: "Windows" },
  { id: "powershell", label: "PowerShell" },
];

// Next command
const nextCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.id === selected.value.id
  );

  const nextIndex = (currentIndex + 1) % commands.length;
  selected.value = commands[nextIndex];
};

// Previous command
const prevCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.id === selected.value.id
  );

  const prevIndex = (currentIndex - 1 + commands.length) % commands.length;
  selected.value = commands[prevIndex];
};

// Change category
const selectCategory = (category) => {
  currentCategory.value = category;

  const filteredCommands = commands.filter(
    (cmd) => cmd.category === category
  );

  if (filteredCommands.length) {
    selected.value = filteredCommands[0];
  }
};

// Change OS
const selectOS = (os) => {
  currentOS.value = os;
};

// Terminal prompt
const prompt = computed(() => {
  switch (currentOS.value) {
    case "linux":
      return "andrea@ubuntu:~$";
    case "mac":
      return "andrea@mac:~$";
    case "windows":
      return "C:\\Users\\andrea>";
    case "powershell":
      return "PS C:\\Users\\andrea>";
  }
});

// Current command for selected OS
const currentCommand = computed(() => {
  return selected.value[currentOS.value];
});
</script>

<template>
<div class="mb-6">
  <button
    v-for="category in categories"
    :key="category.id"
    @click="selectCategory(category.id)"
    :class="[
      'text-lg font-bold mr-3 mb-2',
      currentCategory === category.id
        ? 'text-green-300 underline'
        : 'text-green-500 hover:text-green-300'
    ]"
  >
    [{{ category.label }}]
  </button>
  
</div>

  <div v-if="selectCategory" >
<h2 class="text-2xl font-bold mb-4">
  {{ selected.title }}
</h2>

<p class="text-green-300 mb-4">
  Description: <span class="text-white">{{ selected.desc }}</span>
</p>

<p class="text-green-300 mb-4">
  Syntax: <span class="text-white">{{ currentCommand.usage }}</span>
</p>

<div class="command-box">
  <code>
    <span class="text-green-500 rounded text-sm font-mono">
      &lt;/&gt;
    </span>

    <br>

    <span class="text-green-500">
      {{ prompt }}
    </span>

    <span class="text-white font-mono ml-2">
      {{ currentCommand.realworldsample }}
    </span>
  </code>
</div>

<p class="text-green-300 mt-4">
  Tip: <span class="text-white">{{ currentCommand.tip }}</span>
</p>


    <div class="absolute bottom-4 left-0 w-full grid grid-cols-2 gap-2 p-4">

<div class="p-2">
  <button
    class="text-green-500 hover:text-green-300 mr-4 "
    @click="prevCommand"
  >
    [Previous]
  </button>

  <button
    class="text-green-500 hover:text-green-300"
    @click="nextCommand"
  >
    [Next]
  </button>
</div>
<div class="p-2">
  <button
    v-for="os in operatingSystems"
    :key="os.id"
    @click="selectOS(os.id)"
    :class="[
      'mr-3',
      currentOS === os.id
        ? 'text-green-300 underline'
        : 'text-green-500 hover:text-green-300'
    ]"
  >
    [{{ os.label }}]
  </button>
</div>

</div>  
  </div>



</template>
