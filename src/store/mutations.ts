import { RootState } from "./index";
import { shuffle, sampleSize } from "lodash";
import { XY, Card } from "./type";

const fillCards = (arr: string[], repeats: number): string[] => {
  return Array.from({ length: repeats }, () => arr).flat();
};

const makeCard = (value: string, i: number, size: number): Card => {
  return {
    value: value,
    x: i % size || size,
    y: Math.ceil(i / size),
    matched: false,
    flipped: false
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
  "K"
];

export default {
  distributeCard(state: RootState) {
    const selectedCards = sampleSize(allCards, state.noOfEachCards);
    const temp = shuffle(fillCards(selectedCards, 4));
    const cards = [];
    for (let i = 0; i < temp.length; i++) {
      cards.push(makeCard(temp[i], i + 1, state.column));
    }
    state.board = cards;
  },
  flipCard(state: RootState, { x, y }: XY) {
    const card = state.board.find(card => card.x === x && card.y === y);
    if (card) {
      card.flipped = true;
    }
  },
  checkMatched(state: RootState) {
    const flipped = state.board.filter(card => card.flipped === true);
    if (flipped.length !== 2) {
      return;
    }
    // if 2 flipped card matches
    if (flipped[0].value === flipped[1].value) {
      flipped.map(card => (card.matched = true));
    }
    setTimeout(() => {
      flipped.map(card => (card.flipped = false));
    }, 500);
  },
  checkWin(state: RootState) {
    const isWin = state.board.every(card => card.matched);
    if (isWin) {
      state.win = true;
    }
  },
  restart(state: RootState) {
    state.win = false;
  }
};
