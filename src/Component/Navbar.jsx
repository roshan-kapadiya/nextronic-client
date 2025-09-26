import React, { useState } from "react";
import logo from "../../../images/N.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <header>
      <nav
        className="row align-items-center p-3"
        style={{ backgroundColor: "#212529" }}
      >
        <div className="logo col-md-4">
          <img src={logo} alt="Logo" height="120px" width="120px" />
        </div>

        <div className="link col-md-5 text-center">
          <Link className="text-white text-decoration-none mx-3 fs-3" to="/">
            Home
          </Link>

          {/* Dropdown for Products */}
          <div
            className="d-inline-block position-relative mx-3"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span
              className="text-white text-decoration-none fs-3"
              style={{ cursor: "pointer" }}
            >
              Products ▾
            </span>

            {showDropdown && (
              <div
                className="position-absolute bg-dark p-2 rounded shadow"
                style={{ top: "100%", left: 0, minWidth: "200px", zIndex: 1000 }}
              >
                <Link
                  className="d-block text-white text-decoration-none p-2"
                  to="/product"
                >
                  All Products
                </Link>
                <Link
                  className="d-block text-white text-decoration-none p-2"
                  to="/products/home-appliances"
                >
                  Home Appliances
                </Link>
                <Link
                  className="d-block text-white text-decoration-none p-2"
                  to="/products/kitchen"
                >
                  Kitchen
                </Link>
                <Link
                  className="d-block text-white text-decoration-none p-2"
                  to="/products/smart-devices"
                >
                  Smart Devices
                </Link>
              </div>
            )}
          </div>

          <Link className="text-white text-decoration-none mx-3 fs-3" to="/orders">
            Orders
          </Link>
        </div>

        <div className="media col-md-3 text-end">
          {id ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <Link to="/signup">
              <button className="btn btn-outline-light">Sign Up</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
