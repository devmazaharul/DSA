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


