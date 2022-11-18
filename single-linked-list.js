// structure to implement list
// should have some properties e.g. to keep track of the list beginning
class SLinkedList {
  constructor() {
    // provide basic variables and initialize them

    //this class should have the address of the first list node - to the head
    let head = null; //initilazing the list first, not adding the comments
    let end = this.head;
  }

  // append function takes one parameter:
  //  * data: type any
  // returns nothing
  // adds new data to the end of the linked list
  append(data) {
    
    if(!head) {
      this.head = new Node(data);
      //end now should point on the new node created
    }
    let node = new Node(data);
    let previous = this.end;
    node.setNext = this.end;
    previous.setNext = node;
    

  }

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

  // contains function takes one parameter:
  //  * data: type any
  // returns index (integer) of the found data, -1 in case data is not found
  contains(data) {}
}

// structure to implement node of the list that keeps data
// should have some properties e.g. data or reference to the next node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  // returns reference to the next node of the list
  getNext() {
    return this.next;
  }

  // sets reference to the next node of the list
  setNext(node) {
    //is this a place to do the check or casting to the proper type to check if we have reference?
    this.next = node.next;
  }
}

export default SLinkedList;
