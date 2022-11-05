// structure to implement stack
// should have some properties e.g. to keep track of the stack top element or stack size
class Stack {
  constructor() {}

  // push function takes one parameter:
  //  * data: type any
  // returns nothing
  // adds new data to the top of the stack
  push(data) {}

  // pop function takes no parameters
  // returns node from the top, null in case stack is empty
  pop() {}

  // getSize function takes no parameters
  // returns current size of the stack
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

export default Stack;
