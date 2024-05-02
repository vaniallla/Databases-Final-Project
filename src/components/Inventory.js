import React from "react";

function Inventory() {
  // Sample inventory data for demonstration purposes
  const inventoryItems = [
    { id: 1, name: "Buns", quantity: 50 },
    { id: 2, name: "Patties", quantity: 100 },
    { id: 3, name: "Lettuce", quantity: 20 },
    { id: 4, name: "Tomatoes", quantity: 30 },
    { id: 5, name: "Cheese Slices", quantity: 40 },
  ];

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventoryItems.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Quantity:</strong>{" "}
            {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
