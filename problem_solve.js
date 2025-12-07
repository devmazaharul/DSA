//itarative way
function decimalToBinary(num) {
    let sum = '';
    while (num > 0) {
        sum = (num % 2) + sum;
        num = Math.floor(num / 2);
    }
    return sum;
}

// recurtion way to solve decimal to binary problem

function decimalToB(num) {
    if (num < 1) return '';
    return decimalToB(Math.floor(num / 2)) + (num % 2);
}

// itarative way to solve binary to decimal problem
function binaryToDecimal(binary) {
    let pow = 0;
    let decimal = 0;
    const base = 2;
    while (binary > 0) {
        decimal = (binary % 2) * base ** pow + decimal;
        binary = Math.floor(binary / 10);
        pow++;
    }
    return decimal;
}

//recurcive way to solve this problem

function decimalToBinaryRecurtion(binary, pow = 0) {
    if (binary < 1) return 0;

    return decimalToBinaryRecurtion(Math.floor(binary / 10), pow + 1) + (binary % 2) * 2 ** pow;
}

// find duplicate and liniar array
function findDuplicateAndliniar(arr = []) {
    let duplicate = [];
    let liniar = [];

    for (let i = 0; i < arr.length; i++) {
        if (liniar.includes(arr[i])) {
            duplicate.push(arr[i]);
        } else {
            liniar.push(arr[i]);
        }
    }
    return {
        liniar,
        duplicate,
    };
}

// remove duplicate element from array
function removeDuplicateElement(arr = []) {
    return arr.filter((item, i, arr) => arr.indexOf(item) == i);
}

// extract duplicate element from array
function extractDuplicateElement(arr = []) {
    return arr.filter((item, i, self) => self.indexOf(item) !== i);
}
// extract uniq duplicate element from array
function extractUniqDuplicateElement(arr = []) {
    return arr
        .filter((item, i, arr) => arr.indexOf(item) !== i)
        .filter((value, j, self) => self.indexOf(value) === j);
}

function maxSubarrySum(arr = [], start = 0, sum = -Infinity) {
    if (start == arr.length) return sum;

    for (let i = start; i < arr.length; i++) {
        const sliceArr = arr.slice(start, i + 1);
        const result = sliceArr.reduce((acc, curr) => acc + curr, 0);
        if (result > sum) {
            sum = result;
        }
    }

    return maxSubarrySum(arr, start + 1, sum);
}

function kadane(arr) {
    let maxSoFar = arr[0];
    let current = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current = Math.max(arr[i], current + arr[i]);
        maxSoFar = Math.max(maxSoFar, current);
        console.log(current);
    }

    return maxSoFar;
}

const arr = [1, 2, 3, 2, 1]; // 3
function singleNumber(arr = []) {
    const obj = {};
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        obj[num] = (obj[num] || 0) + 1;
    }

    for (let num in obj) {
        if (obj[num] === 1) {
            result = +num;
        }
    }

    return result;
}

function singleNumberBit(arr = []) {
    let sum = 0;
    for (let num of arr) {
        sum ^= num;
    }
    return sum === 0 ? -1 : sum;
}

function singleNumberRecursive(arr = [], index = 0) {
    if (index == arr.length) return 0;
    return arr[index] ^ singleNumberRecursive(arr, index + 1);
}

function removeDuplicateValue(arr = []) {
    const uniqArr = [];
    const dup = [];

    for (let key of arr) {
        if (!uniqArr.includes(key)) {
            dup.push(key);
        }
    }
    return uniqArr;
}

function removeDuplicateValueRecursive(arr = [], start = 0, result = []) {
    if (arr.length == start) return result;
    if (!arr.includes(arr[start])) {
        result.push(arr[start]);
    }
    return removeDuplicateValueRecursive(arr, start + 1, result);
}

function removeDuplicateValue(arr = []) {
    const obj = {};
    for (let num of arr) {
        obj[num] = (obj[num] || 0) + 1;
    }
    return arr.filter((item) => obj[item] === 1);
}

