<template>
  <div class="row" v-if="getCol">
    <Card v-for="i in getCol" :y="y" :x="i" :key="i"></Card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Card from "./Card.vue";

export default Vue.extend({
  name: "Row",
  components: {
    Card
  },
  props: {
    y: Number
  },
  computed: {
    ...mapGetters(["getCol"])
  }
});
</script>

<style scoped lang="scss">
.row {
  display: table-row;
}
</style>
