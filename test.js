function isOdd(n) {
    return Math.floor(n / 2) * 2 == n ? 'Even' : 'Odd';
}
function checkEvenOdd(n) {
    let count = [1, 3, 5, 7, 9];
    return count.includes(n % 10) ? 'Odd' : 'Even';
}

var totalFruit = function (fruits) {
    let left = 0;
    let map = {};
    let max = 0;

    for (let right = 0; right < fruits.length; right++) {
        let current = fruits[right];
        map[current] = (map[current] || 0) + 1;
        while (Object.keys(map).length > 2) {
            let leftchar = fruits[left];
            map[leftchar]--;
            if (map[leftchar] === 0) {
                delete map[leftchar];
                left++;
            }
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};

function numberOfSubstrings(s) {
    let count = {
        a: 0,
        b: 0,
        c: 0,
    };
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            max += s.length - right;
            count[s[left]]--;
            left++;
        }
    }
    return max;
}

function longestOnes(arr = [], k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] == 0) zeroCount++;
        while (zeroCount > k) {
            if (arr[left] == 0) zeroCount--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

function printPramid(n, x) {
    for (let i = 0; i < n; i++) {
        let str = '';

        for (let j = n - i; j >= 0; j--) {
            str += ' ';
        }
        for (let j = 0; j < i + 1; j++) {
            str += '*';
        }
        for (let j = 1; j < i + 1; j++) {
            str += '*';
        }
        console.log(str);
    }
}

function binarySum(arr = [], goal) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum == goal) {
                count++;
            }
        }
    }
    return count;
}

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
};

function atMost(nums, goal) {
    if (goal < 0) return 0; // important edge case

    let left = 0;
    let sum = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > goal) {
            sum -= nums[left];
            left++;
        }

        // all subarrays ending at 'right' are valid
        count += right - left + 1;
    }

    return count;
}

var numSubarraysWithSum = function (nums, goal) {
    let map = new Map();
    // বেস কেস: যোগফল ০ একবার পাওয়া গেছে (অ্যারে শুরুর আগে)
    map.set(0, 1);

    let currentSum = 0;
    let totalSubarrays = 0;

    for (let num of nums) {
        currentSum += num; // ১. বর্তমান যোগফল বের করি

        // ২. আমাদের দরকার এমন কোনো আগের যোগফল যা (currentSum - goal) এর সমান
        let neededSum = currentSum - goal;

        if (map.has(neededSum)) {
            // যদি ম্যাপে থাকে, তার মানে আমরা সাব-অ্যারে পেয়েছি
            totalSubarrays += map.get(neededSum);
        }

        // ৩. বর্তমান যোগফল ম্যাপে আপডেট করি
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return totalSubarrays;
};

function atMost(nums, goal) {
    if (goal < 0) return 0;
    let left = 0;
    let count = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum > goal) {
            sum -= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;
}

function numberOfSubstringsBest(nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
}

function lowerBound(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
function upperBound(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
function firstOcc(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] >= target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}
function lastOcc(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start - 1;
}

function niceSubArray(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 == 1) {
                temp++;
            }

            if (temp === k) {
                count++;
            }
        }
    }
    return count;
}

function allDivisor(n) {
    let result = [];
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++;
            result.push(i);
            if (i !== n / i) {
                count++;
                result.push(n / i);
            }
        }
    }
    result.sort((a, b) => a - b);
    return {
        count,
        result,
    };
}

function maxGCD(n, m) {
    let max = 0;

    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i == 0 && m % i == 0) {
            max = i;
        }
    }

    return max;
}
function minGCD(n, m) {
    let max = 0;

    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i == 0 && m % i == 0) {
            max = i;
            break;
        }
    }

    return max;
}

function maxSumsizek(nums, k) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    return max;
}

