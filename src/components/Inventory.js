import React from "react";

function Inventory() {
  // Sample inventory data for demonstration purposes
  const inventoryItems = [
    { id: 1, name: "Buns", quantity: 50, price: "$1.50", vendorId: 101 },
    { id: 2, name: "Patties", quantity: 100, price: "$2.00", vendorId: 102 },
    { id: 3, name: "Lettuce", quantity: 20, price: "$0.75", vendorId: 103 },
    { id: 4, name: "Tomatoes", quantity: 30, price: "$0.60", vendorId: 104 },
    {
      id: 5,
      name: "Cheese Slices",
      quantity: 40,
      price: "$1.20",
      vendorId: 105,
    },
  ];

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
          {inventoryItems.map((item) => (
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
