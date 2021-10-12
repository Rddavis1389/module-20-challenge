import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h2>
        <Link to="/">Randolph Davis</Link>
      </h2>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Header;
