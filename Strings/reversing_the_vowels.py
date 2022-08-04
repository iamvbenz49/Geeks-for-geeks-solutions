class Solution:
    def modify(self, s):
        res = ""
        res_vow = ""
        vowels = ["a","e","i","o","u"]
        for i in s:
            if i in vowels:
                res_vow = i + res_vow
        j = 0
        for i in s:
            if i in vowels:
                res+=res_vow[j]
                j+=1
            else:
                res+=i
        return res
