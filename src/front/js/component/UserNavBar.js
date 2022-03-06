import React from "react";
import { Link } from "react-router-dom";

export const UserNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Hello!!!
            </a>
            <a className="nav-link" href="#">
              Check the blogs
            </a>
            <a className="nav-link" href="#">
              Profile
            </a>
            <Link to="/">
              <a className="nav-link" href="#">
                Logout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
