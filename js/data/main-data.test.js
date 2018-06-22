import {assert} from 'chai';
import gameState from './main-data';

describe(`testing game state mechanics`, () => {
  it(`testing lives`, () => {
    gameState.liveLoss();
    gameState.liveLoss();
    assert.equal(gameState.lives, 1);
  });
  it(`testing lives clear`, () => {
    gameState.clearGame();
    gameState.liveLoss();
    gameState.liveLoss();
    assert.equal(gameState.lives, 1);
  });
  it(`testing array`, () => {
    gameState.answers.push({answer: true, time: 10});
    gameState.answers.push({answer: true, time: 10});
    assert.equal(gameState.answers.length, 2);
  });
  it(`testing array clear`, () => {
    gameState.clearGame();
    assert.equal(gameState.answers.length, 0);
  });

});

