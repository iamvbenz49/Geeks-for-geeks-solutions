class Solution:
    def firstElementKTime(self,  a, n, k):
        dic = {}
        for i in range(n):
            if a[i] in dic:
                if dic[a[i]]<k:
                    dic[a[i]]+=1
                if dic[a[i]] == k:
                    return a[i]
            else:
                dic[a[i]] = 1
                if dic[a[i]] == k:
                    return a[i]
        else:
            return -1
