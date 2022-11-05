class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);

		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
			this.size++;
			return;
		}

		this.tail.setNext(node);
		node.setPrev(this.tail);
		this.tail = node;
		this.size++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

		const currHead = this.head;
		this.head = currHead.getNext();
		this.size--;

		this.isEmpty() ? this.tail = null : this.head.setPrev(null);

		return currHead;
	}

	isEmpty() {
		return !this.size;
	}

	getSize() {
		return this.size;
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}

	getData() {
		return this.data;
	}

	getNext() {
		return this.next;
	}

	setNext(node) {
		this.next = node;
	}

	getPrev() {
		return this.prev;
	}

	setPrev(node) {
		this.prev = node;
	}
}

export default Queue;
