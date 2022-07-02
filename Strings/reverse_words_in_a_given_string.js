class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        let sentence = "";
        let word = "";
        for (let i = s.length - 1; i > -2; i--) {
            if (s[i] !== "." && i != 0) {
                word = s[i] + word;
            } else if (i === 0) {
                sentence = sentence + s[i] + word
            } else {
                sentence = sentence + word + ".";
                word = "";
            }
        }
    return sentence;
    }
}
