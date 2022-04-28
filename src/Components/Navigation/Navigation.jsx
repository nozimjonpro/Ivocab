import React from "react";
import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.scss";

function Navigation({isNavOpen}) {
  return (
    <nav className={`nav ${isNavOpen? "nav--active" : ''}`}>
      <span className="nav__span">Vocabulary</span>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="users">
            Users
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="levels">
            Levels
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="words">
            Words
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="support">
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
