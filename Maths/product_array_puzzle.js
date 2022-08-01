class Solution {
    productExceptSelf(nums,n){
        let res = []
        for(let i = 0 ; i<nums.length;i++){
            let prod = 1
            for(let j = 0 ; j<nums.length;j++){
                if(i === j ){
                    continue
                }
                else{
                    prod*=nums[j]
                }
            }
            res.push(prod)
        }
        return res
    }
}
