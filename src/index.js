import RouterComponent from "./Router/router";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <RouterComponent />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
