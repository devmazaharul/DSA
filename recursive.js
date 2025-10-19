//Print numbers from 1 to N recursively.
const printNumberOnetoN = (n) => {
    if (res == n) return;
    res++;
    console.log(res);
    printNumberOnetoN(n, res);
};
// Print numbers from **N to 1** recursively.
const printNumberNtoOne = (n) => {
    if (n == 0) return;
    console.log(n);
    printNumberNtoOne(n - 1);
};

// Calculate **sum of first N natural numbers** recursively.
const calculateSum = (n) => {
    if (n <= 1) return n;
    return calculateSum(n - 1) + n;
};

//Find **factorial** of a number using recursion.
const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
};

//fibonacchi number calculation with optimized way (best way)
const fibonacci = (n, memo = {}) => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 1, memo);
    return memo[n];
};

//Reverse a string using recursion.
const reverseString = (str = '') => {
    if (str.length == 0) return undefined;
    if (str.length == 1) return str;
    return reverseString(str.slice(1)) + str.charAt(0);
};

//Find the sum of all array elements recursively.
const sumOfArray = (arr = []) => {
    if (arr.length == 0) return 0;

    return sumOfArray(arr.slice(1)) + arr[0];
};

const arr = [1, 2, 3, 5, 6, 3]; // ans is = 6

// Check if a string is palindrome using recursion.
const isPlainDrome = (str = '') => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPlainDrome(str[str.slice(1, -1)]);
};

//check  isPlainDrome another way
const isPlainDromeTwo = (str = '', original = '') => {
    if (str === '') return ''; // base case

    // reverse তৈরি হচ্ছে recursion শেষে
    const reversed = isPlainDromeTwo(str.slice(1), original) + str.charAt(0);

    // শুধু recursion শেষ হলে compare করা হবে
    if (reversed.length === original.length) {
        return reversed === original;
    }

    return reversed; // এখনো reverse তৈরি হচ্ছে
};

const paramString = 'maddam';

// Find the maximum element in an array recursively.

const maxArr = [1, 290, 35855, 4, 4, 22, 3];

const maxElement = (arr = [], max = -Infinity) => {
    if (arr.length === 0) return max; //base case
    if (arr[0] > max) {
        max = arr[0];
    }

    const res = maxElement(arr.slice(1), max);
    return res;
};

const characterCount = (str = '', result = {}) => {
    if (str.length == 0) return result;
    str = str.replace(' ', '');
    result[str[0]] = result[str[0]] + 1 || 1;
    return characterCount(str.slice(1), result);
};

//Print all subarrays of an array recursively.

const subarrays = (arr = [], start = 0, result = []) => {
    if (start == arr.length) return result;

    for (let end = start; end < arr.length; end++) {
        result.push(arr.slice(start, end + 1));
    }
    return subarrays(arr.slice(arr), start + 1, result);
};

const subArr = [1, 2, 3];

const subString = (str = '', start = 0, result = []) => {
    if (str.length == start) return result;
    for (let i = start; i < str.length; i++) {
        const sliceNew = str.slice(start, i + 1);
        if (!result.includes(sliceNew)) {
            result.push(sliceNew);
        }
    }
    return subString(str, start + 1, result);
};

// Find the sum of all subsets of a given array.
const subsetsSum = (arr = [], start = 0, result = []) => {
    if (arr.length == start) return result;

    for (let end = start; end < arr.length; end++) {
        const sliceArr = arr.slice(start, end + 1);
        const sum = sliceArr.reduce((acc, curr) => acc + curr, 0);
        const makeObj = {
            items: sliceArr,
            sum: sum,
        };
        result.push(makeObj);
    }
    return subsetsSum(arr, start + 1, result);
};

// posible combination with recurtation and backtraking
const posibleCombination = (arr = []) => {};

const target = 17;


// two sum with recurtion way
const twoSum = (arr = [], target, result = [], start = 0) => {
    for (let end = start; end < arr.length; end++) {
        if (arr[start] + arr[end + 1] === target) {
            result.push(start, end + 1);
            return result;
        }
    }
    return twoSum(arr, target, result, start + 1);
};

function toSum(arr, target) {
    const res = {};

    for (let i = 0; i < arr.length; i++) {
        const isDef = target - arr[i];
        if (res[isDef] !== undefined) {
            return [res[isDef], i];
        }
        res[arr[i]] = i;
    }

    return null;
}

const tosumarr = [2, 7, 11, 15];

const binaryArr = [1, 2, 3, 4, 5, 6, 7, 8];
// binrary search with recurtion
function binarySearch(arr = [], target, start = 0, end = arr.length) {
    //base case
    if (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) return mid;
        if (target > arr[mid]) {
            return binarySearch(arr, target, mid + 1, end);
        } else {
            return binarySearch(arr, target, start, mid - 1);
        }
    }
    return -1;
}


// binrary search with itarative way
function binarySearch(arr, target) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(`start=${start}, end=${end}, mid=${mid}, arr[mid]=${arr[mid]}`);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1; // ডান দিকে খোঁজা
        else end = mid - 1; // বাম দিকে খোঁজা
    }

    return -1;
}

const nums = [1, 3, 5, 6, 7, 9, 10, 11, 12, 54];

// find minimum element with itarative approch
function findMin(arr = []) {
    if (arr.lengt == 0) return [];
    let smallest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        smallest = Math.max(smallest, arr[i]);
    }
    return smallest;
}

//reverse array with itarative way

function reverseArr(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}


//revese array with recurtion
function reverseArrWithRecurtion(arr = [], start = 0, end = arr.length - 1) {
    if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        return reverseArrWithRecurtion(arr, start + 1, end - 1);
    }
    return arr;
}



