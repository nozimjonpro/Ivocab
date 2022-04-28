import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import HeaderLogo from "../../Assets/Img/Logo.svg";
import Burger from "../../Assets/Img/Burger.svg";

function Header({setNavIsOpen, isNavOpen}) {
  return (
    <header className={`header ${isNavOpen? 'header--active' : ''}`}>
       <div className="header__inner">
       <Link className="header__logo" to="">
          <img
            className="header__logo-img"
            src={HeaderLogo}
            alt="Ivocab logo"
            width={250}
            height={120}
          />
        </Link>
        <div className={`header__top ${isNavOpen? 'header--active' : ''}`}>
          <button className="header__menu-btn" onClick={()=>setNavIsOpen(!isNavOpen)}>
            <img
              className="header__menu-hamburger"
              src={Burger}
              alt="Burger icon"
              width={30}
              height={23}
            />
          </button>
          <h2 className="header__heading">Levels</h2>
        </div>
       </div>
    </header>
  );
}

export default Header;
