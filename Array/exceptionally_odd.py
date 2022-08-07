class Solution:
    def getOddOccurrence(self, arr, n):
        hash = {}
        lst = []
        for i in arr:
            if i in hash:
                hash[i]+=1
            else:
                lst.append(i)
                hash[i] = 1
        for i in range(len(lst)):
            if hash[lst[i]]%2==1:
                return lst[i]
