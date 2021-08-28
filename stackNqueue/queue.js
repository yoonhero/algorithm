class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item)
  }
  dequeue() {
    return this._arr.shift()
  }
}

const queue = new Queue();

queue.enqueue(1)
console.log(queue)
// Queue { _arr: [ 1 ] }

queue.enqueue(2)
console.log(queue)
// Queue { _arr: [ 1, 2 ] }

queue.dequeue()
console.log(queue)
// Queue { _arr: [ 2 ] }
