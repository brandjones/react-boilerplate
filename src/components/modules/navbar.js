import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ match }) => {
  const { url } = match;

  if (url === "/") {
    return (
      <section id="Navbar">
        <a> Github </a>
        <a> Medium </a>
      </section>
    );
  }

  return (
    <section id="Navbar" className="change-background">
      <Link to="/"> Home </Link>
    </section>
  );
};

export default NavBar;
