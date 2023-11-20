// https://thoughtbot.com/blog/using-redux-with-react-hooks

import React from "react";
import { connect } from "react-redux";
import { increment } from "./Actions";
import { bindActionCreators } from 'redux'


export const Countconnect = (props) => {



  return (
    <>
      <div>Count: {counter}</div>
      {/* <button onClick={() => { return increment() }}>Add to count</button> */}
    </>
  );


};

// const mapStateToProps = (state) => {

//   return {

//     counter: state.counter,

//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       console.log("sgsgsg");
//       return dispatch(increment())
//     },

//     dispatch,
//   }
// }

const mapStateToProps = state => {
  return { counter: 2 }
};


export default connect(mapStateToProps)(Countconnect);
