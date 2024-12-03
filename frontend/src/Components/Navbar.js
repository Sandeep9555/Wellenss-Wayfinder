import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Wellness WayFinder <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Gym" className="navbar-links">
            Gym
          </Link>
        </li>
        <li>
          <Link
            to="https://wellnesswayfinder-visuals.vercel.app/"
            className="navbar-links"
          >
            Visuals
          </Link>
        </li>
        <li>
          <Link to="/Medicine" className="navbar-links">
            Medicine
          </Link>
        </li>
        <li>
          <Link to="/BmiCalCulator" className="navbar-links">
            BmiCalCulator
          </Link>
        </li>
        <li>
          <Link to="/About" className="navbar-links">
            About
          </Link>
        </li>
        <li>
          <Link to="/Reviews" className="navbar-links">
            Reviews
          </Link>
        </li>
        {/* <li>
          <Link to="/dashboard" className="navbar-links">
            Profile
          </Link>
        </li> */}
        {isLoggedIn ? (
          <li>
            <button className="navbar-btn" type="button">
              <Link to="/logout" className="navbar-links">
                Logout
              </Link>
            </button>
          </li>
        ) : (
          <li>
            <button className="navbar-btn" type="button">
              <Link to="/login" className="navbar-links">
                Login
              </Link>
            </button>
          </li>
        )}
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Gym">
              Gym&Exer
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Medicine">
              Medicine
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/About">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/Reviews">
              Reviews
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link onClick={openNav} to="/logout">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
