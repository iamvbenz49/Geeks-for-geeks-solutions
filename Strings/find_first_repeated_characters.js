class Solution {
  firstRepChar(s) {
    let hash = {}
    for(let i=0;i<27;i++){
        hash[String.fromCharCode(97+i)] = 0
    }
    for(let i = 0;i<s.length;i++){
        if(hash[s[i]] === 0){
            hash[s[i]]+=1
        }
        else if(hash[s[i]] === 1){
            return s[i]
        }
    }
    return -1
  }
}
