import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Inventory from "./components/Inventory";
import Vendors from "./components/Vendors";
import Menu from "./components/Menu";
import Reports from "./components/Reports";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Burger Restaurant</h1>
        </header>
        <main>
          <div className="buttons-container">
            <Link to="/employees">
              <button>Employees</button>
            </Link>
            <Link to="/inventory">
              <button>Inventory</button>
            </Link>
            <Link to="/vendors">
              <button>Vendors</button>
            </Link>
            <Link to="/menu">
              <button>Menu</button>
            </Link>
            <Link to="/reports">
              <button>Reports</button>
            </Link>
          </div>
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/order-form" element={<OrderForm />} />{" "}
            {/* Route for the OrderForm component */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
