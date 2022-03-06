import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  const [newContact, setnewContact] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) =>
    setnewContact({ ...newContact, [e.target.name]: e.target.value });

  const myFetch = (contactInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        actions.updateUser(data);
      })
      .catch((err) => {
        console.error("Incorrect Information", err);
        alert("Incorrect Information");
      });
  };

  return (
    <div className="Login">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 middle">
          <form>
            <h1
              className="text-center letter-shadow"
              style={{ color: "wheat" }}
            >
              Login
            </h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Link to="/ClientHomePage">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => myFetch(newContact)}
              >
                Login
              </button>
            </Link>
          </form>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
