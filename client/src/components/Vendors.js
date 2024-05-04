import React, { useState, useEffect } from "react";
import axios from "axios";

function Vendors() {
  // Sample vendor data for demonstration purposes
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    async function getVendors() {
      try {
        const response = await axios.get("http://localhost:3031/vendors");
        console.log("Vendors Data:", response.data);
        setVendors(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Run once when component mounts
    if (vendors.length === 0) {
      console.log("Vendors before API call:", vendors.length);
      getVendors();
    }
  }, []);

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
