import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);

