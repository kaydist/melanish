import { Link } from "gatsby";
import React, { useState } from "react";
import { navigate } from "gatsby";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
    setMenuOpen(!menuOpen);
  };

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className="fixed w-full z-50 mt-half-body text-white mix-blend-difference grid grid-flow-col px-body">
      <div className="cursor-pointer small-text font-medium col-span-1 start">
        {path === "/" || path === "/portfolio" ? (
          <Link to="/contact">Contact</Link>
        ) : (
          <span onClick={() => navigate(-1)}>Back </span>
        )}
      </div>

      <div className="col-span-2 center">
        <Link to="/">
          <div className="text-xl md:text-[2vw] font-bold cursor-pointer relative">
            MELANISH
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </div>
        </Link>
      </div>

      <div className="col-span-1 end">
        <button
          className="cursor-pointer small-text font-medium"
          onClick={openMenu}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
