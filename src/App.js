import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutDefault />
      </PersistGate>
    </Provider>
  );
}

export default App;
