class Solution{
    is_palindrome(n){
        let rev_int = "";
        n = n.toString()
        for(let i=0;i<n.length;i++){
            rev_int = n[i] + rev_int
        }
        if(n === rev_int){
            return "Yes"
        }
        else{
            return "No"
        }
    }
}
