// https://thoughtbot.com/blog/using-redux-with-react-hooks

import React from "react";
import { connect } from "react-redux";
import { increment, update } from "./Actions";
import { useSelector, useDispatch } from "react-redux";

export const Count = () => {

  const counter = useSelector((state) => state.counter);
  //const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <main>
      <h3>xxx {counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>

      <h3>To demo payload, update 20 in payload</h3>
      <button onClick={() => dispatch(update(20))}>Update</button>

    </main>
  );
};

export default Count;
