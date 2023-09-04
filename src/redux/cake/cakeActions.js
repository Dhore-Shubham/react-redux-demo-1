import { BUY_CAKE } from './cakeTypes';

// Action creator for Buy Cake.

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
