class Solution {
    binarysearch(arr, n, k) {
        let low = 0;
        let high = n - 1
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2)
            if (arr[mid] === k) {
                return mid
            } else if (arr[mid] > k) {
                high = mid - 1;
            } else if (arr[mid] < k) {
                low = mid + 1;
            }

        }
        return -1
    }
}