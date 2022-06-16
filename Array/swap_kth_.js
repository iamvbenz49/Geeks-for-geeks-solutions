class Solution{
    swapKth(arr,n,k){
        let begin,end;
        begin = arr[k-1];
        end = arr[arr.length-k];
        arr[k-1] = end
        arr[arr.length-k] = begin
    }
}
