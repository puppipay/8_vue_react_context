// CreateStore is the main method to create redux store
// CombineReducers allows the user to combbine multiple reducers together
import { legacy_createStore as createStore, combineReducers } from "redux";
// Import the reducers here
import { CounterReducer } from "./CounterReducer";

// Combining multiple reducers here and provide a key to idenitfy them
const rootReducer = combineReducers({
  counter: CounterReducer,
});

// Creating store
let store = createStore(rootReducer);

// Exporting store
export default store;
