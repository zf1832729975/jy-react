import { SET_PRODUCT_TRENDS } from "./action-types";

const defaultState = {
  loading: false,
  productTrends: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PRODUCT_TRENDS:
      return {
        ...state,
        productTrends: action.playload,
      };
    default:
      return state;
  }
}
