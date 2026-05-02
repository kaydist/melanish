import React from "react";

export default function Credits({ CreditsOpen, toggleCredits }) {
  return (
    <div className="credits hidden fixed top-0 z-[49]" id="credits">
      <div className="w-screen min-h-screen col-center bg-transparent dark:text-[#030303] text-[#FFFFFF] px-body text-center space-y-3">
        <div className="animated-text vertical-anim">
          Kay — Development and Art Direction
        </div>
        <div className="animated-text vertical-anim">
          Coffee — Executive Producer
        </div>
        <div className="animated-text vertical-anim">
          Stack Overflow — Senior Architectural Consultant
        </div>
        <div className="animated-text vertical-anim">
          console.log — Lead Detective
        </div>
        <div className="animated-text vertical-anim">
          Pexels, Unsplash &amp; FreeStock — Talent Agency
        </div>
        <div className="animated-text vertical-anim">
          Tomorrow-Me — Project Manager (currently unreachable)
        </div>
        <div className="animated-text vertical-anim">
          The Cat — Quality Assurance
        </div>
        <div className="animated-text vertical-anim">
          Sleep — Visiting Consultant (rare appearance)
        </div>

        <div className="!mt-24">
          <button
            className="menu-link relative underline decoration-dotted underline-offset-2"
            onClick={toggleCredits}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
