import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={"navbar navbar-expand navbar-light bg-light"}>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className={"navbar-nav"}>
          <li className={"nav-item "}>
            <Link className={"nav-link"} to="/">
              Home
            </Link>
          </li>
          <li className={"nav-item "}>
            <Link className={"nav-link"} to="/project">
              Projects
            </Link>
          </li>
          <li className={"nav-item "}>
            <Link className={"nav-link"} to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
