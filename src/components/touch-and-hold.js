import React from "react";

export default function TouchAndHold({ className, ...rest }) {
  return (
    <div
      className={`text-xs font-bold no-select touch-action border-2 border-color w-24 h-24 center text-center text-muted-class rounded-full bottom-body left-body lg:hidden ${className}`}
      {...rest}
    >
      Touch <br />& <br /> Hold
    </div>
  );
}
