import React from "react";

export const Login = () => {
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
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
