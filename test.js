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
var searchRange = function(nums, target) {
    let lb=lowerBound(nums,target)
    let ub=upperBound(nums,target)
    if(lb===nums.length || nums[lb]!==target){
        // not found
        return [-1,-1]
    } 
    return [lb,ub-1]
};

function lowerBound(nums,target){
    let l=0
    let r=nums.length
    while(l<r){
        let mid=Math.floor(l+(r-l)/2)
        if(nums[mid]<target){
            l=mid+1
        }else{
            r=mid
        }
    }
    return l
}
function upperBound(nums,target){
    let l=0
    let r=nums.length
    while(l<r){
        let mid=Math.floor(l+(r-l)/2)
        if(nums[mid]<=target){
            l=mid+1
        }else{
            r=mid
        }
    }
    return l
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
            right--
        } else {
            left++
        }
    }

    return minWater;
}

console.log(minWaterWhile([2,3,2,5,6,7]))