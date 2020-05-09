<template>
  <div class="cell" v-if="myCard">
    <div
      class="card"
      :class="{
        flipped: myCard.flipped,
        matched: myCard.matched
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

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Card } from "@/store/type";

export default Vue.extend({
  name: "Card",
  props: {
    x: Number,
    y: Number
  },
  computed: {
    ...mapGetters(["getCellById"]),

    myCard: function(): Card {
      return this.getCellById(this.x, this.y);
    }
  },
  methods: {
    ...mapActions(["flipCard"]),
    handleClick() {
      if (!this.myCard) {
        return;
      }
      if (this.myCard.flipped || this.myCard.matched) {
        return;
      }
      this.flipCard({ x: this.x, y: this.y });
    }
  }
});
</script>

<style scoped lang="scss">
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

  &.flipped,
  &.matched {
    .back {
      transform: rotateY(180deg);
    }

    .front {
      transform: rotateY(0deg);
    }
  }

  .face {
    font-size: 60px;
    color: red;
  }
}
</style>
