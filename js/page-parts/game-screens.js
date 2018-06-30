import {gameSets} from '../data/game-sets';
import gameState from '../data/main-data';

const gameScreens = {
  one: {
    header:
    `Угадай, фото или рисунок?`,

    markup:
    `<form class="game__content game-1  game__content--wide">
    <div class="game__option">
    <img src="${gameSets[gameState.screen].gameImages[0]}" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>`},
  two: {
    header:
    `Угадайте для каждого изображения фото или рисунок?`,

    markup:
    `<form class="game__content game-2">
    <div class="game__option">
        <img src="${gameSets[gameState.screen].gameImages[0]}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
        <input  name="question1" type="radio" value="paint">
        <span>Рисунок</span>
        </label>
    </div>
    <div class="game__option">
        <img src="${gameSets[gameState.screen].gameImages[1]}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
        </label>
    </div>
    </form>`
  },
  three: {
    header:
     `Найдите рисунок среди изображений`,

    markup:
    `<form class="game__content game-3  game__content--triple">
    <div class="game__option">
        <img src="${gameSets[gameState.screen].gameImages[0]}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
        <img src="${gameSets[gameState.screen].gameImages[1]}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
        <img src="${gameSets[gameState.screen].gameImages[2]}" alt="Option 1" width="304" height="455">
    </div>
    </form>`
  }

};

export default gameScreens;
