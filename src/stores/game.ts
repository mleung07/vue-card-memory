import { sampleSize, shuffle } from "lodash";
import { defineStore } from "pinia";
import type { Card, XY } from "../types";

export interface RootState {
  row: number;
  column: number;
  win: boolean;
  board: Card[];
}

const fillCards = (arr: string[], repeats: number): string[] => {
  return Array.from({ length: repeats }, () => arr).flat();
};

const makeCard = (value: string, i: number, size: number): Card => {
  return {
    value: value,
    x: i % size || size,
    y: Math.ceil(i / size),
    status: "covered",
  };
};

const allCards: string[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
];

export const useGameStore = defineStore("game", {
  state: () => ({
    row: 4,
    column: 6,
    win: false,
    board: [] as Card[],
  }),
  getters: {
    getCellById: (state) => (x: number, y: number) => {
      return state.board.find((card) => card.x === x && card.y === y);
    },
  },
  actions: {
    distributeCard() {
      const selectedCards = sampleSize(allCards, this.column);
      const temp = shuffle(fillCards(selectedCards, this.row));
      const cards = [];
      for (let i = 0; i < temp.length; i++) {
        cards.push(makeCard(temp[i]!, i + 1, this.column));
      }
      this.board = cards;
    },
    async flipCard({ x, y }: XY) {
      const card = this.board.find((card) => card.x === x && card.y === y);
      if (card) {
        card.status = "flipped";
      }
      await this.checkMatched();
      this.checkWin();
    },
    async checkMatched() {
      const flipped = this.board.filter((card) => card.status === "flipped");
      if (flipped.length !== 2) {
        return;
      }
      if (!flipped[0] || !flipped[1]) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (flipped[0].value === flipped[1].value) {
        flipped.map((card) => (card.status = "matched"));
      } else {
        flipped.map((card) => (card.status = "covered"));
      }
    },
    checkWin() {
      const isWin = this.board.every((card) => card.status === "matched");
      if (isWin) {
        this.win = true;
      }
    },
    restart() {
      this.win = false;
      this.board = [];
      this.distributeCard();
    },
  },
});
