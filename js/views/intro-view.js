import AbstractView from "./abstract-view";
import footer from "../page-parts/footer";
import gameState from "../data/main-data";
import {render} from "../logic/utils";
import screenGreeting from "./greeting-view";

class IntroView extends AbstractView {
  constructor() {
    super();
    this._template = () => {
      return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </div>
    ${footer}`;
    };
  }
  bind() {
    const element = this.element;
    const startButton = element.querySelector(`.intro__asterisk`);
    startButton.addEventListener(`click`, () => {
      gameState.clearGame();
      render(screenGreeting.element);
    });
  }
}

const screenIntro = new IntroView();

export default screenIntro;