function returnFirstUniqChar(str = '') {
    let charObj = {};
    for (let char of str) {
        charObj[char] = (charObj[char] || 0) + 1;
    }
    for (let count of str) {
        if (charObj[count] == 1) {
            return count;
        }
    }
    return '_';
}

function toSum(arr = [], target) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const isDeff = target - arr[i];
        if (result[isDeff] !== undefined) {
            return [result[isDeff], i];
        }
        result[arr[i]] = i;
    }
    return null;
}
const arrDup = [1, 2, 2, 3, 4, 4, 2, 5, 2];

function majorityElement(arr = []) {
    let ans = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count == 0) {
            ans = arr[i];
        }
        if (ans == arr[i]) {
            count++;
        } else {
            count--;
        }
    }
    return ans;
}

async function delayConsole() {
    const str = 'Hello, I am Mazaharul Islam — a Software Developer.';

    for (let i = 0; i < str.length; i++) {
        process.stdout.write(str[i]);

        await new Promise((res) => setTimeout(res, 100)); // 300ms delay
    }
}

// delayConsole();

const anagramArr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// itarative way
function anagram(arr = []) {
    const obj = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const sortWord = arr[i].split('').sort().join('');
        if (!obj[sortWord]) {
            obj[sortWord] = [arr[i]];
        } else {
            obj[sortWord] = [...obj[sortWord], arr[i]];
        }
    }

    for (let key in obj) {
        result.push(obj[key]);
    }
    return result;
}

// optimize way

function groupAnagrams(arr = []) {
    const map = new Map();

    for (const word of arr) {
        const key = word.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    return Array.from(map.values());
}

function reverse(x, reversed = 0) {
    // base case: যখন সংখ্যা 0 হয়ে যায়
    if (x === 0) return reversed;

    // শেষ digit বের করো
    const digit = x % 10;

    // reverse সংখ্যায় digit যোগ করো
    reversed = reversed * 10 + digit;

    // পরের ধাপে যাও (শেষ digit বাদ দিয়ে)
    return reverse(Math.floor(x / 10), reversed);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums = []) {
    return nums.map((item, i, self) => (self.indexOf(item) == i ? item : '_'));
};

function getRemovableIndices(str1 = '', str2) {
    // Write your code here
    const result = [];
    for (let i = 0; i < str1.length; i++) {
        const minusCurrent = str1.slice(0, i) + str1.slice(i + 1);
        if (minusCurrent == str2) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : [-1];
}

const str1 = 'abdgggda';

const str2 = 'abdggda';

function binarySearch(arr = [], target, start = 0, end = arr.length - 1) {
    if (end < start) return -1;
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] == target) return mid;
    if (target > arr[mid]) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

function sumN(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i + 1;
    }
    return sum;
}
function sumNA(n) {
    return (n * (n + 1)) / 2;
}

function Consecutive(arr = []) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = Math.min(res, arr[i]);
    }

    const result = [];

    if (arr.includes(res + 1)) {
        result.push(res + 1);
    }
    return result;
}

const pairsumarr = [2, 3, 4, 5, 7];

function pairSum(arr = [], target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
    }
    return -1;
}

// array must be sorted
function optimizeSolution(arr = [], target, start = 0, end = arr.length - 1, result = []) {
    if (start > end) return -1;
    if (arr[start] + arr[end] === target) {
        result.push(start, end);
        return result;
    } else if (target > arr[start] + arr[end]) {
        return optimizeSolution(arr, target, start + 1, end, result);
    } else {
        return optimizeSolution(arr, target, start, end - 1, result);
    }
}

const majorityElementArr = [1, 2, 1, 11, 1, 20, 20, 20, 20];
// simple soltion
const majorityElementNew = (arr = []) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    for (let key in obj) {
        const major = Math.floor(arr.length / 2);
        if (obj[key] >= major) {
            return key;
        }
    }

    return -1;
};

const majorityElementNew1 = (arr = []) => {
    let count = 1;
    const major = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        if (count >= major) {
            return arr[i];
        } else {
            count = 0;
        }
    }
};

