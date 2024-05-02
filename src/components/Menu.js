import React from "react";

function Menu() {
  // Sample menu items data for demonstration purposes
  const menuItems = [
    { id: 1, name: "Classic Burger", price: "$5.99" },
    { id: 2, name: "Cheeseburger", price: "$6.99" },
    { id: 3, name: "Bacon Burger", price: "$7.99" },
    { id: 4, name: "Veggie Burger", price: "$6.49" },
    { id: 5, name: "Chicken Burger", price: "$7.49" },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Price:</strong>{" "}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