function longestSustringWithoutRepting(str = '') {
    let maxLen = 0;
    let map = {};
    let left = 0;
    for (let right = 0; right < str.length; right++) {
        let current = str[right];
        if (map[current] && map[current] >= left) {
            left = map[current] + 1;
        }
        map[current] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

function DifferentK(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = 0;
        let map = {};
        for (let j = i; j < nums.length; j++) {
            let curret = nums[j];
            if (map[curret] !== undefined) {
                map[curret]++;
            } else {
                temp++;
                map[curret] = 1;
            }

            if (temp == k) {
                count++;
            }
        }
    }

    return count;
}

function atMostDiff(nums, k) {
    if (k < 0) return 0;
    let cout = 0;
    let left = 0;
    let map = {};
    for (let right = 0; right < nums.length; right++) {
        let current = nums[right];
        map[current] = (map[current] || 0) + 1;

        while (Object.keys(map).length > k) {
            let leftVal = nums[left];
            map[leftVal]--;
            if (map[leftVal] == 0) {
                delete map[leftVal];
            }
            left++;
        }
        cout += right - left + 1;
    }
    return cout;
}

function difaranceK(nums, k) {
    return atMostDiff(nums, k) - atMostDiff(nums, k - 1);
}

function atMostOne(nums, k) {
    //ans=8
    let count = 0;
    let left = 0;
    let temp = 0;
    for (let right = 0; right < nums.length; right++) {
        let current = nums[right];
        if (current == 1) {
            temp++;
        }

        while (temp > k) {
            if (nums[left] === 1) temp--;
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

function lonngestWithoutreptingchar(str = '') {
    let max = 0;
    let left = 0;
    let map = {};
    for (let right = 0; right < str.length; right++) {
        const current = str[right];
        if (map[current] !== undefined && map[current] >= left) {
            left = map[current] + 1;
        }
        map[current] = right;
        max = Math.max(max, right - left + 1);
    }
    return max;
}

function minSubArraySumBruteforce(arr = [], target) {
    //O(n^2)
    let minLen = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }
    return minLen;
}

function minSubArraySumOptimal(arr = [], target) {
    let minLen = Infinity;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }
    return minLen;
}

function sufixPrefixSum(arr) {
    let resultArr = new Array(arr.length).fill(0);

    ///prefix
    for (let i = 1; i < arr.length; i++) {
        resultArr[i] = resultArr[i - 1] + arr[i - 1];
    }

    //siffix
    let suf = 0;
    for (let i = resultArr.length - 1; i >= 0; i--) {
        resultArr[i] = resultArr[i] + suf;
        suf += arr[i];
    }

    return resultArr;
}

function allEquilibriumBrute(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        let leftsum = 0;
        let rightsum = 0;
        //left sum
        for (let left = 0; left < i; left++) {
            leftsum += arr[left];
        }
        //right sum

        for (let right = i + 1; right < arr.length; right++) {
            rightsum += arr[right];
        }

        if (leftsum === rightsum) {
            return i;
        }
    }
    return -1;
}

function allEquilibriumOptimal(arr = []) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    let leftsum = 0;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftsum - arr[i];
        if (leftsum === rightSum) {
            return i;
        }
        leftsum += arr[i];
    }
    return -1;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        let curr = t[i];
        map[curr] = (map[curr] || 0) + 1;
    }
    let start = 0;
    let left = 0;
    let minLen = Infinity;
    let need = t.length;
    for (let right = 0; right < s.length; right++) {
        let current = s[right];
        if (map[current] !== undefined) {
            if (map[current] > 0) need--;
            map[current]--;
        }
        while (need == 0) {
            //valid window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            let leftchar = s[left];
            if (map[leftchar] != undefined) {
                map[leftchar]++;
                if (map[leftchar] > 0) need++;
            }
            left++;
        }
    }
    return minLen == Infinity ? '' : s.substring(start, start + minLen);
};

function lonegestSubArrayAtMostKBrute(nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let map = {};
        for (let j = i; j < nums.length; j++) {
            let curr = nums[j];
            if (map[curr] == undefined) {
                map[curr] = j;
                count++;
            } else {
                map[curr] = j;
            }
            if (k < count) break;
            max = Math.max(max, j - i + 1);
        }
    }
    return max;
}
function lonegestSubArrayAtMostKOptimal(nums, k) {
    let max = 0;
    let left = 0;
    let map = {};
    for (let right = 0; right < nums.length; right++) {
        let curr = nums[right];
        map[curr] = (map[curr] || 0) + 1;

        while (Object.keys(map).length > k) {
            let leftVal = nums[left];
            map[leftVal]--;
            if (map[leftVal] === 0) {
                delete map[leftVal];
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}

function prePostExualSame(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
}

function prePostExualSameBrute(nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        for (let prefix = 0; prefix < i; prefix++) {
            leftSum += nums[prefix];
        }
        let rightSum = 0;
        for (let suffix = i + 1; suffix < nums.length; suffix++) {
            rightSum += nums[suffix];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
}

function windowMax(nums = [], k) {
    let temp = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i]);
        if (temp.length == k) {
            result.push(Math.max(...temp));
            temp.shift();
        }
    }
    return result;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let lb = lowerBound(nums, target);
    let ub = upperBound(nums, target);
    if (lb === nums.length || nums[lb] !== target) {
        // not found
        return [-1, -1];
    }
    return [lb, ub - 1];
};

function lowerBound(nums, target) {
    let l = 0;
    let r = nums.length;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}
function upperBound(nums, target) {
    let l = 0;
    let r = nums.length;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
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
            right--;
        } else {
            left++;
        }
    }

    return minWater;
}

