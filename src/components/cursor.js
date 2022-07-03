import React, { useContext, useEffect, useLayoutEffect, useMemo } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { AppContext } from "../controller/context";
MouseFollower.registerGSAP(gsap);

export default function Cursor() {
  const [pageChange, setPageChange] = useContext(AppContext);

  const cursor = new MouseFollower({
    stateDetection: {
      "-link-pointer": "a, button",
    },
  });


  return <div className="cursor-element" />;
}
