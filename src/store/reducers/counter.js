import { INCREMENT, DECREMENT } from "../types";

export default (state = { number: 0, dataType: 'integer'}, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + 1}
    case DECREMENT:
      return { ...state, number: state.number - 1}
    default:
      return state;
  }
};
