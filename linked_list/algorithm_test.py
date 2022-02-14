class Node():
    def __init__(self, data):
        self.val = data
        self.next = None
    
class LinkedList():
    def __init__(self, head):
        head = Node(head)
        self.head = head
        self.tail = head
        
        self.current = None
        self.before = None
    
    def append(self, data):
        new_node = Node(data)
        self.tail.next = new_node
        self.tail = new_node
        
    def first(self):
        self.before = None
        self.current = self.head
        
    
    def currentVal(self):
        return self.current.val
    
    def next(self):
        if self.current.next == None:
            return None
        
        self.before = self.current
        self.current = self.current.next
        return self.current.val

def solution(skill, skill_trees):
    answer = 0
    
    skill_linked_li = LinkedList(skill[0])
    
    for start in range(1,len(skill)):
        skill_linked_li.append(skill[start])
        # if start == len(skill) - 1:
        #     skill_linked_li[skill[start]] = []
        # for target in range(start+1,len(skill)):
        #     try:
        #         skill_linked_li[skill[start]].append(skill[target])
        #     except:
        #         skill_linked_li[skill[start]] = [skill[target]]
    
    
    skill_linked_li.first()
    
    for sk in skill_trees:
        cleaned_skill = [(s) for s in sk if s in skill]
        for s in range(len(cleaned_skill)):
            if cleaned_skill[s] == skill_linked_li.currentVal():
                skill_linked_li.next()
            else:
                answer -= 1
                break
        skill_linked_li.first()
        answer += 1
        
    return answer
print(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]))