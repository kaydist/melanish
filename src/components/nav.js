import { Link } from "gatsby";
import React, { useState } from "react";
import { navigate } from "gatsby";
import Menu from "./menu";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <>
      <nav className="fixed w-full z-50 mt-body md:mt-half-body text-white mix-blend-difference grid grid-flow-col px-body no-select">
        <div className="cursor-pointer small-text font-medium col-span-1 start">
          {path === "/" || path === "/portfolio" ? (
            <Link to="/contact">Contact</Link>
          ) : path === "/contact" ? (
            <Link to="/portfolio">Gallery</Link>
          ) : (
            <button onClick={() => navigate(-1)}>Back</button>
          )}
        </div>

        <div className="col-span-2 center">
          <Link to="/">
            <div className="text-2xl md:text-[2vw] font-bold cursor-pointer relative">
              MELANISH
              <sup className="text-[30%] absolute top-[30%] -right-[10%]">
                o
              </sup>
            </div>
          </Link>
        </div>

        <div className="col-span-1 end">
          <button
            className="cursor-pointer small-text font-medium"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Nav;
