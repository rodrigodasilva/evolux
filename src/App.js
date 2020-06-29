import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
