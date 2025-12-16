//bubble sort

const bubbleSort = (arr = []) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwap = true;
            }
        }
        if (!isSwap) {
            return arr;
        }
    }
    return arr;
};

const selectionsort = () => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        //swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};

const sorting = (arr = []) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

const selectionsortInNew = (arr = []) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};
const arr = [10, 2, 3, 4, 5, 6, 7];

//solve 3 sortig problem begineer-->Intermidiate -->advanced

//problem one sorting the array with ascending order using bubble sort

const bubbleSortPr1 = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

const sortWithLen = ['apple', 'kiwi', 'banana', 'grape'];

const sortWithLenByword = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

//seartch
const rotatedSortedArr = (arr = [], target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] >= arr[left]) {
            if (arr[left] <= target && arr[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] <= target && arr[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
};
const rotatedArr = [4, 5, 6, 1, 2, 3];

const findMinimum = (arr = []) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return arr[end];
};

// rotated sorted array
const isNow = (arr = [], target) => {
    let l = 0;
    let end = arr.length - 1;

    while (l <= end) {
        let mid = Math.floor(l + (end - l) / 2);
        if (arr[mid] == target) {
            return true;
        }

        if (arr[l] === arr[mid] && arr[mid] === arr[end]) {
            l++;
            end--;
            continue;
        }

        if (arr[l] <= arr[mid]) {
            //left side
            if (arr[l] <= target && arr[mid] > target) {
                end = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            //right side
            if (arr[end] >= target && arr[mid] < target) {
                l = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return false;
};
const arrPr1 = [4, 5, 6, 1, 2, 3];

const findWord = (arr = [], word = '') => {
    let sindleArr = arr.flat().sort();

    for (let i = 0; i < word.length; i++) {
        if (sindleArr.includes(word[i])) {
            const index = sindleArr.indexOf(word[i]);
            sindleArr = sindleArr.slice(index + 1);
        } else {
            console.log(word[i]);
            return false;
        }
    }
    console.log(sindleArr);
    return true;
};

const inpurArr = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

// gues sorted index
const searchInsert = (arr = [], target) => {
    let start = 0,
        end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) return mid;

        if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
};

let nums = [1, 3, 5, 7],
    target = 6;

const insertionSort = (arr = []) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = current;
    }
    return arr;
};

const sortWithColor = (arr = []) => {
    let arr0 = 0;
    let arr1 = 0;
    let arr2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) arr0++;
        else if (arr[i] === 1) arr1++;
        else arr2++;
    }

    let currntIdx = 0;

    for (let i = 0; i < arr0; i++) {
        arr[currntIdx++] = 0;
    }

    for (let i = 0; i < arr1; i++) {
        arr[currntIdx++] = 1;
    }

    for (let i = 0; i < arr2; i++) {
        arr[currntIdx++] = 2;
    }

    return arr;
};
const sortWithColorAnother = (arr = []) => {
    let arr0 = 0;
    let arr1 = 0;
    let arr2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) arr0++;
        else if (arr[i] === 1) arr1++;
        else arr2++;
    }

    let currntIdx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currntIdx < arr0) {
            arr[currntIdx++] = 0;
        } else if (currntIdx < arr1 + arr0) {
            arr[currntIdx++] = 1;
        } else {
            arr[currntIdx++] = 2;
        }
    }

    return arr;
};

const duchNationalFlag = (arr = []) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            result.push(nums[i]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            result.push(nums[i]);
        }
    }
    return result;
};

var sortArrayByParityDNF = function (nums) {
    let low = 0,
        mid = 0,
        high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] % 2 == 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else {
            mid++;
        }
    }
    return nums;
};

// Incomplete solution
var sortArrayByParityDNFIndex = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            //even index
            if (nums[i] % 2 == 0) {
                result.push(nums[i]);
            } else {
                result.push('even index a odd value');
            }
        } else {
            //odd index
            if (nums[i] % 2 == 1) {
                //odd value
                result.push(nums[i]);
            } else {
                result.push('odd index a even value');
            }
        }
    }
    return result;
};

var sortArrayByParityII = function (nums) {
    let even = 0,
        odd = 1;
    let n = nums.length;

    while (even < n && odd < n) {
        if (nums[even] % 2 === 0) {
            even += 2;
        } else if (nums[odd] % 2 === 1) {
            odd += 2;
        } else {
            [nums[even], nums[odd]] = [nums[odd], nums[even]];
            even += 2;
            odd += 2;
        }
    }
    return nums;
};

//Sort Characters By Frequency

const sortCharbyFreq = (str = '') => {
    let result = '';
    const countFreq = {};
    for (let key in str) {
        countFreq[str[key]] = (countFreq[str[key]] || 0) + 1;
    }

    const sorted = Object.entries(countFreq).sort((a, b) => b[1] - a[1]);

    // Build string by frequency
    for (let [ch, freq] of sorted) {
        result += ch.repeat(freq);
    }
    return result;
};
const sortClrArr = [1, 2, 1, 0, 1, 0, 2, 0];
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeTwoArr = function (nums1, m, nums2, n) {
    let idx = m + n - 1,
        i = m - 1,
        j = n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx--] = nums1[i--];
        } else {
            nums1[idx--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums[idx--] = nums2[j--];
    }
    return nums1;
};

function quicSort(arr, st = 0, end = arr.length - 1) {
    if (st < end) {
        const pidx = pivot(arr, st, end);
        quicSort(arr, st, pidx - 1); //left part
        quicSort(arr, pidx + 1, end); //right part
    }

    return arr;
}

function pivot(arr, st, end) {
    let idx = st - 1;
    let p = arr[end];
    for (let i = st; i < end; i++) {
        if (arr[i] < p) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }
    idx++;
    [arr[idx], arr[end]] = [arr[end], arr[idx]];
    return idx;
}
const qarr = [4, 3, 1, 6, 4, 3, 6];

function tawerOfHanoi(n, src, to, aux) {
    if (n == 1) {
        //base case
        console.log(`Move disk 1 from ${src} to ${to}`);
        return;
    }
    tawerOfHanoi(n - 1, src, aux, to);
    console.log(`Move disk ${n} from ${to} to ${src}`);

    tawerOfHanoi(n - 1, aux, to, src);
}

const plusOne = (n) => {
    for (let index = n.length - 1; index >= 0; index--) {
        n[index]++;
        if (n[index] < 10) {
            return n;
        }
        n[index] = 0;
    }

    n.unshift(1);
    return n;
};

var containsDuplicate = function (nums) {
    return nums.filter((val, i) => nums.indexOf(val) !== i).length ? false : true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagramA(s, t) {
    if (s.length !== t.length) return false;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }

    for (let key of t) {
        if (obj[key] && obj[key] > 0) {
            obj[key]--;
        } else {
            return false;
        }
    }
    return true;
}
let s = 'anagradm',
    t = 'nagarawm';

function isDuplicate(nums = []) {
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        let temp = nums.slice(i + 1);
        if (temp.includes(first)) {
            return true;
        }
    }

    return false;
}
console.log(isDuplicate([1, 2, 4]));
