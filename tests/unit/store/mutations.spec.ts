import { expect } from "chai";
import mutations from "@/store/mutations";

describe("mutations", () => {
  // mock state
  const state = {
    row: 4,
    column: 6,
    noOfEachCards: 6,
    win: false,
    board: [
      {
        value: "1",
        x: 1,
        y: 1,
        flipped: false,
        matched: false
      },
      {
        value: "1",
        x: 2,
        y: 1,
        flipped: false,
        matched: false
      }
    ]
  };
  // TODO: test shuffle card
  it("checkWin before flip", () => {
    const { checkWin } = mutations;
    checkWin(state);
    expect(state.win).to.false;
  });
  it("flip the first card", () => {
    const { flipCard } = mutations;
    flipCard(state, { x: 1, y: 1 });
    const card = state.board.find(card => card.x === 1 && card.y === 1);
    expect(card?.flipped).to.true;
  });
  it("checkMatch when 1 card is flipped", () => {
    const { checkMatched } = mutations;
    checkMatched(state);
    const card = state.board.find(card => card.x === 1 && card.y === 1);
    expect(card?.matched).to.false;
  });
  it("flip the second card", () => {
    const { flipCard } = mutations;
    flipCard(state, { x: 2, y: 1 });
    const card = state.board.find(card => card.x === 2 && card.y === 1);
    expect(card?.flipped).to.true;
  });
  it("checkMatch when all card is flipped", () => {
    const { checkMatched } = mutations;
    checkMatched(state);
    const card1 = state.board.find(card => card.x === 1 && card.y === 1);
    expect(card1?.matched).to.true;
    const card2 = state.board.find(card => card.x === 2 && card.y === 1);
    expect(card2?.matched).to.true;
  });
  it("checkWin after all card is flipped", () => {
    const { checkWin } = mutations;
    checkWin(state);
    expect(state.win).to.true;
  });
  it("restart", () => {
    const { restart } = mutations;
    restart(state);
    expect(state.win).to.false;
  });
});
