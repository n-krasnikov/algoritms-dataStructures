class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.lenght = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.lenght === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.lenght ++;
  }

  pop() {
    const node = this.head;
    this.head = node.next;
    return node;
  }

  print() {
    let current = this.head;
    do {
      console.log(current?.value);
      current = current?.next;
    } while (current)
  }

}

export default Queue;