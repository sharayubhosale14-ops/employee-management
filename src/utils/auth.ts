export const getUserRole = () => {
  return localStorage.getItem("role");
};

export const isAdmin = () => {
  return getUserRole() === "admin";
};

export const isEmployee = () => {
  return getUserRole() === "employee";
};