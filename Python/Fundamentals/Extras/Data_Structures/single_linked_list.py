class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        # Create a new node and add it to the front
        new_node = SLNode(val)
        current_node = self.head # store the current front so we don't lose reference to its
        new_node.next = current_node
        self.head = new_node
        return self

    def add_to_back(self, val):
        # If the head is None then we can add to the front since there's nothing in the list
        if self.head == None:
            self.add_to_front(val)
            return self
        # Create a new node
        new_node = SLNode(val)
        runner = self.head
        # Traverse the list until the end is reached
        while (runner.next != None):
            runner = runner.next
        # Add the new node to the end of the list
        runner.next = new_node
        return self

    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
        return self

if __name__ == "__main__":
    my_list = SList()
    my_list.add_to_front("are").add_to_front("Linked Lists").add_to_back("fun!").print_values()