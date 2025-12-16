const nums = [2, 7, 11, 15],
    target = 9;

function twoSum(arr = [], target) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (obj[arr[i]]) {
            return [obj[diff], i];
        } else {
            obj[diff] = i;
        }
    }
    return false;
}

function Substring(s = '', ans = []) {
    if (s.length == 0) {
        return ans.join('');
    }
    const charAt = s[0];
    if (ans.includes(charAt)) {
        return ans.join('');
    } else {
        ans.push(charAt);
        return Substring(s.slice(1), ans);
    }
}
function SubstringBest(s = '') {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = true;
        }
    }
    return Object.keys(obj).length;
}

function SubstringBestWay(s = '') {
    let maxLen = 0;
    let map = {};
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        let first = s[i];
        if (map[first] >= left) {
            left = map[first] + 1;
        }

        map[first] = i;
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
}

function productItself(arr = []) {
    let ans = new Array(arr.length).fill(1);
    //prefix
    let left = 1;
    for (let i = 1; i < arr.length; i++) {
        ans[i] *= left;
        left *= arr[i];
    }

    //suffix
    let right = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= arr[i];
    }
    return ans;
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

function removeA(str = '') {
    if (str.length === 0) return '';
    const firstChat = str[0];
    if (firstChat !== 'a') {
        return firstChat + removeA(str.slice(1));
    } else {
        return removeA(str.slice(1));
    }
}

let res = [];
function printrar(str, ans) {
    if (str.length == 0) {
        console.log(ans);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        const f1 = str[i];
        const newstr = str.slice(0, i) + str.slice(i + 1);
        printrar(newstr, ans + f1);
    }
}

const marr = [4, 2, 1, 9, 3, 5, 2];

function mergeSort(arr = [], st = 0, end = arr.length - 1) {
    if (st >= end) {
        return arr;
    }
    let mid = Math.floor(st + (end - st) / 2);
    mergeSort(arr, st, mid);
    mergeSort(arr, mid + 1, end);
    return merge(arr, st, mid, end);
}

function merge(arr, st, mid, end) {
    let i = st;
    let j = mid + 1;

    let tem = [];
    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            tem.push(arr[i++]);
        } else {
            tem.push(arr[j++]);
        }
    }

    while (i <= mid) tem.push(arr[i++]);
    while (j <= end) tem.push(arr[j++]);
    for (let i = 0; i < tem.length; i++) {
        arr[st + i] = tem[i];
    }
    return arr;
}

function quicSort(arr, st = 0, end = arr.length - 1) {
    if (st >= end) return arr;
    const pivotIdx = pivotIdxFun(arr, st, end);
    quicSort(arr, st, pivotIdx - 1);
    quicSort(arr, pivotIdx + 1, end);

    return arr;
}

function pivotIdxFun(arr = [], st, end) {
    let pivot = arr[end];
    let idx = st - 1;
    for (let i = st; i < end; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    idx++;
    [arr[idx], arr[end]] = [arr[end], arr[idx]];
    return idx;
}

function isStill(a, part) {
    return a.includes(part);
}

function permute(s, a, curr) {
    if (s.length === 0) {
        const res = isStill(a, curr); // return properly
        return res;
    }

    for (let i = 0; i < s.length; i++) {
        const f1 = s[i];
        const slices = s.slice(0, i) + s.slice(i + 1);

        if (permute(slices, a, curr + f1)) {
            return true; // propagate result
        }
    }

    return false;
}

function removeA(str = '') {
    if (str.length == 0) return '';
    const f1 = str[0];
    if (f1 == 'a') {
        return removeA(str.slice(1));
    } else {
        return f1 + removeA(str.slice(1));
    }
}

function pem(ste = '', ans = '') {
    if (ste.length === 0) {
        console.log(ans);
        return;
    }
    pem(ste.slice(1), ans + ste[0]);
    pem(ste.slice(1), ans);
}

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number[]} ans
 * @param {number[]} result
 * @return {number[][]}
 */
var subsets = function (nums, i, ans, result) {
    if (i === nums.length) {
        result.push(ans);
        return;
    }

    //include
    ans.push(nums[i]);
    subsets(nums, i + 1, ans, result);
    ans.pop(); //backtrac
    //exclude
    subsets(nums, i + 1, ans, result);
};

