import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div classNameName="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link" href="#gamesOfYear">
                Games of the year
              </a>
              <a className="nav-link" href="#futureGames">
                Future Games
              </a>
              <a className="nav-link" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Please Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div classNameName="game1" id="home">
        <section>
          <article>
            <h1>Sign Up Now</h1>
            <p>
              Want to receive the latest news on games!!! Please sign up now!!!
              You will enjoy the awsome content provided to you!! The best games
              from the past, present and future are here
              nooooowwwwwwww!!!!!!!!!!
            </p>
            <Link to="/SignUpPage">
              <button type="button" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </Link>
            <hr />
            <h1>Login</h1>
            <p>If already a member please login!!!</p>
            <Link to="/Login">
              <button type="button" className="btn btn-primary btn-lg">
                Login
              </button>
            </Link>
          </article>
        </section>
      </div>
      <h2 className="gamesOfYear" id="gamesOfYear" style={{ color: "wheat" }}>
        Games Of The Year
      </h2>
      <div className="row">
        <div className="col-2"></div>
        <div
          id="carouselExampleControls"
          className="carousel slide col-8"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2021/09/spider-man-2-2023-4255476.png"
                className="d-block w-100"
                alt="spider"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/kratos-god-of-war-.jpg"
                className="d-block w-100"
                alt="god-of-war"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.gq-magazine.co.uk/photos/5d13ae679fa6014038839ef1/master/pass/red-dead-redemption-03-22oct18_b.jpg"
                className="d-block w-100"
                alt="red-dead"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-2"></div>
      </div>
      <h2 className="gamesOfYear" id="futureGames" style={{ color: "wheat" }}>
        Future Games!!!
      </h2>
      <div className="future-games big-card">
        <div className="row g-0">
          <div className="overflow col-md-6 card">
            <h1>Batman Gotham Nights!!!</h1>
            <p>Comming out this year!!!</p>
          </div>
          <div className="overflow col-md-6">
            <img
              src="https://images.pushsquare.com/2d620a81eab25/gotham-knights-ps5-playstation-5.large.jpg"
              className="images"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="future-games big-card">
        <div className="row g-0">
          <div className="overflow col-md-6">
            <img
              src="https://www.pcgamesn.com/wp-content/uploads/2020/08/black-myth-wukong.jpg"
              className="images"
            />
          </div>
          <div className="overflow col-md-6 card">
            <h1>Black Myth Wukong!!!</h1>
            <p>Comming out soon!!!</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="future-games big-card">
        <div className="row g-0">
          <div className="overflow col-md-6 card">
            <h1>Forspoken!!!</h1>
            <p>Comming out this year!!!</p>
          </div>
          <div className="overflow col-md-6">
            <img
              src="https://www.psu.com/wp/wp-content/uploads/2021/12/Forspoken-Will-Be-A-PS5-Console-Exclusive-For-2yrs.jpg"
              className="images"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="gamesOfYear" id="gamesOfYear" style={{ color: "wheat" }}>
          About Us!!
        </h2>
      </div>
      <div className="about">
        <h1>Just Sit Back and Enjoy the Show!!</h1>
        <p>
          All we do is blog about our favorite video games!!! In the end!! Let
          us know how you feel!! Our information will be at the bottom!! Please
          contact us below!!
        </p>
      </div>
      <h2 className="gamesOfYear" id="gamesOfYear" style={{ color: "wheat" }}>
        Contact Us
      </h2>

      <div>
        <ul>
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>
  );
};
