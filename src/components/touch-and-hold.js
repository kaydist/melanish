import React from "react";

export default function TouchAndHold({ className, ...rest }) {
  return (
    <div
      className={`text-xs font-bold no-select touch-action border-2 border-color w-24 h-24 center text-center text-muted-class rounded-full bottom-body left-body lg:hidden ${className}`}
      {...rest}
    >
      <svg
        className="hold-progress-ring pointer-events-none absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 96 96"
        aria-hidden="true"
      >
        <circle
          className="hold-progress-ring__circle"
          cx="48"
          cy="48"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative">
        Touch <br />& <br /> Hold
      </span>
    </div>
  );
}
