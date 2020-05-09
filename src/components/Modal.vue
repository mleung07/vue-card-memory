<template>
  <div class="modal">
    <div class="modal-content">
      <h2>You win!</h2>
      <div class="restart" @click="restartGame">Restart</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Modal",
  methods: {
    ...mapActions(["restartGame"])
  }
});
</script>

<style scoped lang="scss">
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
