const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.queue == null) {
      this.queue = newNode;
    }
    else {
      let curr = this.queue;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  dequeue() {
    if (this.queue == null) return undefined;
    let firstNode = this.queue;
    this.queue = this.queue.next;
    return firstNode.value;
  }

}
