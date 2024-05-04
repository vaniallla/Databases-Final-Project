import React, { useState, useEffect } from "react";
import axios from "axios";

function Menu() {
  // Sample menu items data for demonstration purposes
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    async function getMenus() {
      try {
        const response = await axios.get("http://localhost:3031/menus");
        console.log("Menus Data:", response.data);
        setMenus(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Run once when component mounts or when menus.length changes
    if (menus.length === 0) {
      console.log("Menus before API call:", menus.length);
      getMenus();
    }
  }, [menus.length]); // Include menus.length in the dependency array

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
          {menus.map((item) => (
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
