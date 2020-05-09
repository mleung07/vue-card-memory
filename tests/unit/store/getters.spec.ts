import { expect } from "chai";
import getters from "@/store/getters";

describe("getters", () => {
  // mock state
  const state = {
    row: 4,
    column: 6,
    noOfEachCards: 6,
    win: false,
    board: []
  };
  it("getRow", () => {
    const result = getters.getRow(state);
    expect(result).to.equals(4);
  });
  it("getCol", () => {
    const result = getters.getCol(state);
    expect(result).to.equals(6);
  });
  it("getBoard", () => {
    const result = getters.getBoard(state);
    expect(result.length).to.equals(0);
  });
  it("getWin", () => {
    const result = getters.getWin(state);
    expect(result).to.equals(false);
  });
});
