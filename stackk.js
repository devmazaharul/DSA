class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return newNode;
    }
    pop() {
        if (this.size == 0) return null;
        let temp = this.head;
        if (this.size == 1) {
            this.head = null;
            this.size--;
            return temp;
        }
        this.size--;
        this.head = this.head.next;
        return temp;
    }

    peek() {
        return this.head;
    }
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        return false;
    }
}

const myStack = new Stack();

function reverseArray(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    let index = 0;

    while (stack.length) {
        arr[index] = stack.pop();
        index++;
    }
    return arr;
}

function inserAtLastInStack(val, stack) {
    const arr = [];
    while (stack.length) {
        arr.push(stack.pop());
    }

    let index = 1;
    stack[0] = val;
    while (arr.length) {
        stack[index++] = arr.pop();
    }
    return stack;
}

function validparantisis(str = '') {
    const stack = [];
    const obj = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            stack.push(str[i]);
        } else {
            let lastElemt = stack.pop();
            if (lastElemt == obj[str[i]]) {
                count += 2;
            }
        }
    }
    return stack.length == 0;
}

function validPar(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i]);
        } else {
            let obj = {
                ')': '(',
                '}': '{',
                ']': '[',
            };
            if (stack.length == 0) return false;
            const lastElemt = stack.pop();
            if (lastElemt !== obj[str[i]]) {
                return false;
            }
        }
    }

    return stack.length == 0;
}

function longestCharecterWithoutRepeating(str) {
    let len = 0;
    let hashMap = {};
    let left = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (hashMap[curr] && hashMap[curr] >= left) {
            left = hashMap[curr] + 1;
        }

        hashMap[curr] = i;
        len = Math.max(len, i - left + 1);
    }

    return len;
}

function isValidParentheses(s) {
    let algorithm = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (current == '(' || current == '{' || current == '[') {
            stack.push(current);
        } else {
            let peak = stack.pop();
            if (algorithm[current] !== peak) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

function splitArray(array = [], m) {
    //binary search on answare
    let maxSum = 0;
    let left = Math.max(...array);
    let rigt = array.reduce((acc, curr) => acc + curr);

    while (left <= rigt) {
        let mid = Math.floor(left + (rigt - left) / 2);
        if (isValid(array, mid, m)) {
            maxSum = mid;
            rigt = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return maxSum;
}

function isValid(arr, limit, m) {
    let count = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum <= limit) {
            sum += arr[i];
        } else {
            sum = arr[i];
            count++;
        }
    }
    return count <= m;
}

function peakElemet(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.fround(left + (right - left) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid - 1] < arr[mid]) {
            return mid;
        } else if (arr[mid] < arr[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

function findTargetElemnetInRotatedArray(arr = [], target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] == target) {
            return mid;
        }

        // if(arr[mid]==arr[left] && arr[mid]==arr[right]){
        //     left++
        //     right--
        // }

        if (arr[mid]>=arr[left]) { //left side are sorted
            if (target < arr[mid] && arr[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // otherwise right side are sorted
            if (arr[right] <= target && arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}


function printOneTwoN(n){
    if(n==0) return n
    const res=printOneTwoN(n-1) + n
    console.log(res)
    return res
}









