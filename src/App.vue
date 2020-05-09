<template>
  <div id="app">
    <Modal v-show="getWin"></Modal>
    <template>
      <h1>Vue card memory game</h1>
      <Game></Game>
    </template>
  </div>
</template>

<script>
import Game from "@/components/Game.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Game,
    Modal
  },
  computed: {
    ...mapGetters(["getWin"])
  }
};
</script>

<style lang="scss">
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
