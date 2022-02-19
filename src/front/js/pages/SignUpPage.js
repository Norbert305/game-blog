import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  const [newUser, setNewUser] = useState({
    user_type: "client",
    full_name: null,
    email: null,
    password: null,
    phone: null,
    address: null,
  });

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  return (
    <div className="signUp">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 middle">
          <form>
            <h1
              className="text-center letter-shadow"
              style={{ color: "wheat" }}
            >
              Sign Up
            </h1>
            <div className="mb-3">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
                name="full_name"
                onChange={handleChange}
              />
            </div>
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
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhoneNumber1"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress1"
                placeholder="Address"
                name="address"
                onChange={handleChange}
              />
            </div>
            <Link to="/Login">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          </form>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
