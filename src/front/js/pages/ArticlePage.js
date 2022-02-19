import React from "react";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  return (
    <div className="homePage">
      <h1>Article Page</h1>
      <br />
      <br />
      <hr />
      <div>
        <h2>User Profile</h2>
        <p>
          Articles of your favorite games will be availble for your
          entertainment!!!!
        </p>
        <br />
        <br />
        <Link to="/ClientHomePage">
          <button type="button" class="btn btn-primary btn-lg">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};
