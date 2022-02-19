import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [newContact, setnewContact] = useState({
    email: null,
    password: null,
  });

  const [valid, setValid] = useState({
    state: false,
    type: "",
  });

  const handleChange = (e) =>
    setnewContact({ ...newContact, [e.target.name]: e.target.value });

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
              <button type="submit" className="btn btn-primary">
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
