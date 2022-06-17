class Solution:
    def IsPerfect(self,arr,n):
        if arr[::-1] == arr:
            return True
        else:
            return False