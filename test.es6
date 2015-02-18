import assert from 'assert';
import pluck from './';

const obj = {
  name : 'fp-js'
}

const nums = [1,2,3];

it('fp-pluck', () => {
  assert.equal(pluck('name')(obj), 'fp-js');
  assert.equal(pluck('length')(nums), 3);
});
