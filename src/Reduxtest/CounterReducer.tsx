// Initial state of the counter on load of app or on refresh of app
const initState = {
  count: 0,
};

// Action keys used to identify the actions that can be performed on the state
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Reducer function which performs the actions that are set for state
// state: on inital load inital state then updated state by action
// action: type and payload, type denotes type of action and payload has
// the data for the state
export const CounterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
