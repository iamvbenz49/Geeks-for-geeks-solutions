class Solution {
    revStr(s){
       let rev = "";
       for(let i=0;i<s.length;i++){
           rev = s[i] + rev
       }
       return rev
    }
}
