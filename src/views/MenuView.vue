<template>
<h1 class="text-xl pb-4">This is the menu view</h1>

  <button @click="$router.push('/learn')">
    Learn Commands
  </button>

  <button @click="$router.push('/games')">
    Games
  </button>
</template>