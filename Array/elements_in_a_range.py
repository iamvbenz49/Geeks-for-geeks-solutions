class Solution:
    def check_elements(self, arr, n, A, B):
        for i in range(A,B+1):
            if i not in arr:
                return False
        else:
            return True
