import React, { useLayoutEffect, useState } from "react";

function Footer({ isListView, setIsListView, totalCount }) {
  const [currentCount, setCurrentCount] = useState(1);

  useLayoutEffect(() => {
    const container = document.getElementById(
      "portfolio-gallery-view-container"
    );
    const imageWidth = window.outerWidth;

    container.addEventListener("scroll", () => {
      const scrollLeft = container.scrollLeft;
      const currentIndex = Math.floor(scrollLeft / imageWidth);
      setCurrentCount(currentIndex + 1);
    });
  }, []);

  return (
    <div className="between px-body bottom-[3%] fixed w-full small-text font-bold">
      <button
        onClick={() => setIsListView(!isListView)}
        className="cursor-pointer"
      >
        {isListView ? (
          <span className="font-bold">Gallery</span>
        ) : (
          <span className="font-bold">List</span>
        )}
      </button>

      <div>
        <span className="">
          {currentCount > 9 ? "" + currentCount : "0" + currentCount}
        </span>
        / {totalCount > 9 ? "" + totalCount : "0" + totalCount}
      </div>
    </div>
  );
}

export default Footer;
