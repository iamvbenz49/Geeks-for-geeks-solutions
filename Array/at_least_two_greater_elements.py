class Solution:
    def findElements(self,a, n):
        a.sort()
        a.pop()
        a.pop()
        return a