import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <Link to={"/"} className="nav__brand">
        <span>
            {"< ErvieJohn />"}
        </span>
        
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to={"/"} className="nav__link" onClick={navToggle}>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            Education
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            Experience
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            Skills
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            Contact
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"#"} className="nav__link" onClick={navToggle}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar