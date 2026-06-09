import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { NotificationProvider } from "./providers/NotificationProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
  <ErrorBoundary>
    <ReactQueryProvider>
      <NotificationProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </NotificationProvider>
    </ReactQueryProvider>
  </ErrorBoundary>
</React.StrictMode>
);