<script setup>
import { ref, computed } from "vue";

const board = ref(Array(9).fill(null));
const player = "X";
const computer = "O";
const gameOver = ref(false);
const winner = ref(null);

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isDraw = computed(() => {
  return !winner.value && board.value.every((cell) => cell !== null);
});

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    ) {
      return board.value[a];
    }
  }
  return null;
}

function playerMove(index) {
  if (board.value[index] || gameOver.value) return;
  //Player makes their move
  board.value[index] = player;

  const result = checkWinner();

  if (result) {
    winner.value = result;
    gameOver.value = true;
    return;
  }

  if (isDraw.value) {
    gameOver.value = true;
    return;
  }

  setTimeout(computerMove, 400);
}

  function computerMove() {
    if (gameOver.value) return;

    let availableMoves = board.value
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    let randomIndex = Math.floor(Math.random() * availableMoves.length);
    let move = availableMoves[randomIndex];

    board.value[move] = computer;

    const result = checkWinner();

    if (result) {
      winner.value = result;
      gameOver.value = true;
      return;
    }

    if (isDraw.value) {
      gameOver.value = true;
      return;
    }
  }

  function resetGame() {
    board.value = Array(9).fill(null);
    winner.value = null;
    gameOver.value = false;
  
}
</script>

<template>
  <div class="p-4">
    <h2 class="text-4xl font-bold text-center">Tic Tac Toe</h2>
        <button
      @click="$router.push('/')"
      class=" text-white hover:bg-green-600 mt-2 items-center justify-center flex ml-auto mr-auto mb-3"
    >
      Go back to menu
    </button>
    <p class="text-center">Player: X, Computer: O</p>


    <div class="flex items-center justify-center pt-4">
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="(cell, index) in board"
          :key="index"
          class="w-20 h-20 bg-slate-800 flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-slate-700"
          @click="playerMove(index)"
        >
          {{ cell }}
        </div>

        <div class="absolute bottom-4 left-0 w-full grid grid-cols-2 gap-2 p-4">
          <div class="p-2">
            <p
              v-if="gameOver && winner"
              class="text-green-500 font-bold text-lg mt-2"
            >
              Winner: {{ winner }}
            </p>
            <p
              v-else-if="gameOver && !winner"
              class="text-yellow-500 font-bold text-lg mt-2"
            >
              It's a draw!
            </p>
          </div>
          <div class="p-2 flex justify-end">
            <button
              class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"

              v-if="gameOver"
              @click="resetGame"
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
