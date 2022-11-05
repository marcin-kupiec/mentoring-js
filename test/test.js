import { strict as assert } from 'node:assert';

import Queue from '../queue.js';

describe('queue', () => {

	describe('enqueue', () => {
		it('should enqueue data to the end of the queue', () => {
			const queue = new Queue();
			assert.equal(queue.getSize(), 0);
			assert.equal(queue.isEmpty(), true);

			queue.enqueue(1);
			queue.enqueue(2);
			assert.equal(queue.getSize(), 2);
			assert.equal(queue.isEmpty(), false);
		});
	});

	describe('dequeue', () => {
		it('should dequeue data from the beginning of the queue', () => {
			const queue = new Queue();
			assert.equal(queue.getSize(), 0);
			assert.equal(queue.isEmpty(), true);

			queue.enqueue(1);
			queue.enqueue(2);
			queue.enqueue(3);
			assert.equal(queue.getSize(), 3);
			assert.equal(queue.isEmpty(), false);

			assert.equal(queue.dequeue().getData(), 1);
			assert.equal(queue.getSize(), 2);

			assert.equal(queue.dequeue().getData(), 2);
			assert.equal(queue.getSize(), 1);

			assert.equal(queue.dequeue().getData(), 3);
			assert.equal(queue.getSize(), 0);
			assert.equal(queue.isEmpty(), true);

			assert.equal(queue.dequeue(), null);
			assert.equal(queue.getSize(), 0);
			assert.equal(queue.isEmpty(), true);
		});
	});

	it('should enqueue and dequeue', () => {
		const queue = new Queue();
		assert.equal(queue.getSize(), 0);
		assert.equal(queue.isEmpty(), true);

		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		assert.equal(queue.dequeue().getData(), 1);

		queue.enqueue(4);
		queue.enqueue(5);
		assert.equal(queue.dequeue().getData(), 2);
		assert.equal(queue.dequeue().getData(), 3);

		queue.enqueue(6);
		assert.equal(queue.dequeue().getData(), 4);
		assert.equal(queue.dequeue().getData(), 5);
		assert.equal(queue.dequeue().getData(), 6);
		assert.equal(queue.dequeue(), null);
	});
});
