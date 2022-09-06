import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Demo App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <div className="">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cuenta
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item">Logout</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
