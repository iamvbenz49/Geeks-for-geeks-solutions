class Solution {
    product(arr, n,mod){
        let prod = 1;
        for(let i=0;i<n;i++){
            prod = (arr[i]*prod)%mod
        }
        return prod
    }
}
