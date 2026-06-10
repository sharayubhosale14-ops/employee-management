import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
const rows = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "HR",
    salary: 30000,
  },
  {
    id: 2,
    name: "Priya Patil",
    department: "IT",
    salary: 50000,
  },
  {
    id: 3,
    name: "Amit Kumar",
    department: "Finance",
    salary: 45000,
  },
  {
    id: 4,
    name: "Sneha Patil",
    department: "Marketing",
    salary: 35000,
  },
  {
    id: 5,
    name: "Rohan Deshmukh",
    department: "IT",
    salary: 60000,
  },
];

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "department",
    headerName: "Department",
    width: 180,
    editable: true,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 150,
    editable: true,
  },
];

function EmployeeDataGrid() {
  return (
    <div
      style={{
        height: 500,
        width: "100%",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}

export default EmployeeDataGrid;