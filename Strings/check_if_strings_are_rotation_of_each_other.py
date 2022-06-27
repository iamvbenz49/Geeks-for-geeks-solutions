class Solution:
    
    #Function to check if two strings are rotations of each other or not.
    def areRotations(self,s1,s2):
        for i in range(len(s1)):
            temp = s1[i::]+s1[:i]
            if temp == s2:
                return True
        else:
            return False
