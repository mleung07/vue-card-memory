<script setup lang="ts">
import { useGameStore } from "../stores/game";
const store = useGameStore();
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h2>You win!</h2>
      <button class="restart" @click="store.restart">Restart</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 30px 90px;
  border-radius: 20px;
  text-align: center;
}

.restart {
  background-color: #e7e7e7;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
