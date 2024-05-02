import React from "react";

function Vendors() {
  // Sample vendor data for demonstration purposes
  const vendors = [
    {
      id: 1,
      name: "Vendor A",
      contact: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Vendor B",
      contact: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Vendor C",
      contact: "Bob Johnson",
      email: "bob@example.com",
      phone: "111-222-3333",
    },
  ];

  return (
    <div>
      <h2>Vendors</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id}>
            <strong>Name:</strong> {vendor.name}, <strong>Contact:</strong>{" "}
            {vendor.contact}, <strong>Email:</strong> {vendor.email},{" "}
            <strong>Phone:</strong> {vendor.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vendors;