function findMinValRotatedSortedArray(arr = []) {
    let min = 0;
    // for (let i = 0; i < arr.length; i++) { // O(n)
    //     min = Math.min(min, arr[i]);
    // }

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

function findMinValRotatedSortedArrayII(arr = []) {
    let left = 0;
    let min = Infinity;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[left] < arr[right]) {
            return arr[left];
        }
        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

function findMaxrotatedSortedArrayOne(arr = []) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[(left - 1 + arr.length) % arr.length];
}

function findMaxrotatedSortedArrayTwo(arr = []) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        }
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

function majorityElelmetII(arr) {
    let m1 = null;
    let m2 = null;
    let freq1 = 0;
    let freq2 = 0;
    for (let num of arr) {
        if (m1 === num) {
            freq1++;
        } else if (m2 == num) {
            freq2++;
        } else if (freq1 == 0) {
            freq1 = 1;
            m1 = num;
        } else if (freq2 == 0) {
            freq2 = 1;
            m2 = num;
        } else {
            freq1--;
            freq2--;
        }
    }
    //verify candidate
    freq1 = 0;
    freq2 = 0;
    for (let num of arr) {
        if (num == m1) freq1++;
        if (num == m2) freq2++;
    }
    let res = [];

    if (freq1 > Math.floor(arr.length / 3)) res.push(m1);
    if (freq2 > Math.floor(arr.length / 3)) res.push(m2);
    return res;
}

function singleElementBrute(arr = []) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        obj[current] = (obj[current] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            return +key;
        }
    }
    return -1;
}

function singleElementOptimalBit(arr = []) {
    //O(n)
    let single = 0;
    for (let i = 0; i < arr.length; i++) {
        single ^= arr[i];
    }
    return single;
}

function singleElementOptimal(arr = []) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid % 2 == 1) mid--;
        if (arr[mid] === arr[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

function peakElementBrute(arr = []) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            return i;
        }
    }
}
function peakElementOptimal(arr = []) {
    if (arr.length == 1) return arr[0];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

function sqrt(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (i * i <= n) {
            ans = i;
        } else {
            break;
        }
    }
    return ans;
}

