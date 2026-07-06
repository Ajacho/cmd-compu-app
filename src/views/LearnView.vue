<script setup>
import { ref } from "vue";
import { commands } from "../data/commands.js";
import { computed } from "vue";
const selected = ref(commands[0]);
const currentOS = ref("linux");
//--- Next and Previous command functions ---
const nextCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.desc === selected.value.desc,
  );
  const nextIndex = (currentIndex + 1) % commands.length;
  selected.value = commands[nextIndex];
};
const prevCommand = () => {
  const currentIndex = commands.findIndex(
    (cmd) => cmd.desc === selected.value.desc,
  );
  const prevIndex = (currentIndex - 1 + commands.length) % commands.length;
  selected.value = commands[prevIndex];
};

//--- Select category function ---
const selectCategory = (category) => {
  const filteredCommands = commands.filter((cmd) => cmd.category === category);
  if (filteredCommands.length > 0) {
    selected.value = filteredCommands[0];
  }
};

//--- Select OS function ---
const selectOS = (os) => {
  currentOS.value = os;
  const filteredCommands = commands.filter((cmd) => cmd.os === os);
  if (filteredCommands.length > 0) {
    selected.value = filteredCommands[0];
  }
};

//--- Prompt ---
const prompt = computed(() => {
  switch (currentOS.value) {
    case "linux":
      return "andrea@ubuntu:~$" + selected.value.linux.realworldsample;
    case "mac":
      return "andrea@mac:~$" + selected.value.linux.realworldsample;
    case "windows":
      return "C:\\Users\\andrea>" + selected.value.linux.realworldsample;
    case "powershell":
      return "PS C:\\Users\\andrea>" + selected.value.linux.realworldsample;
  }
});



</script>

<template>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('navigation')"
  >
    [Navigation]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('file-operations')"
  >
    [File operations]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('file-viewing')"
  >
    [File viewing]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3 "
    @click="selectCategory('search')"
  >
    [Search]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('permissions')"
  >
    [Permissions]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('system-info')"
  >
    [System info]
  </button>
  <button
    class="text-green-500 hover:text-green-300 text-lg font-bold mb-4 mr-3"
    @click="selectCategory('networking')"
  >
    [Networking]
  </button>

  <div v-if="selectCategory">
    <!-- <button class="text-2xl font-bold mb-4">{{ selected.desc }}</button> -->
    <!-- <h2 class="text-xl font-bold mb-4">{{ selected.category }}</h2> -->
     <h2 class="text-2xl font-bold mb-4">{{ selected.title }}</h2>
    <p class="text-gray-300 mb-4">{{ selected.desc }}</p>
    <p class="text-gray-300">Syntax: {{ selected.usage }}</p>


<div class="command-box">
  <code>
    <span class="text-green-500 rounded text-sm font-mono">
      &lt;/&gt;
    </span>
    <br />

    <span class="text-green-500">
      {{ prompt }}
    </span>


  </code>
</div>






    <div class="grid grid-cols-2 gap-2 p-4">
      <div class="p-2">
        <button
          class="text-green-500 hover:text-green-300"
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
          class="text-green-500 hover:text-green-300"
          @click="selectOS('linux')"
        >
          [Linux]
        </button>
        <button
          class="text-green-500 hover:text-green-300"
          @click="selectOS('mac')"
        >
          [Mac]
        </button>
        <button
          class="text-green-500 hover:text-green-300"
          @click="selectOS('windows')"
        >
          [Windows]
        </button>
        <button
          class="text-green-500 hover:text-green-300"
          @click="selectOS('powershell')"
        >
          [PowerShell]
        </button>
      </div>
    </div>
  </div>
</template>
