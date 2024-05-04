import React from "react";

function Vendors() {
  // Sample vendor data for demonstration purposes
  const vendors = [
    {
      id: 1,
      name: "Vendor A",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Vendor B",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Vendor C",
      email: "bob@example.com",
      phone: "111-222-3333",
    },
  ];

  return (
    <div>
      <h2>Vendors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vendors;
