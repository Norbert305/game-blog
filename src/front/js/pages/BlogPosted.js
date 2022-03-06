import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const BlogPosted = () => {
  const { store, action } = useContext(Context);

  return (
    <div className="profile text-center">
      <h1 className="text-center letter-shadow" style={{ color: "wheat" }}>
        User Profile
      </h1>
      <br />
      <hr />
      <h3>
        <strong>User Information</strong>
      </h3>
      <div>
        <ul className="game">
          {store.postBloggers.map((value, index) => {
            return (
              <li
                className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3"
                key={index}
              >
                <p className="mx-2 m-1 text-start">
                  <h5>
                    <strong>Name of Video Game: {value.game_name}</strong>
                  </h5>
                </p>
                <p className="mx-2 m-1 text-start">
                  <h5>
                    <strong>Game System: {value.select_console}</strong>
                  </h5>
                </p>
                <p className="mx-2 m-1 text-start">
                  <h5>
                    <strong>Year: {value.year}</strong>
                  </h5>
                </p>
                <p className="mx-2 m-1 text-start">
                  <h5>
                    <strong>Rating: {value.rating}</strong>
                  </h5>
                </p>
                <p className="mx-2 m-1 text-start">
                  <h5>
                    <strong>Description: {value.blog_post}</strong>
                  </h5>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    action.deleteBlogger(value.id);
                  }}
                >
                  Delete Blog
                </button>
              </li>
            );
          })}
        </ul>
      </div>
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
