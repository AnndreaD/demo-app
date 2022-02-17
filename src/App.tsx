import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";
import { StyledApp } from "./styles";
import { Main } from "./routes/Main";

let persistor = persistStore(store);

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledApp>
          <Main />
        </StyledApp>
      </PersistGate>
    </Provider>
  );
};
