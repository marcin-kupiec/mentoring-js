// structure to implement queue
// should have some properties e.g. to keep track of the queue beginning, end, size
// queue is a FIFO (First In First Out) buffer
class Queue {
	constructor() {}

	// enqueue function takes one parameter:
	//  * data: type any
	// returns nothing
	// adds new data to the end of the queue
	enqueue(data) {}

	// dequeue function takes no parameters
	// removes and returns node from the beginning, null in case queue is empty
	dequeue() {}

	// isEmpty function takes no parameters
	// returns true if queue is empty, false otherwise
	isEmpty() {}

	// getSize function takes no parameters
	// returns current size of the queue
	getSize() {}
}

// structure to implement node of the list that keeps data
// should have some properties e.g. data or reference to the next, previous node
class Node {
	constructor(data) {}

	// returns data kept by the node
	getData() {}

	// returns reference to the next node of the list
	getNext() {}

	// sets reference to the next node of the list
	setNext(node) {}

	// returns reference to the previous node of the list
	getPrev() {}

	// sets reference to the previous node of the list
	setPrev(node) {}
}

export default Queue;
