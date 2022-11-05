import { strict as assert } from 'node:assert';

import HashMap from '../hashmap.js';

describe('hashmap', () => {

	describe('get', () => {
		it('should get null if key not found', () => {
			const map = new HashMap();
			assert.equal(map.get('asd'), null);
		});
	});

	describe('add', () => {
		it('should add data to the map by key', () => {
			const map = new HashMap();

			const key1 = 'test-1';
			const value1 = { test: true };

			map.add(key1, value1);
			assert.equal(map.get(key1), value1);

			const key2 = 'test-2';
			const value2 = { test: false };
			map.add(key2, value2);
			assert.equal(map.get(key2), value2);
		});

		xit('should add data to the map by key that generate same hash', () => {
			const map = new HashMap();

			const key1 = 'test-1';
			const value1 = { test: true };
			map.add(key1, value1);
			assert.equal(map.get(key1), value1);

			const key2 = 'tset-1';
			const value2 = { test: false };
			map.add(key2, value2);
			assert.equal(map.get(key2), value2);
			assert.equal(map.get(key1), value1);
		});
	});

	describe('remove', () => {
		it('should remove data from the map', () => {
			const map = new HashMap();

			const key1 = 'test-1';
			const value1 = { test: true };
			const key2 = 'test-2';
			const value2 = { test: false };

			map.add(key1, value1);
			map.add(key2, value2);
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), value2);

			map.remove(key2);
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), null);

			map.remove(key1);
			assert.equal(map.get(key1), null);
			assert.equal(map.get(key2), null);
		});

		xit('should remove data from the map if keys have same hash', () => {
			const map = new HashMap();

			const key1 = 'test-1';
			const value1 = { test: true };
			const key2 = 'tset-1';
			const value2 = { test: false };

			map.add(key1, value1);
			map.add(key2, value2);
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), value2);

			map.remove(key2);
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), null);

			map.remove(key1);
			assert.equal(map.get(key1), null);
			assert.equal(map.get(key2), null);
		});

		it('should not remove data from the map if key not found', () => {
			const map = new HashMap();

			const key1 = 'test-1';
			const value1 = { test: true };
			const key2 = 'test-2';
			const value2 = { test: false };

			map.add(key1, value1);
			map.add(key2, value2);
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), value2);

			map.remove('asd');
			assert.equal(map.get(key1), value1);
			assert.equal(map.get(key2), value2);
		});
	});
});
