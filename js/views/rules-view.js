import AbstractView from "./abstract-view";
import footer from "../page-parts/footer";
import gameState from "../data/main-data";
import {render} from "../logic/utils";
import screenGame from "./game-view";
import headerTemplate from "../page-parts/header";
import {clearInputs} from "../logic/utils";
import getBack from '../logic/get-back-to-start-btn';

class RulesView extends AbstractView {
  constructor() {
    super();
    this._template = () => {
      const markup = `
      <header class="header">${headerTemplate.empty}</header>
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
      ${footer}`;
      return markup;
    };
  }
  bind() {
    const element = this.element;
    const nameInput = element.querySelector(`.rules__input`);
    const playButton = element.querySelector(`.rules__button`);
    const rulesForm = element.querySelector(`.rules__form`);
    getBack(element);
    nameInput.addEventListener(`input`, () => {
      if (nameInput.value !== ``) {
        playButton.removeAttribute(`disabled`);
      } else {
        playButton.setAttribute(`disabled`, ``);
      }
    });
    rulesForm.addEventListener(`submit`, (event) => {
      event.preventDefault();
      clearInputs(screenRules.element);
      gameState.clearGame();
      render(screenGame.element);
    });
  }
}

const screenRules = new RulesView();

export default screenRules;
