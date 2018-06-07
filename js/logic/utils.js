// Не разобрался как в этот модуль что-то импортировать из другого модуля по умолчанию
// При импорте сборка выдает ошибку в консоль "uninitialized variable"
// Поэтому функцию для возврата в начало игры я перенес в отдельный файл get-back-to-start.js
const main = document.querySelector(`main.central`);

export const createScreen = (screen) => {
  const element = document.createElement(`div`);
  element.innerHTML = screen;
  return element;
};
export const render = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);

};

export const checkGameRadio = (inputsArray, nextScreen, currentScreen) => {
  inputsArray.forEach((item) => {
    item.addEventListener(`change`, () => {
      if (item.checked) {
        clearInputs(currentScreen);
        render(nextScreen);
      }
    });
  });
};
export const checkGameClick = (elementsArray, nextScreen) => {
  elementsArray.forEach((item) => {
    item.addEventListener(`click`, () => {
      render(nextScreen);
    });
  });
};
export const clearInputs = (screen) => {
  const itemsArray = Array.from(screen.querySelectorAll(`input`));
  itemsArray.forEach((item) => {
    item.checked = false;
    item.value = ``;
  });
};
