class Solution{
    rotate(arr,n){
        arr.splice(0,0,arr[n-1])
        arr.pop()
        return arr
    }
}
