import React from "react";

function Menu() {
  // Sample menu items data for demonstration purposes
  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      price: "$5.99",
      description:
        "A classic beef burger with lettuce, tomato, onion, and pickles.",
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: "$6.99",
      description:
        "A beef burger topped with melted cheese, lettuce, tomato, onion, and pickles.",
    },
    {
      id: 3,
      name: "Bacon Burger",
      price: "$7.99",
      description:
        "A beef burger topped with crispy bacon, melted cheese, lettuce, tomato, onion, and pickles.",
    },
    {
      id: 4,
      name: "Veggie Burger",
      price: "$6.49",
      description:
        "A vegetarian burger patty made with black beans, topped with lettuce, tomato, onion, and pickles.",
    },
    {
      id: 5,
      name: "Chicken Burger",
      price: "$7.49",
      description:
        "A grilled chicken breast fillet served on a bun with lettuce, tomato, onion, and pickles.",
    },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
