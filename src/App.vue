<script setup>
import ComputerFrame from './components/ComputerFrame.vue'
</script>

<template>
  <div class="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
  <ComputerFrame >
    <router-view />
  </ComputerFrame>
  </div>
</template>
