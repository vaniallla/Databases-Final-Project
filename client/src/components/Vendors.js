import React, { useState, useEffect } from "react";
import axios from "axios";

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [newVendorData, setNewVendorData] = useState({
    name: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    async function fetchVendors() {
      try {
        const response = await axios.get("http://localhost:3031/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVendors();
  }, []);

  const handleAddVendor = async () => {
    try {
      await axios.post("http://localhost:3031/vendors", newVendorData);
      const response = await axios.get("http://localhost:3031/vendors");
      setVendors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendorData({
      ...newVendorData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Vendors</h2>
      <form onSubmit={handleAddVendor}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newVendorData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={newVendorData.phone_number}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newVendorData.email}
          onChange={handleInputChange}
        />
        <button type="submit">Add Vendor</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.phone_number}</td>
              <td>{vendor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vendors;
