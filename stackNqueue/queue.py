class Queue():
    def __init__(self):
        self.arr = []

    def offer(self, data):
        self.arr.append(data)

    def poll(self):
        self.arr = self.arr[1:]

    def data(self):
        return self.arr


if __name__ == '__main__':
    queue = Queue()

    queue.offer(3)
    queue.offer(5)
    queue.poll()

    print(queue.data())
