const CounterReducer = (state = 1, action) => {

  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "UPDATE":
      state = action.payload;
      //return (state = action.payload);
      return state;

    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
export default CounterReducer;
