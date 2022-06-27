class Solution{
    modify(s){
        let new_s = ""
        for(let i=0;i<s.length;i++){
            if(s[i]!== " "){
                new_s = new_s + s[i]
            }
        }
        return new_s
    }
}
