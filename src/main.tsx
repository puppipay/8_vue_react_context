import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import { legacy_createStore as createStore, combineReducers } from 'redux';
// import Contextapp from './Contextapp.tsx'
// import Refapp from './Refapp.tsx'
import './index.css'




// import Apptest from './Reduxtest/Apptest';
// import store from "./Reduxtest/Store"

import { Count } from "./Reduxconnectandhooktest/Reduxhook.tsx";
// import { Countconnect } from "./ReduxConnect.tsx";
import CounterReducer from './Reduxconnectandhooktest/CounterReducer';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

const store = createStore(
  rootReducer, {}   // this also works
  // CounterReducer,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Contextapp /> */}
    { /* <Refapp /> */}

    <Provider store={store}>
      {/* <Apptest /> */}

      <Count />
      {/* <Countconnect /> */}
    </Provider>


  </React.StrictMode>,
)
