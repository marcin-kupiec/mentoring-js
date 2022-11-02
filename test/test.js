import {
  strict as assert
} from 'node:assert';

import List from '../single-linked-list.js';

describe('single linked list', () => {

  describe('append', () => {
    it('should append data to the end of the list', () => {
      const list = new List();
      const data1 = {
        test: true
      };

      list.append(data1);
      assert.deepEqual(list.get(0), data1);

      const data2 = {
        test: false
      };
      list.append(data2);
      assert.deepEqual(list.get(1), data2);
    });
  });

  describe('addAt', () => {
    it('should add data to first position', () => {
      const list = new List();

      list.addAt(0, 5);
      assert.equal(list.get(0), 5);
    });

    it('should add data to last position', () => {
      const list = new List();
      list.append(5);

      list.addAt(1, 6);
      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 6);
    });

    it('should add data to middle position', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      list.addAt(1, 8);
      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 8);
      assert.equal(list.get(2), 6);
      assert.equal(list.get(3), 7);

      list.addAt(2, 9);
      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 8);
      assert.equal(list.get(2), 9);
      assert.equal(list.get(3), 6);
      assert.equal(list.get(4), 7);
    });

    it('should throw error when index exceeds list size', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      assert.throws(() => {
        list.addAt(66, 10)
      }, new Error('list is too short, list size is 3'));
    });
  });

  describe('get', () => {
    it('should get data by id', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 6);
      assert.equal(list.get(2), 7);
      assert.equal(list.get(3), null);
    });

    it('should return null for weird ids', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      assert.equal(list.get(-123), null);
      assert.equal(list.get(123), null);
      assert.equal(list.get('asd'), null);
      assert.equal(list.get(null), null);
      assert.equal(list.get({}), null);
      assert.equal(list.get(undefined), null);
    });
  });

  describe('remove', () => {
    it('should remove first element', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      list.remove(0);
      assert.equal(list.get(0), 6);
      assert.equal(list.get(1), 7);
      assert.equal(list.get(2), null);
    });

    it('should remove middle element', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      list.remove(1);
      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 7);
      assert.equal(list.get(2), null);
    });

    it('should remove last element', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      list.remove(2);
      assert.equal(list.get(0), 5);
      assert.equal(list.get(1), 6);
      assert.equal(list.get(2), null);
    });

    it('should not remove anything if index out of range', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      assert.throws(() => {
        list.remove(22)
      }, new Error('list is too short, list size is 3'));

    });
  });

  describe('contains', () => {
    it('should find element', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append('asd');
      list.append(7);

      assert.equal(list.contains(5), 0);
      assert.equal(list.contains(6), 1);
      assert.equal(list.contains('asd'), 2);
      assert.equal(list.contains(7), 3);
    });

    it('should return -1 if element not found', () => {
      const list = new List();
      list.append(5);
      list.append(6);
      list.append(7);

      assert.equal(list.contains(123), -1);
      assert.equal(list.contains('asd'), -1);
      assert.equal(list.contains({
        a: true
      }), -1);
    });

    it('should return -1 if element not found in epmty list', () => {
      const list = new List();

      assert.equal(list.contains(123), -1);
      assert.equal(list.contains('asd'), -1);
      assert.equal(list.contains({
        a: true
      }), -1);
    });
  });
});
