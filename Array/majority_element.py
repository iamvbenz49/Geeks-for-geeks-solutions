class Solution:
    def majorityElement(self, A, N):
        hash = {}
        mid = N//2
        for i in range(N):
            if A[i] not in hash:
                hash[A[i]] = 1
                if mid == 0:
                    return A[i]
            else:
                if hash[A[i]] == mid:
                    return A[i]
                elif hash[A[i]] < mid:
                    hash[A[i]]+=1
        else:
            return -1
