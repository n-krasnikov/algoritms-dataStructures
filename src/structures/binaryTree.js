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
        this.right = new TreeNode(value, this);
      }
    } else {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new TreeNode(value, this);
      }
    }
  }

  travel() {
    console.log(this.value)
    if (this.left) this.left.travel();
    if (this.right) this.right.travel();
  }

}

export default TreeNode;