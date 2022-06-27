import React, { useEffect, useState } from "react";

function Footer({ isListView, setIsListView, totalCount }) {
  const [currentCount, setCurrentCount] = useState(1);

  // const changeCount = () => {
  //   let size = window.innerWidth;
  //   // console.log(size);
  //   window.scrollX > (size * currentCount)
  //     ? setCurrentCount(currentCount + 1)
  //     : setCurrentCount(currentCount);
  // };

  // useEffect(() => {
  //   document.getElementById("portfolio-gallery-view-container").addEventListener("scroll", changeCount);
  // }, []);

  return (
    <div className="between px-body bottom-[3%] absolute w-full small-text font-medium">
      <button
        onClick={() => setIsListView(!isListView)}
        className="cursor-pointer"
      >
        {isListView ? <span>Gallery</span> : <span>List</span>}
      </button>

      <div>
        {currentCount > 9 ? "" + currentCount : "0" + currentCount} /{" "}
        {totalCount > 9 ? "" + totalCount : "0" + totalCount}
      </div>
    </div>
  );
}

export default Footer;
