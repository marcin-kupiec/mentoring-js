class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.size) {
      this.top = node;
      this.size++;
      return;
    }

    node.setPrev(this.top);
    this.top = node;
    this.size++;
  }

  pop() {
    if (!this.size) {
      return null;
    }

    const currTop = this.top;
    this.top = currTop.getPrev();
    this.size--;

    return currTop;
  }

  getSize() {
    return this.size;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }

  getData() {
    return this.data;
  }

  getPrev() {
    return this.prev;
  }

  setPrev(node) {
    this.prev = node;
  }
}

export default Stack;
