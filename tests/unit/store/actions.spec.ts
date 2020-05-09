import { expect } from "chai";
import { spy } from "sinon";
import actions from "@/store/actions";
import { RootState } from "@/store";

describe("actions", () => {
  // mock state
  const state: RootState = {
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

  const getters: {} = {};
  const rootGetters: {} = {};
  const rootState: RootState = {
    row: 4,
    column: 6,
    noOfEachCards: 6,
    win: false,
    board: []
  };

  it("distributeCard", () => {
    const commit = spy();

    actions.distributeCard({
      commit,
      state,
      dispatch: () => Promise.resolve(),
      getters,
      rootGetters,
      rootState
    });

    expect(commit.args).to.deep.equal([["distributeCard"]]);
  });
  it("flipCard", () => {
    const commit = spy();

    actions.flipCard(
      {
        commit,
        state,
        dispatch: () => Promise.resolve(),
        getters,
        rootGetters,
        rootState
      },
      { x: 1, y: 1 }
    );

    expect(commit.args).to.deep.equal([
      ["flipCard", { x: 1, y: 1 }],
      ["checkMatched"],
      ["checkWin"]
    ]);
  });
  it("restartGame", () => {
    const commit = spy();

    actions.restartGame({
      commit,
      state,
      dispatch: () => Promise.resolve(),
      getters,
      rootGetters,
      rootState
    });

    expect(commit.args).to.deep.equal([["restart"], ["distributeCard"]]);
  });
});
