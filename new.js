const arr = [2, 1, 5, 1, 3, 2];

function maxSum(item, k) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < 3; i++) {
        sum += arr[i];
    }
    max = sum;

    for (let i = k; i < item.length; i++) {
        max = Math.max(max, sum + arr[i] - arr[i - k]);
    }

    return max;
}

function lonestSubstringWithutRepeting(str) {
    let obj = {};
    let maxLen = -Infinity;
    let left = 0;

    for (let right = 0; right < str.length; right++) {
        const char = str[right];
        while (obj[char] !== undefined && obj[right] > left) {
            //invalid window
            let curr = obj[right];
            left = curr + 1;
        }
        //valid windw
        maxLen = Math.max(maxLen, right - left + 1);
        obj[char] = right;
    }
    return maxLen;
}

lonestSubstringWithutRepeting('abcabcbb');

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

function binarySearchBoundary(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return arr[left];
}

function atMostK(str = '', treshold) {
    if (str.length == 0) return -1;
    let left = 0;
    let maxlen = 0;
    let map = {};

    for (let right = 0; right < array.length; right++) {
        const curr = str[right];
        map[curr] = (map[curr] || 0) + 1;

        while (Object.keys(map).length > treshold) {
            let leftchat = str[left];
            map[leftchat]--;
            if (map[leftchat] == 0) {
                delete map[left];
            }
            left++;
        }
        maxlen = Math.max(maxlen, right - left + 1);
    }
    return maxlen;
}

function mostWather(wathers) {
    let left = 0;
    let right = wathers.length - 1;
    let max = 0;
    while (left < right) {
        let minPosition = Math.min(wathers[left], wathers[right]);
        let distance = right - left;
        let totlWather = distance * minPosition;
        max = Math.max(max, totlWather);
        if (wathers[left] < wathers[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function reverseLinklist(head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next=prev
        prev = curr;
        curr = next;
    }
}

