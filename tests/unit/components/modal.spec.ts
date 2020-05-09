import chai, { expect } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { spy } from "sinon";
import sinonChai from "sinon-chai";
import Modal from "@/components/Modal.vue";

chai.use(sinonChai);

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Modal.vue", () => {
  const wrapper = shallowMount(Modal);
  it("renders with title", () => {
    const title = wrapper.find("h2");
    expect(title.text()).to.equals("You win!");
  });
  it("renders with button", () => {
    const button = wrapper.find(".restart");
    expect(button.text()).to.include("Restart");
  });
});

describe("Modal.vue <> Vuex", () => {
  const getters = {};
  const actions = {
    restartGame: () => true
  };
  const mockMethod = spy();

  const store = new Vuex.Store({
    getters,
    actions
  });

  const wrapper = shallowMount(Modal, {
    store,
    localVue
  });

  it("restart when clicked", () => {
    wrapper.setMethods({ restartGame: mockMethod });
    wrapper.find(".restart").trigger("click");
    expect(mockMethod).to.have.been.calledOnce;
  });
});
