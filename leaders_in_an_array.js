class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        let res = [arr[arr.length-1]]
        for(let i = arr.length-2 ; i > -1 ; i--){
            if(arr[i]>=arr[i+1] && arr[i]>=res[res.length-1]){
                res.push(arr[i])
            }
        }
        res.reverse()
        return res
    }
}
