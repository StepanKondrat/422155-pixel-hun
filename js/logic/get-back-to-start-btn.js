
import screenGreeting from '../views/greeting-view';
import {render, clearInputs} from './utils';

const getBack = (currentScreen) => {
  const button = currentScreen.querySelector(`.back`);
  button.addEventListener(`click`, () => {
    clearInputs(currentScreen);
    render(screenGreeting.element);

  });

};

export default getBack;


