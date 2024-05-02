import React from "react";

function Employees() {
  // Sample data for demonstration purposes
  const employees = [
    { id: 1, name: "John Doe", position: "Chef" },
    { id: 2, name: "Jane Smith", position: "Server" },
    { id: 3, name: "Bob Johnson", position: "Cashier" },
  ];

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>Name:</strong> {employee.name}, <strong>Position:</strong>{" "}
            {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
