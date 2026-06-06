<template>
  <h1 class="text-5xl font-bold font-mono text-green-500 mb-5 text-center">
    Menu
  </h1>

  <div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Learn Commands</h2>
      <p class="text-gray-300 mb-4">
        Explore and learn various command-line commands with detailed
        descriptions and usage examples.
      </p>
      <button
        @click="$router.push('/learn')"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Learn
      </button>
    </div>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Game</h2>
      <p class="text-gray-300 mb-4">
        Take a break from learning commands and play.
      </p>
      <button
        @click="$router.push('/games')"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Games
      </button>
    </div>
  </div>
</template>