//this only work in sorted array
const majorityElementNew3 = (arr = []) => {
    let count = 1;
    let current = arr[0];
    const major = Math.floor(arr.length / 2);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== current) {
            current = arr[i];
            count = 1;
        } else {
            count++;
            if (count >= major) {
                return current;
            }
        }
    }
    return -1;
};

//most voting algorithm
const majorityElementNew2 = (arr = []) => {
    let count = 0;
    let current = null;

    for (let key in arr) {
        if (count == 0) {
            current = arr[key];
        }
        if (current == arr[key]) count++;
        else count--;
    }
    return current;
};

function maxSumarr(arr = []) {
    let maxsum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
        }
        maxsum = Math.max(maxsum, currentSum);
    }
    return maxsum;
}

//itarative way to generate OTP

function otpItarative(len) {
    let otp = '';
    for (let i = 0; i < len; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

function otpRecurtion(len) {
    if (len == 0) return '';
    return Math.floor(Math.random() * 10) + otpRecurtion(len - 1);
}

const maxProfit = (arr = []) => {
    let maxRrof = 0;
    let todaySell = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const prof = todaySell - arr[0];

        maxRrof = Math.max(prof, maxRrof);
    }
    return maxRrof;
};

const powCal = (n, pow) => {
    let ans = 1;
    for (let i = 0; i < pow; i++) {
        ans = n * ans;
    }
    return ans;
};

function maxWather(arr = []) {
    let ans = 0;
    let height = 0;
    let width = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            height = Math.min(arr[j], arr[i]);
            width = j - i;
            const multipla = height * width;
            ans = Math.max(ans, multipla);
        }
    }

    return ans;
}

function maxWatherRecurtion(arr = [], start = 0, end = arr.length - 1) {
    if (start >= end) return 0;
    const height = Math.min(arr[start], arr[end]);
    const width = end - start;
    const maxArea = height * width;
    return Math.max(
        maxArea,
        maxWatherRecurtion(arr, start + 1, end),
        maxWatherRecurtion(arr, start, end - 1),
    );
}

function maxWatherWhile(arr = []) {
    let maxwater = 0;
    let left = 0;
    let right = arr.length - 1;

    while (right > left) {
        const height = Math.min(arr[left], arr[right]);
        const width = right - left;
        const base = height * width;
        maxwater = Math.max(maxwater, base);
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxwater;
}

function minWaterWhile(arr = []) {
    if (arr.length < 2) return 0; // কমপক্ষে ২টা height দরকার

    let left = 0;
    let right = arr.length - 1;
    let minWater = Infinity; // শুরুতে অনেক বড় মান

    while (left < right) {
        const height = Math.min(arr[left], arr[right]);
        const width = right - left;
        const area = height * width;

        // সবচেয়ে ছোট area রাখো
        minWater = Math.min(minWater, area);

        // ছোট height দিকটা সরাও
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return minWater;
}

var maxArea = function (heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while (left < right) {
        const leftHeight = heights[left];
        const rightHeight = heights[right];
        const width = right - left;
        const height = leftHeight < rightHeight ? leftHeight : rightHeight;
        const area = height * width;

        if (area > maxArea) maxArea = area;

        // move smaller height pointer inward
        if (leftHeight < rightHeight) {
            left++;
            // 🔥 skip all heights smaller than current leftHeight (micro-optimization)
            while (left < right && heights[left] <= leftHeight) left++;
        } else {
            right--;
            // 🔥 skip all heights smaller than current rightHeight (micro-optimization)
            while (left < right && heights[right] <= rightHeight) right--;
        }
    }

    return maxArea;
};

const prices = [7, 5, 3, 3, 6, 4];
function minWater(arr = []) {
    let minArea = Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const height = Math.min(arr[i], arr[j]);
            const width = j - i;
            const area = height * width;

            if (area < minArea) {
                minArea = area;
            }
        }
    }

    return minArea;
}

// Example

function productFind(arr = []) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let multi = 1;
        for (let j = 0; j < arr.length; j++) {
            const m = i == j ? 1 : arr[j];
            multi = multi * m;
        }
        result.push(multi);
    }

    return result;
}

