// structure to implement list
// should have some properties e.g. to keep track of the list beginning
class DLinkedList {
  constructor() {}

  // append function takes one parameter:
  //  * data: type any
  // returns nothing
  // adds new data to the end of the linked list
  append(data) {}

  // addAt function takes two parameters:
  //  * id: type integer (index where to insert new data)
  //  * data: type any
  // returns nothing
  // adds new data at the specified position of the linked list
  // throws error if id is bigger than list size
  addAt(id, data) {}

  // get function takes one parameter:
  //  * id: type integer
  // returns data kept at id position, returns null with id is bigger than list size
  get(id) {}

  // remove function takes one parameter:
  //  * id: type integer (index of the node to remove)
  // returns nothing
  // removes node from the specified position of the linked list
  // throws error if id is bigger than list size
  remove(id) {}

  // removeNode function takes one parameter:
  //  * node: type Node
  // returns nothing
  // removes given node from the list (should be implementedd without any loop)
  removeNode(node) {}

  // contains function takes one parameter:
  //  * data: type any
  // returns index (integer) of the found data, -1 in case data is not found
  contains(data) {}

  _validateId(id) {
    if (isNaN(id) || id === null) {
      return false;
    }

    if (id < 0) {
      return false;
    }

    return true;
  }
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

export default DLinkedList;
