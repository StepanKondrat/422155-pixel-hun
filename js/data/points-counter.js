
const NUMBER_OF_GAMES = 10;
const BONUS_FOR_LIFE = 50;
const pointsCounter = (array, livesLeft) => {

  if (array.length !== NUMBER_OF_GAMES) {
    return -1;
  }
  let ourPoints = 0;
  array.forEach((item) => {
    if (item.answer === true) {
      ourPoints += 100;
    }
    if (item.time <= 10) {
      ourPoints += 50;
    }
    if (item.time > 20) {
      ourPoints -= 50;
    }

  });
  return (BONUS_FOR_LIFE * livesLeft) + ourPoints;

};

export default pointsCounter;
