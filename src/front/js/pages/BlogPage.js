import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const BlogPage = () => {
  const { actions, store } = useContext(Context);

  const [newBlogger, setnewBlogger] = useState({
    game_name: null,
    select_console: null,
    year: null,
    rating: null,
    blog_post: null,
    user_id: store.loggedUser.id,
  });

  const handleChange = (e) =>
    setnewBlogger({ ...newBlogger, [e.target.name]: e.target.value });

  return (
    <div className="BlogPost">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 middle">
          <form>
            <h1
              className="text-center letter-shadow"
              style={{ color: "wheat" }}
            >
              Make Your Blog Here!!
            </h1>
            <div className="mb-3">
              <label for="exampleInputName1" className="form-label">
                Name of Game?
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name of Game"
                name="game_name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>For What Gaming System? </label>
              <br />
              <select id="game" name="select_console" onChange={handleChange}>
                <option value="PlayStation5">PlayStaion 5</option>
                <option value="Xbox">Xbox Series X</option>
                <option value="Nintendo">Nintendo</option>
                <option value="PC">PC</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Year it Came Out?
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPhoneNumber1"
                placeholder="What Year"
                name="year"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Rating out of 10?
              </label>
              <input
                type="Number"
                max="10"
                min="0"
                className="form-control"
                id="exampleInputAddress1"
                placeholder="10 being the best"
                name="rating"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label for="message">Talk about the game:</label>
              <br />
              <textarea
                id="message"
                min="8"
                max="100"
                name="blog_post"
                onChange={handleChange}
              ></textarea>
            </div>
            <Link to="/ClientHomePage">
              <button type="submit" className="btn btn-primary">
                Back Home
              </button>
            </Link>
            <br />
            <br />
            <Link to="/BlogPosted">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  actions.addBlogger(newBlogger);
                }}
              >
                Post Blog
              </button>
            </Link>
          </form>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
