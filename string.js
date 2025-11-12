//brute force approch TC-o(n)
const isPlainDrome = (str = '') => {
    return str.split('').reverse().join('') === str;
};

const isAlhanumaric = (key = '') => {
    return (
        (key.charCodeAt() >= 97 && key.charCodeAt() <= 123) ||
        (key.charCodeAt() >= 48 && key.charCodeAt() <= 57)
    );
};

// optimal solution with teow poineter
const isPlainDromeTwoPointer = (str = '') => {
    let left = 0;
    let right = str.length - 1;
    str = str.toLowerCase();
    while (left < right) {
        if (!isAlhanumaric(str[left])) {
            left++;
            continue;
        }

        if (!isAlhanumaric(str[right])) {
            right--;
            continue;
        }
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }
    return true;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// তোমাকে একটা string s ও একটা সংখ্যা k দেওয়া হবে।

// তোমার কাজ:

// প্রতি 2k character এর chunk ধরো

// এবং সেই chunk এর প্রথম k character reverse করো

// বাকি k character 그대로 রাখো (skip)

// এই process পুরো string এর জন্য repeat হবে।

// এক কথায় — প্রতি 2k এর প্রথম k টা reverse করতে হবে।
var reverseStr = function (s, k) {
    s = s.split('');
    for (let i = 0; i < s.length - 1; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);
        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
    return s.join('');
};

const k = 2;
const str = 'abcdefg';

const removeOcc = (str = '', k = '') => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let isStart = str.startsWith(k, i);
        if (!isStart) {
            res += str[i];
        } else {
            i = i + k.length - 1;
        }
    }
    return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = [];
    for (let char of s) {
        if (char === '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

const removeStarsBest = (s = '') => {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*') {
            res += s[i];
        } else {
            res = res.slice(0, res.length - 1);
        }
    }
    return res;
};

//32 difarce form up-low
const charCode = (key) => {
    return key.charCodeAt();
};

/**
 * @param {String} s
 * @returns {string}
 */

const strignGood = (s) => {
    const result = [];
    for (let key of s) {
        if (result.length && Math.abs(charCode(result[result.length - 1]) - charCode(key)) == 32) {
            result.pop();
        } else {
            result.push(key);
        }
    }
    return result.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let left = 0;
    let res = '';
    let isSpace = false;
    while (left < s.length) {
        if (s[left] !== ' ') {
            res += s[left];
            isSpace = true;
        } else {
            if (isSpace) {
                res = res + ' ';
                isSpace = false;
            }
        }
        left++;
    }
    res = res.endsWith(' ') ? res.slice(0, res.length - 1) : res;
    return res.split(' ').reverse().join(' ');
};

//without handle space
const reverseWordsAnother = (s) => {
    let item = s.split(' ');
    let left = 0,
        right = item.length - 1;
    while (left < right) {
        [item[left++], item[right--]] = [item[right], item[left]];
    }
    return item.join(' ');
};

const reverseWordsAnother2 = (s = '') => {
    let i = s.length - 1;
    let temp = '';
    let result = '';
    while (i >= 0) {
        if (s[i] !== ' ') {
            temp = s[i] + temp;
        } else {
            if (temp.length > 0) {
                result = result.length == 0 ? result + temp : result + ' ' + temp;
                temp = '';
            }
        }
        i--;
    }

    if (temp.length > 0) {
        result = result.length == 0 ? result + temp : result + ' ' + temp;
    }

    return result;
};

/**
 * @param {String[]} str
 * @returns {Number}
 */
const StringCompression = (chars) => {
    let result = [];
    for (let i = 0; i < chars.length; i++) {
        let j = 0;
        while (chars[i] == chars[i + j]) {
            j++;
        }

        if (j > 1) {
            result.push(chars[i], j);
            i = i + j - 1;
        } else {
            result.push(chars[i]);
        }
    }
    return result;
};
const StringCompressionBest = (chars) => {
    let read = 0,
        write = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        // count frequency
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char; // write character

        if (count > 1) {
            for (let digit of String(count)) {
                chars[write++] = digit; // write each digit
            }
        }
    }

    return chars.slice(0, write); // result trimmed
};

//brute frce solution
var removeElementBruteForce = function (nums, val) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            res.push(nums[i]);
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            nums[i] = nums[nums.length - 1];
            nums.pop();
        } else {
            i++;
        }
    }
    return nums;
};

const nums = [3, 2, 2, 3],
    val = 3;

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums = []) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }
    return k;
};

//  another simpplest way
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];

    for (let ch in s) {
        if (
            stack.length > 0 &&
            stack[stack.length - 1] !== s[ch] &&
            stack[stack.length - 1].toLowerCase() === ss[ch].toLowerCase()
        ) {
            stack.pop();
        } else {
            stack.push(s[ch]);
        }
    }

    return stack.join('');
};

const removeDuplicatesII = (array = []) => {
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (k < 2 || array[i] !== array[k - 2]) {
            array[k] = array[i];
            k++;
        } else {
            while (array[i] == array[i - 1]) {
                i++;
            }
        }
    }
    return array.slice(0, k);
};

const removeDuplicatesIIL = (nums = []) => {
    let read = 0,
        write = 0;

    while (read < nums.length) {
        let char = nums[read];
        let count = 0;

        // count frequency
        while (read < nums.length && nums[read] === char) {
            read++;
            count++;
        }

        const freq = Math.min(2, count);
        for (let i = 0; i < freq; i++) {
            nums[write++] = char;
        }
    }
    return nums.slice(0, write);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //leetcode 283
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }

    return nums;
};

const test = (str = '') => {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (
            res.length &&
            str[i] !== res[res.length - 1] &&
            str[i].toLowerCase() == res[res.length - 1].toLowerCase()
        ) {
            res.pop();
        } else {
            res.push(str[i]);
        }
    }
    return res.join('');
};

const productExceptSelf = (nums = []) => {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // prefix multiply (left side)
    let left = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let j = n - 1; j >= 0; j--) {
        ans[j] *= right;
        right *= nums[j];
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function (nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // prefix multiply (left side)
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    // suffix multiply (right side)
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = ans[i] * suffix;
        suffix *= nums[i];
    }

    return ans;
};

const calPow = (x, y) => {
    let res = 1;
    for (let i = 0; i < y; i++) {
        res *= x;
    }
    return res;
};

const bestBuy = (prices = []) => {
    let bestB = prices[0];
    let maxProfix = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > bestB) {
            if (maxProfix < prices[i] - bestB) {
                maxProfix = prices[i] - bestB;
            }
        } else {
            bestB = prices[i];
        }
    }
    return maxProfix;
};

const twoSum = (arr = [], target) => {
    for (let key in arr) {
        let isAv = target - arr[key];

        for (let i = key + 1; i < arr.length; i++) {
            if (arr[i] == isAv) {
                return [+key, i];
            }
        }
    }
};

let w = 5;
let h = 4;



for (let i = 0; i < h; i++) {
    let res=""
   for (let j = i+1; j < w; j++) {
    res=" ".repeat(i+1) + "*".repeat(w)
   }
   console.log(res)
}
