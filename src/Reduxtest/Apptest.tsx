//import "./App.css";
import { connect } from "react-redux";
import { setIncrement, setDecrement } from "./Action";
function Apptest({ setIncrement, setDecrement, count }) {
  return (
    <div className="App">
      <button
        onClick={() => {
          setIncrement();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setDecrement();
        }}
      >
        Decrement
      </button>
      <h1>Count: {count}</h1>
    </div>
  );
}
const mapState = (state) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setIncrement: () => dispatch(setIncrement()),
    setDecrement: () => dispatch(setDecrement()),
  };
};
export default connect(mapState, mapDispatch)(Apptest);
