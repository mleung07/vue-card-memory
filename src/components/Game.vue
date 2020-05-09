<template>
  <div class="box">
    <div class="game" v-if="getRow">
      <template v-for="i in getRow">
        <Row :y="i" :key="i" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import Row from "./Row.vue";

export default Vue.extend({
  name: "Game",
  components: {
    Row
  },
  computed: {
    ...mapGetters(["getRow"])
  },
  mounted: function() {
    this.distributeCard();
  },
  methods: {
    ...mapActions(["distributeCard"])
  }
});
</script>

<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.game {
  display: table;
}
</style>
