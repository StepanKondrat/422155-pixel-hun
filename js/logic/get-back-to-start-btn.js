// Импорт экрана в этот файл прекрасно работает, но появляется "Кольцевая зависимость модулей", убил много времени, но так и не разобрался как этого избежать
import screenGreeting from '../screens/greeting.js';
import {render, clearInputs} from './utils.js';


const getBack = (selector, currentScreen) => {
  const button = currentScreen.querySelector(selector);

  button.addEventListener(`click`, () => {
    clearInputs(currentScreen);
    render(screenGreeting);

  });

};

export default getBack;


