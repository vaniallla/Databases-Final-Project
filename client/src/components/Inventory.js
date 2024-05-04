import React, { useState, useEffect } from "react";
import axios from "axios";

function Inventory() {
  // Sample inventory data for demonstration purposes
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    async function getInventory() {
      try {
        const response = await axios.get("http://localhost:3031/inventory");
        console.log("Inventory Data:", response.data);
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Run once when component mounts
    if (inventory.length === 0) {
      console.log("Inventory before API call:", inventory.length);
      getInventory();
    }
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Vendor ID</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.vendorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
