class Node():
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList():
    def __init__(self, first):
        node = Node(first)
        self.head = node
        self.tail = node

        self.current = None
        self.before = None

        self.num_of_data = 0

    def append(self, data):
        new_node = Node(data)

        self.tail.next = new_node
        self.tail = new_node

        self.num_of_data += 1

    def delete(self):
        pop_data = self.current.data

        if self.current is self.tail:
            self.tail = self.before

        self.before.next = self.current.next
        self.current = self.before

        self.num_of_data -= 1

        return pop_data

    def first(self):
        if self.num_of_data == 0:
            return None

        self.before = None
        self.current = self.head

        return self.current.data

    def next(self):
        if self.current.next == None:
            return None

        self.before = self.current
        self.current = self.current.next

        return self.current.data

    def size(self):
        return self.num_of_data


if __name__ == '__main__':
    linkedLi = LinkedList(3)

    linkedLi.append(1)
    linkedLi.append(4)
    linkedLi.append(5)
    linkedLi.first()

    while True:
        item = linkedLi.next()
        if item == None:
            break
        elif item == 4:
            linkedLi.delete()
        else:
            print(item)

    while True:
        item = linkedLi.next()
        if item == None:
            break

        print(item)
