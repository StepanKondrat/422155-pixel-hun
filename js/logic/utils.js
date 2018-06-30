export const main = document.querySelector(`main.central`);


export const render = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);

};


export const clearInputs = (screen) => {
  const itemsArray = Array.from(screen.querySelectorAll(`input`));
  itemsArray.forEach((item) => {
    item.checked = false;
    item.value = ``;
  });
};
