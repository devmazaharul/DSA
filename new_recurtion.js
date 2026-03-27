function reverseArr(arr = [], l = 0, r = arr.length - 1) {
    if (l > r) {
        return arr;
    }
    [arr[l], arr[r]] = [arr[r], arr[l]];
    return reverseArr(arr, l + 1, r - 1);
}

function deepObjectSum(obj) {
    let values = Object.values(obj);

    return values.reduce((acc, curr) => {
        if (typeof curr == 'number' && curr !== null) {
            acc += curr;
        } else if (typeof curr == 'object') {
            return acc + deepObjectSum(curr);
        }

        return acc;
    });
}

function fiboNacci(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fiboNacci(n - 1, memo) + fiboNacci(n - 2, memo);

    return memo[n];
}

function fibonacchiWithItarative(n) {
    if (n <= 1) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

function reverseStr(str = '') {
    if (str.length == 0) return '';
    return reverseStr(str.slice(1)) + str[0];
}

function reverseArr1(arr) {
    return [...reverseArr(arr.slice(1)), arr[0]];
}

function reverseArrAnother(arr = [], index = 0, newArr = []) {
    if (index === arr.length) {
        return newArr;
    }
    const res = reverseArrAnother(arr, index + 1, newArr);
    newArr.push(arr[index]);
    return res;
}

function sumOfElements(arr, index = 0) {
    if (arr.length === index) {
        return 0;
    }
    return arr[index] + sumOfElements(arr, index + 1);
}
function sumOfElements2(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfElements2(arr.slice(1));
}

function minimumWindowSubstring(str = '', t = '') {
    if (str.length < 1) return str;
    let map = {};
    for (let i = 0; i < t.length; i++) {
        let current = t[i];
        map[current] = (map[current] || 0) + 1;
    }

    let left = 0;
    let count = t.length;
    let start = 0;
    let minLen = Infinity;

    for (let right = 0; right < str.length; right++) {
        let curr = str[right];
        if (map[curr] != undefined) {
            //expanding
            if (map[curr] > 0) count--;
            map[curr]--;
        }

        while (count == 0) {
            //shring phase

            //valid point
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            let leftChat = str[left];
            if (map[leftChat] !== undefined) {
                map[leftChat]++;
                if (map[leftChat] > 0) count++;
            }

            left++;
        }
    }
    return minLen == Infinity ? '' : str.substring(start, start + minLen);
}

//brute force solution
function minWindow(str = '', t = '') {
    let minLen = Infinity;

    for (let i = 0; i < str.length; i++) {
        let map = {};
        for (let i = 0; i < t.length; i++) {
            let curr = l[i];
            map[curr] = (map[curr] || 0) + 1;
        }
        for (let j = i; j < str.length; j++) {
            let curr = str[j];
            if (map[curr] != undefined) {
                map[curr]--;
            }
            if (Object.values(map).every((val) => val === 0)) {
                minLen = j - i + 1;
            }
            break;
        }
    }
}

function longestSubStringAtMostK(str = '', k = 0) {
    let map = {};
    let left = 0;
    let maxLen = -Infinity;

    for (let right = 0; right < str.length; right++) {
        let curr = str[right];
        map[curr] = (map[curr] || 0) + 1;

        while (Object.keys(map).length > k) {
            //invalid pard
            let leftchar = str[left];
            map[leftchar]--;
            if (map[leftchar] == 0) {
                delete map[leftchar];
            }
        }
        maxLen = Math.max(maxLen, right - left + 1); //valid part
    }
    return maxLen;
}

function sumOfDisit(n) {
    if (n < 10) return n;
    let lastDigit = n % 10;
    let remnainitDigit = Math.floor(n / 10);
    return sumOfDisit(remnainitDigit) + lastDigit;
}

function countClimbStar(n) {
    if (n <= 2) return n;
    return countClimbStar(n - 1) + countClimbStar(n - 2);
}

function maxSubArraySum(arr = []) {
    //kadanje algorithn

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

//sub array sum with brute force

function subarraysumbrute(arr = []) {
    let maxsum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let currsum = 0;
        for (let j = i; j < arr.length; j++) {
            currsum += arr[j];
            if (currsum > maxsum) {
                maxsum = currsum;
            }
        }
    }
    return maxsum;
}

function selectionSort(arr = []) {
    let minIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
    return arr;
}

function bubbleSort(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        let isSwap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }

        if (!isSwap) break;
    }
    return arr;
}

function bubbleRecap(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isSwap = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }
        if (!isSwap) break;
    }
    return arr;
}

function selectionRecap(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
}

function liniearSearch(arr = [], target, index = 0) {
    //base case
    if (arr.length === index) {
        return false;
    }

    //conditon case
    if (arr[index] === target) {
        return true;
    }
    //recution case
    return liniearSearch(arr, target, index + 1);
}

const arr = [8, 23, 1, 34, 3, 2, 99];

function binarySearch(arr = [], target, left = 0, right = arr.length - 1) {
    //base case
    if (left > right) {
        return false;
    }

    //conditon check
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
        return true;
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

function binarySearchWithImmuteabe(arr = [], target) {
    let left = 0;
    let rigth = arr.length - 1;
    if (left > rigth) return false;

    const mid = Math.floor(left + (rigth - left) / 2);
    if (arr[mid] === target) {
        return true;
    }
    if (arr[mid] > target) {
        return binarySearchWithImmuteabe(arr.slice(0, mid), target);
    } else {
        return binarySearchWithImmuteabe(arr.slice(mid + 1), target);
    }
}


