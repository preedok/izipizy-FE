import React from 'react';

import style from '../../components/Navbar/navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const NavbarLogin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 z-1">
          <div className="container-fluid">
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <Link className={`${style.menu} nav-link me-4`} aria-current="page" to="/">
                  Home
                </Link>
                <Link className={`${style.menu} nav-link me-4`} to="/add">
                  Add Recipe
                </Link>
                <Link className={`${style.menu} nav-link me-4`} to="/profile">
                  Profile
                </Link>
              </div>
              <div className="ms-auto">
                <button className="btn rounded-4" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarLogin;
