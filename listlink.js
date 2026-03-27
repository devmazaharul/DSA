class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push_front(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return newNode;
    }

    push_back(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return newNode;
    }
    push_back_from_arr(arr) {
        while (arr.length !== 0) {
            let newNode = new Node(arr[0]);
            if (this.head == null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size++;
            arr = arr.slice(1);
        }
        return true;
    }
    pop_back() {
        let curr = this.head;
        let prev = null;
        if (this.head == null) return false;
        if (this.head == this.tail) {
            this.tail = null;
            this.head = null;
            return true;
        }
        while (curr.next !== null) {
            prev = curr;
            curr = curr.next;
        }
        //chnages
        this.tail = prev;
        prev.next = null;
        return true;
    }
    pop_back_another() {
        let temp = this.head;
        if (this.head == null) return false;
        if (this.head == this.tail) {
            this.tail = null;
            this.head = null;
            return true;
        }

        if (temp.next !== this.tail) {
            temp = temp.next;
        }
        this.tail = temp;
        temp.next = null;
        return true;
    }
    pop_front() {
        if (this.head == null) return false;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return true;
        }
        this.head = this.head.next;
        return true;
    }
    pop_at(pos) {
        if (this.head == null) return false;
        if (pos == 1) {
            if (this.head == this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
            return true;
        }

        let curr = this.head;
        let prev = null;

        function currentPos(p) {
            if (p == 0) return;
            prev = curr;
            curr = curr.next;
            if (curr == null) false;
            currentPos(p--);
        }
        currentPos(pos);
        prev.next = curr.next;
        if (curr == this.tail) {
            this.tail = prev;
        }
        curr.next = null;
        return true;
    }
    reverseNode() {
        let curr = this.head;
        let prev = null;
        let saveTail = this.head;
        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        this.tail = saveTail;
    }
    reverseValue() {
        let temp = this.head;
        let arr = [];
        while (temp != null) {
            arr.push(temp.value);
            temp = temp.next;
        }
        let i = arr.length - 1;
        temp = this.head;
        while (temp) {
            temp.value = arr[i--];
            temp = temp.next;
        }
        return this.head;
    }
    reverseNodeRecurtion() {
        let current = this.head;
        function reverse(curr, prev) {
            if (curr == null) return prev;
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            reverse(next, prev);
        }
        return reverse(current, null);
    }

    middleLinkList() {
        let slow = (fast = this.head);
        while (fast !== null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    removeNthNodeEnd(k) {
        let curr = this.head;
        let count = 1;
        while (curr.next) {
            count++;
            curr = curr.next;
        }
        curr = this.head;
        let prev = null;
        let currpos = count - k;

        while (currpos--) {
            prev = curr;
            curr = curr.next;
        }
        prev = curr.next;
        if (curr == this.tail) {
            this.tail = curr;
        }

        curr.next = null;

        this.size--;
    }

    removeEveryNthNode(k) {
        if (k <= 0 || !this.head) return this.head;

        if (k == 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return this.head;
        }
        let curr = this.head;
        let prev = null;
        let count = 1;
        while (curr) {
            if (count == k) {
                prev = curr.next;
                if (curr == this.tail) {
                    this.tail = prev;
                }
                curr.next = null;
                curr = prev.next;
                count = 1;
                this.size--;
            } else {
                prev = curr;
                curr = curr.next;
                count++;
            }
        }
        return this.head;
    }
    roatedList(k) {
        if (this.head == null || k == 0) return this.head;
        let count = 0;
        let temp = 0;
        while (temp) {
            count++;
            temp = temp.next;
        }
        k = k % count;
        if (k === 0) return this.head;
        this.tail = this.head;
        let steptonewTail = count - k;
        let newTail = this.head;
        for (let i = 1; i < steptonewTail; i++) {
            newTail = newTail.next;
        }
        let newHead = newTail.next;
        newTail.next = null;
        return newHead;
    }
}

class NodeDubbly {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DubblyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push_front(value) {
        let newNode = new NodeDubbly(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
        return newNode;
    }
    push_back(value) {
        let newNode = new NodeDubbly(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return newNode;
    }

    pop_front() {
        if (this.head == null) return;
        let temp = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.size--;
    }
    pop_back() {
        if (this.head == null) return; //prevent crash
        let removeNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removeNode.prev;
            removeNode.prev = null;
            this.tail.next = null;
        }
        this.size--;
        return removeNode;
    }

    pop_at(position) {
        if (this.size == 0) return null;
        if (position < 1 || position > this.size) return null;

        if (position == 1) {
            let removeFirstNode = this.head;
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
                removeFirstNode.next = null;
            }
            this.size--;

            return removeFirstNode;
        }

        if (this.size == position) {
            let removeLastNode = this.tail;
            removeLastNode.prev = null;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return removeLastNode;
        }

        let count = 1;
        let currentNode = this.head;
        while (currentNode) {
            if (count == position) {
                let newPrev = currentNode.prev;
                let newNext = currentNode.next;
                newPrev.next = newNext;
                newNext.prev = newPrev;
                currentNode.next = null;
                currentNode.prev = null;
                this.size--;
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }
    push_at(positon) {}
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head == null) return null;
    while (head !== null && head.val == val) {
        head = head.next;
    }
    if (head === null) return null;

    let curr = head.next;
    let prev = head;

    while (curr !== null) {
        if (curr.val == val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return head;
};

function removElement(head, val) {
    if (head === null) return null;
    while (head && head.val == val) {
        head = head.next;
    }
    if (head === null) return null;

    let prev = head;
    let curr = head.next;
    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}

var oddEvenList = function (head) {
    if (head == null) return null;
    let odd = head;
    let even = odd.next;
    let rightEven = even;
    while (even != null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;

        //even positioning
        even.next = odd.next;
        even = even.next;
    }
    odd.next = rightEven;
    return head;
};

function reverseLinkList(head, tail) {
    if (head == null) return null;
    let prev = null;
    let curr = head;
    let saveTail = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    tail = saveTail;

    return head;
}

function middleOflinkist(head) {
    let count = 0;
    let temp = head;
    while (temp) {
        count++;
        temp = temp.next;
    }
    count = Math.floor(count / 2);
    temp = head;
    while (count--) {
        temp = temp.next;
    }
    return temp;
}

function mergeList(newList, list1, list2) {
    let dummy = new Linklist(-1);
    let tail = dummy;

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 != null ? list1 : list2;
    return tail.next;
}

function removeDuplicate(head) {
    let prev = head;
    let curr = head.next;
    while (curr !== null) {
        if (curr.val !== prev.val) {
            prev = prev.next;
            curr = curr.next;
        } else {
            prev.next = curr.next;
            curr = prev.next;
        }
    }
    return head;
}

function uniqvalueFromList(head) {
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (curr.next !== null && curr.val == curr.next.val) {
            let currentVal = curr.val;
            //remove same all elements
            while (curr.next !== null && curr.val == currentVal) {
                curr = curr.next;
            }
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
}

function sortlIst012(head) {
    let zero = 0;
    let one = 0;
    let two = 0;

    let curr = head;
    while (curr) {
        //cout frequency
        let val = curr.val;
        if (val == 0) zero++;
        if (val == 1) one++;
        if (val == 2) two++;
        curr = curr.next;
    }

    //distribue
    curr = head;
    while (curr) {
        if (zero > 0) {
            curr.next = 0;
            zero--;
        } else if (one > 0) {
            curr.next = 1;
            one--;
        } else {
            curr.next = 2;
            two--;
        }
        curr = curr.next;
    }

    return head;
}

function countLenloopinlist(head) {
    if (head == null) return null;
    let map = new Map();
    let temp = head;
    let count = 0;
    while (temp) {
        if (map.has(temp)) {
            return count - map.get(temp);
        }
        map.set(temp, count);
        count++;
        temp = temp.next;
    }

    return 0;
}

function removLoopInList(head) {
    // time O(n) and space O(n)
    if (head == null) return null;
    let temp = head;
    let map = new Map();
    let prev = null;
    while (temp) {
        if (map.has(temp)) {
            prev.next = null;
            return head;
        } else {
            map.set(temp, true);
        }
        prev = temp;
        temp = temp.next;
    }
}

function removLoopInListOptimized(head) { //timeo(n) and space o(1)
    if (head == null) return head;
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (slow !== fast) return head; // no loop found
    slow = head;
    let prev = null;
    while (slow !== fast) {
        prev = fast;
        fast = fast.next;
        slow = slow.next;
    }
    prev.next = null;
    return head;
}
