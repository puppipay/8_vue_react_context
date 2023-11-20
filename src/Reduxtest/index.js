import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App root component
// Wrapper component
import { Provider } from "react-redux";
// Redux store
import store from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    // Wrapper component Provider used around app root component // store prop
    is passed with redux store
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
