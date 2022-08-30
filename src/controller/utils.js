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
  if (!e) e = window.event || MouseEvent || TouchEvent;
  posx = e.clientX;
  posy = e.clientY;

  return { x: posx, y: posy };
};

export const isMobile = () => {
  return window.innerWidth < 768;
};

export const innerHeight = () => {
  let x = typeof window !== "undefined" ? window.innerHeight : "";
  return x;
};
