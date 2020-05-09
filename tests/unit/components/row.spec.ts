import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import Row from "@/components/Row.vue";
import Card from "@/components/Card.vue";

chai.use(sinonChai);

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    column: 4
  },
  getters: {
    getCol: state => state.column
  }
});

describe("Row.vue", () => {
  it("mounts and render with correct col", () => {
    const wrapper = shallowMount(Row, {
      store,
      localVue
    });

    expect(wrapper.findAll(Card)).to.length(4);
  });
});
