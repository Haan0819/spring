import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="overflow-visible header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <LinkScroll
              to="hero"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="robot"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Robot
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="about"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              About
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="gallery"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Gallery
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={false}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </LinkScroll>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="/board" onClick={closeMenu}>
              Board
            </a>
          </li>
        </ul>
        <ul>
          <button className="flex items-center justify-center w-16 h-8 text-white duration-150 bg-green-600 border-none rounded-md shadow-md hover:bg-green-800">
            <Link to="/login">
              <p className="font-semibold ">Login </p>
            </Link>
          </button>
          <div className="w-5"></div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ height: "2rem", minHeight: "1rem" }}
              className="font-bold text-white bg-green-600 border-0 shadow-md hover:bg-green-800"
            >
              이수근
            </Dropdown.Toggle>
            <Dropdown.Menu className="border-0 shadow-sm">
              <Link to="/board/my">
                <Dropdown.Item href="#/action-1" className="text-sm">
                  내가 쓴 글
                </Dropdown.Item>
              </Link>
              <Link to="/ChangeInfo">
                <Dropdown.Item href="#/action-2" className="text-sm">
                  정보 변경
                </Dropdown.Item>
              </Link>
              <Dropdown.Item href="#/action-3" className="text-sm">
                로그아웃
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </nav>
    </div>
  );
};

window.addEventListener("scroll", () => {
  const test = document.querySelector(".header");
  if (window.scrollY > 100) {
    test.style.backgroundColor = "rgba(0, 0, 0, .8)";
  } else {
    test.style.backgroundColor = "#00ff0000";
  }
});

export default Navbar;
