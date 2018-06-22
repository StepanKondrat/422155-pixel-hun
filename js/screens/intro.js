
import {createScreen, render} from '../logic/utils.js';
import footer from '../page-parts/footer';
import screenGreeting from './greeting.js';
import gameState from '../data/main-data';

const screenIntro = createScreen(`<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>
${footer}`);

const startButton = screenIntro.querySelector(`.intro__asterisk`);


startButton.addEventListener(`click`, () => {
  gameState.clearGame();
  render(screenGreeting);
});

export const startScreen = screenIntro;
export default screenIntro;

