import React, { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItemData, setNewMenuItemData] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
  });

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await axios.get("http://localhost:3031/menus");
        setMenuItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMenuItems();
  }, []);

  const handleAddMenuItem = async () => {
    try {
      await axios.post("http://localhost:3031/menus", newMenuItemData);
      const response = await axios.get("http://localhost:3031/menus");
      setMenuItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuItemData({
      ...newMenuItemData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Menu</h2>
      <form onSubmit={handleAddMenuItem}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMenuItemData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newMenuItemData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMenuItemData.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={newMenuItemData.image_url}
          onChange={handleInputChange}
        />
        <button type="submit">Add Menu Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((menuItem) => (
            <tr key={menuItem.id}>
              <td>{menuItem.name}</td>
              <td>{menuItem.price}</td>
              <td>{menuItem.description}</td>
              <td>{menuItem.image_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
