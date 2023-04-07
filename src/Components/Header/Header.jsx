import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-red-200 text-xl py-3">
      <ul className="mx-12">
        <Link className="pr-12 hover:text-fuchsia-400" to="/">
          Home
        </Link>
        <Link className="pr-12 hover:text-fuchsia-400" to="/about">
          About
        </Link>
        <Link className="pr-12 hover:text-fuchsia-400" to="/contact">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