function permute(nums) {
    let result = [];

    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // আগে ব্যবহার করা হলে skip করবে

            // choose
            used[i] = true;
            path.push(nums[i]);

            backtrack(path, used); // explore

            // unchoose (backtrack)
            used[i] = false;
            path.pop();
        }
    }

    backtrack([], []);
    return result;
}

function permuteLL(arr) {
    const result = [];
    const used = new Array(arr.length).fill(false);
    function prem(path) {
        if (path.length === arr.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            path.push(arr[i]);
            used[i] = true;
            prem(path);
            path.pop();
            used[i] = false;
        }
    }
    prem([]);

    return result;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    //quic  sort in place

    //find pivot index
    const pivotIdx = pivotIndex(nums);
};

function merge(nums, start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = 0;
    let temp = [];
    while (i <= mid && mid <= end) {
        if (nums[i] < nums[j]) {
            temp[k++] = nums[i++];
        } else {
            temp[k++] = nums[j++];
        }
    }

    while (i < mid) temp[k++] = nums[i++];
    while (mid < end) temp[k++] = nums[j++];

    for (let i = 0; i < temp.length; i++) {
        nums[start + i] = temp[i];
    }
    return nums;
}

function maxSubaraysumofk(arr, k) {
    let maxSum = 0;
    let current = 0;
    for (let i = 0; i < k; i++) {
        current += arr[i];
    }
    maxSum = current;
    for (let index = k; index < arr.length; index++) {
        let cur = current - arr[index - k] + arr[index];
        current = cur;
        maxSum = Math.min(cur, maxSum);
    }
    return maxSum;
}

function removeDuplicate(arr) {
    let slow = 0;
    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return arr.slice(0, slow + 1);
}

function subarraySumEtraget(arr, target) {
    let maxLen = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = 0;
        for (let j = i; j < arr.length - 1; j++) {
            current += arr[j];
            if (current <= target) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
}

function subarraySumEtragetOptimal(arr, target) {
    let maxLen = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum > target) {
            sum -= arr[left];
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minlen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minlen = Math.min(minlen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minlen == Infinity ? 0 : minlen;
};

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let maxPoints = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += cardPoints[i];
    maxPoints = sum;
    let rightIndex = cardPoints.length - 1;
    let rightSum = cardPoints[rightIndex];
    for (let j = k - 1; j >= 0; j--) {
        sum -= cardPoints[j];
        maxPoints = Math.max(maxPoints, sum + rightSum);
        rightIndex--;
        rightSum += cardPoints[rightIndex];
    }
    return maxPoints;
};
function maxScoreBruteForce(cardPoints, m) {
    let maxScore = 0;
    let n = cardPoints.length;
    for (let i = 0; i < m; i++) {
        let sum = 0;

        for (let j = 0; j < i; j++) {
            sum += cardPoints[j];
        }

        for (let k = n - (m - i); k < n; k++) {
            sum += cardPoints[k];
        }
        maxScore = Math.max(maxScore, sum);
    }
    return maxScore;
}

function SubstringAll(str = '') {
    let maxLen = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let set = new Set();
            let isValid = true;
            for (let k = i; k <= j; k++) {
                if (set.has(str[k])) {
                    isValid = false;
                    break;
                }
                set.add(str[k]);
            }
            if (isValid) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }
    return maxLen;
}

function subStringWihtout(str = '') {
    if (str.length === 0) return 0;
    let left = 0;
    let len = 0;
    let map = new Map();
    for (let right = 0; right < str.length; right++) {
        let ch = str[right];
        if (map.has(ch) && map.get(ch) >= left) {
            left = map.get(ch) + 1;
        }
        map.set(ch, right);
        len = Math.max(len, right - left + 1);
    }

    return len;
}

function qsort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIdx = pivotIn(arr, start, end);
        qsort(arr, start, pivotIdx - 1);
        qsort(arr, pivotIdx + 1, end);
    }
    return arr;
}

