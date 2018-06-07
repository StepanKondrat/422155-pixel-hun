// Импорт экрана в этот файл прекрасно работает, но появляется "Кольцевая зависимость модулей", убил много времени, но так и не разобрался как этого избежать
import screenRules from '../screens/rules.js';
import {render} from './utils.js';

const getBack = (selector, currentScreen) => {
  const button = currentScreen.querySelector(selector);
  button.addEventListener(`click`, () => {

    render(screenRules);

  });

};

export default getBack;