function sqrtBinarySearchOnAns(n) {
    let low = 0;
    let hight = Math.floor(n / 2);
    while (low <= hight) {
        let mid = Math.floor(low + (hight - low) / 2);
        if (mid * mid <= n) {
            low = mid + 1;
        } else {
            hight = mid - 1;
        }
    }

    return hight;
}

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        let sum = left * left + right * right;
        if (sum == c) {
            return true;
        } else if (sum < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

function isPerfectSquare(n) {
    let left = 0;
    let right = n / 2;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let sq = mid * mid;
        if (sq === n) {
            return true;
        } else if (sq < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

function nthRootBrute(n, m) {
    for (let i = 0; i < n; i++) {
        let multi = 1;
        for (let j = 0; j < m; j++) {
            multi *= i;
            if (multi > n) break;
        }
        if (multi == n) {
            return i;
        }
    }
    return -1;
}

function nthRootOptimal(n, m) {
    let low = 0;
    let high = n / 2;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let res = func(mid, m, n);
        if (res === n) {
            return mid;
        } else if (res < n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function func(mid, m, n) {
    let ans = 1;
    for (let i = 0; i < m; i++) {
        ans *= mid;
        if (ans > n) break;
    }
    return ans;
}

function moveZero(arr = []) {
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[left++] = arr[i];
        }
    }

    for (let i = left; i < arr.length; i++) {
        arr[left++] = 0;
    }
    return arr;
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumA = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    console.log(right);
    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum == target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

function happyNumber(n) {
    let result = [];
    let temp = 0;
    while (n != 0) {
        let lastDigit = n % 10;
        temp += lastDigit * lastDigit;
        n = Math.floor(n / 10);
    }

    if (temp == 1) {
        return 'happy number';
    } else {
        if (result.includes(temp)) {
            return 'Not a happy number';
        } else {
            result.push(temp);
            happyNumber(temp);
        }
    }
}

function minEatingSpeed(piles = [], h) {
    let max = Math.max(...piles);
    for (let i = 1; i <= max; i++) {
        let maxH = 0;
        for (let j = 0; j < piles.length; j++) {
            maxH += Math.ceil(h / i);
        }
        if (maxH <= h) {
            return i;
        }
    }
    return -1;
}

function maxSubarraySumk(arr = [], k) {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];
    maxSum = sum;
    for (let j = k; j < arr.length; j++) {
        sum = sum - arr[j - k] + arr[j];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

function minLen(arr = [], target) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum >= target) {
                min = Math.min(min, j - i + 1);
                break;
            }
        }
    }
    return min;
}

function minLenBest(arr = [], target) {
    let left = 0;
    let min = Infinity;
    let sum = 0;
    for (let right = 0; right < arr.length; right++) {
        //o(n)
        sum += arr[right];
        while (sum >= target) {
            //valid window
            min = Math.min(min, right - left + 1);
            //try more smallest length
            sum -= arr[left];
            left++;
        }
    }
    return min;
}

function minDays(blumday = [], m, k) {
    if (m * k > blumday.length) return -1;
    let n = blumday.length;
    let maxDay = Math.max(...blumday);
    for (let day = 1; day <= maxDay; day++) {
        let flowers = 0;
        let bouquets = 0;
        for (let i = 0; i < n; i++) {
            if (blumday[i] <= day) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        if (bouquets >= m) {
            return day;
        }
    }
    return -1;
}

function minDaysBest(blumday = [], m, k) {
    let n = blumday.length;
    if (m * k > n) return -1;
    let minDay = Math.min(...blumday);
    let maxDay = Math.max(...blumday);
    let ans = -1;

    while (minDay <= maxDay) {
        let midDay = Math.floor(minDay + (maxDay - minDay) / 2);
        if (isPossible(blumday, midDay, m, k)) {
            ans = midDay;
            maxDay = midDay - 1;
        } else {
            minDay = midDay + 1;
        }
    }
    return ans;
}
function isPossible(arr = [], day, m, k) {
    let flowers = 0;
    let bouquets = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= day) {
            flowers++;
            if (flowers == k) {
                bouquets++;
                if (bouquets > m) return true;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return bouquets >= m;
}

function minBananaEatingSpeed(arr = [], h) {
    let low = 1;
    let high = Math.max(...arr);
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let hour = 0;
        for (let val of arr) {
            hour += Math.ceil(val / mid);
        }
        if (hour <= h) high = mid - 1;
        else {
            low = mid + 1;
        }
    }
    return low;
}

function minimimDays(arr = [], m, k) {
    let n = arr.length;
    if (m * k > n) return -1;
    let low = Infinity;
    let high = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < low) low = arr[i];
        if (arr[i] > high) high = arr[i];
    }

    while (low < high) {
        let midDay = Math.floor(low + (high - low) / 2);
        let flowers = 0;
        let tora = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= midDay) {
                flowers++;
                if (flowers == k) {
                    tora++;
                    if (tora == m) break;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        if (tora >= m) {
            high = midDay;
        } else {
            low = midDay + 1;
        }
    }

    return low;
}

function isPossible(arr, day, m, k) {
    let flowers = 0;
    let tora = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= day) {
            flowers++;
            if (flowers == k) {
                tora++;
                if (tora == m) return true;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return false;
}

function SmallestDivisor(arr, limit) {
    let minDiv = Infinity;
    let max = Math.max(...arr);
    for (let i = 1; i <= max; i++) {
        let divisorCount = 0;
        for (let j = 0; j < arr.length; j++) {
            divisorCount += Math.ceil(arr[j] / i);
            if (divisorCount > limit) break;
        }
        if (divisorCount <= limit) {
            minDiv = Math.min(minDiv, i);
        }
    }
    return minDiv;
}

function totalDayFun(arr, cap) {
    let day = 1;
    let weight = 0;
    for (let val of arr) {
        if (weight + val > cap) {
            day++;
            weight = val;
        } else {
            weight += val;
        }
    }
    return day;
}

function shipPackage(arr, limit) {
    let low = Math.max(...arr);
    let high = arr.reduce((acc, curr) => acc + curr, 0);
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        const totalDay = totalDayFun(arr, mid);
        if (totalDay <= limit) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function minDivisor(arr, limit) {
    let low = 1;
    let high = Math.max(...arr);
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let divisor = 0;
        for (let i = 0; i < arr.length; i++) {
            divisor += Math.ceil(arr[i] / mid);
            if (divisor > limit) break;
        }

        if (divisor <= limit) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function shipPackageBest(weights, dayes) {
    let low = -Infinity;
    let high = 0;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > low) low = weights[i];
        high += weights[i];
    }

    while (low <= high) {
        let cap = Math.floor(low + (high - low) / 2);
        let day = 1;
        let weight = 0;

        for (let j = 0; j < weights.length; j++) {
            if (weight + weights[j] > cap) {
                day++;
                weight = weights[j];
                if (day > dayes) break;
            } else {
                weight += weights[j];
            }
        }

        if (day <= dayes) {
            high = cap - 1;
        } else {
            low = cap + 1;
        }
    }
    return low;
}

function kthMissingNumber(arr, k) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] - mid - 1 < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left + k;
}

