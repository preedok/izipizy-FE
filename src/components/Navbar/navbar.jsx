import React from "react";
import login from "../../assets/images/profile/login.svg";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-auto"
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
              <div className="navbar-nav ">
                <Link className={` nav-link me-4`} aria-current="page" to="/">
                  Home
                </Link>
                <Link className={` nav-link me-4`} to="/add">
                  Add Recipe
                </Link>
                <Link className={` nav-link me-4`} to="/profile">
                  Profile
                </Link>
              </div>
              <div className="ms-auto">
                <Link to="/login" className="nav-link">
                  <img src={login} alt="" />
                  <button className="btn  ms-3 ">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
