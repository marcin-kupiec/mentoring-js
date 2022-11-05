import {
  strict as assert
} from 'node:assert';

import Stack from '../stack.js';

describe('stack', () => {

  describe('push', () => {
    it('should append data to the top of the stack', () => {
      const stack = new Stack();

      assert.equal(stack.getSize(), 0);
      stack.push(1);
      stack.push(2);
      assert.equal(stack.getSize(), 2);
    });
  });

  describe('pop', () => {
    it('should remove data from the top of the stack', () => {
      const stack = new Stack();
      assert.equal(stack.getSize(), 0);

      stack.push(1);
      stack.push(2);
      stack.push(3);
      assert.equal(stack.getSize(), 3);

      assert.equal(stack.pop().getData(), 3);
      assert.equal(stack.getSize(), 2);

      assert.equal(stack.pop().getData(), 2);
      assert.equal(stack.getSize(), 1);

      assert.equal(stack.pop().getData(), 1);
      assert.equal(stack.getSize(), 0);

      assert.equal(stack.pop(), null);
      assert.equal(stack.getSize(), 0);
    });
  });
});
