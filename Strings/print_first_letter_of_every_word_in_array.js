class Solution{
    firstAlphabet(str){
        let insert = true;
        let res = ""
        for(let i = 0;i<str.length;i++){
            if (str[i] === " "){
                insert = true
            }
            else{
                if(insert === true){
                    res+=str[i]  
                    insert = false
                }
                else{
                    continue
                }
            }
        }
        return res
    }
}
