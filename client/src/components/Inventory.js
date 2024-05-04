import React, { useState, useEffect } from "react";
import axios from "axios";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [newItemData, setNewItemData] = useState({
    vendor_id: "",
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    async function fetchInventory() {
      try {
        const response = await axios.get("http://localhost:3031/inventory");
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchInventory();
  }, []);

  const handleAddItem = async () => {
    try {
      await axios.post("http://localhost:3031/inventory", newItemData);
      const response = await axios.get("http://localhost:3031/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItemData({
      ...newItemData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Inventory</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="vendor_id"
          placeholder="Vendor ID"
          value={newItemData.vendor_id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newItemData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={newItemData.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newItemData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
