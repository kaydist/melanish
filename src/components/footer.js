import React from "react";

function Footer({ isListView, setIsListView, totalCount }) {
  return (
    <div className="between px-body bottom-[3%] absolute w-full small-text font-medium">
      <div
        onClick={() => setIsListView(!isListView)}
        className="cursor-pointer"
      >
        {isListView ? <span>Gallery</span> : <span>List</span>}
      </div>

      <div>05/{totalCount > 9 ? "" + totalCount : "0" + totalCount}</div>
    </div>
  );
}

export default Footer;
