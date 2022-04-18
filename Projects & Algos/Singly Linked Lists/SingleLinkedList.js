class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    //------------------------------------ Fronts Assignment ------------------------------------//
    // Add front
    addFront(val) {
        // Create a new node
        let newNode = new Node(val);

        // If the list is empty then set the head to the new node
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        // If the list isn't empty, set the head to the 'next' node in the new node, and set the new head tot he new node.
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // Remove node from the front
    removeFront() {
        // Check if the list is empty
        if (!this.head) {
            return this;
        }

        let temp = this.head;
        this.head = this.head.next;
        temp = null;
        return this;
    }

    // Get the value of the front node
    front() {
        if (!this.head) {
            return this;
        }
        return this.head.data;
    }

    //------------------------------------ Contains Assignment ------------------------------------//
    // Return whether a given value exists in the list
    contains(val) {
        if (!this.head) {
            return this;
        }

        // Travers the list from the front to back
        let runner = this.head;
        while (runner !== null) {
            // If the current node's value matches then return true
            if (runner.data === val) {
                return true;
            }
            // ...otherwise continue to the next node
            runner = runner.next;
        }
        // If we reach this point, then the list didn't have the value in any node
        return false;
    }

    //------------------------------------ Length Assignment ------------------------------------//
    // Get the "length" of the list
    // We COULD just add a 'size' variable that gets incremented/decremented every time a node is added or removed. Then it'd be a constant time retrieval
    length() {
        let length = 0;

        // Traverse the list and increment the length for each node in the list
        let runner = this.head;
        while (runner !== null) {
            length++;
            runner = runner.next;
        }
        return length;
    }
}