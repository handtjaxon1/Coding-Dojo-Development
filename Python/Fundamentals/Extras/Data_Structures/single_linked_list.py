class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        current = self.head
        # If there are no values, then alert us to that
        if current == None:
            print("No values in the list.")
            return self
        # Traverse the list and print all values
        while current != None:
            print(current.value)
            current = current.next
        return self

    def add_to_front(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        return self

    def add_to_back(self, value):
        current = self.head
        # If no current head node then simply add the node to the front.
        if current == None:
            self.add_to_front(value)
            return self
        # Traverse the list until there are no more "next" nodes (effectually finding the end of the list)
        while current.next != None:
            current = current.next
        # Create the new node and make the last node point to it
        new_node = Node(value)
        current.next = new_node
        return self

    def insert_after(self, after_val, new_val):
        current = self.head
        # No current nodes in the list so simply add the new_val as a new node
        if current == None:
            self.add_to_front(new_val)
            return self
        # Traverse the list
        while current.next != None:
            # If a node has data that matches what we're looking for, then add the node after that node and exit
            if current.value == after_val:
                new_node = Node(new_val)
                new_node.next = current.next
                current.next = new_node
                return self
            current = current.next
        # No node found with matching value, so just add new node to the end
        new_node = Node(new_val)
        current.next = new_node
        return self

    def remove_from_front(self):
        # No current nodes in the list, so don't delete anything
        if self.head == None:
            print("No data in the list, so nothing to remove.")
            return self
        # Store the head's next node and reassign it to the head node. Effectually deleletes the head node since there's no longer a reference to the node it previously referred to
        next = self.head.next
        self.head = next
        return self

    def remove_from_back(self):
        current = self.head
        # No current nodes so there aren't any to remove
        if current == None:
            print("No data in the list, so nothing to remove.")
            return self
        # If only one node then just clear it
        if current.next == None:
            self.head = None
            return self
        # Traverse the list until the next to last node is found and then remove the reference to it
        while current.next.next != None:
            current = current.next
        current.next = None
        return self

    def remove_val(self, val):
        current = self.head
        # Check if the current node is valid
        if current != None:
            # If the head node is the one we're looking for then just change the value immediately. Used since there won't be a "previous" value yet as seen in the while loop below
            if current.value == val:
                self.head = current.next
                current = None
                return self
        else:
            print("No data in the list, so nothing to remove.")
            return self
        # Traverse the list
        while current != None:
            # If the node's value matches the value we're looking for, then make the next node the previous nodes next node. Effectually shifts the list left and nullifies the current node
            if current.value == val:
                previous.next = current.next
                current = None
                return self
            previous = current
            current = current.next
        print("No values found in the list with value: {}".format(val))
        return self

# Testing the linked list
if __name__ == "__main__":
    my_list = LinkedList() # empty
    my_list.add_to_front("Mon").add_to_back("Tues").add_to_back("Wed").add_to_back("Fri") # Mon, Tues, Wed, Fri
    my_list.insert_after("Wed", "Thur") # Mon, Tues, Wed, Thur, Fri
    my_list.remove_from_front().remove_from_back() # Tues, Wed, Thur
    my_list.remove_val("Wed") # Tues, Thur
    my_list.print_list()

    other_list = LinkedList() # empty
    other_list.insert_after(3, 4) # 4
    other_list.add_to_back(1).add_to_front(2).add_to_back(0) # 2, 4, 1, 0
    other_list.insert_after(2, 3) # 2, 3, 4, 1, 0
    other_list.remove_from_front().remove_from_back() # 3, 4, 1
    other_list.remove_val(4) # 3, 1
    other_list.print_list() 