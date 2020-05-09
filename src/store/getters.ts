import { RootState } from "./index";
import { Card } from "./type";

export default {
  getRow(state: RootState): number {
    return state.row;
  },
  getCol(state: RootState): number {
    return state.column;
  },
  getBoard(state: RootState): Card[] {
    return state.board;
  },
  getCellById: (state: RootState) => (x: number, y: number) => {
    return state.board.find(card => card.x === x && card.y === y);
  },
  getWin(state: RootState): boolean {
    return state.win;
  }
};
