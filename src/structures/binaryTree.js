import { default as Queue } from './queue'

class TreeNode {
  constructor(value, parent=null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  isRoot() {return (!this.parent)}

  addLeft(value) {
    if (!this.left) {
      const node = new TreeNode(value, this);
      this.left = node;
      return this.left
    }
  }

  addRight(value) {
    if (!this.right) {
      const node = new TreeNode(value, this);
      this.right = node;
      return this.right
    }
  }

  get height() {
    let leftHeight = this.left ? this.left.height + 1 : 1;
    let rightHeight = this.right ? this.right.height + 1 : 1;
    return (leftHeight > rightHeight) ? leftHeight : rightHeight;
  }

  get level() {
    return this.isRoot() ? 0 : this.parent.level + 1;
  }

  get near() {
    return [this.parent?.value, this.left?.value, this.right?.value]
  }

  insert(value) {
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.addRight(value);
        return this.right
      }
    } else {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.addLeft(value);
        return this.left
      }
    }
  }

  travelD() {
    console.log(this.value);
    if (this.left) this.left.travelD();
    if (this.right) this.right.travelD();
  }

  travelB() {
    const queue = new Queue();
    queue.push(this);
    while (queue.length !== 0) {
      const node = queue.pop().value;
      console.log(node.value);
      
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  find(target) {
    if(this.value === target) return this;
    if(target > this.value) {
      if(this.right) return this.right.find(target);
      return null;
    } else {
      if(this.left) return this.left.find(target);
      return null;
    }
  }
}

export default TreeNode;