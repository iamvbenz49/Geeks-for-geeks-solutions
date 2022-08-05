class Solution {

    find_median(arr){
        arr.sort((A,B) => A-B)
        if(arr.length%2==1){
            return arr[Math.floor(arr.length/2)]
        }
        else{
            return Math.floor((arr[Math.floor(arr.length/2)] + arr[Math.floor((arr.length/2))-1])/2)
        }
    }
    
}
