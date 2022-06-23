class Solution {
    largest(arr, n) {
        let largest = -1;
        for(let i=0;i<n;i++){
            if (arr[i]>largest){
                largest =  arr[i];
            }
        }
        return largest;
    }
}
