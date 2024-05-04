import React, { useState, useEffect } from "react";
import axios from "axios";

function Employees() {
  //mySql read call here
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await axios.get("http://localhost:3031/employees");
        console.log("Response Data:", response.data);
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Run once when component mounts
    if (employees.length === 0) {
      console.log("Employees before API call:", employees.length);
      getEmployees();
    }
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hourly Rate</th>
            {/* <th>Hours Worked</th> */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.phone_number}</td>
              <td>{employee.email}</td>
              <td>{employee.hourly_rate}</td>
              {/* <td>{employee.hoursWorked}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
