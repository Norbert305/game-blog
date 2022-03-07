import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const UserNavBar = () => {
  const { actions, store } = useContext(Context);

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
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  actions.logOut();
                }}
              >
                LogOut
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
