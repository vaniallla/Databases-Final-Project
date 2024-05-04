import React, { useState, useEffect } from "react";
import axios from "axios";

function Employees() {
  // State to store employees data
  const [employees, setEmployees] = useState([]);

  // State to store new employee form data
  const [newEmployeeData, setNewEmployeeData] = useState({
    name: "",
    phone_number: "",
    email: "",
    hourly_rate: "",
  });

  // Function to fetch employees data from the API
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

    // Fetch employees data when component mounts
    getEmployees();
  }, []);

  // Function to handle adding a new employee
  const handleAddEmployee = async () => {
    try {
      // Make a POST request to add a new employee
      await axios.post("http://localhost:3031/employees", newEmployeeData);
      console.log("after axios.post", newEmployeeData);

      // After successfully adding a new employee, fetch the updated employees data
      const response = await axios.get("http://localhost:3031/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle input changes in the new employee form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployeeData({
      ...newEmployeeData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Employees</h2>
      {/* New employee form */}
      <form onSubmit={handleAddEmployee}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployeeData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={newEmployeeData.phone_number}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newEmployeeData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="hourly_rate"
          placeholder="Hourly Rate"
          value={newEmployeeData.hourly_rate}
          onChange={handleInputChange}
        />
        <button type="submit">Add Employee</button>
      </form>

      {/* Employee list */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hourly Rate</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.phone_number}</td>
              <td>{employee.email}</td>
              <td>{employee.hourly_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
