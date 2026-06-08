let employees = [
  {
    id: 1,
    name: "Rahul",
    department: "HR",
  },
  {
    id: 2,
    name: "Priya",
    department: "IT",
  },
  {
    id: 3,
    name: "Amit",
    department: "Finance",
  },
];

export const getEmployees = async () => {
  return employees;
};

export const addEmployee = async (
  employee: any
) => {
  const newEmployee = {
    id: employees.length + 1,
    ...employee,
  };

  employees.push(newEmployee);

  return newEmployee;
};