import React, { useEffect, useState } from "react";

export default function HoldProgressCursor() {
  const [state, setState] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const onStart = (e) => {
      const { x, y } = e.detail || {};
      if (typeof x !== "number" || typeof y !== "number") return;
      setState({ x, y, active: true });
    };
    const onEnd = () => setState((prev) => ({ ...prev, active: false }));

    window.addEventListener("hold:start", onStart);
    window.addEventListener("hold:end", onEnd);
    return () => {
      window.removeEventListener("hold:start", onStart);
      window.removeEventListener("hold:end", onEnd);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`hold-progress-cursor pointer-events-none fixed z-[9999] hidden lg:block ${
        state.active ? "is-holding" : ""
      }`}
      style={{
        left: state.x,
        top: state.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        className="-rotate-90 mix-blend-difference"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          className="hold-progress-cursor__circle"
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
