class Stack {
  constructor() {
    this._arr = []
  }
  push(item) {
    this._arr.push(item)
  }
  pop() {
    return this._arr.pop()
  }
  peek() {
    return this._arr[this._arr.length - 1]
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
// Stack { _arr: [ 1, 2, 3 ] }

stack.pop()
console.log(stack)
// Stack { _arr: [ 1, 2 ] }

console.log(stack.peek())
// 2