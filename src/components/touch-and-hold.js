import React from "react";

export default function TouchAndHold({ ...rest }) {
  return (
    <div
      className="text-xs font-light no-select touch-action border border-color w-24 h-24 center text-center text-muted-class rounded-full absolute bottom-body left-body lg:hidden"
      {...rest}
    >
      Touch <br />& <br /> Hold
    </div>
  );
}
