'use strict';
// Собираем все <template> в массив и кладём в его переменную templatesArray
const main = document.querySelector(`main.central`);
const templatesArray = Array.prototype.slice.call(
    document.querySelectorAll(`body template`)
);
let currentScreen = 0; // Переменная-счетчик в которой хранится номер экрана, долго думал как можно обойтись без неё, но так и ничего не придумал
// Декларируем фунцию которая будет показывать экран в зависимости от пререданого в нее целого числового аргумента
const showScreen = (screenNumber = 0) => {
  if (screenNumber < 0 || screenNumber >= templatesArray.length) {
    return;
  }
  // Удаляем всё содержимое внутри тега <main>
  while (main.firstChild) {
    main.firstChild.remove();
  }
  const screen = templatesArray[screenNumber].content.cloneNode(true);// Создаем копию внутринностей необходимого темплейта
  main.appendChild(screen);// Записываем внутринности необходимого темплейта во внутрь елемента main
};

showScreen(currentScreen);// Вызываем функцию для первого экрана

const arrowRight = `->`;
const arrowLeft = `<-`;
// Добавляем кнопки для переключения экрана в интерфейсе
const arrowWrapper = document.createElement(`div`);
arrowWrapper.className = `arrows__wrap`;
arrowWrapper.innerHTML = `  <style>
    .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
    }
    .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
    }
    </style>
    <button class="arrows__btn">${arrowLeft}</button>
    <button class="arrows__btn">${arrowRight}</button>`;
document.body.appendChild(arrowWrapper);
// Декларируем функцию которая будет "колбэком" и используем событие в качестве аргумента чтобы переключать экраны в зависимости от полученого события
const switchScreen = (event) => {
  if (event.code === `ArrowRight` || event.target.innerText === arrowRight) {
    showScreen(++currentScreen);
  }
  if (event.code === `ArrowLeft` || event.target.innerText === arrowLeft) {
    showScreen(--currentScreen);
  }
};
// На документ вешаем слушатели события "Клик" и "Нажатие клавиши" и добавляем в "колбэк" функцию которая будет переключать экраны
document.addEventListener(`keydown`, (event) => {
  switchScreen(event);
});
document.addEventListener(`click`, (event) => {
  switchScreen(event);
});
