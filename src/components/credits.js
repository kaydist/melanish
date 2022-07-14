import React from "react";

export default function Credits({ CreditsOpen, toggleCredits }) {
  return (
    <div className="credits hidden fixed top-0 z-[49]" id="credits">
      <div className="w-screen min-h-screen col-center bg-transparent dark:text-[#030303] text-[#FFFFFF] px-body">
        <div className="animated-text vertical-anim">
          Kay - Development and Art Direction
        </div>
        <div className="animated-text vertical-anim">Goke - UI Design</div>

        <div className="mt-24">
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
