import { Navigate } from "react-router-dom";

function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold text-red-600">
        Access Denied
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;