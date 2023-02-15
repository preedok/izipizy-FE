import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? `navbar ${style.navbarContainer} ${style.navColor} navbar-expand-lg fixed-top` : `navbar ${style.navbarContainer} navbar-expand-lg fixed-top`}>
      <div className={`container`}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${style.navbarCollapse}`} id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item me-5">
              <Link className={`${style.navLink} active`} to="">
                <span className={``}>Home</span>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className={style.navLink} to="">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className={style.navLink} to="">
                Profile
              </Link>
            </li>
          </ul>

          <div className="ms-auto d-flex align-items-center">
            <button className={style.btnUser}>
              <i class="bi bi-person"></i>
            </button>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
