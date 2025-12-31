<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../stores/game';
const store = useGameStore();

const props = defineProps<{
  x: number;
  y: number;
}>();
const myCard = computed(() => store.getCellById(props.x, props.y));
const handleClick = () => {
  // TODO: throttle clicks
  if (!myCard.value) {
    return;
  }
  if (myCard.value?.status !== 'covered') {
    return;
  }
  store.flipCard({ x: props.x, y: props.y });
};
</script>

<template>
  <div class="cell" v-if="myCard">
    <div
      class="card"
      :class="{
        flipped: myCard.status === 'flipped',
        matched: myCard.status === 'matched'
      }"
      @click="handleClick"
    >
      <div class="back"></div>
      <div class="front">
        <div class="face">{{ myCard.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cell {
  display: table-cell;
  padding: 10px;
}
.card {
  width: 120px;
  height: 150px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 0;
  position: relative;
  transition: opacity 0.5s;

  .front,
  .back {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .front {
    transform: rotateY(-180deg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid black;
  }
  .back {
    background-image: url("../assets/bg.png");
    background-size: 15px;
    background-repeat: repeat;
    background-position: center;
  }

  &.flipped{
    .back {
      transform: rotateY(180deg);
    }

    .front {
      transform: rotateY(0deg);
    }
  }

  &.matched {
    visibility: hidden;
  }

  .face {
    font-size: 60px;
    color: red;
  }
}
</style>
