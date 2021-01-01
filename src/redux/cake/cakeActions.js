import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakeCount = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakeCount,
  };
};
