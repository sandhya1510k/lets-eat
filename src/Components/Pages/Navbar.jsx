import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, User, Menu, X, Clock } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link to="/home" className="navbar-brand d-flex align-items-center">
          <span className="text-danger fw-bold fs-4">Let's</span>
          <span className="text-warning mx-1 fs-5"> </span>
          <span className="text-success fw-bold fs-4">Eat</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/restaurent" className="nav-link">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/takeaway" className="nav-link">
                Takeaway
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link to="/user/order" className="nav-link d-flex align-items-center">
                <Clock className="me-1" size={16} />
                Orders
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link position-relative">
                <ShoppingBag size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-danger d-flex align-items-center px-3">
                <User className="me-2" size={16} />
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
