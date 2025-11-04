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
            res = res + s[left];
            isSpace = true;
        } else {
            if (isSpace) {
                res = res + ' ';
                isSpace = false;
            }
        }
        left++;
    }
    res = res.endsWith('-') ? res.slice(0, res.length - 1) : res;
    return res.split(' ').reverse().join(' ');
};

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




