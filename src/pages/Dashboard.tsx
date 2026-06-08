import { useNavigate } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getEmployees,
  addEmployee,
} from "../api/employeeApi";

function Dashboard() {
  const navigate = useNavigate();

  const queryClient =
    useQueryClient();

  const { data, isLoading } =
    useQuery({
      queryKey: ["employees"],
      queryFn: getEmployees,
    });

  const mutation = useMutation({
    mutationFn: addEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Employee List</h1>

      <button
        onClick={() =>
          mutation.mutate({
            name: "Sharayu",
            department: "Developer",
          })
        }
      >
        Add Employee
      </button>

      <button
        onClick={handleLogout}
      >
        Logout
      </button>

      <hr />

      {data?.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>

          <p>
            Department:
            {employee.department}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;