// Queue - FIFO (First In, First Out)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) return undefined;

        // remove from front
        const temp = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null; // disconnect for safety
        }

        this.length--;
        return temp.value; // return removed value
    }

    peek() {
        return this.first ? this.first.value : null;
    }

    print() {
        let current = this.first;
        let values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}


const myQueue=new Queue(2)
myQueue.enqueue(7)
myQueue.enqueue(8)
myQueue.enqueue(9)
myQueue.enqueue(9)
myQueue.dequeue()
myQueue.dequeue()

myQueue.dequeue()

console.log(myQueue)