/* eslint-disable no-mixed-spaces-and-tabs */
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    enqueue(data) {
		const node = new _Node(data);
        this.length += 1;

		if (this.first === null) {
			this.first = node;
		}

		if (this.last) {
			this.last.next = node;
		}
		//make the new node the last item on the queue
		this.last = node;
    }
    dequeue() {
        this.length -= 1;
		//if the queue is empty, there is nothing to return
	   if (this.first === null) {
		   return;
	   }
	   const node = this.first;
	   this.first = this.first.next;
		//if this is the last item in the queue
	   if (node === this.last) {
		   this.last = null;
	   }
	   return node.value;
   }
}

module.exports = Queue;