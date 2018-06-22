
const NUMBER_OF_GAMES = 10;
const BONUS_FOR_LIFE = 50;
const pointsCounter = (array, livesLeft) => {

  if (array.length !== NUMBER_OF_GAMES) {
    return -1;
  }

  let points = array.reduce((sumOfPoints, item) => {
    if (item.answer === true) {
      sumOfPoints += 100;
    }
    if (item.time <= 10) {
      sumOfPoints += 50;
    }
    if (item.time > 20) {
      sumOfPoints -= 50;
    }
    return sumOfPoints;


  }, 0);
  return (BONUS_FOR_LIFE * livesLeft) + points;

};

export default pointsCounter;
