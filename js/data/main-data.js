const TIME_LIMIT = 30;
const MAX_LIVES = 3;
const START_SCREEN = 0;

const gameState = {
  status: `FAIL`,
  screen: 0,
  lives: MAX_LIVES,
  time: TIME_LIMIT,
  answers: [],
  nextScreen() {
    if (this.screen >= 9) {
      return;
    }
    this.screen = ++this.screen;
  },
  liveLoss() {
    this.lives = --this.lives;
  },
  addAnswer(answer) {
    this.answers.push(answer);
  },
  clearGame() {
    this.lives = MAX_LIVES;
    this.answers = [];
    this.screen = START_SCREEN;

  }

};

export default gameState;