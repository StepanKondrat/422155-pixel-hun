const TOTAL_ANSWERS = 10;
const TIME_FAST = 10;
const TIME_SLOW = 20;

const createListOfAnswers = (answers) => {
  if (answers.length === TOTAL_ANSWERS) {
    return answers;
  } else {
    const newAnswers = answers.slice();
    let j = newAnswers.length;
    while (j < TOTAL_ANSWERS) {
      newAnswers.push({
        answer: false,
        time: 0
      });
      j++;
    }
    return newAnswers;
  }

};
const gameAnswers = (givenAnswers) => {
  const completeAnswers = createListOfAnswers(givenAnswers);

  return completeAnswers.map((answer) => {
    if (answer.answer && answer.time < TIME_FAST) {
      return `<li class="stats__result stats__result--fast"></li>`;
    } else if (answer.answer && answer.time > TIME_SLOW) {
      return `<li class="stats__result stats__result--slow"></li>`;
    } else if (answer.answer) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else if (!answer.answer && !answer.time) {
      return `<li class="stats__result stats__result--unknown"></li>`;
    } else {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
  }).join(` `);
};

export default gameAnswers;
