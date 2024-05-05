import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderForm() {
  const [vendors, setVendors] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    purchaseQuantity: "",
    totalPrice: 0,
    vendorId: "",
    inventoryId: "",
    inventoryPrice: 0,
  });

  useEffect(() => {
    async function fetchVendorsAndInventory() {
      try {
        const vendorsResponse = await axios.get(
          "http://localhost:3031/vendors"
        );
        const inventoryResponse = await axios.get(
          "http://localhost:3031/inventory"
        );
        setVendors(vendorsResponse.data);
        setInventory(inventoryResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVendorsAndInventory();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "inventoryId") {
      const selectedInventory = inventory.find(
        (item) => item.id === parseInt(value)
      );
      setFormData({
        ...formData,
        [name]: value,
        inventoryPrice: selectedInventory ? selectedInventory.price : 0,
      });
    } else if (name === "purchaseQuantity") {
      const totalPrice = parseInt(value) * formData.inventoryPrice;
      setFormData({
        ...formData,
        [name]: value,
        totalPrice: isNaN(totalPrice) ? 0 : totalPrice,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to submit the order
      await axios.post("http://localhost:3031/submit-order", {
        date: formData.date,
        purchaseQuantity: formData.purchaseQuantity,
        vendorId: formData.vendorId,
        inventoryId: formData.inventoryId,
        inventoryPrice: formData.inventoryPrice,
        totalPrice: formData.totalPrice, // Include the totalPrice field
      });

      alert("Order submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to submit order");
    }
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <label>Purchase Quantity:</label>
        <input
          type="number"
          name="purchaseQuantity"
          value={formData.purchaseQuantity}
          onChange={handleInputChange}
        />
        <label>Vendor:</label>
        <select
          name="vendorId"
          value={formData.vendorId}
          onChange={handleInputChange}
        >
          <option value="">Select Vendor</option>
          {vendors.map((vendor) => (
            <option key={vendor.id} value={vendor.id}>
              {vendor.name}
            </option>
          ))}
        </select>
        <label>Inventory:</label>
        <select
          name="inventoryId"
          value={formData.inventoryId}
          onChange={handleInputChange}
        >
          <option value="">Select Inventory</option>
          {inventory.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
