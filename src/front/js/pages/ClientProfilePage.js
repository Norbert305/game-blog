import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const ClientProfilePage = () => {
  const { store } = useContext(Context);

  return (
    <div className="profile">
      <h1 className="text-center letter-shadow" style={{ color: "wheat" }}>
        User Profile
      </h1>
      <br />
      <hr />
      <div>
        <h3>
          <strong>User Information</strong>
        </h3>
        <h5>
          <strong>Full Name: {store.loggedUser.full_name} </strong>
        </h5>
        <h5>
          <strong>Email: {store.loggedUser.email}</strong>
        </h5>
        <h5>
          <strong>Phone: {store.loggedUser.phone}</strong>
        </h5>
        <h5>
          <strong>Address: {store.loggedUser.address}</strong>
        </h5>
      </div>

      <Link to="/EditProfile">
        <button type="submit" className="btn btn-primary">
          Edit Profile
        </button>
      </Link>
      <br />
      <br />
      <Link to="/ClientHomePage">
        <button type="submit" className="btn btn-primary">
          Back Home
        </button>
      </Link>
    </div>
  );
};
