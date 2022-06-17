class Solution:
    def getMoreAndLess(self,arr, n, x):
        result = [0,0]
        for i in arr:
            if i>x:
                result[1]+=1
            elif i<x:
                result[0]+=1
            else:
                result[0]+=1
                result[1]+=1
        return result