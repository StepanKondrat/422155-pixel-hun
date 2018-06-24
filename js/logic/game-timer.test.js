import {assert} from 'chai';
import GameTimer from './game-timer.js';

let timerIsOver = false;

const callBack = () => {
  timerIsOver = true;
};


describe(`Game Timer`, () => {
  describe(`Checking the type`, () => {
    it(`Should be an Object`, () => {
      const test1 = new GameTimer(15, callBack);
      assert.isObject(test1);
    });
  });
  describe(`Checking the timer itself`, () => {
    it(`Should be 10`, () => {
      const test = new GameTimer(13, callBack);
      test.tick();
      test.tick();
      test.tick();
      assert.equal(test.time, 10);
    });
    it(`Should be 2`, () => {
      const test = new GameTimer(3, callBack);
      test.tick();
      assert.equal(test.time, 2);
    });
    it(`Should be 0`, () => {
      const test = new GameTimer(1, callBack);
      test.tick();
      assert.equal(test.time, 0);
    });
  });
  describe(`Checking callback after the timer is over`, () => {
    it(`Should invoke callback because timer is over`, () => {
      timerIsOver = false;
      const test = new GameTimer(1, callBack);
      test.tick();
      assert.isTrue(timerIsOver);
    });
    it(`Should't invoke callback because timer is not over`, () => {
      timerIsOver = false;
      const test = new GameTimer(51, callBack);
      test.tick();
      assert.isFalse(timerIsOver);
    });
  });

});
