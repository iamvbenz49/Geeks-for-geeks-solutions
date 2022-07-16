class Solution:
    def minValue(self, a, b, n):
        a.sort()
        b.sort(reverse = True)
        sums = 0
        for i in range(n):
            prod = a[i]*b[i]
            sums+=prod
        return sums
