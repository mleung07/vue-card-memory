<script setup lang="ts">
import { useGameStore } from "../stores/game";
import Card from "./Card.vue";
defineProps<{
  y: number;
}>();
const store = useGameStore();
</script>

<template>
  <div class="row">
    <Card v-for="i in store.column" :y="y" :x="i" :key="i"></Card>
  </div>
</template>

<style scoped>
.row {
  display: table-row;
}
</style>
