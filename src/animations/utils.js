export const currentCursorPosition = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  posx = e.clientX;
  posy = e.clientY;

  return { x: posx, y: posy };
};
