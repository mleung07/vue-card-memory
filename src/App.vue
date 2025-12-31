<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useGameStore } from './stores/game';
import Modal from './components/Modal.vue';
const store = useGameStore();
</script>

<template>
  <h1>Vue card memory game</h1>
  <Modal v-if="store.win" />
  <RouterView />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Shadows Into Light", cursive;
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
