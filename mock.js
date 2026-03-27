function removeDuplicates(arr) {
    let left = 0;
    let right = arr.length;
    let result = [];
    while (left <= right) {
        if (arr[left] !== arr[left + 1]) {
        }
    }
}

function longestSubStringWithout(str = '') {
    let obj = {};
    let left = 0;
    let maxlen = -Infinity;
    for (let right = 0; right < str.length; right++) {
        let ch = str[right];
        if (obj[ch] !== undefined && obj[ch] >= left) {
            left = obj[ch] + 1;
        }
        obj[ch] = right;
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen;
}

function splitArray(arr, k) {
    let low = 0;
    let high = 0;
    let ans = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > low) low = arr[i];
        high += arr[i];
    }

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (isPossible(arr, mid, k)) {
            ans = mid;
            high = mid - 1; //try more smaller
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function isPossible(arr, limit, k) {
    let count = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum > limit) {
            count++;
            sum = arr[i];
            if (count > k) return false;
        } else {
            sum += arr[i];
        }
    }
    return true;
}

function splitArrayBrute(arr, k) {
    let low = 0;
    let high = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > low) low = arr[i];
        high += arr[i];
    }

    //split

    for (let limit = low; limit <= high; limit++) {
        let count = 1;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (sum + arr[i] > limit) {
                count++;
                sum = arr[i];
                if (count > k) break;
            } else {
                sum += arr[i];
            }
        }
        if (count <= k) {
            return limit;
        }
    }
}

function findtarget2darray(arr, target) {
    let n = arr.length - 1;
    let m = arr[0].length - 1;
    let left = 0;
    let right = n;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid][0] <= target && target <= arr[mid][m]) {
            //ans appering this part
            let start = 0;
            let end = m;
            while (start <= end) {
                let middle = Math.floor(start + (end - start) / 2);
                if (arr[mid][middle] == target) {
                    return [mid, middle];
                } else if (arr[mid][middle] < target) {
                    start = middle + 1;
                } else {
                    end = middle - 1;
                }
                return -1;
            }
        } else if (arr[mid][m] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i <= left.length - 1 && j <= right.length - 1) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);
    return result;
}

function gasStation(positions, k) {
    let low = 0;
    let high = 0;
    for (let i = 1; i < positions.length; i++) {
        high = Math.max(high, positions[i] - positions[i - 1]);
    }

    while (high - low > 1e-6) {
        let mid = low + (high - low) / 2;
        if (isPos(positions, mid, k)) {
            high = mid;
        } else {
            low = mid;
        }
    }
    return high;
}

function isPos(positions, dist, k) {
    let station = 0;
    for (let i = 1; i < positions.length; i++) {
        let gap = positions[i] - positions[i - 1];
        station += Math.floor(gap / dist);
        if (station > k) return false;
    }
    return true;
}



function subarryasumEqk(arr, k) {
    let map = {};
    let sum = 0;
    let count = 0;
    map[0] = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let prev = sum - k;
        if (map[prev] !== undefined) {
            count += map[prev];
        }
        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
}



