// utuls
const findMid = (l, r) => Math.floor(l + (r - l) / 2);

// liniar search

function twoSum(arr = [], target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return -1;
}

function findTarget(arr = [], target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

//Binary Search

const findTargetB = (arr = [], target) => {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

const PositionOfTarget = (arr = [], target) => {
    function firstIndex(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let firstIdx = -1;
        while (left <= right) {
            let mid = findMid(left, right);
            if (arr[mid] === target) {
                firstIdx = mid;
                right = mid - 1;
            } else if (target > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return firstIdx;
    }

    function lastIndex(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let lastIdx = -1;
        while (left <= right) {
            let mid = findMid(left, right);
            if (arr[mid] === target) {
                lastIdx = mid;
                left = mid + 1;
            } else if (target > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return lastIdx;
    }

    const firstFun = firstIndex(arr, target);
    if (firstFun == -1) {
        return [-1, -1];
    }
    const lastFun = lastIndex(arr, target);
    if (lastFun == -1) {
        return [-1, -1];
    }
    if (firstFun == lastFun) return [-1, -1];
    return [firstFun, lastFun];
};

const PositionOfTargetAnother = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            let tempInc = 1;
            let res = [];
            while (arr[i + tempInc] == target) {
                tempInc++;
            }
            return [i, i + tempInc - 1];
        }
    }
    return [-1, -1];
};
const arr = [1, 2, 2, 20, 2, 2, 2, 3, 4, 5, 5, 9];

const countTargetelementInArray = (arr = [], target) => {
    let count = 0;
    const res = PositionOfTargetAnother(arr, target);
    if (res[0] == -1 && res[1] == -1) {
        return count;
    } else {
        count = res[1] - res[0] + 1;
    }

    return count;
};

function findPeak(arr = []) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

