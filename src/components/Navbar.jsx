import Link from "next/link";
import React from "react";
import "../style/navbar.css";
import Search from "./clients/search";

const Navbar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </nav>
      <Search />
    </header>
  );
};

export default Navbar;
