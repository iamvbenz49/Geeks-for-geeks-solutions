class Solution {
    
    isPalindrome(S){
        let rev_s = "";
        for(let i=S.length-1;i>-1;i--){
            rev_s+=S[i] 
        }
        if(S === rev_s){
            return 1
        }
        else{
            return 0
        }
    }
}
