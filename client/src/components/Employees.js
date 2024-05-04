import React, { useState } from "react";
import axios from 'axios';

function Employees() {
  // Sample data for demonstration purposes
  //mySql read call here
  const [employees, setEmployees] = useState([])
  if (employees.length === 0) {
  axios.get('http://localhost:3031/employees')
    .then(function (response) {
      let employeeArray = []
      response.data.forEach(employee => employeeArray.push(employee))
      setEmployees(employeeArray)
      console.log(employees);
      // console.log(employees);
    })
    .catch(function (error) {
      // console.log(error);
    })
  }

  // const employees = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     phoneNumber: "123-456-7890",
  //     email: "john@example.com",
  //     hourlyRate: "$15.00",
  //     hoursWorked: 40,
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     phoneNumber: "987-654-3210",
  //     email: "jane@example.com",
  //     hourlyRate: "$14.00",
  //     hoursWorked: 35,
  //   },
  //   {
  //     id: 3,
  //     name: "Bob Johnson",
  //     phoneNumber: "111-222-3333",
  //     email: "bob@example.com",
  //     hourlyRate: "$13.50",
  //     hoursWorked: 45,
  //   },
  // ];

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
