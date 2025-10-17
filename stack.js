class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Push value to stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; // new node points to old top
    this.top = newNode;      // update top
    this.size++;
    return this;
  }

  // Pop value from stack
  pop() {
    if (this.isEmpty()) {   // check empty stack
      console.log("Stack is empty!");
      return null;
    }

    const poppedNode = this.top;
    this.top = this.top.next; // move top to next node
    this.size--;
    return poppedNode.value;  // return the value of popped node
  }

  // Peek at top value
  peek() {
    return this.top ? this.top.value : null;
  }

  // Print stack (for debugging)
  print() {
    let current = this.top;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Usage
const mystack = new Stack();

mystack.push(2);
mystack.push(7);
mystack.push(7);
mystack.push(27);

mystack.print();         // 27 -> 7 -> 7 -> 2
console.log(mystack.peek()); // 27
console.log(mystack.pop());  // 27
mystack.print();         // 7 -> 7 -> 2
console.log(mystack.size);   // 3
