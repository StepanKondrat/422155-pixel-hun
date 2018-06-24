import {assert} from 'chai';
import specifiScreen from './game-screen-render';

describe(`testing screen switching`, () => {
  it(`should return object`, () => {
    assert.isObject(specifiScreen(0));

  });


});

