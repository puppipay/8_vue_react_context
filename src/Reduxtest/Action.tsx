// Actions Keys of the reducer
import { INCREMENT, DECREMENT } from "./CounterReducer";

// Method which align the action with data(Inc)
export const setIncrement = (data) => {
  return {
    type: INCREMENT,
    data: data,
  };
};
// Method which align the action with data(Dec)
export const setDecrement = (data) => {
  return {
    type: DECREMENT,
    data: data,
  };
};
