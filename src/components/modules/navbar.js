import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ match }) => {
  const { url } = match;

  if (url === "/") {
    return (
      <section id="Navbar">
        <a href="https://github.com/brandjones"> Github </a>
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
