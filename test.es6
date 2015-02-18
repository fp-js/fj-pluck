import assert from 'assert';
import pluck from './';

const obj = {
  name : 'fj-js'
}

const nums = [1,2,3];

it('fj-pluck', () => {
  assert.equal(pluck('name')(obj), 'fj-js');
  assert.equal(pluck('length')(nums), 3);
});
