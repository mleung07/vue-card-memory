import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { useGameStore } from "../../stores/game";
import Modal from "../Modal.vue";

describe("Modal", () => {
  it("renders and restarts properly", () => {
    const wrapper = mount(Modal, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(wrapper.text()).toContain("You win!");
    wrapper.find("button").trigger("click");
    const store = useGameStore();
    expect(store.restart).toHaveBeenCalledTimes(1);
  });
});
