import React from "react";
import { Link } from "react-router-dom";

export const ClientProfilePage = () => {
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
          <strong>Full Name: </strong>
          {/* {store.loggedUser.full_name} */}
        </h5>
        <h5>
          <strong>Email: </strong>
          {/* {store.loggedUser.email} */}
        </h5>
        <h5>
          <strong>Phone: </strong>
          {/* {store.loggedUser.phone} */}
        </h5>
        <h5>
          <strong>Address: </strong>
          {/* {store.loggedUser.zip_code} */}
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
