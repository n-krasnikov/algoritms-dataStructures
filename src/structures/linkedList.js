class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.lenght = 0;
    this.tail = null;
    this.head = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.lenght ++
  }

  shift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.lenght ++
  }

  cut(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        if (node === this.head) {
          this.head = node.next
          if (this.head) this.head.prev = null;
        } else if (node === this.tail) {
          this.tail = node.prev;
          if (this.tail) this.tail.next = null;
        } else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        }
        return node;
      }
      node = node.next;
    }
  }

  get(value) {
    let node = this.head;
    while(node) {
      if(node.value === value) return node;
      node = node.next;
    }
    return;
  }

  print() {
    let node = this.head;
    do {
      console.log(node?.value)
      node = node?.next
    } while (node)
  }

}

export default LinkedList;
