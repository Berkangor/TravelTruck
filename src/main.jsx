// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { HashRouter } from "react-router-dom"; // 🔁 BrowserRouter yerine HashRouter
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HashRouter>
            <App />
          </HashRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
