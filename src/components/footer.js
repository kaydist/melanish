import { Link } from "gatsby";
import React from "react";

function Footer() {
  return (
    <div className="between px-body bottom-[3%] absolute w-full small-text font-medium">
      <div>
        <Link to="/list">Index</Link>
      </div>
      <div>05/20</div>
    </div>
  );
}

export default Footer;
