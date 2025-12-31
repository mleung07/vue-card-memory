import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { useGameStore } from "../../stores/game";
import Card from "../Card.vue";

describe("Card", () => {
  it("renders face value properly", () => {
    const pinia = createTestingPinia({
      initialState: {
        game: { board: [{ value: "A", x: 1, y: 1, status: "covered" }] },
      },
      createSpy: vi.fn,
    });
    const wrapper = mount(Card, {
      props: {
        x: 1,
        y: 1,
      },
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.text()).toContain("A");
    wrapper.find('[role="button"]').trigger("click");
    const store = useGameStore(pinia);
    expect(store.flipCard).toHaveBeenCalledTimes(1);
    expect(store.flipCard).toHaveBeenCalledWith({ x: 1, y: 1 });
  });
});
