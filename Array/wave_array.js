class Solution:
    def convertToWave(self, n : int, a : List[int]) -> None:
        if n%2 == 0:
            pass
        else:
            n = n-1
        for i in range(0,n,2):
            a[i],a[i+1] = a[i+1],a[i]
