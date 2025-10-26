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
    const result = [];
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
    let str = 'Hellow , I am mazaharul islam i am a software enginnerr';

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
