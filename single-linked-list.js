class SLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    let currNode = this.head;
    if (!currNode) {
      this.head = newNode;
      return;
    }

    while (!!currNode.getNext()) {
      currNode = currNode.getNext();
    }

    currNode.setNext(newNode);
  }

  addAt(id, data) {
    if (!this._validateId(id)) {
      return null;
    }

    const newNode = new Node(data);

    if (id === 0) {
      newNode.setNext(this.head);
      this.head = newNode;
      return;
    }

    let currNode = this.head;
    let prevNode = null;

    for (let i = 0; i < id; i++) {
      if (!currNode) {
        throw new Error(`list is too short, list size is ${i}`);
      }

      prevNode = currNode;
      currNode = currNode.getNext();
    }

    prevNode.setNext(newNode);
    newNode.setNext(currNode);
  }

  get(id) {
    if (!this._validateId(id)) {
      return null;
    }

    let currNode = this.head;
    for (let i = 0; i < id; i++) {
      if (!currNode) {
        return null;
      }

      currNode = currNode.getNext();
    }

    return currNode && currNode.data;
  }

  remove(id) {
    if (!this._validateId(id)) {
      return null;
    }

    if (!this.head) {
      return;
    }

    if (id === 0) {
      this.head = this.head.getNext();
      return;
    }

    let currNode = this.head;
    let prevNode = null;
    for (let i = 0; i < id; i++) {
      if (!currNode) {
        throw new Error(`list is too short, list size is ${i}`);
      }

      prevNode = currNode;
      currNode = currNode.getNext();
    }

    if (!currNode) {
      throw new Error(`list is too short, list size is ${i}`);
    }

    prevNode.setNext(currNode.getNext());
  }

  contains(data) {
    let currNode = this.head;
    for (let i = 0;; i++) {
      if (!currNode) {
        return -1;
      }

      if (currNode.data === data) {
        return i;
      }

      currNode = currNode.getNext();
    }
  }

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

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getNext() {
    return this.next;
  }

  setNext(node) {
    this.next = node;
  }
}

export default SLinkedList;
