class Solution:
    def longest(self, names, n):
        l = 0
        res =""
    	for i in range(n):
    	    if len(names[i])>l:
    	        res = names[i]
    	        l = len(names[i])
    	return res
