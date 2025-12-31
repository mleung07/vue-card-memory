import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { useGameStore } from "./game";

describe("Game Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with correct default state", () => {
    const gameStore = useGameStore();
    expect(gameStore.row).toBe(4);
    expect(gameStore.column).toBe(6);
    expect(gameStore.win).toBe(false);
    expect(gameStore.board).toEqual([]);
  });

  it("distributes cards correctly", () => {
    const gameStore = useGameStore();
    gameStore.distributeCard();
    expect(gameStore.board.length).toBe(gameStore.row * gameStore.column);
    const values = gameStore.board.map((card) => card.value);
    const uniqueValues = new Set(values);
    expect(uniqueValues.size).toBe(gameStore.column);
  });
});
