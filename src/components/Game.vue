<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '../stores/game';
import Row from './Row.vue';
const store = useGameStore();

onMounted(() => {
  store.distributeCard();
});
</script>

<template>
  <div class="box">
    <div class="game">
      <template v-for="i in store.row" :key="i">
        <Row :y="i" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.game {
  display: table;
}
</style>