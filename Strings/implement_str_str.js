class Solution 
{
    //Function to locate the occurrence of the string x in the string s.
   strstr(s, x) {
    for (let i = 0; i < s.length; i++) {
        let key = s.slice(i, i + x.length)
        if (key === x) {
            return i
        }
    }
    return -1
}
}
