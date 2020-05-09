import { ActionContext } from "vuex";
import { throttle } from "lodash";
import { RootState } from "./index";
import { XY } from "./type";

export default {
  distributeCard(context: ActionContext<RootState, RootState>) {
    context.commit("distributeCard");
  },
  flipCard(context: ActionContext<RootState, RootState>, { x, y }: XY) {
    throttle(() => {
      context.commit("flipCard", { x, y });
      context.commit("checkMatched");
      context.commit("checkWin");
    }, 500)();
  },
  restartGame(context: ActionContext<RootState, RootState>) {
    context.commit("restart");
    context.commit("distributeCard");
  }
};
