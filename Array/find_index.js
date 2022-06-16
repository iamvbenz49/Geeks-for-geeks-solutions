class Solution {
    findIndex(a,n,key){
       let result = [-1,-1]
       let got = false
       for(let i=0;i<n;i++){
           if (a[i] === key && got === false){
               result[0] = i
               got = true
           }
           else if(i === n-1 && result[1]===-1){
               if(a[i] === key){
                   result[1] = i
               }
               else{
               result[1]=result[0]
               }
           }
           else if(a[i] === key){
               result[1] = i
           }
       }
       if(result[0]!= -1 && result[1] == -1){
           return [result[0],result[0]]
       }
       return result
    }
}
