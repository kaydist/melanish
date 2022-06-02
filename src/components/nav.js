import { Link } from "gatsby";
import React from "react";

function Nav() {
  const openMenu=()=>{
    document.getElementById('menu').classList.toggle('hidden')
  }
  return (
    <nav className="fixed w-full z-50 mt-half-body mix-blend-difference">
      <div className="between mx-body">
        <Link to="/contact">
          <div className="cursor-pointer small-text font-medium">Contact</div>
        </Link>

        <Link to="/">
          <div className="text-xl md:text-[2vw] font-bold cursor-pointer relative">
            MELANISH
            <sup className="text-[30%] absolute top-[30%] -right-[10%]">o</sup>
          </div>
        </Link>

        <button className="cursor-pointer small-text font-medium" onClick={openMenu}>Menu</button>
      </div>
    </nav>
  );
}

export default Nav;
