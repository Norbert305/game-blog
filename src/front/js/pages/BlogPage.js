import React from "react";
import { Link } from "react-router-dom";

export const BlogPage = () => {
  return (
    <div className="BlogPost">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 middle">
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
              />
            </div>
            <div className="mb-3">
              <label>For What Gaming System? </label>
              <select id="game" name="game" required>
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
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputNumber" className="form-label">
                Raiting out of 10?
              </label>
              <input
                type="Number"
                max="10"
                min="0"
                className="form-control"
                id="exampleInputAddress1"
                placeholder="10 being the best"
              />
            </div>
            <div className="mb-3">
              <label for="message">Meaningful Message:</label>
              <textarea
                id="message"
                name="message"
                min="8"
                max="100"
              ></textarea>
            </div>
            <Link to="/ClientHomePage">
              <button type="submit" className="btn btn-primary">
                Back Home
              </button>
            </Link>
          </form>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
