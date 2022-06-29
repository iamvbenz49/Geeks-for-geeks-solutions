class Solution{
    MissingNumber(array, n) {
        let imaginary_sum = 0
        let actual_sum = n * (n + 1) / 2
        for (let i = 0; i < n - 1; i++) {
            imaginary_sum += array[i]
        }
        return actual_sum - imaginary_sum
  }
}
