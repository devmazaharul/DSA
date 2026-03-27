class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push_front(value) {
        let newNode = new Node(value);
        if (this.size == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return newNode.value;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return newNode.value;
    }
    push_back(value) {
        let newNode = new Node(value);
        if (this.size == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return newNode.value;
        }
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.size++;
        return newNode.value;
    }
    pop_front() {
        if (this.size == 0) return null;
        if (this.size === 1) {
            let value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return value;
        }

        let temp = this.head;
        this.head = this.head.next;
        this.size--;
        return temp.value;
    }
    pop_back() {
        if (this.size === 0) return null;

        if (this.size == 1) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return value;
        }

        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        let temp = this.tail.value;
        current.next = null;
        this.tail = current;

        this.size--;

        return temp;
    }
    peak_front() {
        if (this.size === 0) return null;
        return this.head.value;
    }
    peak_back() {
        if (this.size == 0) return null;
        return this.tail.value;
    }

    reverse_list() {
        if (this.size == 0) return null;
        let current = this.head;
        let prev = null;
        while (current != null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    cycle_detect() {
        if (this.size == 0) return null;
        let slow = this.head;
        let fast = this.head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }
    reverse_fist_kNode(k) {
        if (this.size === 0) return null;
        if (this.size < k) return null;
        let current = this.head;
        let prev = null;
        let oldHead = this.head;
        let next = null;
        const originalK = k;
        while (current !== null && k > 0) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            k--;
        }
        oldHead.next = current;
        this.head = prev;
        if (originalK === this.size) {
            this.tail = oldHead;
        }
    }
}

const newLinkList = new LinkList();

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;

function shipPackage(weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce((acc, curr) => acc + curr, 0);
    let ans = low;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        const isPoss = canShip(weights, mid, days);
        if (isPoss) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function canShip(weights, limit, days) {
    let day = 1;
    let total = 0;
    for (let i = 0; i < weights.length; i++) {
        if (total + weights[i] > limit) {
            day++;
            total = weights[i];
        } else {
            total += weights[i];
        }
    }
    return day <= days;
}

function removeLastNthNode(head, n) {
    if (head == null) {
        return null;
    }

    if (n == 1) {
        return null;
    }
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    if (n > count) return null;
    count -= n;
    let prev = null;
    let curr = head;
    while (count--) {
        prev = curr;
        curr = curr.next;
    }
    let removeVal = curr;
    prev.next = curr.next;
    curr.next = null;
    return removeVal.value;
}

function removeEveryNthNode(head, n) {
    if (head == null) return null;
    if (n == 1) return null;
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }

    if (count < n) return null;

    let prev = null;
    let curr = head;
    temp = head;
    count = 0;
    while (head != null) {
        if (count == n) {
            prev.next = curr.next;
            curr.next = null;
            curr = prev.next;
            count = 0;
        }
        prev = curr;
        curr = curr.next;
        count++;
    }
    return head;
}

function duplicateRemoveUsingHashSet(head) {
    //time o(n) and space o(n)
    let current = head;
    let prev = null;
    let hasSet = new Set();

    while (current != null) {
        let currentValue = current.value;
        if (hasSet.has(currentValue)) {
            prev.next = current.next;
        } else {
            hasSet.add(currentValue);
            prev = current;
        }
        current = current.next;
    }
    return head;
}

function duplicateRemoveWithOutExtraMemory(head) {
    //time o(n^2) and space o(1)
    let current = head;

    while (current != null) {
        let runner = current;
        while (runner.next != null) {
            let currData = current.value;
            if (runner.next.value === currData) {
                //duplicate found
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
    return head;
}

function middleEleemnt(head) {
    let slow = head;
    let fast = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function cycleDetect(head) {
    let slow = head;
    fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

function findTheLengthOfcicle(head) {
    let hasmap = new Map();
    let count = 1;
    let temp = head;

    while (temp) {
        //time o(n) and space o(n)
        if (hasmap.has(temp)) {
            return count - hasmap.get(temp);
        } else {
            hasmap.set(temp, count);
        }
        temp = temp.next;
        count++;
    }
    return 0;
}

function detectLoopAndDelete(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    if (fast == null || fast.next == null) {
        return false;
    }

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    while (slow.next !== fast) {
        slow = slow.next;
    }

    slow.next = null;
}

function interSectionValue(head1, head2) {
    let count1 = 0,
        count2 = 0;
    let temp1 = head1,
        temp2 = head2;

    // ১. দুটি লিস্টের দৈর্ঘ্য বের করা
    while (temp1) {
        count1++;
        temp1 = temp1.next;
    }
    while (temp2) {
        count2++;
        temp2 = temp2.next;
    }

    let slow = head1;
    let fast = head2;

    // ২. দৈর্ঘ্যর পার্থক্য বের করা
    let diff = Math.abs(count1 - count2);

    // ৩. বড় লিস্টের পয়েন্টারকে diff পরিমাণ সামনে এগিয়ে নেওয়া
    if (count1 > count2) {
        while (diff--) slow = slow.next;
    } else {
        while (diff--) fast = fast.next;
    }

    // ৪. যতক্ষণ না তারা একই নোডে মিলছে, এক ধাপ করে এগোনো
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // যদি কোথাও না মিলে তারা null এ পৌঁছায়
    if (slow === null) return -1;

    return slow.value; // অথবা slow.val (LeetCode অনুযায়ী)
}

function addTwoNumberII(list1, list2) {
    //leetcode 445
    let carry = 0;

    let temp1 = list1;
    let prev1 = null;
    while (temp1) {
        let next = temp1.next;
        temp1.next = prev1;
        prev1 = temp1;
        temp1 = next;
    }

    let temp2 = list2;
    let prev2 = null;
    while (temp2) {
        let next = temp2.next;
        temp2.next = prev2;
        prev2 = temp2;
        temp2 = next;
    }

    let newHead1 = prev1;
    let newHead2 = prev2;
    let result = null;
    while (newHead1 || newHead2 || carry > 0) {
        let val1 = newHead1 ? newHead1.val : 0;
        let val2 = newHead2 ? newHead2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let newNode = { val: sum % 10, next: result };
        result = newNode;
        if (newHead1) newHead1 = newHead1.next;
        if (newHead2) newHead2 = newHead2.next;
    }
    return result;
}

function addTwoNumber(l1, l2) {
    // leetcode 2
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let result = new ListNode(sum % 10);
        current.next = result;
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
}

function reverseGroupofSizek(head, size) {
    let curr = head;
    let prev = null;
    let count = 0;

    while (curr) {
        let next = curr.next;
        if (count == size) {
            count=0
            curr=head
        } else {
            curr.next=prev
            prev = curr;
            curr = next;
        }
    }
}
