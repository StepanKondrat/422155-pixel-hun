import getBack from '../logic/get-back-to-start-btn.js';
import {clearInputs, createScreen, render} from '../logic/utils.js';
import footer from '../page-parts/footer';
import headerTemplate from '../page-parts/header';
import {screenGameOne, renderGameScreen} from './game-1.js';
import gameState from '../data/main-data';
import specifiScreen from '../logic/game-screen-render';

const screenRules = createScreen(`
<header class="header>${headerTemplate.empty}</header>
<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>  
${footer}`);


getBack(`.back`, screenRules);
const nameInput = screenRules.querySelector(`.rules__input`);
const playButton = screenRules.querySelector(`.rules__button`);
const rulesForm = screenRules.querySelector(`.rules__form`);

nameInput.addEventListener(`input`, () => {
  if (nameInput.value !== ``) {
    playButton.removeAttribute(`disabled`);
  } else {
    playButton.setAttribute(`disabled`, ``);
  }
});
rulesForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  clearInputs(screenRules);
  gameState.clearGame();
  render(screenGameOne);
  renderGameScreen(specifiScreen(gameState.screen));


});

export default screenRules;
