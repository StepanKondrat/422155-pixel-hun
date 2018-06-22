
export const main = document.querySelector(`main.central`);
export const createScreen = (screen) => {
  const element = document.createElement(`div`);
  element.innerHTML = screen;
  return element;
};

