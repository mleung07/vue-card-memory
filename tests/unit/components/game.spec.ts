import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import chai, { expect } from "chai";
import { spy } from "sinon";
import sinonChai from "sinon-chai";
import Game from "@/components/Game.vue";
import Row from "@/components/Row.vue";

chai.use(sinonChai);

const localVue = createLocalVue();
localVue.use(Vuex);

const mockMethod = spy();

const store = new Vuex.Store({
  state: {
    row: 4
  },
  getters: {
    getRow: state => state.row
  },
  mutations: {
    distributeCard: () => true
  },
  actions: {
    distributeCard: mockMethod
  }
});

describe("Game.vue", () => {
  it("mounts and render with correct row", () => {
    const wrapper = shallowMount(Game, {
      store,
      localVue
    });

    expect(mockMethod).to.have.been.calledOnce;

    expect(wrapper.findAll(Row)).to.length(4);
  });
});
