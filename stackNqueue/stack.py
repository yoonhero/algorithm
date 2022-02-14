from re import S
from turtle import st


class Stack():
    def __init__(self):
        self.arr = []

    def push(self, data):
        self.arr.append(data)

    def pop(self):
        self.arr.pop()


if __name__ == '__main__':
    stack = Stack()

    stack.push(4)
    stack.push(5)
    stack.push(2)
    stack.push(1)

    print(stack.arr)

    stack.pop()

    print(stack.arr)
