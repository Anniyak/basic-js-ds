const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class MyNode {
  constructor(data) {
    this.data = data; // node value
    this.left = null;   // left node child reference
    this.right = null; // right node child reference
  }
}
module.exports = class BinarySearchTree {
  //mainNode: MyNode;
  constructor() {
    this.mainNode = null;
  }



  root() {
    return this.mainNode;
  }

  add(data) {
    let newNode = new MyNode(data);
    if (this.mainNode === null) {
      this.mainNode = newNode;
    } else {
      this.insertNode(this.mainNode, newNode); // helper method below
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  has(data) {
    return this.find(data) != null;
  }

  find(data, node = this.mainNode) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data) {
    this.mainNode = this.removeNode(this.mainNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.findExtremumNode(node.right, 'min');
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    return this.findExtremumNode(this.mainNode, 'min').data;
  }
  findExtremumNode(node, extremum) {
    if ((node.left === null && extremum == 'min') || (node.right === null && extremum == 'max'))
      return node;
    else
      return this.findExtremumNode(extremum == 'min' ? node.left : node.right, extremum);
  }

  max() {
    return this.findExtremumNode(this.mainNode, 'max').data;
  }

}