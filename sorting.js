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

