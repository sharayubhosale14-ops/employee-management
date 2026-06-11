import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeDataGrid from "../components/EmployeeDataGrid";
import AnalyticsChart from "../components/AnalyticsChart";
import DepartmentPieChart from "../components/DepartmentPieChart";
import NotificationBell from "../components/NotificationBell";
import DateTimePickerCard from "../components/DateTimePickerCard";

type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: string;
};

function Dashboard() {
  const navigate = useNavigate();

  // ✅ FIXED INITIAL STATE (this was broken in your code)
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      department: "HR",
      salary: "30000",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya@gmail.com",
      department: "IT",
      salary: "50000",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.salary
    ) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee: Employee = {
      id: Date.now(),
      ...formData,
    };

    setEmployees([...employees, newEmployee]);

    setFormData({
      name: "",
      email: "",
      department: "",
      salary: "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Employee Management Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Analytics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Total Employees</h3>
            <p className="text-3xl font-bold">
              {employees.length}
            </p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Departments</h3>
            <p className="text-3xl font-bold">4</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Active Employees</h3>
            <p className="text-3xl font-bold">
              {employees.length}
            </p>
          </div>

        </div>

        {/* Notifications */}
        <div className="mb-8">
          <NotificationBell />
        </div>

        {/* Date & Time Picker */}
        <div className="mb-8">
          <DateTimePickerCard />
        </div>

        {/* Add Employee Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Add Employee
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />

          </div>

          <button
            onClick={handleAddEmployee}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Employee
          </button>
        </div>

        {/* Employee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-blue-700">
                {employee.name}
              </h3>

              <p className="mt-2">📧 {employee.email}</p>
              <p>🏢 {employee.department}</p>
              <p>💰 ₹{employee.salary}</p>
            </div>
          ))}

        </div>

        {/* DataGrid */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Employee DataGrid
          </h2>

          <EmployeeDataGrid />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Employee Statistics
            </h2>

            <AnalyticsChart />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Department Distribution
            </h2>

            <DepartmentPieChart />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;