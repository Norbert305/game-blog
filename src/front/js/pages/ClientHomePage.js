import React from "react";
import { Link } from "react-router-dom";

export const ClientHomePage = () => {
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <br />
      <br />
      <hr />
      <div>
        <h2>User Profile</h2>
        <Link to="/ClientProfilePage">
          <button type="button" class="btn btn-primary btn-lg">
            Profile Page
          </button>
        </Link>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h2>Article Page</h2>
        <button type="button" class="btn btn-primary btn-lg">
          Article Page
        </button>
      </div>
      <br />
      <br />
      <hr />
      <div>
        <h2>Make a Blog</h2>
        <button type="button" class="btn btn-primary btn-lg">
          Blog Page
        </button>
      </div>
    </div>
  );
};
