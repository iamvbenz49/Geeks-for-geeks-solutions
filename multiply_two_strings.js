class Solution {
    multiplyStrings(s1,s2){ 
      let x = BigInt(s1)*BigInt(s2)
      if(x===-0){
          return 0
      }
      else{
          return String(x)
      }
    }
}
