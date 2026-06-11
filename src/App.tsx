import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

const Login = lazy(
  () => import("./pages/Login")
);

const Dashboard = lazy(
  () => import("./pages/Dashboard")
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-2xl font-bold">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;