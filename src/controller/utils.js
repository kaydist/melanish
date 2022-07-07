// Preload images
export const preloadImages = (selector = "img") => {
  const imagesLoaded = require("imagesloaded");
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

export const currentCursorPosition = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  posx = e.pageX;
  posy = e.pageY;

  return { x: posx, y: posy };
};


export const isMobile = () => {
  return window.innerWidth < 768;
}