const productArr = [1, 2, 3, 4];
// anumate text
async function formatText(text = '', n = 2) {
    if (n == 0) return;
    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text[i]);
        await new Promise((res) => setTimeout(res, 100));
    }
}
function mulitp(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // prefix multiply (left side)
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    // suffix multiply (right side)
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
}
const nums = [1, 1, 2, 2, 2, 3, 3, 33];

function removeDuplicate(nums) {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
}

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let i = 0; // last unique index
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1; // number of unique elements
};

const RotatedSearch = (arr = [], target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        if (arr[mid] == target) return mid;

        //left side
        if (arr[start] <= arr[mid]) {
            if (arr[mid] >= target && arr[start] <= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            //right half
            if (arr[mid] <= target && arr[end] >= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};

const peakIndex = (arr = []) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        }
        if (arr[mid + 1] > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

function singleNumber(arr = []) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    for (let key in obj) {
        if (obj[key] == 1) {
            return obj[key];
        }
    }
}

function singleNumberWithBinary(arr = []) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mid % 2 === 1) mid--;
        if (arr[mid] == arr[mid + 1]) {
            start = mid + 2;
        } else {
            end = mid;
        }
    }
    return nums[start];
}

function singleNumberWithBinaryAnothet(arr = []) {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) return arr[mid];
        if (mid % 2 == 0) {
            //handle even case
            if (arr[mid] == arr[mid - 1]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            //handle odd case
            if (arr[mid] == arr[mid - 1]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

const peakArr = [1, 1, 2, 2, 3, 3, 4, 4, 8];

const bookAlocate = (arr = [], k) => {
    const n = arr.length - 1;
    let resultarr = [];
    let sumRight = 0;
    for (let i = n; i > 0; i--) {
        let sum = 0;

        for (let j = 0; j < i; j++) {
            sum = sum + arr[j];
        }
        sumRight += arr[i];
        resultarr.push(Math.max(sumRight, sum));
    }

    let min = Infinity;
    for (let val of resultarr) {
        min = Math.min(min, val);
    }
    return min;
};

const bookAarr = [10, 20, 30, 40];
const studnet = 2;

const longestSubstring = (str = '') => {
    let concat = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < n; j++) {
            for (let k = j; k < i; k++) {}
        }
    }
    console.log(concat);
};

const printNumberOnetoN = (n, res = 1) => {
    console.log(res);
    if (res == n) return;

    printNumberOnetoN(n, res + 1);
};

function reverseString(str = '', ans = '') {
    if (str.length == 0) return ans;
    const res = reverseString(str.slice(1)) + str.charAt(0);
    ans += res;
    return ans;
}

function sumOfArray(arr = [], result = 0, left = 0, right = arr.length - 1) {
    if (left <= right) {
        result = result + (arr[left] + (left === right ? 0 : arr[right]));
        return sumOfArray(arr, result, left + 1, right - 1);
    }

    return result;
}

// two pointer
function isPlainDrome(str = '', left = 0, right = str.length - 1) {
    if (left > right) return true;
    if (str[left] !== str[right]) return false;
    return isPlainDrome(str, left + 1, right - 1);
}

// generate aschii code with recurtion
function generateAsciiCode(str = '', result = []) {
    if (str.length == 0) return result;
    result.push(str[0].charCodeAt());
    return nameToAscii(str.slice(1), result);
}

//time o(n) and space o(1)
const nonrepeating = (str) => {
    const obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] == 1) {
            return key;
        }
    }
    return -1;
};

const nonrepeatingWithbit = (str = '') => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const code = str[i].charCodeAt();
        if (result.includes(code) == false) {
            result.push(code);
        }
    }
    console.log(result);

    return String.fromCodePoint(result[0]);
};

const nonrepeatinAnotherway = (str = '') => {
    while (str.length > 0) {
        let res = str[0];
        let rest = str.slice(1);
        if (!rest.includes(res)) {
            return res;
        }
        str = rest;
    }
    return -1;
};

