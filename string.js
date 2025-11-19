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
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (hash.hasOwnProperty(complement)) {
            return [hash[complement], i];
        }
        hash[arr[i]] = i;
    }
    return [];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let a, b;
    //find repeting charecter
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (hash.hasOwnProperty(current)) {
            a = current;
            break;
        }
        hash[current] = i;
    }

    //mising number find
    let n = nums.length;
    const sumOneTN = (n * (n + 1)) / 2;
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
    }

    const minusReptingDigit = currentSum - a;
    const misingDigit = sumOneTN - minusReptingDigit;
    b = misingDigit;
    return [a, b];
};

const twoSum2 = (arr = [], target) => {
    for (let i = 0; i < arr.length; i++) {
        let mising = target - arr[i];
        let misingIndex = arr.indexOf(mising);
        if (misingIndex !== -1) {
            return [i, misingIndex];
        }
    }

    return [];
};

const findDuolicate = (arr = []) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp = arr.slice(i + 1, arr.length);
        if (temp.includes(arr[i])) {
            return arr[i];
        }
    }
    return 0;
};

function threeSun(arr = []) {
    arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1,
            right = arr.length - 1;

        while (left < right) {
            if (i > 0 && arr[i] == arr[i - 1]) {
                continue;
            }
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                result.push([i, left, right]);
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1,
            right = nums.length - 1;

        while (left < right) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            const sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    let minVal = Math.abs(result - target);
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) return sum;
            let minDiff = Math.abs(sum - target);
            if (minDiff < minVal) {
                result = sum;
                minVal = minDiff;
            }
            if (sum < target) left++;
            else right--;
        }
    }
    return result;
};

const selectionsort = (arr = []) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

const insertionSort = (arr = []) => {
    for (let i = 1; i < arr.length; i++) {   // ✅ এখানে length-1 নয়, length দিতে হবে
        let current = arr[i];
        let prev = i - 1;

        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];  // shift
            prev--;
        }

        arr[prev + 1] = current;  // correct position
    }
    return arr;
};


function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  let result=[]
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }

    if(candidate>=Math.floor(nums.length/3)){
        result.push(candidate)
    }
  }

  return result;
}

const majorityElementN3=(arr=[])=>{
    let count1=0,count2=0
    let candidate1=null,candidate2=null

    for(let num of arr){
        if(candidate1==num){
            count1++
        }else if(candidate2==num){
            count2++
        }else if(count1==0){
            candidate1=num
            count1=1
        }else if(count2==0){
            candidate2=num
            count2=1
        }else{
            count1--
            count2--
        }
      
    }


    // verify candidates
    count1=0
    count2=0
    const result=[]
    for(let num of arr){
        if(candidate1==num) count1++
        else if(candidate2==num) count2++
    }
    
    const limit=Math.floor(arr.length/3)
    if(count1>limit) result.push(candidate1) 
    if(count2>limit) result.push(candidate2) 
   return result
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1=0,count2=0;
    let cand1=null,cand2=null
    // find possible candidates
    for(let num=0;num<nums.length;num++){
        if(cand1==nums[num]){
            count1++
        }else if(cand2==nums[num]){
            count2++
        }else if(count1==0){
            cand1=nums[num]
            count1=1
        }else if(count2==0){
            cand2=nums[num]
            count2=1
        }else {
            count1--
            count2--
        }
    }

    // verify candidates
    count1=0
    count2=0
    const result=[]
    for(let num=0;num<nums.length;num++){
        if(cand1===nums[num]) count1++
        else if(cand2==nums[num])count2++
    }
    const limit=Math.floor(nums.length/3)
    if(count1>limit) result.push(cand1)
    if(count2>limit) result.push(cand2)
return result
};




function countFreqU(arr=[]){
    let freq=0
    let prev=null
    let result=[]
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]==prev){
        freq++
       }else{
        prev=arr[i]
        freq=1
       }

       // check if exist more thant 2 times
       if(freq<=2){
        result.push(arr[i])
       }
    }
    return result

}

const sortColor=(arr=[])=>{
    let low=0,
    mid=0,
    high=arr.length-1

    while(mid<=high){
        if(arr[mid]==0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]]
            low++
            mid++
        }else if(arr[mid]==1) mid++
        else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]]
            high--
            
        }
    }
    return arr
}



const maxSumK=(arr=[],k)=>{
    let sum=0
    let temp=[]
    let final=[]
    for (let i = 0; i < k; i++) {
        sum+=arr[i]
        temp.push(arr[i])
    }
   final.push([...temp])

    let maxSum=sum

    for (let i = k; i < arr.length; i++) {
        sum+=arr[i]-arr[i-k]
        temp.shift()
        temp.push(arr[i])
        final.push([...temp])
        maxSum=Math.max(maxSum,sum)
    }
    console.log(final)
    return maxSum/k
}


