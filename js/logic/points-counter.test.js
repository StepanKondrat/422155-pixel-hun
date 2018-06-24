import {assert} from 'chai';
import pointsCounter from './points-counter.js';


const arrayOfAnswers1 = [
  {answer: true, time: 20},
  {answer: false, time: 10},
  {answer: false, time: 26},
  {answer: true, time: 21},
  {answer: false, time: 10},
  {answer: true, time: 5},
  {answer: true, time: 11},
  {answer: false, time: 32},
  {answer: true, time: 4},
  {answer: true, time: 22}
];
const arrayOfAnswers2 = [
  {answer: true, time: 20},
  {answer: false, time: 10},
  {answer: false, time: 26},
  {answer: true, time: 21},
  {answer: false, time: 10},
  {answer: true, time: 5},
  {answer: true, time: 11},
  {answer: false, time: 32},
  {answer: true, time: 22}
];
const arrayOfAnswers3 = [
  {answer: false, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 15},
  {answer: true, time: 7},
  {answer: true, time: 14},
  {answer: true, time: 19},
  {answer: false, time: 23},
  {answer: true, time: 40},
  {answer: true, time: 30},
  {answer: true, time: 9}
];
const arrayOfAnswers4 = [
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15},
  {answer: true, time: 15}
];


describe(`Points counter`, () => {
  describe(`Function should retun value of points`, () => {
    it(`Should return 600 points`, () => {
      assert.equal(pointsCounter(arrayOfAnswers1, 0), 600);
    });
    it(`Should return -1 points`, () => {
      assert.equal(pointsCounter(arrayOfAnswers2, 3), -1);
    });
    it(`Should return 850 points`, () => {
      assert.equal(pointsCounter(arrayOfAnswers3, 1), 850);
    });
    it(`Should return 1150 points`, () => {
      assert.equal(pointsCounter(arrayOfAnswers4, 3), 1150);
    });
  });
});