const isValid = (arr, k, maxAllow) => {
    let student = 1;
    let page = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxAllow) {
            return false;
        }
        if (arr[i] + page <= maxAllow) {
            page += arr[i];
        } else {
            student++;
            page = arr[i];
        }
    }
    return student > k ? false : true;
};

function boookalocaation(arr = [], k) {
    let start = 0;
    let ans = 0;
    let end = arr.reduce((acc, curr) => curr + acc);
    if (k > arr.length) return false;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (isValid(arr, k, mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

const maxArSum = (arr) => {
    let sum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};

const DNF = (arr = []) => {
    let left = 0,
        mid = 0,
        right = arr.length - 1;
    while (mid <= right) {
        if (arr[mid] == 0) {
            //swap
            [arr[mid], arr[left]] = [arr[left], arr[mid]];
            mid++;
            left++;
        } else if (arr[mid] === 1) mid++;
        else {
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }
    }
    return arr;
};
const sumOfK = (arr, k) => {
    let sum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    maxSum = Math.max(maxSum, sum);

    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
};

const productItself = (arr = []) => {
    let result = new Array().fill(1);
    //prefix sum
    let prefix = 1;
    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    //suffix
    let right = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= arr[i];
    }
    return result;
};

function NextPermutation(nums = []) {
    let pivot = nums.length - 2;
    while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) pivot--;
    if (pivot < 0) {
        // no pivot
        nums.reverse();
        return nums;
    }

    let j = nums.length - 1;
    while (pivot < j && nums[j] > nums[pivot]) {
        [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
        break;
    }

    let left = pivot + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
}

function isPossible(book, m, mid) {
    let student = 1,
        page = 0;
    let n = book.length;

    for (let i = 0; i < n; i++) {
        if (book[i] > mid) {
            return false;
        }

        if (book[i] + page <= mid) {
            page += book[i];
        } else {
            student++;
            page = book[i];
        }
    }
    return student <= m;
}

function bookAlocation(book, m) {
    let low = Math.max(...book);
    let high = book.reduce((acc, curr) => acc + curr, 0);
    let result = Infinity;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (isPossible(book, m, mid)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

function SubarrySum(arr = [], k) {
    let subar = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let suba = arr.slice(i, j + 1);
            if (suba.reduce((acc, curr) => acc + curr, 0) === k) {
                return [i, '--->', j];
            }
        }
    }
    return subar;
}

function findMinimumRotatedSortedArr(arr = []) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            // Minimum right side e
            low = mid + 1;
        } else {
            // Minimum mid or left side e
            high = mid;
        }
    }

    return arr[low]; // index of minimum element
}

function findMinimumRotatedSortedArrWitarget(arr = [], target) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) return mid;
        if (arr[left] <= arr[mid]) {
            //left part are sorted
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            //right part are sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

function allSubSets(arr = [], ans = [], idx = 0) {
    if (ans.length === arr.length) return ans;
    ans.push(arr[idx]);
    const res = allSubSets(arr, ans, idx + 1);
    ans.pop();
    return res;
}

function fact(n) {
    if (n <= 1) return n;
    return n * fact(n - 1);
}

function isAnagram(a, b) {
    if (a.length !== b.length) return false;

    const obj = {};

    for (let key of a) {
        obj[key] = (obj[key] || 0) + 1;
    }

    for (let key of b) {
        if (key in obj == false) return false;
        obj[key]--;
    }

    return true;
}

function print1toN(n) {
    if (n === 0) return 99;
    console.log(n);
    print1toN(--n);
}

function reverseDisit(n, ans = '') {
    if (n == 0) {
        return +ans;
    }
    ans += n % 10;
    return reverseDisit(Math.floor(n / 10), ans);
}

function binaryS(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
        return binaryS(arr, target, mid + 1, right);
    } else {
        return binaryS(arr, target, left, mid - 1);
    }
}

function isSorted(arr, i = 0) {
    if (i == arr.length - 1) return true;
    return arr[i] <= arr[i + 1] && isSorted(arr, i + 1);
}