function aggresiveCow(arr, cows) {
    arr.sort((a, b) => a - b);
    let left = 1;
    let right = arr[arr.length - 1] - arr[0];
    let ans = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (calPlace(arr, cows, mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

function calPlace(arr, cow, distance) {
    let cowcount = 1;
    let lastPos = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPos >= distance) {
            cowcount++;
            lastPos = arr[i];
        }
        if (cow === cowcount) return true;
    }
    return false;
}

function bookAlocation(books, m) {
    if (m > books.length) return -1;
    let low = 0;
    let high = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i] > low) low = books[i];
        high += books[i];
    }

    let ans = -1;
    while (low <= high) {
        let page = Math.floor(low + (high - low) / 2);
        if (canAllocate(books, m, page)) {
            ans = page;
            high = page - 1;
        } else {
            low = page + 1;
        }
    }
    return ans;
}

function canAllocate(books, m, limit) {
    let studentCount = 1;
    let totalPage = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i] + totalPage > limit) {
            studentCount++;
            totalPage = books[i];
            if (studentCount > m) return false;
        } else {
            totalPage += books[i];
        }
    }
    return true;
}

function SmallestDivisorII(arr, m) {}

function mDay(days, m, k) {
    for (let i = 0; i < days.length; i++) {
        let fl = 0;
        let mm = 0;
        for (let j = 0; j < days.length; j++) {
            let daysDiv = days[j];
            if (daysDiv <= days[i]) {
                fl++;
                if (fl == k) {
                    mm++;
                    if (mm > m) break;
                    fl = 0;
                }
            } else {
                fl = 0;
            }
            if (mm >= m) {
                return days[i];
            }
        }
    }
    return -1;
}

function findSmallestMaxDist(stations, k) {
    let n = stations.length;
    let low = 0;
    let high = 0;
    for (let i = 0; i < n - 1; i++) {
        high = Math.max(high, stations[i + 1] - stations[i]);
    }

    while (high - low > 1e-6) {
        let mid = (low + high) / 2.0;
        let totalStation = numberOfGasStationsRequired(stations, mid);
        if (totalStation > k) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return low;
}

function numberOfGasStationsRequired(stations, dist) {
    let station = 0;
    for (let i = 1; i < stations.length; i++) {
        let gap = stations[i] - stations[i - 1];
        let numberOfStation = Math.floor(gap / dist);
        if (numberOfStation === gap / dist) {
            station += numberOfStation - 1;
        } else {
            station += numberOfStation;
        }
    }
    return station;
}

function medianSortdArray(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let mergeArrr = [];
    let i = 0;
    let j = 0;

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            mergeArrr.push(arr1[i++]);
        } else {
            mergeArrr.push(arr2[j++]);
        }
    }

    // arr1 এর বাকি element
    while (i < n) {
        mergeArrr.push(arr1[i++]);
    }

    // arr2 এর বাকি element
    while (j < m) {
        mergeArrr.push(arr2[j++]);
    }
    let midianEle = Math.floor(mergeArrr.length / 2);
    return mergeArrr[midianEle];
}
let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 9, 1, 2, 3, 3, 6, 9];

const arp = [1, 2, 3, 3, 3, 7];
function lastOcc(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] > target) {
            right=mid
        } else {
            left = mid + 1;
        }
    }
    return left-1
}