function pivotIn(arr, start, end) {
    let idx = start - 1;
    let pivot = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    idx++;
    [arr[idx], arr[end]] = [arr[end], arr[idx]];
    return idx;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let maxlen = 0,
        left = 0,
        zeroCount = 0;
    for (let right = 0; right < nums.length; right++) {
        //O(n)
        if (nums[right] == 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            //O(k)
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen;
};

function longestOnesBrute(nums = [], k) {
    let maxlen = 0;

    for (let i = 0; i < nums.length; i++) {
        let zeroCount = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] == 0) {
                zeroCount++;
            }

            if (zeroCount > k) {
                break;
            }
            maxlen = Math.max(maxlen, j - i + 1);
        }
    }
    return maxlen;
}

function longestSubstringWithOutRepinginCharecter(str) {
    let maxLen = 0;
    let n = str.length;
    let left = 0;
    let map = {};
    for (let right = 0; right < n; right++) {
        let ch = str[right];
        if (map[ch] !== undefined && map[ch] >= left) {
            left = map[ch] + 1;
        }
        map[ch] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

function maxScore(nums, k) {
    //brute force solution o(n + k)
    let maxPoint = 0;
    let sum = nums.slice(0, k).reduce((acc, curr) => curr + acc, 0);
    maxPoint = sum;

    let j = nums.length - 1;
    let rsum = maxPoint + nums[j];
    for (let i = k - 1; i >= 0; i--) {
        rsum -= nums[i];
        maxPoint = Math.max(maxPoint, rsum);
        j--;
        rsum += nums[j];
    }
    return maxPoint;
}



function totalFruitS(frouts = []) {
    let left = 0;
    let max = 0;
    let map = new Map();

    for (let right = 0; right < frouts.length; right++) {
        const ch = frouts[right];
        map.set(ch, (map.get(ch) || 0) + 1);
        while (map.size > 2) {
            let leftFrout = frouts[left];
            map.set(leftFrout,map.get(leftFrout)-1)
            if(map.get(leftFrout)==0){
                map.delete(leftFrout)
            }
            left++
        }
    }

    return max;
}

var numOfUnplacedFruits = function (fruits, baskets) {
    let unplaced = 0;
    let left = 0;

    for (let right = 0; right < fruits.length; right++) {
        if (baskets[right] >= fruits[right]) {
            left++;
            continue;
        }
    }

    return unplaced;
};

function twoSumbBruteForce(arr, target) {
    let top = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            top += 1;
            if (arr[i] + arr[j] === target) {
                console.log(top + ' Total oparation');
                return [i, j];
            }
        }
    }
}

function twoSumbOptimal(arr, target) {
    let map = {};
    let top = 0;
    for (let i = 0; i < arr.length; i++) {
        top += 1;
        const need = target - arr[i];

        if (map[need] !== undefined) {
            console.log(top + ' total oparatio');
            return [i, map[need]];
        }
        map[arr[i]] = i;
    }
}
function twoSumbOptimalSored(arr, target) {
    let top = 0;
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        top += 1;
        if (arr[left] + arr[right] === target) {
            console.log(top + ' Total Oparation');
            return [left, right];
        }
        if (arr[left] + arr[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return -1;
}

function searching(arr = [], target) {
    let left = 0;
    let right = arr.length - 1;
    let totalOparation = 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            console.log('Total oparation cost ' + totalOparation + ' Times');
            return mid;
        }
        if (arr[mid] > target) {
            totalOparation += 1;
            right = mid - 1;
        } else {
            totalOparation += 1;
            left = mid + 1;
        }
    }
    return -1;
}

function liniarSearch(arr = [], target) {
    let totalOp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log('Total oparation cost ' + totalOp + ' Times');
            return i;
        } else {
            totalOp += 1;
        }
    }

    return -1;
}

function DistinctChar(str = '', k) {
    let left = 0;
    let max = 0;
    let map = {};
    for (let right = 0; right < str.length; right++) {
        let ch = str[right];
        map[ch] = (map[ch] || 0) + 1;
        while (Object.keys(map).length > k) {
            let leftchar = str[left];
            map[leftchar]--;
            if (map[leftchar] === 0) {
                delete map[leftchar];
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}