function lengthOfLastWord(s) {
    let last = s.length - 1;
    let len = 0;

    while (last >= 0) {
        if (s[last] !== ' ') {
            len++;
        }

        last--;
        if (len > 0 && s[last] == ' ') {
            break;
        }
    }
    return len;
}

//console.log(lengthOfLastWord("   Hellow    "))

function findFirstOcc(str = '', occ) {
    for (let i = 0; i < str.length; i++) {
        if (str.startsWith(occ, i)) {
            return i;
        }
    }
    return -1;
}

function build(n) {
    if (n === 0) return [];

    const prev = build(n - 1);

    prev.push(n);
    return prev;
}

function printParteen(n) {
    if (n == 0) return;
    let sum = '';
    function small(m) {
        if (m == 0) return;
        sum += '*';
        small(m - 1);
    }
    small(n);
    console.log(sum);
    printParteen(n - 1);
}

function bubbleSprt(arr, r, c) {
    if (r == 0) return arr;
    if (c < r) {
        if (arr[c] > arr[c + 1]) {
            [arr[c], arr[c + 1]] = [arr[c + 1], arr[c]];
        }
        return bubbleSprt(arr, r, c + 1);
    } else {
        return bubbleSprt(arr, r - 1, 0);
    }
}

const arrM = [3, 2, 1, 6, 1, 2];

function mergeSort(arr = []) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left = [], right = []) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > arr[j]) {
            result.push(arr[j]);
            j++;
        } else {
            result.push(arr[i]);
            i++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const mergeSortWithoutBuiting = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return arr;
    let mid = Math.floor(start + (end - start) / 2);
    //left
    mergeSortWithoutBuiting(arr, start, mid);
    mergeSortWithoutBuiting(arr, mid + 1, end);
    return mergeAn(arr, start, mid, end);
};

const mergeAn = (arr = [], start, mid, end) => {
    let temp = [];
    let i = start;
    let j = mid + 1;
    let k = 0;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp[k] = arr[i++];
        } else {
            temp[k] = arr[j++];
        }
        k++;
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= end) {
        temp[k++] = arr[j++];
    }

    // inplace redeine
    for (let i = 0; i < temp.length; i++) {
        arr[start + i] = temp[i];
    }
    return arr;
};

function fibo(n, ans = 0) {
    if (n <= 1) return n;

    const f1 = fibo(n - 1);
    const f2 = fibo(n - 2);
    ans += f1 + f2;
    return ans;
}

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}

function an(n) {
    if (n == 0) {
        return;
    }
    console.log('calling ' + n);
    an(n - 1);

    return n * n;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidP = function (s) {
    const stack = [];
    const hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of s) {
        if (char in hash) {
            stack.push(hash[char]);
        } else {
            if (stack.length && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const man = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (man[s[i]] < man[s[i + 1]]) {
            sum = sum + (man[s[i + 1]] - man[s[i]]);
            i += 1;
        } else {
            sum += man[s[i]];
        }
    }
    return sum;
};

function quicSort(arr) {
    if (arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicSort(left), pivot, ...quicSort(right)];
}

function quicSortBest(arr, st = 0, end = arr.length - 1) {
    if (st < end) {
        const pivotIdx = partition(arr, st, end);
        quicSortBest(arr, st, pivotIdx - 1);
        quicSortBest(arr, pivotIdx + 1, end);
    }
    return arr;
}

function partition(arr, st, end) {
    let idx = st - 1;
    let pivot = arr[end];
    for (let i = st; i < end; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    idx++;
    [arr[end], arr[idx]] = [arr[idx], arr[end]];
    return idx;
}

function mergeSort(arr, st = 0, end = arr.length - 1) {
    if (st === end) return [arr[st]];

    let mid = Math.floor(st + (end - st) / 2);

    let left = mergeSort(arr, st, mid);
    let right = mergeSort(arr, mid + 1, end);

    return merge(arr,left, right);
}

function merge(arr,left, right) {
    let i = 0,
        j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
}
const marr=[3,2,1,6,5,4,3,2]
console.log(mergeSort(marr))
console.log(marr)