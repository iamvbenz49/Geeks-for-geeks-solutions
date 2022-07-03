class Solution:
    #Function to check if a string can be obtained by rotating
    #another string by exactly 2 places.
    def isRotated(self,str1,str2):
        new_str1 = str1[2:]+str1[:2]
        new_str2 = str2[2:]+str2[:2]
        if (new_str1 == str2) or (new_str2 == str1):
            return 1
        else:
            return 0
