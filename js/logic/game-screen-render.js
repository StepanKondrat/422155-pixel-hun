import {gameSets} from '../data/game-sets';
import gameScreens from '../screens/game-screens';


const specifiScreen = (screenNumber) => {
  const screen = gameSets[screenNumber];
  switch (screen.gameType) {
    case `one`:
      return gameScreens.one;
    case `two`:
      return gameScreens.two;
    case `three`:
      return gameScreens.three;
  }
  return gameScreens.one;
};

export default specifiScreen;
